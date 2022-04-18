 import React,{useReducer} from 'react'
const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
          return{count:state.count+1,showText:state.showText}
       case "toggleShowText":
           return{count:state.count,showText:!state.showText}
    }
  };
function ReducerTutrial () {
 
const [state, dispatch] = useReducer(reducer,{count:0,showText:true});
    return (
    <div>
    <h1>{state.count}</h1>
    <button 
    onClick={()=>{
        dispatch({type:"Increment"});
        dispatch({type:"toggleShowText"});
        
    }}
     >
     clickHere
     </button>
     {state.showText &&<p>This is text</p>}
    </div>
  )
}

export default ReducerTutrial;


