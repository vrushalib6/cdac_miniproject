
import { Card, Button, Col } from 'react-bootstrap';

export function Product (props) {
    
  

 
    const handleAddToCart = () => {
      onAddToCart(product);
    };

  return (
    
      <Col lg={3} >
      <Card style={{ width: '18rem', 
        marginTop: "50px"
        }}>
        <Card.Img variant="top" src={props.product.imageurl} />
         <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>{props.product.price} Rs</Card.Text>
          <Button variant="success">Rent Now</Button> &nbsp; &nbsp; &nbsp;
          <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>

   
      
  
  );
};

export default Product;


