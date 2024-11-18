import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProduct } from "../../pages/home/service/query/useGetProduct";
export const Products = ({ path, name }) => {
  const { data } = useGetProduct(path);
  return (
    <>
      <Stack maxWidth={'413px'}>
        <Box mb={"24px"} width={"100%"} borderBottom={"2px solid #ededed"}>
          <Typography fontWeight={400} fontSize={"24px"} lineHeight={"150%"} color="#333"  mb={"24px"}>
            {name}
          </Typography>
        </Box>
        <Stack >
          {data?.slice(0, 3).map((item) => (
            <Stack key={item.id} mb={"24px"} direction={"row"} alignItems={"center"} gap={"16px"} >
                <img width={"140px"} src={item.img} alt="#" />
              <Box>
                <Typography fontWeight={400} fontSize={"18px"} lineHeight={"144%"} color="#333" > {item.title}</Typography>
                <Typography fontWeight={400} fontSize={"18px"} lineHeight={"144%"} color="#333" mb={"12px"}> {item.ram} </Typography>
                <Typography fontWeight={600} lineHeight={"156%"} fontSize={"18px"} color="#000"> {item.price} Сум </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};