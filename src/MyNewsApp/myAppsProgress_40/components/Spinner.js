import React from 'react'
import loadingSpinner from './loadingSpinner.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loadingSpinner} alt="loading" style={{ height: "40px", width: "40px" }} />
        </div>
    )
}

export default Spinner