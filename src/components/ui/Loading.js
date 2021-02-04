import React from 'react'
import './loading.css'

export const Loading = () => {
    return (
        <div className="loading__container">
            <h1 className="loading__title">
                Loading...
            </h1>
        <div className="loading__loader"></div>
    </div>
    )
}
