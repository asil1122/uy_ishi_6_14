import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Korzinka } from '../../assets/icons/korzinka'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/reducers/product-reducer'

export const CatalogCard = (item) => {
  const dispatch = useDispatch()

  return (
    <>
      <Stack width={'241px'}>
        <Link to={`/detail/${item.id}`}>
          <Box sx={{ textAlign: 'center' }}>
            <img style={{ width: '165px' }} src={item.img} alt="img" />
          </Box>
        </Link>
        <Stack>
          <Typography fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.title}</Typography>
          <Typography mt={'6px'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.rame}</Typography>
          <Stack mt={'24px'} direction={'row'} justifyContent={'space-between'}>
            <Typography fontWeight={600} fontSize={'18px'} color='#333'>{item.price}Сум</Typography>
            <Button onClick={() => dispatch(addCart(item))} variant='contained'>
              <Korzinka />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
