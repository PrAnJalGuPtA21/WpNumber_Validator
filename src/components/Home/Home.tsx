import React, { useEffect, useState } from 'react'
import "./Home.css"
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
    <>
        <h1 style={{textAlign:"center", color:"#29a329" }}>Whatsapp Number Validator</h1>
        <form className="form-data">
            <input type='text' className="inputfield" value={input} placeholder='type number to validate' onChange={e=>setInput(e.target.value)}/>
            <button>Search</button>
        </form>
        <div className="result">

        </div>
    </>
  )
}

export default Home