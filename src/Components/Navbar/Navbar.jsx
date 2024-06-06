import { FiMenu } from "react-icons/fi";
import Link from "../Link/Link";


 
const Navbar = () => {

    const routerData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Dashboard", path: "/dashboard" }
      ];
      
    return (
        <nav>
            
            <FiMenu /> 
           
            <ul className="md:flex">
              {
                routerData.map(route=><Link key={route.id} route={route}></Link>)
              }
            </ul>
        </nav>
    );
};

export default Navbar;