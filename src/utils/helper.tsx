import axiosInstance from 'services/axiosinstance'

export type IInstanceType = 'cloud-wallet' | undefined

export const determineInstance = (type: IInstanceType) => {
  switch (type) {
    case 'cloud-wallet':
      return axiosInstance
    default:
      return axiosInstance
  }
}

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as any)
    reader.readAsDataURL(blob)
  })
}

