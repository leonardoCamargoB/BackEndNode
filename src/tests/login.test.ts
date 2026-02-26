const url_base:string = "http://localhost:3000/api/login";

test("POST / login = 200", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "braga@email.com",
            senha: "123"}
        )
    });
    expect(res.status).toBe(200);
    const json = await res.json()
    // console.log(json);
});



/*test("POST / create = 200", async () => {
    const res = await fetch(url_base + "/cadastro" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },        
        body: JSON.stringify({
            nome: "Juanito",
            email: "juanito@email.com",
            senha: "123",
            telefone: "157070-7070",
            cpf:"123456789-55"
        })
    });
    expect(res.status).toBe(200);
    const token = await res.json();
    // console.log(token)
}); */