import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductId } from './service/query/useGetProductId';
import { Box, Container, Stack, Typography } from '@mui/material';
import { StarsIcon } from '../../assets/icons/stars-icon';

export const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductId(id)
console.log(data);

  

  return (
    <Container maxWidth="xl">
      <Stack>
        { isLoading ? (
          <div>Loading...</div>
        ): (
          <Stack>
            <Box borderBottom={'2px solid #ededed'} pb={'18px'}>
              <Stack mb={'18px'} direction={'row'} gap={'10px'}>
                <Typography fontWeight={600} fontSize={'24px'} lineHeight={'150%'} color='#333'>{data.title}</Typography>
                <Typography fontWeight={600} fontSize={'24px'} lineHeight={'150%'} color='#333'>{data.rame}</Typography>
              </Stack>
              <StarsIcon/>
            </Box>
            <Stack pt={'24px'}>
              <Stack direction={'row'} gap={'50px'}>
                <Box>
                    <img style={{ width: '435px' }} src={data.img} alt="img" />    
                </Box>
                <Box>
                    <Typography mb={'16px'} fontWeight={500} fontSize={'16px'} lineHeight={'125%'} color='#333'>Объем памяти</Typography>
                    {data?.details?.display ?  <Typography mb={'12px'} fontWeight={400} fontSize={'16px'} lineHeight={'125%'} color='#333'><span style={{color:'#999'}}>экран:</span>{data?.details?.display}</Typography> : ''}
                    <Typography fontWeight={500} fontSize={'18px'} lineHeight={'111%'} mb={'16px'} color='#333'>Характеристики</Typography>
                    {data?.details?.display ?  <Typography mb={'12px'} fontWeight={400} fontSize={'16px'} lineHeight={'125%'} color='#333'><span style={{color:'#999'}}>экран:</span>{data?.details?.display}</Typography> : ''}
                    {data?.details?.display ?  <Typography mb={'12px'} fontWeight={400} fontSize={'16px'} lineHeight={'125%'} color='#333'><span style={{color:'#999'}}>экран:</span>{data?.details?.display}</Typography> : ''}
                </Box>
              </Stack>
              <Stack>



              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  )
}
