import { json } from "stream/consumers";

const url_login:string = "http://localhost:3000/api/login";

test("POST /", async () => {
    const res = await fetch(url_login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        email: "jujudopix@example.com",
        senha: "123"})
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    console.log(json)
    // const body = await res.json();
    // expect(body.message).toBe("Login recebido com sucesso");
    
});