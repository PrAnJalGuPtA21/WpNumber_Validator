import React, { useEffect, useState } from 'react'
const url = 'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken';
const Home = () => {
    const[ input, setInput] = useState<string>("");
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'd95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221',
            'X-RapidAPI-Host': 'whatsapp-number-validator3.p.rapidapi.com'
        },
        body: {
            phone_number: `${setInput}`
        }
    };
    const[data , setData] = useState<unknown>("");

    useEffect (() => {
        const fetchData = async () => {
            try {
              const response = await fetch(url, options);
              const result = await response.json();
                console.log(result);
                setData(result);
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    }, [])
    
  return (
    <div>
        <form className="form-data">
            <input type='text' value={input} placeholder='' onChange={e=>setInput(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Home