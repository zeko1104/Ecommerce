import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Stack, Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, Box } from '@mui/material';
import { CiSearch } from "react-icons/ci";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/product')
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []); 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    axios.post('http://localhost:3001/cart', product)
      .then(response => {
        console.log('Product added to cart:', response.data);
      })
      .catch(error => {
        console.error('There was a problem adding the product to cart:', error);
      });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Box sx={{display:"flex",paddingTop:'2rem'}} >
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
        />
        <CiSearch style={{fontSize:'40px',cursor:'pointer'}} />
      </Box>
      <Stack spacing={5} direction="row" className='ml-24 mt-10' useFlexGap flexWrap="wrap">
        {filteredProducts.map(product => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image} 
              title={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default ProductList;
