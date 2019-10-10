import React from 'react'
import {connect} from 'react-redux'


const DogsInfo = ({state}) => {

    return (
        <div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        doggos: state.doggos,
    }

}

export default connect(mapStateToProps, {})(DogsInfo)