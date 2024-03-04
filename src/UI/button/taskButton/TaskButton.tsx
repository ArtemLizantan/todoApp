import "./taskButton.scss";
import { IButtonProps } from "../../../interfaces/interfaces";
export function TaskButton({ onClick, text }: IButtonProps) {
  return (
    <button className="task-btn" onClick={onClick}>
      {" "}
      {text}
    </button>
  );
}
