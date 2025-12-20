import React from "react";
import ErrorBoundary from "./ErrorBoundary";

function ColumRight() {

    const [crashed , setCrashed] = React.useState(false);
  return (<>    
    <p>this paragraph is in the right column</p>
    <ErrorBoundary>
        <p>
            {crashed ? {message:"I live to crash"}
            :"not crashed "}
            
             </p>
             </ErrorBoundary>

        <button 
         onClick={() => setCrashed(true)}>Replace String with objert</button>
        </>
  );
}
export default ColumRight;