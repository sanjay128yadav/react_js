import React, {useState, useEffect} from 'react'
import { CardBody } from 'react-bootstrap';

function UpdateMethod() {

  const [postData, setPostData] = useState({
    id:1,
    title: "",
    body: "",
  });  

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPostData({
        ...postData,
        [name]:value,
    });
  };

  useEffect(()=>{
        const postId = postData.id
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setPostData(data);
        })
        .catch((error)=>{
            console.log("Error: ", error);
        })

  }, [postData.id]);

  // Handle Submit data
  const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);

        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
        const createRequestOptions = {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(postData),            
        }

        fetch(apiUrl, createRequestOptions)
        .then((response)=>response.json())
        .then((data)=>{
            setMessage("Post Updated Successfully!");
            console.log(data);            
        })
        .catch((error)=>{
            setMessage("Occured error while updating the post!");
            console.log("Error: ", error);
        })
        .finally(()=>{
            setLoading(false);
        })
  }

  // Load the initial post data when component mount  

  return (
    <>
    { loading && <p>Loading...</p>} 
    { message && <p>{message}</p>} 

    <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input onChange={handleChange} type='text' name='title' value={postData.title} />
            </div>
            <div>
                <label>Body: </label>
                <textarea onChange={handleChange} name='body' value={postData.body} />
            </div>
            <button onChange={handleChange} type='submit'>Update Post Data</button>
    </form>

    </>
  )
}

export default UpdateMethod