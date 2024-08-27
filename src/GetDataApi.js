import React, {useEffect, useState} from 'react'
import {getPosts, createPost, updatePost, deletePost} from  "./localApi"

function GetDataApi() {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({title:"", body:""});

  // Get request

  useEffect(()=>{
    getPosts()
    .then((response)=>{
      setPosts(response.data);
      //console.log(response.data);
    })
    .catch((error)=>{
      console.log("Error: ", error);
    })
  }, []);

  // Update Post
  const handleUpdatePost = (postId, updatedData) => {
    updatePost(postId, updatedData)
    .then((response)=>{
        const updatedData = posts.map((post)=>post.id === postId ? response.data : post);
        setPosts(updatedData);
        console.log(updatedData);
    })
    .catch((error)=>{
      console.error("Error occured on Update action: ", error);
    })
  }

  // Delete Post
  const handleDeletePost = (postId) =>{
    deletePost(postId)
    .then(()=>{
        const updatedPosts = posts.filter((post)=> post.id !== postId);
        setPosts(updatedPosts);
    })
    .catch((error)=>{
      console.error("Error occured on Delete action: ", error);
    })
  }

  // Code for Create new post

  const handleCreatePost = () => {
    createPost(newPost)
    .then((response)=>{
      setPosts([...posts, response.data])
      setNewPost({title:"", body:""});
    })
    .catch((error)=>{
      console.error("Error occured on Create action: ", error);
    })
  }

  return (
    <>
        <h2>Posts</h2>
        <ul>
            {posts.map((post)=>(
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={()=>handleUpdatePost(post.id, {titlt:"Updated Title", body:"Updated body"})}>Update Data</button>
                <button onClick={()=>handleDeletePost(post.id)}>Delete Data</button>
              </li>
            ))}
        </ul>

        <hr />

        <br />
        <br />

        <h4>Create New Post</h4>
        <input type="text"  placeholder="Title" value ={newPost.title} onChange={(e)=>setNewPost({...newPost, title:e.target.value})} />
        <input type="text"  placeholder="Body" value ={newPost.body} onChange={(e)=>setNewPost({...newPost, body:e.target.value})} />

        <button onClick={handleCreatePost}>Create New Post</button>
    </>
  )
}

export default GetDataApi