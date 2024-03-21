import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";



const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
    ];


    return (
        <nav>

            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden bg-slate-200 p-6">

                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <FiMenu></FiMenu>
                }

            </div>

            <ul className={`md:flex absolute md:static bg-slate-300 py-6 px-10 duration-1000
            ${open ? 'top-16' : '-top-60' }
            `}>

                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }

            </ul>




        </nav>
    );
};

export default NavBar;