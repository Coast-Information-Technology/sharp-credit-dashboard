import { useContext } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components'
import {
    ActiveLoans, Approval, Borrowers, ChurnBorrowers, Dashboard, Eligible, LateRepayments,
    Loan, LoanHistory, Login, MaturedLoans, NewBorrowers, NewLoans, NewUser, RejectedLoans,
    SalaryHistory, SuccessfulTransactions, UnsuccessfulTransactions, Users, Calendar, TodoList
} from '../pages/'
import '../App.css'
import { useStateContext } from '../context/ContextProvider'
import { AuthContext } from "../context/AuthContext"


const Home = () => {
    const { activeMenu } = useStateContext()
    const { isUserAuthenticated } = useContext(AuthContext)
    console.log(`This is the authenticated state ${isUserAuthenticated}`)
    return (
        <BrowserRouter>
            {isUserAuthenticated ?
                <div className="flex relative dark:bg-main-dark-bg">
                    {/* Settings Icon */}
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{ background: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {/* SideBar */}
                    <header>
                        {activeMenu ?
                            (
                                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                                    <Sidebar />
                                </div>
                            ) :
                            (
                                <div className='w-0 dark:bg-secondary-bg-dark'>
                                    <Sidebar />
                                </div>
                            )
                        }
                    </header>
                    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <header className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </header>

                        <main>
                            <Routes>
                                {/* Dashboard */}
                                <Route exact path='/' element={<Dashboard />} />
                                {/* Pages */}
                                <Route path='/active-loans' element={<ActiveLoans />} />
                                <Route path='/approval' element={<Approval />} />
                                <Route path='/borrowers' element={<Borrowers />} />
                                <Route path='/churn-borrowers' element={<ChurnBorrowers />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/home' element={<Dashboard />} />
                                <Route path='/eligible' element={<Eligible />} />
                                <Route path='/late-repayment' element={<LateRepayments />} />
                                <Route path='/loan' element={<Loan />} />
                                <Route path='/loan-histories' element={<LoanHistory />} />
                                <Route path='/matured-loans' element={<MaturedLoans />} />
                                <Route path='/new-borrowers' element={<NewBorrowers />} />
                                <Route path='/new-loans' element={<NewLoans />} />
                                <Route path='/new-user' element={<NewUser />} />
                                <Route path='/rejected-loans' element={<RejectedLoans />} />
                                <Route path='/salary-histories' element={<SalaryHistory />} />
                                <Route path='/successful-transactions' element={<SuccessfulTransactions />} />
                                <Route path='/unsuccessful-transactions' element={<UnsuccessfulTransactions />} />
                                <Route path='/users' element={<Users />} />
                                {/* Apps */}
                                <Route path='/to-do-list' element={<TodoList />} />
                                {/* Analytics */}

                            </Routes>
                        </main>

                    </div>
                </div> :
                <Login />}
        </BrowserRouter >
    )
}

export default Home