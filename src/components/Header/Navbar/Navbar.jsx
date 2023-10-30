import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = (isActive, isPending) => {
    if (isPending) return "text-gray-500 bg-gray-100";
    if (isActive) return "text-blue-300 font-bold bg-[#010313]";
    return "text-white";
  };

  const commonClasses =
    "px-4  py-2 rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out";

  const links = ["", "tour", "hotel", "activity", "car"].map((path, index) => {
    const text =
      index === 0 ? "Home" : path.charAt(0).toUpperCase() + path.slice(1);
    return (
      <NavLink
        key={path}
        to={`/${path}`}
        className={({ isActive, isPending }) =>
          `${linkStyle(isActive, isPending)} ${commonClasses}`
        }
      >
        {text}
      </NavLink>
    );
  });

  return (
    <div className="navbar px-5 md:px-16 lg:px-20 bg-[#0d0d21] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-[#0d0d21] text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img className="w-9 rounded-full" src="/logo.png" />
          <span className="text-md text-blue-100">FaporBaz</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-3 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/logo.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] py-2  space-y-3 px-4 bg-[#202074] text-white shadow menu menu-sm dropdown-content hover:bg-[#010313] hover:text-blue-300  hover:font-bold rounded-md w-28"
          >
            <Link to={"/login"}>Login</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
