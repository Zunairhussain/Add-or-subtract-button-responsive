
import React, { useState } from 'react';

function Add() {
    const [userNumber ,setUserNumber ] = useState(0)
    const clickAdd = ()=> {
        setUserNumber(userNumber + 1)
    }

    const clickSubstract = ()=> {
        setUserNumber(userNumber - 1)
    }

    return (
        <div>
            <button onClick={clickSubstract}>Substract</button>
            {userNumber}
            <button onClick={clickAdd}>Addition</button>
        </div>
    )
}    


export default Add;
