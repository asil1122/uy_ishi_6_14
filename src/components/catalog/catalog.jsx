import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Catalog = (item) => {
    
  return (
    <Link style={{ textDecoration: 'none' , color: '#000'}} to={`/catalog/${item.name}`}>
      <Stack direction={'row'} width={'241px'} bgcolor={'#f6f6f6'} >
        <Stack alignItems={'center'} direction={'row'} gap={'16px'} px={'16px'} py={'14px'}>
            <img style={{ width: '96px' }} src={item.img} alt="img" />
            <Typography >{item.text}</Typography>
        </Stack>
      </Stack>
    </Link>
  )

}
