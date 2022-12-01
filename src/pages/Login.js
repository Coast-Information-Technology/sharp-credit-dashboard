import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Button from '../components/Button2'
import '../App.css'

const Login = () => {
    const { dispatch } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_USER', user: { email, password } })
        console.log(`from the login page \n this is email: ${email} and password: ${password}`)


        // dispatch({
        //     type: "ADD_BOOK", book: {
        //         title, author
        //     }
        // })
        setEmail('')
        setPassword('')

    }


    return (
        <main className='login h-screen flex bg-white dark:bg-gray-700 text-gray-800'>
            <div className="login-form flex justify-center items-center">
                <form className="w-2/3 h-4/6 py-12 rounded-3xl bg-light-gray dark:bg-slate-900">
                    <h2 className='w-full pl-8 text-2xl'><img src='/logo.png' alt='Company Logo' className='w-10 h-7 rounded-full inline pr-2 dark:text-white text-slate-900' /><span className=''>Login</span></h2>
                    <div className='mt-6 w-full'>
                        <label forhtml="email" className='text-gray-800 block pb-2 dark:text-white'>Email: </label>
                        <input
                            type="email"
                            id="email"
                            className='block p-2 rounded-xl border-0'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className='w-full mt-4 py-3 mb-6'>
                        <label forhtml="password" className='text-gray-800 block pb-2 dark:text-white'>Password: </label>
                        <input
                            type="password"
                            id="password"
                            className='block p-2 rounded-xl border-0'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <Button
                        color="white"
                        bgColor="blue"
                        size=""
                        text="Login"
                        borderRadius="10px"
                        buttonFunc={handleSubmit} />
                </form>
            </div>
            <div className='logo flex-col flex justify-center items-center px-8 bg-light-gray dark:bg-slate-900'>
                {/* <div className="absolute logo-blur h-1/2 mt-80 z-10 rounded-lg"></div> */}
                <img src='/logo.png' alt='Company Logo' className='rounded-full block w-56 h-56 z-30' />
                <h1 className='mt-12 text-2xl font-bold z-30'>Sharp Credit Admin App</h1>
            </div>
        </main>
    )
}

export default Login