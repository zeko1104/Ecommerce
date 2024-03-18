/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge,IconButton,Drawer,Box,Typography,Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState,useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { changeLanguage } from 'i18next';
import { FaTrashAlt } from "react-icons/fa";





export default function Navbar() {
  const {t, i18n} = useTranslation();
  const [isOpen, setIsopen] = useState(false)
  const [cart, setCart] = useState([]);
  const clickHandle=  lang =>{
   i18n.changeLanguage(lang);
  }
  return (
    <div>
        <header className='shadow-lg'>
    <div className='bg-slate-100 h-10' > 
       <div className='w-5/6 flex justify-between ml-20'>
        <h4 style={{cursor:'pointer'}} onClick={()=>clickHandle('az')}>AZ</h4>
        {/* <select  className='border-none bg-slate-100 outline-none my-2 '>
          <option onClick={()=>clickHandle('en')} value=""><h4>EN</h4></option>
          <option   value=""><h4>AZ</h4></option>
        </select> */}
        <div className='pt-2'>
          <Link className='mr-5' to='/login'>{t('Login')}</Link>
          <Link to='/register'>{t('Register')}</Link>
        </div>
       </div>
    </div> 
    <nav className='bg-blue-600 p-8 '>
      <div className='text-white h-16 '>
        <div className='text-white h-5 w-16'>
          <h1 className='text-2xl '>Logo</h1>
        </div>
       <div className='ml-96   flex'>
          <Link to="/" className='mr-5'><h4>{t('Home')}</h4></Link>
          <Link to="/about" className='mr-5'><h4>{t('About')}</h4></Link>
          <Link to="/products" className='mr-5'><h4>{t('Products')}</h4></Link>
          <Link to="/contact" className='mr-5'><h4>{t('Contact')}</h4></Link>
          <Badge badgeContent={1} color='error'   sx={{marginLeft:'auto',}} >
            <IconButton  onClick={()=>setIsopen(true)}>
              <ShoppingCartIcon sx={{color:'white',cursor:'pointer'}}  />
            </IconButton>
            <Drawer open={isOpen} anchor='right' onClose={()=>setIsopen(false)}>
              <Stack spacing={2}>
                <Box width='300px' textAlign='center'>
                  <Typography variant='h6' component='div'>Cart</Typography>
                </Box> 
                <Box sx={{backgroundColor:"white",borderRadius:"10px",width:'300px',height:'100px',display:"flex",marginLeft:"10px",boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}}>
                  <img style={{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} src='https://source.unsplash.com/random/100x100'></img>
                  <Box >
                    <Typography variant='h6' component='div'>Product</Typography>
                    <Typography variant='h6' component='div'>Price:99$</Typography>
                    <Typography variant='h6' component='div'>Quantity:1x</Typography>
                  </Box>
                  <FaTrashAlt className='text-slate-600 cursor-pointer mt-8 ml-6 text-xl' />
                  </Box>
             </Stack>
            </Drawer>
          </Badge>
        </div>
      </div>
    </nav>
   </header>
    </div>
  )
}
