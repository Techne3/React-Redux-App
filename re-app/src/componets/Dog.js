import React from 'react';

const Dog = (props)=> {
    console.log(props)
    return (
        <div>
            <img src={props.imgs} alt="dogs" />
        </div>
    )
}

export default Dog