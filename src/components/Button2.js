import React from 'react'

const Button2 = ({ bgColor, color, size, text, borderRadius, buttonFunc }) => {
    return (
        <button type="button"
            style={{
                backgroundColor: bgColor, color, borderRadius
            }}
            className={`text-${size} mx-5 py-2 px-12 hover:drop-shadow-xl`}
            onClick={buttonFunc} >
            {text}
        </button>
    )
}

export default Button2