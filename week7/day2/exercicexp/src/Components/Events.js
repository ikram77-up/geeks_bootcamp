import React, { useState } from "react";

function Events() {
  const [isToggleOn, setToggle]  = useState(true);
  const clikeMe = () => {
    alert("I was clicked!");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('You pressed Enter: ' + event.target.value);
    }
    }

    const ToggleOn =() => {
      setToggle(!isToggleOn);
    }
    return (
        <><button onClick={clikeMe}>Click Me!</button>
         {/* part 2 */}
        <input type="text" onKeyDown={handleKeyDown}/>
        
       {/* part 3 */}
        <button onClick= {() => ToggleOn()}> 
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
        </>
        
    );
    }

    export default Events