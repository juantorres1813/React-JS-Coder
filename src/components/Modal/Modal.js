import './Modal.css'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({title, close, children}) => {
    return(
        <div className='overlay'>
            <div className="modal-custom">
                <h2>{title}</h2>
                <CloseIcon onClick={() => close(false)}/>
                {children}
            </div>
        </div>
    )
}

export default Modal