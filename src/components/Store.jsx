import React from 'react';
import Data from "./data.json"
import { Card, Button, Container } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Cart from './Cart';



const Store = () => {

    const {addItem} = useCart();
    

  return (
    <Container className="cardHolder">
{Data.map(beer =>{
      return(
  
  <Card className="beerCard m-2"  key={beer.id}>
        <div className='img-holder'>
    <Card.Img className='beer-img' variant="top" src={beer.img} alt={beer.name}/>
        </div>
    <Card.Body>
      <Card.Title id="card-title">{beer.name} <img id="country-flag" src={beer.flag} alt=""/></Card.Title>
      <Card.Text>Style: {beer.style}</Card.Text>
      <Card.Text id="abv">ABV {beer.abv}%</Card.Text>
      <Card.Text>€{beer.price.toFixed(2)}</Card.Text>
      <Button id="info-button" variant="secondary">More info</Button>
      <Button variant="success" onClick={() => addItem(beer)}>Add to Cart</Button>
    </Card.Body>
  </Card>
  )})}
</Container>
)}

export default Store;



