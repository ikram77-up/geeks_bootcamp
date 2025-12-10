import React, { useState } from 'react';

function Form () {
const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: ""
});

    const [submitted, setSubmitted] = useState(false);

const onChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
}

const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
}
const onReset = () => {
    setData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: ""
    });
    setSubmitted(false);
}

    return (
        <div>
            {submitted ===false? (
                <form className='frm' onSubmit={onSubmit}>  
                <h1> Welcome </h1>
                <p> Please provide your information below:</p>
                <input type="text"
                 placeholder="First Name"
                  name="firstName" value={data.firstName} onChange={onChange}/>
                <br/>
                <input type="text" placeholder="Last Name"
                 name="lastName" value={data.lastName} onChange={onChange}/>
                <br/>
                <input type="text" placeholder="Phone Number"
                 name="phoneNumber" value={data.phoneNumber} onChange={onChange}/>
                <br/>
                <input type="text" placeholder="Email Address"
                 name="emailAddress" value={data.emailAddress} onChange={onChange}/>
                <br/>
                <button type="submit"> Submit </button>
                <br/>

            </form>
            ):(
                <>
                <p>{data.firstName} {data.lastName} </p>
                <br/>
                <p>  {data.phoneNumber} | {data.emailAddress} </p>
                <br/>
                <button type='button'  onClick={onReset}>Reset </button>

                </>
            )}
            
        </div>
    )
}

export default Form;