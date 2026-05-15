import './Modal.css';

function Modal({ title, cancelModal, confirmModal }) {
    return (
    <div>
        <div className="modal">
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
                <button onClick={cancelModal} 
                className="btn cancel__btn">
                    Cancel
                </button>
                <button onClick={confirmModal} 
                className="btn">
                    Confirm
                </button>
            </div>
        </div>
        <div className="backdrop" />
    </div>
    )
}

export default Modal