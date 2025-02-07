import { ShoppingCart } from "lucide-react";

function Header({
  pageName,
  showCart,
  setShowCart,
}: {
  pageName: string;
  showCart: boolean;
  setShowCart: (showCart: boolean) => void;
}) {
  ``;
  return (
    <>
      <header className="bg-black text-white py-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex-shrink-0  cursor-pointer flex items-center">
            <span className="material-icons text-cyan-200 text-5xl md:text-6xl">
              auto_stories
            </span>

            <span className="text-xl md:text-2xl font-semibold text-cyan-300 ml-2 hidden md:block">
              ComSci Book Shop
            </span>
          </div>

          <nav className="font-semibold hidden sm:flex text-lg">
            <ul className="flex space-x-4  items-center">
              <li
                className={`mr-6 p-1 ${
                  pageName === "Home" ? "border-b-2 border-cyan-400" : ""
                }`}
              >
                <a
                  className={`hover:text-cyan-400 ${
                    pageName === "Home"
                      ? "cursor-default  text-cyan-400"
                      : "text-white"
                  }`}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li
                className={`mr-6 p-1 ${
                  pageName === "Books" ? "border-b-2 border-cyan-400" : ""
                }`}
              >
                <a
                  className={`hover:text-cyan-400 ${
                    pageName === "Books"
                      ? "cursor-default  text-cyan-400"
                      : "text-white"
                  }`}
                  href="#"
                >
                  Books
                </a>
              </li>
              <li className="mr-6 p-1">
                <a className="text-white hover:text-cyan-400" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="mr-6 p-1">
                <a className="text-white hover:text-cyan-400" href="#">
                  About Us
                </a>
              </li>
              <li className="mr-6 p-1">
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="px-4 py-2 border-2 border-blue-500 hover:text-black text-white bg-blue-500  hover:bg-cyan-400  rounded-md transition-colors duration-200"
                >
                  <ShoppingCart size={25} />
                </button>
              </li>
            </ul>
          </nav>
          {showCart && (
            <div className="absolute top-16 right-0 bg-white shadow-lg p-4">
              <p>Your cart is currently empty.</p>
            </div>
          )}
          <div className="mr-6 sm:hidden">
            <span className="text-cyan-300 focus:outline-none material-icons text-3xl">
              menu
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
