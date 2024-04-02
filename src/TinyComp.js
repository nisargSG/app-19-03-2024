import {memo} from 'react'

function TinyComp(props){

    console.log("I am Tiny component")

    return(
        <p style={{backgroundColor:"blue",color:"white"}} > I am {props.name} and my age is {props.getAge()}</p>
    )

}

export default memo(TinyComp)