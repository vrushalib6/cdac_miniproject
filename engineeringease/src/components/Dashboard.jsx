
import { useEffect, useState } from 'react';
import Product from "./Product";
import { getProducts } from "../service/ProductService";
import { Container, Row } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart';
import { useNavigate } from 'react-router-dom';




export function Dashboard(){
           const navigate=useNavigate();
            const [products, setProducts] = useState([]);
            const [cart, setCart] = useState([]);

            async function fetchProducts(){
                try{
                    const productData = await getProducts(); //get the product from server
                  setProducts(productData.productdetails);
                  
                } catch(error){
                    console.log(error);
                 }
                
                };
            
            const handleAddToCart = (product) => {
                // Update the cart state when a product is added
                setCart([...cart, product]);
                navigate("/dashboard/shoppingcart")
                
                };
                

            useEffect(() => {
                fetchProducts();
            }, []);
            console.log(products);

            
            return (
                <Container>
                    <Row>
                   
                    <h2 >DashBoard</h2>
                    
                        
                        
                        {
                        products.map((product) => {
                            return (
                                <Product product={product} key={product.id} onAddToCart={handleAddToCart} ></Product>
                            );
                        })
                        }
                       
                        <ShoppingCart cart={cart} />
                       
                        
                  </Row>
                </Container>
                
            );
     
                 
         };



             
                        
                    
                
 

