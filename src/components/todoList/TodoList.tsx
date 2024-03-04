import { useEffect, useState } from "react";
import "./todolist.scss";
import { RootState } from "../../store/store";
import {
  setTodoList,
  addTodo,
  toggleCompleted,
  deleteTodo,
  setFilter,
} from "../../store/todos/todos.slice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";
import { MdDelete } from "react-icons/md";
import Container from "../container/Container";
import FilterButton from "../../UI/button/filterButton/FiiterButton";
import { TaskButton } from "../../UI/button/taskButton/TaskButton";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todoList, filter } = useSelector((state: RootState) => state.todo);
  const [showModal, setShowModel] = useState(false);
  const [newTask, setNewTask] = useState("");

  const completedCount = todoList.filter((todo) => todo.completed).length;
  const unCompletedCount = todoList.filter((todo) => !todo.completed).length;

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todolist", JSON.stringify(todoList));
    } else {
      localStorage.removeItem("todolist");
    }
  }, [todoList]);

  useEffect(() => {
    const localTodoListString = localStorage.getItem("todolist");
    const localTodoList = localTodoListString ? JSON.parse(localTodoListString) : [];
    if (localTodoList) {
      dispatch(setTodoList(localTodoList));
    }
  }, []);

  const handleModalOpen = () => setShowModel(true);
  const handleModalHide = () => setShowModel(false);

  const handleSetFilter = (filterValue: string) => {
    dispatch(setFilter({ filter: filterValue }));
  };

  const filteredTodoList = todoList.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed;
      case "current":
        return !todo.completed;
      default:
        return true;
    }
  });

  const handleAddTodo = (task: string) => {
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      showError("Please enter a task");
      return;
    }
    if (trimmedTask.length <= 8) {
      showError("Task is too short");
      return;
    }
    dispatch(
      addTodo({
        task: trimmedTask,
        id: Date.now().toString(),
      })
    );
    setNewTask("");
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsCompleted = (id: string) => {
    dispatch(toggleCompleted({ id }));
  };

  const showError = (message: string) => {
    alert(message);
  };

  return (
    <section className="todo">
      <Container>
        <div className="todo__body">
          <div className="todo__filters">
            {[
              { type: "all", count: completedCount + unCompletedCount },
              { type: "completed", count: completedCount },
              { type: "current", count: unCompletedCount },
            ].map(({ type, count }) => (
              <FilterButton
                key={type}
                filterType={type}
                onClick={handleSetFilter}
                count={count}
              />
            ))}
          </div>
          <ul className="todo__list">
            {todoList.length === 0 ? (
              <h2 className="todo__preview">No tasks yet</h2>
            ) : (
              filteredTodoList
                .slice()
                .reverse()
                .map(({ task, id, completed }) => (
                  <li
                    key={id}
                    onClick={() => handleMarkAsCompleted(id)}
                    className={`todo__item ${completed ? "line" : ""}`}
                  >
                    <div className="todo__title">{task}</div>
                    <div className="todo__buttons">
                      <button
                        onClick={() => handleDeleteTodo(id)}
                        className="todo__delete"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                ))
            )}
          </ul>
          <TaskButton text="Add task" onClick={handleModalOpen} />
          <Modal
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            active={showModal}
            onClose={handleModalHide}
            addItem={() => handleAddTodo(newTask)}
          />
        </div>
      </Container>
    </section>
  );
};

export default TodoList;
