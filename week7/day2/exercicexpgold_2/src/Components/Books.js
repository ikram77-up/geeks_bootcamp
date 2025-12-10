// Exercice 1
import React , {useState} from 'react';
function Books(){
const [dataForm, setDataForm] = useState({
    title: "",
    author: "",
    genre: "",
    yearPublished: ""
})

const [message, setMessage] = useState("");
const handleChange = (e) => {
    setDataForm({
        ...dataForm, 
        [e.target.name]: e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);

    setMessage("Book added successfully!");
    setDataForm({
        title: "",
        author: "",
        genre: "",
        yearPublished: ""
    })
}

    return(
        <>
        <form onSubmit={handleSubmit} >
            <h1> New Books </h1>
            <label htmlFor="title"> title:</label>
            <input type="text"
             placeholder="Title"
             name="title"
             value={dataForm.title}
             onChange={handleChange}    />
            <br/>
            <label htmlFor="author"> author:</label>
            <input type="text" placeholder="Author"
             name="author" value={dataForm.author} onChange={handleChange}/>
            <br/>
            <label htmlFor="genre"> genre:</label>
            <input type="text" placeholder="Genre" 
            name="genre" value={dataForm.genre} onChange={handleChange}/>
            <br/>
            <label htmlFor="yearPublished"> year Published:</label>
            <input type="text" placeholder="Year Published" 
            name="yearPublished" value={dataForm.yearPublished} onChange={handleChange}/>
            <br/>
            <button type="submit">submit</button>
        </form>

        {message && <p>{message}</p>}
        
        </>
    )
}
export default Books;