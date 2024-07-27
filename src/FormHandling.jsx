import React, {useState} from 'react'

export default function FormHandling() {
    const [formData, setFormData] = useState({
        username:'',
        useremail:'',
        password: '',
        role:''
    })

const handleChange = (event)=>{
    const {name, value, type, checked} = event.target;
    const fieldValue = type === 'checkbox' ? checked : value
    console.log(name , fieldValue)

    setFormData({
        ...formData,
        [name]: fieldValue
    });
}   

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log('Form Data', formData);
}

  return (
    <>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor='username'>Username: </label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}  
                    onChange={handleChange}                  
                />
            </div>
            <div>
                <label htmlFor='useremail'>Email: </label>
                <input
                    type='email'
                    id='useremail'
                    name='useremail'
                    value={formData.useremail}  
                    onChange={handleChange}                    
                />
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}  
                    onChange={handleChange}                     
                />
            </div>
            <div>
                <label htmlFor='isSubscribe'>Subscribe: </label>
                <input
                    type='checkbox'
                    id='SubsisSubscribecribe'
                    name='isSubscribe'
                    value={formData.isSubscribe}  
                    onChange={handleChange}                     
                />
            </div>
            <div>
                <label htmlFor='role'>Role: </label>
                <select name="role" id="role" value={formData.isSubscribe} onChange={handleChange}>
                    <option value="">Please select role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
            </div>

            <button type='submit'>Submit</button>

        </form>
    </>
  )
}
