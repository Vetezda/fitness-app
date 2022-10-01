import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Pagination  } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard';


const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
     
      if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        }
      else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)


  const paginate = ( e, value) => { 
    setCurrentPage(value) 
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };




  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px'} }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="20px" color="#fff">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
      >
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            sx={{button:{color: '#ffffff'}}}
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises;