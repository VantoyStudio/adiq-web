import React from 'react'
const Footer = () => {
    return (
        <div style={{height: '20vh', placeItems: "center", display: "grid", gridArea: "1/1"}}>
            <div style={{display: "flex", minWidth: '70vw', width: '70%', alignItems: 'center', justifyContent: "space-between"}}>
                <div>
                    Logo
                </div>
                <div style={{display: "flex", alignItems: 'center', justifyContent: "space-evenly", minWidth: '20vw'}}>
                    <div>
                        Links 1
                    </div>
                    <div>
                        Links 1
                    </div>
                    <div>
                        Links 1
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer