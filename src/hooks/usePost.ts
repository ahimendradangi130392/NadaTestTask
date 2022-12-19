import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'
import { determineInstance, IInstanceType } from 'utils/helper'

interface IParams {
  url: string
  payload?: any
  type?: IInstanceType
  token?: boolean
  adminToken?: boolean
  file?: boolean
}

const post = async ({
  url,
  payload,
  type,
  token = false,
  adminToken = false,
  file = false,
}: IParams) => {
  const instance = determineInstance(type)
  let headers = {}
  if (token) {
    const accessToken = localStorage.getItem('_accessToken')
    headers = { accesstoken: accessToken }
  }
  if (adminToken) {
    headers = { ...headers, 'admin-api-key': 'testApiKey' }
  }
  if (file) {
    headers = { ...headers, 'Content-Type': 'multipart/form-data' }
  }
  const { data }: any = await instance
    .post(url, payload, { headers, responseType: file ? 'blob' : 'json' })
    .then((res) => {
      return res
    })
    .catch((e: AxiosError) => {
      console.dir(e, { depth: null })
      throw e.response as AxiosResponse<any, any>
    })
  return data
}

const usePost = () => useMutation(post)

export default usePost
