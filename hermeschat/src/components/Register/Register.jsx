import './Register.css'

function Register({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="bg-modal">
            <div className="login-modal">
                <h1>Cadastro de Usuario</h1>
                <p>Se cadastre para conseguir utilizar a plataforma</p>
                <form>
                <label>Nome:</label>
                <input type='text' placeholder='Primeiro e segundo nome' required/>

                <label>Email de acesso:</label>
                <input type='text' placeholder='usuario@email.com' required/>

                <label>Senha:</label>
                <input type='password' placeholder='**********' required/>

                <button>Cadastrar</button>
            </form>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Register
