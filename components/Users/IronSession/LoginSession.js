import React, { useState } from "react";
import useUser from "./lib/useUser";
import Form from "./Form";
import fetchJson from "./lib/fetchJson";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/users/me",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    const data = fetchJson(`https://nordredo-backend.herokuapp.com/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    try {
      await mutateUser(data)
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
      <div>
        <div className="login">
            <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
        <style jsx>
                {`
                .login {
                max-width: 21rem;
                margin: 0 auto;
                padding: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                }
            `}
        </style>
      </div>
  );
};

export default Login;