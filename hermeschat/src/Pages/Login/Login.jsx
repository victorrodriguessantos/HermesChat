import Modal from '../../components/Register/Register'
import { useState } from 'react'
import styles from './Login.module.css'

function Login() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={styles.containerLogin}>
            <br />
            <h1>Hermes Chat</h1>
            <p>Faça o login para entrar na plataforma</p>
            <form>
                <label>Email de acesso:</label>
                <input type='text' placeholder='usuario@email.com' />

                <label>Senha:</label>
                <input type='password' placeholder='**********' />
                <button type="submit">Entrar no Sistema</button>
            </form>
            <div>
                <p>Não tem acesso? Faça o <button 
                        type="button"
                        className='btn-register' 
                        onClick={() => setOpen(true)}>Cadastro
                    </button>
                </p>
                <Modal isOpen={open} onClose={() => setOpen(false)} />
            </div>
        </div>
    )
}

export default Login
