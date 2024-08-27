import React, {useState, useEffect} from 'react'

const  DeleteMethod = ()=> {
  // State to store mock data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);   

  // Fetch mock data from jsonPlace holder api  
  const fetchData = async () => {
        try{
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const jsonData = await response.json();            
            setData(jsonData);
            //console.log(jsonData);
            setLoading(false);
        } catch(error) {
            console.log("Error: ", error);
        }        
  }


// initial data fetch on mount
useEffect(()=>{
    fetchData();
}, []);

// delete data based on its id

return (
    <div>
        { loading ? (
            <p>Loading...</p>
        ) : (

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>                    
                        {
                            data.map((iteam)=>{
                                <tr key={iteam.id}>
                                    <td>{iteam.id}</td>
                                    <td>{iteam.title}</td>
                                </tr>
                            })
                        }                    
                </tbody>
            </table>
        )
        
        }
    </div>
);

};

export default DeleteMethod;