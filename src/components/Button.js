import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, buttonFunc }) => {
    return (
        <button type="button"
            style={{
                backgroundColor: bgColor, color, borderRadius
            }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
            onClick={buttonFunc} >
            {text}
        </button>
    )
}

export default Button