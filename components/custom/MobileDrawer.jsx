import { MenuIcon } from "@heroicons/react/solid";
import Categories from "./Categories";
import { useDispatch, useSelector } from "react-redux";
import { changeIsDrawerActive } from "../../src/redux/slices/isDrawerActive";

function MobileDrawer() {
  const isDrawerActive = useSelector((store) => store.isDrawerActive.value);
  const dispatch = useDispatch();

  const showDrawer = () => {
    dispatch(changeIsDrawerActive(true));
  };
  const hideDrawer = (e) => {
    e.stopPropagation();
    dispatch(changeIsDrawerActive(false));
  };

  return (
    <>
      <MenuIcon className="w-6" onClick={showDrawer} />
      <div
        className={`fixed top-0 right-0 w-full h-full z-10 ${
          isDrawerActive ? "visible bg-modal" : "invisible bg-transparent"
        } transition duration-300 ease-in-out`}
        onClick={hideDrawer}
      >
        <div
          className={`bg-white h-full z-10 fixed top-0 ${
            isDrawerActive ? "right-0" : "right-[-100%]"
          } p-6  transition-[right] duration-300 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-bold text-xl mb-6">دسته‌بندی</h1>
          <Categories />
        </div>
      </div>
    </>
  );
}

export default MobileDrawer;
