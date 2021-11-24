import React, { useState } from "react";
import { Redirect } from 'react-router'
import '../css/signin.css';
// import useToken from './useToken'
import * as useToken from './useToken'


async function loginUser(credentials) {

    console.log(credentials)

    return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function LoginPage() {

    const [token, setToken] = useState(useToken.getToken)
    console.log('o token no inicio é ' + token)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        console.log('entrou no handle')
        e.preventDefault()
        const id = await loginUser({
            email,
            password
        });
        setToken(id);
        console.log('o id é ' + id)
        console.log(token)
    }


    if (token !== undefined) {

        console.log("Token de autenticação é:" + token)
        return <Redirect to="/home" />
    }
    if (token === undefined) {

        console.log("Sem token de autenticação")
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
                                    onChange={e => setEmail(e.target.value)}
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

    }



};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default LoginPage;

