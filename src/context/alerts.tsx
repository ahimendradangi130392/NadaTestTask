import { createContext, ReactNode, useContext, useState } from 'react'

export interface IAlert {
  show: boolean
  message: string
  type: 'success' | 'error' | 'warning'
}

export interface IAlertProps {
  alert: IAlert
  setAlert: (data: IAlert) => void
}

const contextDefaultValues: IAlertProps = {
  alert: {
    show: false,
    message: '',
    type: 'success',
  },
  setAlert: (data: IAlert) => data,
}

const AlertContext = createContext<IAlertProps>(contextDefaultValues)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState(contextDefaultValues.alert)

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default () => useContext(AlertContext)
