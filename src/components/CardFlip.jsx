import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { Card, Button, Container } from "react-bootstrap";
import Data from './data.json'

class CardFlip extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Container className="cardHolder">
{Data.map(beer =>{
      return(
  
  <Card className="beerCard" key={beer.id}>
        <div className='img-holder'>
    <Card.Img className='beer-img' variant="top" src={beer.img} alt={beer.name}/>
        </div>
    <Card.Body>
      <Card.Title id="card-title">{beer.name} <img id="country-flag" src={beer.flag} alt=""/></Card.Title>
      <Card.Text>Style: {beer.style}</Card.Text>
      <Card.Text id="abv">ABV {beer.abv}%</Card.Text>
      <Card.Text>€{beer.price}</Card.Text>
      <Button id="info-button" onClick={this.handleClick} variant="secondary">More info</Button>
      <Button variant="primary">ADD TO BASKET</Button>
    </Card.Body>
  </Card>
  )})}
</Container>
<Container className="cardHolder">
        
        {Data.map(beer =>{
      return(
    <Card className="beerCardBack m-2" key={beer.id}>
      <Card.Body>
        <Card.Text id="text-back">
        <p>{beer.description}</p>
        </Card.Text>
        <Button id="info-button" onClick={this.handleClick} variant="secondary">Back</Button>
        <Button variant="primary">ADD TO BASKET</Button>
      </Card.Body>
    </Card>
        )})}
</Container>
</ReactCardFlip>
    )
  }
}
export default CardFlip;