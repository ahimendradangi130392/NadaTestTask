import axios, { AxiosInstance } from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLoader from 'context/loader'

const REACT_APP_TV_MAZE = process.env.REACT_APP_TV_MAZE || ''


interface ChildrenProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element
}

const instance = axios.create({
  baseURL: REACT_APP_TV_MAZE,
})

const interceptorHandling = (axiosInstance: AxiosInstance, navigate: any, setLoader: any) => {
  const resInterceptor = (response: any) => {
    return response
  }

  const errInterceptor = async (error: any) => {
    return Promise.reject(error)
  }

  const interceptor = axiosInstance.interceptors.response.use(resInterceptor, errInterceptor)

  return () => axiosInstance.interceptors.response.eject(interceptor)
}
export const AxiosInterceptor = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  const { setLoader } = useLoader()
  useEffect(() => interceptorHandling(instance, navigate, setLoader), [])
  return children
}

export default instance
