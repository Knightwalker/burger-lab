import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    console.log(data);
  }

  return (
    <MainLayout>
      <div className="RegisterPage">

        <h1>Create Your Account</h1>

        <form onSubmit={fOnSubmit}>
          <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
          <button type="submit">Submit</button>
        </form>

      </div>
    </MainLayout>
  );
}

export default RegisterPage;