import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetProductId = (id) => {
  return (
    useQuery({
      queryKey:['product',id],
      queryFn:()=> request.get(`/all/${id}`).then((res)=> res.data)
    })
  )
}
