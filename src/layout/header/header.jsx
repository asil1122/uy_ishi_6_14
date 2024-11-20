import { Badge, Button, Container, Drawer, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { PhoneIcon } from '../../assets/icons/phone-icon'
import Logo from '../../assets/logo.svg'
import { theme } from '../../config/mui-config'
import { colors } from '../../config/colors'
import { Profile } from '../../assets/icons/profile'
import { HeaderIcon } from '../../assets/icons/header-icon'
import { Form } from '../../components/form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Login } from '../../components/login/login'
import { Register } from '../../components/register'

export const Header = () => {
  const { count } = useSelector((state) => state.product)
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState("signIn");
  return (
    <Container maxWidth="xs" sx={{ pb: '18px' }}>
      <Drawer
        PaperProps={{
          sx: {
            height: "782px",
          },
        }}
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        {view === "signIn" ? (
          <Login
            onClose={() => setOpen(false)}
            onClick={() => setView("register")}
          />
        ) : (
          <Register
            onClose={() => setOpen(false)}
            onClick={() => setView("signIn")}
          />
        )}
      </Drawer>

      <Stack>
        <Stack alignItems={"center"} pt={'8px'} pb={'8px'} justifyContent={'end'} gap={'24px'} direction={"row"}>
          <Typography>Доставка и оплата</Typography>
          <Typography>Пункты выдачи</Typography>
          <Typography>Поддержка</Typography>
          <Stack alignItems={'center'} gap={'16px'} direction={"row"}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <Typography>+998 90 253 77 53</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt={'18px'} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Stack>
          <img src={Logo} alt="logo" />
        </Stack>
        <Stack direction={"row"} gap={'32px'}>
          <Button startIcon={<HeaderIcon />} variant='contained'>Каталог</Button>
          <Form />
        </Stack>
        <Stack direction={"row"} gap={'32px'} alignItems={"center"}>
          <Stack >
            <IconButton onClick={() => setOpen(true)}>
              <Profile />
            </IconButton>  
            <Typography>Войти</Typography>
          </Stack>
          <Stack>
            <IconButton>
              <Profile />
            </IconButton>
            <Typography>Избранное</Typography>
          </Stack>
          <Stack>
            <Link to={'/korzinka'}>
              <IconButton aria-label='cart'>
                <Badge badgeContent={count ? count : "0"} color='error'>
                  <Profile />
                </Badge>
              </IconButton>
              <Typography>Корзина</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
