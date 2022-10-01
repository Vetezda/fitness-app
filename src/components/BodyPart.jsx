import React from 'react'
import { Stack, Typography } from '@mui/material'
import {GiBiceps} from 'react-icons/gi';


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #4db5ff' : '',
            backgroundColor: '#1f1f38',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px',
        }}     
        onClick={ () => { 
            setBodyPart(item)
            window.scrollTo( {top: 1800, left: 100, behavior: 'smooth'} )
        }}
        
    >
        <GiBiceps style={{ color: '#fff', width: "50px", height: "50px"}}/>
        <Typography 
            fontWeight="bold" 
            fontSize="24px" 
            color="#fff"
            textTransform="capitalize"

        >
            {item}
        </Typography>
    </Stack>
  )
}
export default BodyPart;
