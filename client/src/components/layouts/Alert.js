import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;
    return (
        alerts.length > 0 && alerts.map(alert => {
            return(
                <div key={alert.id} className={`alert alert-${alert.type}`}>
                    <i className="fas fa-info-circle" />{alert.message}
                </div>
            )
        })
    )
}

export default Alert
