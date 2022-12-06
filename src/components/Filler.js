import React, { useState } from 'react'

function Filler() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div style={{ 
            backgroundColor: 'orange', 
            height: '70vh', 
            width: '100%' ,
            display: 'grid',
            justifyContent: 'center',
            placeContent: 'center',
            alignItems: 'center',
            position: 'relative'
            }}>
            <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
            <div
                style={{
                padding: '2.5rem',
                height: '50vh',
                width: '50vh',
                display: 'grid',
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                placeContent: 'center',
                alignItems: 'center',
                borderRadius: '25px',
                backgroundColor: isHovering ? 'black' : 'lightblue',
                boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14)',
                
                }}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >

                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        color: isHovering ? 'white' : 'black',
                        borderBottom: '2px solid #dadada',
                        borderColor: isHovering ? 'white' : 'lightblue'
                    }}
                    
                    >
                    <h1> Filler </h1>
                    <h2>Content</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filler
