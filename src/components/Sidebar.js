import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../context/ContextProvider'


import { links } from '../data/dummy'

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext()
    const menuRoleList = "Menu List"
    const subMenuRoleList = "SubMenu List"
    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2"
    const inActiveLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"


    const handleCloseSideBar = () => {
        if (activeMenu && (screenSize <= 900)) {
            setActiveMenu(false)
        }
    }

    return (
        <nav className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu &&
                (<>
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={() => { setActiveMenu(false) }} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <img src='/logo.png' alt='Company Logo' className='inline-block w-6 h-6' />  <span>Sharp Credit</span>
                        </Link>
                        <button type='button' onClick={handleCloseSideBar} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel />
                        </button>
                        <TooltipComponent content="Menu" position="BottomCenter" />
                    </div>
                    <ul role={menuRoleList} className='mt-10 list-none'>
                        <li key="Dashboard" className="text-gray-400 m-3 mt-4 uppercase list-none"> Dashboard
                            <ul role={subMenuRoleList} className='list-none'>
                                <li key="home">
                                    <NavLink
                                        to="/"
                                        key="home"
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) => isActive ? activeLink : inActiveLink}>
                                        <AiOutlineHome />
                                        <span className='capitalize'>home</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </li>
                        {links.map((link) => (
                            <li key={link.title} className="text-gray-400 m-3 mt-4 uppercase list-none"> {link.title}
                                <ul className='list-none'>
                                    {link.links.map((subMenu) => (
                                        <li key={subMenu.name} role={subMenuRoleList}>
                                            <NavLink
                                                to={`/${subMenu.name}`}
                                                key={subMenu.name}
                                                onClick={handleCloseSideBar}
                                                className={({ isActive }) => isActive ? activeLink : inActiveLink}>
                                                {subMenu.icon}
                                                <span className='capitalize'>{subMenu.name}</span>
                                            </NavLink>
                                        </li>
                                    ))}

                                </ul>
                            </li>
                        ))}
                    </ul>

                </>
                )
            }
        </nav >
    )
}

export default Sidebar