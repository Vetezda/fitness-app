
import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  //if (!exerciseVideos.length) return <Loader />;
  console.log(exerciseVideos)
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">

      <Typography fontWeight={700} color="#fff" mb="33px" sx={{ fontSize: { lg: '44px', xs: '25px' } }}>
            Watch <span style={{ color: '#4db5ff', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack justifyContent="flex-start"  flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} >

        {exerciseVideos?.slice(0, 6).map((item, index) => (
         
          <a
            key={index}
            className="exercise-video a-fondo"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer" 

          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}

      </Stack>

    </Box>
  );
};

export default ExerciseVideos;