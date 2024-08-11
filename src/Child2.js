import React, { useContext } from 'react'

import { myContext, myContextNew } from './App'

export default function Child2() {
    // const sharedData = useContext(myContext);
    // console.log(sharedData);
  return (
    <>
        <h6>Child 2 Component</h6>

        <myContext.Consumer>
          {
            (sharedData) =>{
              return(

                <myContextNew>

                  {
                    (sharedDataNew) => {
                        return(
                          <p>{sharedData} = {sharedDataNew}</p>
                        )
                    }
                  }

                </myContextNew>
                
              )
            }
          }
        </myContext.Consumer>
        
    </>
  )
}
