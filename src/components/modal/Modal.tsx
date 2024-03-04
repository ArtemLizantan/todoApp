import { FC } from "react";
import "./modal.scss";
import { TaskButton } from "../../UI/button/taskButton/TaskButton";
import { IoMdClose } from "react-icons/io";
import { IModalProps } from "../../interfaces/interfaces";
const Modal: FC<IModalProps> = ({
  active,
  onClose,
  addItem,
  value,
  onChange,
}) => {
  return (
    active && (
      <div className="modal" onClick={onClose}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="modal__close">
            <IoMdClose />
          </button>
          <h2 className="modal__title">Add more tasks!</h2>
          <div className="modal__content">
            <div className="modal__input-wrap">
              <input
                value={value}
                onChange={onChange}
                type="text"
                placeholder="New task"
              />
              <p className="modal__text">
                The task must have more than 8 characters
              </p>
            </div>
            <TaskButton text="Add" onClick={addItem} />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
