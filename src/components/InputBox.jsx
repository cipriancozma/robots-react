import React from 'react'
import "../styles/InputBox.css"

function InputBox({ handleChange, className }) {

    return (
        <input type="search" className={className} placeholder="Search..." onChange={handleChange} />
    )
}

export default InputBox
