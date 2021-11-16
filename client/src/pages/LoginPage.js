import React from "react";
import '../css/signin.css';
import useToken from './client/useToken'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function LoginPage() {

    const { token, setToken } = useToken();

    if (!token) {
        // return <Login setToken={setToken} />
        console.log("usuário não cadastrado")
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div>
            <body class="text-center form-signin">
                <main class="text-center form-signin">
                    <form onSubmit={handleSubmit}>
                        <a href="/"><img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /></a>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={e => setUserName(e.target.value)}
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="checkbox mb-3">
                            <input type="checkbox" value="remember-me" />
                            <label> Remember me </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </main>
            </body>
        </div>
    )
};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default LoginPage;

