const url_base:string = "http://localhost:3000/api/login";

test("POST /", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        email: "teste@email.com",
        password: "123456"})
    });
    expect(res.status).toBe(200);
    // const body = await res.json();
    // expect(body.message).toBe("Login recebido com sucesso");

});