import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { GiStrongMan } from 'react-icons/gi';





export const Navbar = () => {
  return (
    <Stack
        direction="row"
        justifyContent="space-around"
        sx= {{ gap: { sm: '60px', xs: '30px', xxs: '0' },
               mt:  { sm: '32px',  xs: '10px' },
               justifyContent: 'none',
               
            }}
        px='20px'
    >
        <Link to="/">
            <GiStrongMan className="text-nav" style={{ width: '80px', height: '80px', margin: '0 0px', color: '#4db5ff'  }} />
        </Link>

        <Stack direction="row" gap='40px' fontSize='30px' alignItems='flex-end'>
        <Link to="/" className="text-nav" style={{ textDecoration: 'none', color: '#fff', borderBottom: '3px solid #4db5ff'}}>
            Home
        </Link>
            <a href="#exercises" className="text-nav" style={{ textDecoration: 'none', color: '#fff'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}
