import './Modal.css'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="bg-modal">
            <div className="login-modal">
                <h1>Title</h1>
                <p>Conteúdo</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal
