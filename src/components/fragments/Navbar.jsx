export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2.5 pr-0">
            <div className="flex items-center gap-8 p-2.5 pl-6 border-l-2 border-gray-500 text-sm">
              <p>Products</p>
              <p className="text-gray-500">Selected</p>
            </div>
            <div className="flex items-center gap-6 p-2.5">
              <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-poppins">
                <i className="fa-solid fa-plus mr-1"></i> Order
              </button>
              <i className="fa-regular fa-message"></i>
              <i className="fa-regular fa-bell"></i>
              <i className="fa-solid fa-user w-8 h-8 flex justify-center items-center rounded-full border border-black"></i>
            </div>
          </nav>
    )
}