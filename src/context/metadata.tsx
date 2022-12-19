import { createContext, ReactNode, useContext, useState, ReactElement } from 'react'

export interface IMetadata {

}

export interface showDetail {
  image?: any
  name?: string
  _embedded?: any
  network?: any
  schedule?: any
  status?: string
  genres?: any
  summary?: any
  rating?: any
}


export interface IMetadataProps {
  schedule: []
  setSchedule: (data: []) => void
  showDetail: showDetail
  setShowDetail: (data: showDetail) => void
}

const contextDefaultValues: IMetadataProps = {
  schedule: [],
  setSchedule: (data: []) => data,
  showDetail: {},
  setShowDetail: (data: showDetail) => data,
}
const MetadataContext = createContext<IMetadataProps>(contextDefaultValues)

export const MetadataProvider = ({ children }: { children: ReactNode }) => {
  const [schedule, setSchedule] = useState(contextDefaultValues.schedule)
  const [showDetail, setShowDetail] = useState(contextDefaultValues.showDetail)
  return (
    <MetadataContext.Provider
      value={{
        schedule,
        setSchedule,
        showDetail,
        setShowDetail,
      }}
    >
      {children}
    </MetadataContext.Provider>
  )
}

export default () => useContext(MetadataContext)
