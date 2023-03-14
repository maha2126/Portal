import allStyles from './Modal.module.css'
import ReactDOM  from 'react-dom'

const Modal = props => {
    if(props.show)
        return ReactDOM.createPortal( <div>
            <div className={allStyles.overlay}></div>

            <div className={allStyles.modal}>

                <div className={allStyles.title}>
                    {props.title}
                </div>

                <div className={allStyles.content}>
                    {props.children}
                </div>

                <button onClick={props.onClose} 
                        className={allStyles.close}>
                    Cancel
                </button>

                <button onClick={props.onSuccess}
                        className={allStyles.ok}>
                    OK
                </button>
                
            </div>
        </div>, document.getElementById("modal-root"))
    else{
        return null
    }
}
export default Modal