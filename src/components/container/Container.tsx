import "./container.scss";

import { IContainerProps } from "../../interfaces/interfaces";

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
