import './Login.css'


function Login() {
    
    return (
        <div className='container-login'>
            <h1>Hermes Chat</h1>
            <p>Faça o login para entrar na plataforma</p>
                <form>
                    <label>Usuario de acesso:</label>
                    <input type='text' placeholder='usuario@email.com'></input>

                    <label>Senha:</label>
                    <input type='password' placeholder='**********'></input>
                    <button>Entrar no Sistema</button>
                </form>
                <div>
                    <p>Não tem acesso? Faça o <span><a href='#'>CADASTRO</a></span></p>
                </div>
        </div>
    )
}

export default Login