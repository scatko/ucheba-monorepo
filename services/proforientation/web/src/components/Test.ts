import React, { useState } from "react"
import { login } from "./services/auth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function signin() {
    await login(email, password)
    setEmail("")
    setPassword("")
  }
  return (
    <form method="post" onSubmit={signin}>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  )
}
export default Login
