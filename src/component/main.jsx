import React from 'react'

function LastSection({myHeader,myService, }) {
    return (
        <div>

            <div>
                <h3>{myHeader}</h3>
            <p style={{whiteSpace : 'pre-wrap'}}>{myService}</p>
            </div>
        </div>
    )
}

export default LastSection