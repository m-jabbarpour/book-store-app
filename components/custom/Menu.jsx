import { useSelector, useDispatch } from "react-redux";
import { ViewListIcon } from "@heroicons/react/outline";
import { setFilteredSubCategory } from "../../src/redux/slices/filteredSubCategory";

function Menu() {
  const dispatch = useDispatch();
  const filteredSubCategory = useSelector(
    (store) => store.filteredSubCategory.value
  );

  const onOptionChange = (e) => {
    dispatch(setFilteredSubCategory(e.target.value));
  };

  const categories = [
    {
      category: "روان‌شناسی و موفقیت",
      subCategories: ["توسعه فردی", "خانواده و ازدواج"],
    },
    {
      category: "داستان و رمان",
      subCategories: ["داستان ایرانی", "داستان خارجی"],
    },
  ];

  return (
    <div className="p-3 bg-white rounded-lg">
      <div className="flex gap-2 pb-3">
        <ViewListIcon className="w-6" />
        <h5>دسته‌بندی</h5>
      </div>
      <form className="flex flex-col gap-2 pr-1 overflow-y-auto text-xs">
        {categories.map((item, i) => (
          <div key={i}>
            <h6 className="mb-2">{item.category}</h6>
            {item.subCategories.map((subCategory, j) => (
              <div key={j} className="pr-3 mb-2">
                <input
                  type="radio"
                  name="option"
                  id={`option-${i}-${j}`}
                  value={subCategory}
                  className="peer w-0 opacity-0 fixed"
                  checked={subCategory === filteredSubCategory}
                  onChange={onOptionChange}
                />
                <label
                  htmlFor={`option-${i}-${j}`}
                  className="cursor-pointer peer-checked:font-bold peer-checked:text-primary"
                >
                  {subCategory}
                </label>
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Menu;
