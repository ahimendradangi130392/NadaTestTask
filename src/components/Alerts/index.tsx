import { AlertStyle } from 'styles/components/Alerts'
import { ReactElement, FC } from 'react'
import useAlerts from 'context/alerts'
import { Alert } from 'antd'

interface IAlert {
  description: string
  type: 'success' | 'error' | 'warning'
  disabled?: boolean
  message?: string
  icon?: ReactElement
  variant?: 'success' | 'error' | 'warning'
}

const Alerts: FC<IAlert> = ({ description, message, type, ...rest }: IAlert) => {
  const { alert, setAlert } = useAlerts()

  const onClose = () => {
    setAlert({ ...alert, show: false })
  }

  return (
    <AlertStyle {...rest}>
      <div className="wrapper">
        <Alert
          message={message}
          description={description}
          closable
          type={type}
          onClose={onClose}
          data-autoid="appAlert"
        />
      </div>
    </AlertStyle>
  )
}

export default Alerts
