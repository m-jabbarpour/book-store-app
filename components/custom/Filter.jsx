import { useDispatch } from "react-redux";
import { ViewListIcon } from "@heroicons/react/outline";

function Filter({ title, options, addFilter, removeFilter }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(addFilter(value));
    } else {
      dispatch(removeFilter(value));
    }
  };

  return (
    <div className="px-3 pt-3 pb-2 bg-white rounded-lg">
      <div className="flex gap-2 pb-2">
        <ViewListIcon className="w-6" />
        <h5>{title}</h5>
      </div>
      <form className="flex flex-col gap-2 pr-1 overflow-y-auto h-36">
        {options.map((option, index) => (
          <div className="flex gap-2" key={index}>
            <input
              type="checkbox"
              name={index}
              value={option}
              onChange={handleChange}
            />
            <label className="text-xs" htmlFor={index}>
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;
