import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Stack, Typography } from '@mui/material'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import { useGetCatalog } from './service/query/useGetCatalog';
import { Catalog } from '../../components/catalog';
import { Banner } from '../../components/banner/banner';
import { ProductCard } from '../../components/product-card';
import './home.css'
import akisya from '../../assets/aksiya-img.png'
import { useGetBrand } from './service/query/useGetBrand';
import { Products } from '../../components/products';


export const Home = () => {
  const { data } = useGetCatalog()
  const { data: brand } = useGetBrand()
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
      <Container maxWidth="xs" sx={{ pt: "16px", pb: "48px" ,position:"relative"}} >
        <ProductCard path={'phones'} name={'Смартфоны и планшеты'} />
        {/* <Stack >
          <Typography mb={'24px'} variant='h5'>Смартфоны и планшеты</Typography>
          <Stack  direction={"row"} gap={"24px"}>
          <Swiper modules={[Pagination,Scrollbar, Navigation ]}
            slidesPerView={5}
            navigation={true}
            >
            {phone?.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
        </Stack> */}
      </Container>
    <Box sx={{bgcolor: '#00cbfe', pt: '16px', pb: '30px'}}>
      <Container maxWidth="xs">
          <Stack>
            <Typography mb={'24px'} variant='h5'>Акции</Typography>
            <Stack direction={'row'} gap={'22px'}>
              <img src={akisya} alt="img" />
              <img src={akisya} alt="img" />
              <img src={akisya} alt="img" />
            </Stack>
          </Stack>
      </Container>
    </Box>
    <Container maxWidth="xs" sx={{pt: '60px'}}>
        <Stack direction={'row'} gap={'34px'} justifyContent={'center'} alignItems={'center'}>
          <Products path={'phones'} name={'Смартфоны и планшеты'}/>
          <Products path={'notebook'} name={'Ноутбуки, планшеты и компьютеры'} />
          <Products path={'phones'} name={'Смартфоны и планшеты'}/>
        </Stack>
    </Container>
    <Container>
      <Box pt={'48px'} pb={'48px'}>
        <ProductCard path={'phones'} name={'Смартфоны и планшеты'} />
      </Box>
      <Box pt={'48px'} pb={'48px'}>
        <ProductCard path={'notebook'} name={'Ноутбуки, планшеты и компьютеры'}/>
      </Box>
    </Container>
    <Container maxWidth="xs" sx={{pb: '114px'}}>
      <Stack>
        <Typography mb={'24px'} fontWeight={'600'} fontSize={'24px'} color='#333'>Популярные бренды</Typography>
        <Stack direction={'row'}  flexWrap={'wrap'} gap={'16px'}>
          {brand?.map((item)=> (
            <Stack key={item.id}>
              <img style={{width: '160px', height: '90px'}} src={item.img} alt="img" />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Container>
    </Box>
  )
}

