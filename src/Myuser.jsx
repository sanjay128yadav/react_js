import React from "react";

export default function Myuser() {

    /*
    Below code is working due to power of JSX
    return(
        <>
        <h1> Hello World! I am Sanjay </h1>
        { 2*2 }
        </>
    )
    */
   // Same work without JSX   

   return React.createElement("h1", null, "Hello World! I am Sanjay Yadav", React.createElement("p",null,"Description I am fine here"));
}