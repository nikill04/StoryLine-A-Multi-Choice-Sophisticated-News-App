import React, { Component } from 'react'
import loadingSpinner from './loadingSpinner.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={loadingSpinner} alt="loading" style={{height: "40px", width: "40px"}} />
            </div>
        )
    }
}

export default Spinner
