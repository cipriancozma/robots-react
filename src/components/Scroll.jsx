import React from 'react'
import "../styles/Scroll.css"

function Scroll({ children }) {
    return (
        <div className="scrollable">
            {children}
        </div>
    )
}

export default Scroll
