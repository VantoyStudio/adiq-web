import React from 'react';


const FilteredMedia = (props) => {
    return (
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
                padding: '2rem'
            }}
        >
            <h3>Filter your Media Type</h3>
            <div>
                
            </div>
            Different Types of Media
        </div>
    )
}

export default FilteredMedia