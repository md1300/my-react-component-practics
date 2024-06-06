import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "../Link/Link";
import { useState } from "react";


 
const Navbar = () => {

    const [open,setOpen]=useState(false)

    const routerData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Dashboard", path: "/dashboard" }
      ];
      
    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)} >
                {
                   open===true? <IoCloseSharp />:<FiMenu />
                }
                 
             </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16':'-top-60'}
            bg-slate-400 px-7`}
            >
              {
                routerData.map(route=><Link key={route.id} route={route}></Link>)
              }
            </ul>
        </nav>
    );
};

export default Navbar;