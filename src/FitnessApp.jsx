import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExercisesDetail from './pages/ExercisesDetail'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

export const FitnessApp = () => {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExercisesDetail />} />
        </Routes>
        <Footer/>

      </Box>
      </BrowserRouter>

  )
}
