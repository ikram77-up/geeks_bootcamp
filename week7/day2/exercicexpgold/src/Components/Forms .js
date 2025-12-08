import React ,{ useState} from "react";
function Forms () {
    const [ username, setusername ] = useState ("ikram");
    const [age, setage] = useState ("");
    const [errormessage, seterrormessage] = useState ("");
    let header =null;
    if (username.trim() !=="") {
        header = <h1> Hello {username} {age} </h1>;
    }
    const handleusername = (e) => {
        setusername(e.target.value);
    }

    // const handleage = (e) => {
    //     let value = e.target.value;
    //     if(age !== isNaN(value)){
    //         alert("You age is not a number  you will enter a number"); 
    //         return
    //     }
       
    //     setage(value);
    // }

    const handleage = (e) => {
        let value = e.target.value;
        if(value === ""){
            seterrormessage("");
            setage("");
            return
        }

        if(isNaN(value)){
            seterrormessage("You age must be a number"); 
        }else{
            seterrormessage("");
        }
       
        setage(value);
    }

    
const [text, setText] = useState("the content of a textarea goes in the value attribute");

const handleTextChange = (e) => {
    setText(e.target.value);
}
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You are submiting ${username} ${age}`);
    }
    
    const [name, setName] = useState ("Volvo");

    const handleSelectChange = (e) => {
        setName(e.target.value);
    }
    
    return (
        <div>
            {header}
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name, and submit</label>
            <br/>
            <input type="text"
             placeholder="Enter your name "
             onChange={handleusername} />
                <br/>
                <label htmlFor="age"> Enter your age </label>
                <br/>
                <input  type="text"
                 placeholder="Enter your age" 
                    onChange={handleage}
                 />
                  <p style={{ color: "red"}}> {errormessage} </p>
             <br/>
             <textarea placeholder="Enter your message"
              onChange={handleTextChange}
             value={text}></textarea>
                <br/>
                <select value={name} onChange ={handleSelectChange}>
                    <option value="Ford">Ford</option>
                    <option value="Flat">Flat</option>
                    <option value="Volvo" >Volvo</option>

                </select>
                <br/>
             <button type="Submit"> Submit </button>
             </form>
        </div>
    );
};
export default Forms;