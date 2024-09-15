import React from 'react';


const Square=(props)=>{
    return(
        <div className='Square' onClick={props.onClick}>
            <h1>{props.value}</h1>
        </div>
    )
}
export default Square;