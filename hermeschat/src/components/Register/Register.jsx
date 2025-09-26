import styles from './Register.module.css';

function Register({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.bgModal}>
            <div className={styles.loginModal}>
                <h1>Cadastro de Usuário</h1>
                <p>Se cadastre para conseguir utilizar a plataforma</p>
                <form>
                    <label>Nome:</label>
                    <input type="text" placeholder="Primeiro e segundo nome" required />

                    <label>Email de acesso:</label>
                    <input type="email" placeholder="usuario@email.com" required />

                    <label>Senha:</label>
                    <input type="password" placeholder="**********" required />

                    <button type="submit">Cadastrar</button>
                </form>
                <button onClick={onClose} className={styles.closeButton}>X</button>
            </div>
        </div>
    );
}

export default Register;
