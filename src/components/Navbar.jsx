import React from "react";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({user,setUser,search,setSearch,cart}) 

{
  const navigate=useNavigate()
  
  return (
    <div className="fixed top-0 z-30 flex justify-between items-center  shadow-lg w-full h-16 bg-green-300 ">
      {/* logo */}
      <img className="h-40 w-60 rounded " src={logo} alt="logo" />
      <input
        className="sm:w-84 px-8  py-2 rounded w-125  border"
        type="text"
        placeholder="Search your fav"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <div>
        <ul className="flex  justify-evenly font-bold gap-4 px-2 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 text-lg"
                : "hover:text-pink-400"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/fruit"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 text-lg"
                : "hover:text-pink-400"
            }
          >
            <li>Fruits</li>
          </NavLink>

          <NavLink
            to="/vegitable"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 text-lg"
                : "hover:text-pink-400"
            }
          >
            <li>Vegitable</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 text-lg"
                : "hover:text-pink-400"
            }
          >
            <li className="flex gap-1 items-center">
              <FaCartShopping />
              <span className=" bg-red-500 text-white px-2 rounded-full text-xs">
                {cart.length}
              </span>
            </li>
          </NavLink>

          {/* <NavLink to="orders">
            
            <button
              className="text-white bg-blue-800 px-4 py-2 rounded"
             
            >
              Orders
            </button>
          </NavLink> */}

          {!user 
          ?(
          <NavLink to='/login'>
            <button className="text-white bg-blue-800 px-4 py-2 rounded">LogIn</button>
         
        </NavLink>)
           : 
          (
            <>
              <p>Hello,{user.name}</p>
              <button
                className="text-white bg-blue-800 px-4 py-2 rounded"
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser(null);
                }}
              >
                LogOut
              </button>
            </>
          )}
        
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
