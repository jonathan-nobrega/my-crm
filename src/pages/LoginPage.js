import React from "react";
import '../css/signin.css';


function LoginPage() {
    return (
        <div>
            {/* <body class="text-center form-signin"> */}
                <main class="text-center form-signin">
                    <form>
                        <a href="/"><img class="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /></a>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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
            {/* </body> */}
        </div>
    )
};

export default LoginPage;