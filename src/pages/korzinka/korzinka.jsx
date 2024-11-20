// import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteProduct, toggleAmount } from '../../redux/reducers/product-reducer'
// import formatter from '../../utils/formatter'

// export const Korzinka = () => {
//   const { product_list, totalPrice } = useSelector((state) => state.product)
//   const dispatch = useDispatch()

//   return (
//     <Container maxWidth={'xl'}>
//       <Stack>
//         <Typography mb={'24px'} fontWeight={500} fontSize={'24px'} lineHeight={'150%'} color='#333'>Корзина</Typography>
//         <Stack>
//           {product_list.map((item) => (
//             <Stack direction={'row'} width={'100%'} gap={'16px'}  key={item.id}>
//               <Box>
//                 <img style={{ width: '200px' }} src={item.img} alt="img" />
//               </Box>
//               <Stack>
//                 <Stack direction={'row'}>
//                   <Typography fontWeight={500} fontSize={'24px'} lineHeight={'150%'} color='#333'>{item.title}</Typography>
//                   <Typography fontWeight={600} textAlign={'end'} fontSize={'24px'} lineHeight={'150%'} color='#333'>{formatter(item.price)} Сум</Typography>
//                 </Stack>
//                 <Stack direction={'row'} alignItems={'center'}>
//                   <IconButton onClick={() => dispatch(toggleAmount({ id: item.id, type: 'increment' }))}>
//                     +
//                   </IconButton>
//                   <span>{item.user_count}</span>
//                   {item.user_count < 2 ? (
//                     <IconButton onClick={() => dispatch(deleteProduct({ id: item.id }))}>
//                       x
//                     </IconButton>
//                   ) : (
//                     <IconButton onClick={() => dispatch(toggleAmount({ id: item.id, type: 'decrement' }))}>
//                       -
//                     </IconButton>
//                   )}
//                 </Stack>
//               </Stack>
//             </Stack>
//           ))}
//           <strong>{formatter(totalPrice)}</strong>
//         </Stack>

//       </Stack>
//     </Container>
//   )
// }
import { Box, Container, IconButton, Stack, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleAmount } from '../../redux/reducers/product-reducer';
import formatter from '../../utils/formatter';

export const Korzinka = () => {
  const { product_list, totalPrice, count } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <Container maxWidth={'xl'} sx={{ padding: '24px 16px' }}>
      <Stack>
        <Typography
          mb={'32px'}
          fontWeight={600}
          fontSize={'28px'}
          lineHeight={'150%'}
          color='#333'
        >
          Корзина
        </Typography>
        <Stack direction={'row'} gap={'28px'} justifyContent={'end'}>
          <Stack gap={'30px'}>
            {product_list.map((item) => (
              <Stack
                key={item.id}
                direction={'row'}
                spacing={3}
                width={'1000px'}
                sx={{
                  padding: '16px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: '120px',
                    height: '120px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>

                <Stack flexGrow={1} spacing={1}>
                  <Typography fontWeight={500} fontSize={'20px'} color='#333'>
                    {item.title}
                  </Typography>
                  <Typography fontWeight={600} fontSize={'18px'} color='#666'>
                    {formatter(item.price)} Сум
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    onClick={() => dispatch(toggleAmount({ id: item.id, type: 'increment' }))}
                    sx={{
                      color: '#333',
                      border: '1px solid #ccc',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                    }}
                  >
                    +
                  </IconButton>
                  <Typography fontWeight={500} fontSize={'18px'}>
                    {item.user_count}
                  </Typography>
                  {item.user_count < 2 ? (
                    <IconButton sx={{
                      color:  '#ccc',
                      border: '1px solid #ccc',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                    }} onClick={() => dispatch(deleteProduct({ id: item.id }))}>
                      x
                    </IconButton>
                  ) : (
                    <IconButton sx={{
                      color: '#333',
                      border: '1px solid #ccc',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                    }} onClick={() => dispatch(toggleAmount({ id: item.id, type: 'decrement' }))}>
                      -
                    </IconButton>
                  )}
                  <IconButton
                    onClick={() => dispatch(deleteProduct({ id: item.id }))}
                    sx={{
                      color: 'red',
                      border: '1px solid #f00',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                    }}
                  >
                    ×
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Stack width={'330px'}>
            <Stack bgcolor={'#F7F7F7'} p={'24px'}>
              <Typography mb={'16px'} fontWeight={400} fontSize={'24px'} lineHeight={'150%'} color='#333'>В корзине</Typography>
              <Typography mb={'16px'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>Товаров:{count}</Typography>
              <Typography mb={'12px'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='error'>Введите промокод</Typography>
              <Typography fontWeight={600} fontSize={'24px'} lineHeight={'150%'} color='#333'>{formatter(totalPrice)} Сум</Typography>
            </Stack>
            <Button sx={{ py: '15px' }} variant='contained'>Оформить заказ</Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
