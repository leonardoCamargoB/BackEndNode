import tarefasRepository from "../repositories/tarefasRepository"
import loginRepository from "../repositories/loginRepository"

test("POST = /login =", async() => {
  const res = await fetch("http://localhost:3000/login/")
  expect(res.status).toBe(200)

  const body = await res.json()
  expect(Array.isArray(body)).toBe(true)
})
A