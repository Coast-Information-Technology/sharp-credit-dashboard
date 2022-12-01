import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { useStateContext } from '../context/ContextProvider'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import Card from "../components/Card"
import "../App.css"


const Dashboard = () => {
    // const sam = useStateContext()
    return (
        <section className='mt-6 '>
            <h1 className='mb-6 text-center'>Dashboard</h1>
            <section className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
                    {earningData.map(
                        (data) =>
                            <Card data={data} />

                    )}
                </div>
            </section>
            <section className='flex gap-10 flex-wrap justify-center'>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <p>
                                <span className='text-3xl font-semibold'> $93, 438</span>
                                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'> 23%</span>
                            </p>
                            <p className='text-gray-500 mt-1'>Budget</p>
                        </div>
                        <div className="mt-8">
                            <p>
                                <span className='text-3xl font-semibold'> $48, 438</span>
                                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'> 23%</span>
                            </p>
                            <p className='text-gray-500 mt-1'>Expense</p>
                        </div>
                        <div className="mt-5">
                            <SparkLine
                                currentColor="blue"
                                id="line-sparkline"
                                type="Line"
                                height="80px"
                                width="250px"
                                data={SparklineAreaData}
                                color="blue"
                            />
                        </div>

                    </div>
                    <div>
                        {/* <Stacked width="320px" height="360px" /> */}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Dashboard