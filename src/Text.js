import React, { useEffect } from "react";
import { useState } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(()=> {
        console.log("Mounted");

        return ()=>{
            console.log("UnMounted");
        }
    },[])

    
    return (
        <div>
            <input type="text" onChange={(event)=>{
                setText(event.target.value);
            }} />
            <h1>{text}</h1>
        </div>
    )
}