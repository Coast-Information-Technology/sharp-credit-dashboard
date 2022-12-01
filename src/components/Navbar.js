import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import Avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from './'
import { useStateContext } from '../context/ContextProvider'
import NavButton from './NavButton'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)

        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    })
    useEffect(() => {
        if (screenSize <= 900) {
            console.log(`Set Active menu is false, screen size is ${screenSize}`)
            setActiveMenu(false)
        }
        else {
            console.log(`Set Active menu is true, screen size is ${screenSize}`)
            setActiveMenu(true)
        }
    }, [screenSize, setActiveMenu])

    return (

        <nav className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton
                title="Menu"
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                color="blue"
                icon={<AiOutlineMenu className="h-5 w-5" />}
            />
            <div className='flex'>
                <NavButton
                    title="Chat"
                    dotColor="#03C907"
                    customFunc={() => {
                        handleClick('chat')
                    }}
                    color="blue"
                    icon={<BsChatLeft className="h-5 w-5" />}
                />
                <NavButton
                    title="Notifications"
                    dotColor="#03C907"
                    customFunc={() => handleClick('notification')}
                    color="blue"
                    icon={<RiNotification3Line className="h-5 w-5" />}
                />
                <TooltipComponent content="Profile" position="BottomCenter">
                    <div
                        className='flex items-center gap-2 cursor-pointer p-3 hover:bg-light-gray rounded-lg'
                        onClick={() => handleClick("userProfile")}>

                        <img
                            alt='user profile'
                            className='rounded-full w-8 h-8'
                            src={Avatar} />

                        <div>
                            <span className="text-gray-400 text-14">Hi</span>{" "}
                            <span className="text-gray-400 font-bold ml-1 text-14"> Micheal</span>
                        </div>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />

                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </nav>
    )
}

export default Navbar