import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'
import { determineInstance, IInstanceType } from 'utils/helper'

interface IParams {
  url: string
  type?: IInstanceType
  token?: boolean
  adminToken?: boolean
  file?: boolean
}

const get = async ({ url, type, token = false, adminToken = false, file = false }: IParams) => {
  const instance = determineInstance(type)
  let headers = {}
  if (token) {
    const accessToken = localStorage.getItem('_accessToken')
    headers = { accesstoken: accessToken }
  }
  if (adminToken) {
    headers = { ...headers, 'admin-api-key': 'testApiKey' }
  }
  const { data } = await instance
    .get(url, { headers, responseType: file ? 'blob' : 'json' })
    .then((res) => {
      console.log(res, "hghghghghghg")
      return res
    })
    .catch(async (e: AxiosError) => {
      console.dir(e, { depth: null })
      // await getRefreshToken({ e, navigate, setAlert })
      throw e.response as AxiosResponse<any, any>
    })
  return data
}

const useGet = () => useMutation(get)

export default useGet
