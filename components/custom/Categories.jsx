import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setFilteredSubCategory } from "../../src/redux/slices/filteredSubCategory";
import { changeIsDrawerActive } from "../../src/redux/slices/isDrawerActive";


function Categories() {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const goToSubCategory = (subCategory) => {
    dispatch(setFilteredSubCategory(subCategory));
    router.push("/books");
    dispatch(changeIsDrawerActive(false));
  };

  return (
    <div className="flex flex-col gap-2">
      {categories.map((item, i) => (
        <div key={i} className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">{item.category}</h3>
          {item.subCategories.map((subCategory, j) => (
            <h4
              key={j}
              className="pr-4 cursor-pointer hover:text-primary"
              onClick={() => goToSubCategory(subCategory)}
            >
              {subCategory}
            </h4>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Categories;
