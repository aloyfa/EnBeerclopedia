import React from 'react'
import {CartProvider} from 'react-use-cart'
import Store from './Store'
import Cart from './Cart'
import {Container, Row, Col} from 'react-bootstrap'
import './Home.css'


function Home() {
  return (
    <CartProvider>
      <Container>
      <Row>
        <Col><Store/></Col>
        <Col sm={4}><Cart fixed='top'/></Col>
      </Row>
      </Container>
    </CartProvider>
  );
}

export default Home

