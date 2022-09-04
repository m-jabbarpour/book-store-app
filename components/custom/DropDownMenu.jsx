import Categories from "./Categories";

function DropDownMenu() {
  return (
    <div className="group relative">
      <button>دسته‌بندی</button>
      <div className="hidden group-hover:block absolute z-10 w-max">
        <div className="h-8"></div>
        <div className="bg-white px-6 py-4 rounded shadow">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;
