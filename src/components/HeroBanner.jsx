import { Box, Button, Typography } from '@mui/material'
import imageBanner from '../assets/imageBanner.png'

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg: '150px', xs: '70px' }, 
            ml: { sm: '50px' },
        }} 
        >
          <img src={imageBanner} className="imgC" alt="image" />
        <br />
        <Button variant="contained" color="error" href="#exercises" className="search-btn"
                sx= {{mt:{ lg: '80px', sm: '50', xs: '30px' },
                      ml:"12px",  
                      backgroundColor: '#4db5ff', padding: '10px', display: 'inline-block'
                }}
        >
            Expore Exercises
        </Button>

        <Typography  fontWeight={600} color="#4db5ff" fontSize="200PX"
                    sx= {{ opacity: '0.3', display: { lg: 'block', xs: 'none' }}}
        >
            Exercises
        </Typography>

    </Box>

  )
}

export default HeroBanner;
  