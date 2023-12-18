import React, { useEffect, useRef, useState } from "react";

let counter=0
const Fcomponent=()=>{
    const [name,setName]=useState("")
    const myInput=useRef();

    const handleChangeName=()=>{
        setName(myInput.current.value)
    }

    useEffect(()=>{
        myInput.current.focus();
    },[]);
    return(
        <div className="form-fa-group text-center mt-4 p-3">

                <h4 className="text-center text-dark">حدس کلمه</h4>

                <input ref={myInput} type="text" className="form-control" autoComplete="off"/>

                <button className="btn btn-warning my-3" onClick={handleChangeName}>ثبت</button>

                <button className="btn btn-secondary my-3 mx-2" onClick={()=>{myInput.current.value = ""}}>مخفی</button>

                <br />

                <span>{counter++}</span>

            </div>

    )
}
export default Fcomponent;