import { json } from "stream/consumers";

const url_base:string = "http://localhost:3000/api/login/cadastro";

test("POST /", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        nome: "jujudopix",
        cpf: "12345678900",
        telefone: "15-99887766",    
        email: "jujudopix@example.com",
        senha: "123",
        cargo_id: 3
    })
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    console.log(json)
});
