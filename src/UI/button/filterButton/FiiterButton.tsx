import "./filterButton.scss";

import { IFilterButtonProps } from "../../../interfaces/interfaces";

const FilterButton: React.FC<IFilterButtonProps> = ({
  filterType,
  onClick,
  count,
}) => {
  return (
    <div className="todo__wrapper-btn">
      <button className="todo__btn" onClick={() => onClick(filterType)}>
        {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
      </button>
      <span>{count}</span>
    </div>
  );
};
export default FilterButton;
