import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.close}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop close={props.backdropOnClick} /> ,portalElement )}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
        </>
    )
};

export default Modal;