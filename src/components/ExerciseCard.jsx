import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

        <Stack direction="row">
            <Button
                sx= {{
                    ml: '21px',
                    color: '#fff',
                    backgroundColor: '#4db5ff',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx= {{
                    ml: '21px',
                    color: '#fff',
                    backgroundColor: '#1f1f38',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize',
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
            <Typography                 
                ml="21px" 
                color="#fff" fontWeight="bold" 
                mt="10px"
                pb="10px"
                textTransform="capitalize"
                fontSize="24px"
            >
                {exercise.name}
            </Typography>

    </Link>
  )
}

export default ExerciseCard;
