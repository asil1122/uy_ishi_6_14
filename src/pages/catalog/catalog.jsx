import { Container, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetItems } from './service/query/useGetItems'
import { CatalogCard } from '../../components/catalog-card'


export const Catalog = () => {
  const { name } = useParams()
  const { data } = useGetItems(name)
  return (
    <Container maxWidth="xs" sx={{py: '64px'}}>
        <Stack >
          <Typography mb={'24px'} fontWeight={600} fontSize={'24px'} lineHeight={'150%'} color='#333'>Смартфоны и планшеты</Typography>
            <Grid2 container spacing={'48px'}>
                {data?.map((item) => (
                    <Grid2 key={item.id} size={3} >
                        <CatalogCard {...item} />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    </Container>
  )
}