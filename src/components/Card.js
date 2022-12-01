import React from 'react'

const Card = ({ data }) => {
    return (
        <div key={data.title}
            className="bg-white 
            dark:text-gray-200
            dark:bg-secondary-dark-bg
            w-56 p-4 pt-9 rounded-2xl">
            <button type='button'
                style={{
                    color: data.iconColor,
                    backgroundColor: data.iconBg
                }}
                className="text-2xl opacity-0.9
                rounded-full p-4 hover:drop-shadow-xl">
                {data.icon}
            </button>
            <p className="mt-3">
                <span className='text-lg font-semibold'>
                    {data.amount}
                </span>
                <span className={`text-sm text-${data.pcColor} ml-2`}>
                    {data.percentage}
                </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
                {data.title}
            </p>
        </div>
    )
}

export default Card