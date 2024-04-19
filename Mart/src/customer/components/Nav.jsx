/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Outlet } from 'react-router-dom'
import { auth } from '../../firebase/firebase';




export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    try {
      
      if (user.user.email === 'admin@gmail.com') {
        setIsAdmin(true)
      }
      else if (user) {
        setIsUser(true)
      }
    }
    catch (error) {
      console.log(error);
    }


  }, [])

  const logout = () => {
    localStorage.clear('user');
    auth.signOut()
    window.location.href = '/signin'

  }




  return (

    <div className="bg-white">
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          DEMO
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to='/'>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                { !user?
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                    <Link to='/signin' className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link to="/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Create account
                    </Link>
                  </div> :

                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-">
                    <Link onClick={logout} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Logout
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    
                    {isAdmin? 
                      <Link to="/dashboard" className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only"></span>
                      <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
                    </Link> : 
                    <Link to="/" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only"></span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>

                    }
                  </div>


                }



                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-200">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Order */}
                {user && !isAdmin}
                <div className="flex lg:ml-6">
                  <Link to={"/order"} className="p-2 text-black-400 hover:text-gray-400">
                    Order
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

      </header>


    </div>

  )
}
