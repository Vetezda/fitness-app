import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
      const fetchBodyPartsData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts( [ 'all', ...bodyPartsData] );
      }

      fetchBodyPartsData();
    }, []);

    const handleSearch = async(e) => {
      if (search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        
        const searchedExercises = exercisesData.filter(
          exercise => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );
        setExercises(''); // clear the previous search
        setExercises(searchedExercises);
      }

    }

  return (
    <Stack backgroundColor="#08081a" alignItems="center" mt="150px" justifyContent="center" p="20px">

      <Typography fontWeight={700} mb="50px" color="#fff"  textAlign="center"
                  sx={{ fontSize: { lg: '44px', xs: '30px' } }}
      >
        Awesome Exercises You <br/> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField 
            sx= {{
              width: { lg: '800px', xs: '350px' },
              input: {  fontWeight: '700', border: 'none', borderRadius: '4px'},
              backgroundColor: '#FFFF',
              borderRadius: '40px',
            }}
            placeholder="Search Exercises"
            height="76px"
            value={search}
            onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
            type="text"
          />

        <Button className="search-btn"
          sx= {{
            bgcolor: '#4db5ff',
            color: '#FFFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          <HorizontalScrollbar 
          data={bodyParts}
          bodyPart={bodyPart}
          bodyParts={bodyParts}
          setBodyPart={setBodyPart}
          />
      </Box>


    </Stack>
  )
}
 export default SearchExercises;