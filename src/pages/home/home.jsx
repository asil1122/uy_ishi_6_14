import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Stack } from '@mui/material'
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useGetCatalog } from './service/query/useGetCatalog';
import { Catalog } from '../../components/catalog';
import { Banner } from '../../components/banner/banner';

export const Home = () => {
  const { data } = useGetCatalog()
  return (
    <Box>
      <Banner />
      <Container maxWidth="xs">
        <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={"20px"}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Catalog {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </Box>
  )
}
