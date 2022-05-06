import React, { ChangeEventHandler} from 'react'
import "../styles/InputBox.css"

interface InputProps {
    className: string;
    handleChange: ChangeEventHandler<HTMLInputElement>; 
}

function InputBox({ handleChange, className }: InputProps) {

    return (
        <input type="search" className={className} placeholder="Search..." onChange={handleChange} />
    )
}

export default InputBox
