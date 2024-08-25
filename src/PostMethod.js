import React, {useState} from 'react'

function PostMethod() {

  // useState  
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value,
    });
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Create the request object
    const createRequestOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData),
    }

    // Send the POST Request
    fetch(apiUrl, createRequestOptions)
    .then((response)=>response.json())
    .then((data)=>{
        // Handle the response data
        console.log("Response: ", data);
    })
    .catch((error)=>{
        console.log("Error: ", error);
    });
  }

    
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input onChange={handleChange} type='text' name='title' value={formData.title} />
            </div>
            <div>
                <label>Body: </label>
                <textarea onChange={handleChange} name='body' value={formData.body} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default PostMethod