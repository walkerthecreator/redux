import { useDispatch } from "react-redux";
import menu from "../assets/list.svg";
import yt from "../assets/youtube.svg";
import { toggleSidebar } from "../reducers/sidebar";
import search from "../assets/search.svg"

function Nav() {
  const dispatch = useDispatch();

  function handleOpener() {
    dispatch(toggleSidebar());
  }

  return (
    <nav className="flex w-full justify-around items-center border-b-2 p-2">
      <button onClick={handleOpener}>
        <img src={menu} alt="" />
      </button>
      <div className="flex gap-2">
        <img src={yt} alt="" />
        <h2 className="font-medium text-xl">Youtube</h2>
      </div>

        <div className="w-1/3 flex">

      <input
        type="text"
        placeholder="Search for Videos"
        className="border rounded-s-full p-1 px-6 w-4/6  outline-none"
        />

        <button className="border p-2 px-4 rounded-e-full"> <img src={search} alt="" /></button>
        </div>
      <button className="p-1 px-2 rounded-md bg-red-100 text-sm">login</button>
    </nav>
  );
}

export default Nav;
