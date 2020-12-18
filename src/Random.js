import React from 'react';

function Random(props) {
    let hih = props.min
    let huh = props.max
    let blub
    function getRandomArbitrary(min, max) {
        blub = Math.floor(Math.random() * (max - min) + min);
    }
    getRandomArbitrary(hih, huh)


    return (
        <div className='random'>
            <p>Random value between {hih} and {huh} is: {blub}</p>
        </div>
    );
}
export default Random;