import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.svg";
import { FacebokIcon } from "../../assets/icons/facebok-icon";

export const Footer = () => {
  return (
    <>
      <Box bgcolor={"#f5f5f6"}>
        <Container maxWidth="lg">
          <Stack direction={"row"} py={"40px"} justifyContent={"space-between"}>
            <Box>
              <Box mb={"16px"}>
                <img src={Logo} alt="" />
              </Box>
              <Box mb={"12px"}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "21px",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "2px",
                  }}
                  href="tel:+99 893 374-66-44"
                >
                  +99 893 374-66-44
                </a>
                <p
                  style={{
                    margin: "0",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  справочная служба
                </p>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    textDecoration: "none",
                    fontSize: "21px",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "2px",
                  }}
                  href="tel:+99 893 374-66-44"
                >
                  +99 890 253-77-53
                </a>
                <p
                  style={{
                    margin: "0",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  интернет-магазин
                </p>
              </Box>
              <Box>
                <Typography
                  mb={"8px"}
                  fontWeight={"600"}
                  fontSize={"14px"}
                  color="#333"
                >
                  Оставайтесь на связи
                </Typography>
                <Stack direction={"row"} gap={"16px"}>
                  <IconButton sx={{ padding: "0" }}>
                    <FacebokIcon />
                  </IconButton>
                  <IconButton sx={{ padding: "0" }}>
                    <FacebokIcon />
                  </IconButton>
                  <IconButton sx={{ padding: "0" }}>
                    <FacebokIcon />
                  </IconButton>
                  <IconButton sx={{ padding: "0" }}>
                    <FacebokIcon />
                  </IconButton>
                  <IconButton sx={{ padding: "0" }}>
                    <FacebokIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
            <Stack>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Условия обмена и возврата
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Каталог
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  О компании
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Контакты
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Доставка
                </a>
              </Box>
              <Box>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Оплата
                </a>
              </Box>
            </Stack>
            <Stack>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Клиентам
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Личный кабинет
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Блог
                </a>
              </Box>
              <Box>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Обратная связь
                </a>
              </Box>
            </Stack>
            <Stack>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Информация
                </a>
              </Box>
              <Box mb={"16px"}>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Пользовательское соглашение
                </a>
              </Box>
              <Box>
                <a
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "143%",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Политика конфиденциальности и оферта
                </a>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
