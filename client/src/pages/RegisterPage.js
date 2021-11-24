import React, { useState } from "react";
import '../css/signin.css';

async function registerUser(credentials) {

    console.log(credentials)
    return fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

function RegisterPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        console.log('asdadasdsa')
        e.preventDefault();
        const token = await registerUser({
            email,
            password
        });
        console.log(token)
    }

    return (
        <div>
            <body className="text-center form-signin">
                <main className="text-center form-signin">
                    <form onSubmit={handleSubmit}>
                        <a href="/"><img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /></a>
                        <h1 className="h3 mb-3 fw-normal">Please register</h1>

                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <input type="checkbox" value="remember-me" />
                            <label> Remember me </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </main>
            </body>
        </div>
    )
};

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default RegisterPage;

