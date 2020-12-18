import React from 'react';

function BoxColor(props) {
    let r = props.r
    let g = props.g
    let b = props.b

    const divStyle = {

        height: 80,
        backgroundColor: `rgb(${r},${g},${b})`,
        border: 'solid'
    };


    return (
        <div className='boxi'>
            <div style={divStyle}>rgb({r},{g},{b})</div>
        </div>
    );
}
export default BoxColor;