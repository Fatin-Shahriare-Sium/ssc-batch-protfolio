import React from 'react'

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
            <div style={{ width: '5rem', height: '5rem' }} className="spinner-border text-primary md " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
