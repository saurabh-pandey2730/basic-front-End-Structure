import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from  'react-icons/ai'

import { BsCart3 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import React from 'react'

export default function Header() {
    
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center  w-24'>
      
           <img src="https://th.bing.com/th?id=OIP.idB_-eo5pNgOG8Ker3jEpgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""  className='text-xs '/>
        </Link>
        <form >
            <TextInput   
                type='text'
                placeholder='Search...'
                 rightIcon={AiOutlineSearch}
                 className='hidden lg:inline '
            />
        </form>
            <button className='w-12 h-10 lg:hidden' color='gray'  pill>
                <AiOutlineSearch/>
            </button>
            <div className='flex  gap-2 md:order-2'>
                <div>
                    <Button className='gap-2 bg-white border-none' ><span className='hidden lg:inline md: inline text-black'>Cart</span> <BsCart3  className='text-lg text-black ' /> </Button>
                </div>
                <div>
                    <Button className='gap-2 bg-white border-none' ><span className='hidden lg:inline md: inline text-black'>Login</span> <RxAvatar  className='text-lg text-black ' /> </Button>
                </div>
                
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                 <Navbar.Link as={'div'}>
                    <Link to='/'>
                        Contact Us
                    </Link>
                 </Navbar.Link>
                 <Navbar.Link  as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                 </Navbar.Link>
                 <Navbar.Link  as={'div'}>
                    <Link to='#'>
                        Services
                    </Link>
                 </Navbar.Link>


                </Navbar.Collapse>
                 
    </Navbar>
  )
}
