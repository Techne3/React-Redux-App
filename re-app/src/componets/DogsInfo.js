import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Dog from './Dog'

import {fetchFacts} from '../actions'

const DogsInfo = (props) => {

useEffect( ()=> {
    props.fetchFacts();
},[])

if (props.isFetching){
    //spinner
    return <h2>Loading Doggos...</h2>
}
    return (
    <div className="wrapper">
    {props.error && <p>{props.error}</p>}
      {props.doggos.map(imgs => (
        <Dog  imgs={imgs} />
        ))}
        {/* <img src={props.imgs} alt="dogs"/> */}
    </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        doggos: state.doggos,
        isFetching: state.isFetching,
        error:state.error
    }

}

export default connect(mapStateToProps,
     {fetchFacts})(DogsInfo)