const url_pedido:string = "http://localhost:3000/api/pedido";

test("POST /", async () => {
    const res = await fetch(url_pedido, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        usuario_id: 1,
        cliente_id: 1,
        pagamento: "Cartão"
    })
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    console.log(json)

});
