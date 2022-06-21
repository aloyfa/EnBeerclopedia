import React from 'react'
import { useState, useEffect } from 'react'



const Beers = () => {
  
  const [beers, setBeers] = useState ([])

  const address = "/src/data.json";

  const fetchBeers = (address)=> {
    fetch (address)
      .then(response => response.json())
      .then(data => setBeers(console.log(data)))
  };
  
  fetchBeers(address);
  useEffect(() => {
      fetchBeers(address);
  },[])
      
  return (
    <div className="card-holder">
    {beers.map((item) =>(
        <div>
            <div className="card">
                <div className="card-body">
                  <img className="card-img" src={item.image} alt=""/> 
                  <h2 className="card-title">{item.name}</h2>
                  <hr/>
                  <p>ABV:{item.abv}% </p>
                  <p>a</p>
                  <p>Style: {item.style} </p>
                  <p>Price: €{item.price} </p>
                </div>
            </div>
        </div>
    ))}
    </div>   
  )
}

export default Beers;