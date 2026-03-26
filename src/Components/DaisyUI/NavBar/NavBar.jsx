import React, {useState } from 'react';
import Links from './Links';
import { DoorOpen, EyeClosed, Menu, MenuIcon } from 'lucide-react';


const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
  const [open , setOpen]=useState(false);
  const links=navLinks.map(route=> <Links key={route.id} route={route}></Links>)
    return (
       <nav className='flex justify-between mx-10'>
        <span className='flex' onClick={() => setOpen(!open)}>
          {
          open ?
           <EyeClosed className='md:hidden'></EyeClosed> 
           : <MenuIcon className='md:hidden'></MenuIcon>
          }
          <ul className={`md:hidden absolute duration-300
            ${open?'top-8':'-top-30'}
            bg-amber-400 text-black`}>
            {links}
          </ul>
          <h3>MY navBar</h3>
        </span>

        <ul className='md:flex hidden'>
        {
          links
        }
        </ul>

        {/* <ul className='flex justify-between'>
            {
                navLinks.map(route=><li><a href="{route.path}">{route.name}</a></li>
                )
            }
        </ul> */}


        {/* <ul className='flex justify-between'>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
        </ul> */}
        <button>Sing In</button>
       </nav>
    );
};

export default NavBar;