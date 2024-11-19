import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetItems = (name = '') => {
  return (
    useQuery({
      queryKey:['items',name],
      queryFn:()=> request.get(`/${name}`).then((res)=> res.data)
    })
  )
}
