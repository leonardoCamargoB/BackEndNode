// test("POST /api/login", async () => {
//   const res = await fetch("http://localhost:3000/api/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: "teste@email.com",
//       senha: "123456",
//     }),
//   }); 
//   expect(res.status).toBe(200);

//   const body = await res.json();
//   expect(body.message).toBe("Login recebido com sucesso");
// });