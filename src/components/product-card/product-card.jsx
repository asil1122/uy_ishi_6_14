import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Box, Button, IconButton, Container, Stack, Typography } from "@mui/material";
import { useGetProduct } from "../../pages/home/service/query/useGetProduct";
import { RightIcon } from "../../assets/icons/right-icon";
import { LeftIcon } from "../../assets/icons/left-icon";
import { Korzinka } from "../../assets/icons/korzinka";

export const ProductCard = ({ path, name }) => {
  SwiperCore.use([Navigation]);

  const { data } = useGetProduct(path);

  return (
    <>
      <Container maxWidth="xs">
        <Stack direction={"row"} justifyContent={"space-between"} mb={"24px"}>
          <Typography
            variant="h5"
            fontWeight={"600"}
            fontSize={"24px"}
            lineHeight={"150%"}
            color="#333"
          >
            {name}
          </Typography>
          <Stack direction={"row"} gap={"16px"}>
            <IconButton className="arrow-left arrow">
              <LeftIcon />
            </IconButton>
            <IconButton className="arrow-right arrow">
              <RightIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={5}
          spaceBetween={"20px"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Stack gap={'20px'} direction={'row'}>
                <Stack width={'241px'}>
                  <Box sx={{ textAlign: 'center' }}>
                    <img style={{ width: '165px' }} src={item.img} alt="img" />
                  </Box>
                  <Stack>
                    <Typography fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.title}</Typography>
                    <Typography mt={'6px'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.rame}</Typography>
                    <Stack mt={'24px'} direction={'row'} justifyContent={'space-between'}>
                      <Typography fontWeight={600} fontSize={'18px'} color='#333'>{item.price}Сум</Typography>
                      <Button variant='contained'>
                        <Korzinka />
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};


