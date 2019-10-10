import React from 'react';

const Dog = (props)=> {
    console.log(props)
    return (
        <div>
            <img src={props.imgs} alt="dogs"  className="pictureWrap" />
        </div>
    )
}

export default Dog