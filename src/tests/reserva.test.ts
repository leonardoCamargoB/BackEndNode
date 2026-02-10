const url_reserva:string = "http://localhost:3000/api/reserva";

test("POST /", async () => {
    const res = await fetch(url_reserva, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        pedido_id: 1,
        quarto_id: 1,
        adicional_id: 1,
        fim: "2024-12-31",
        inicio: "2024-01-01"
    })
    });
    expect(res.status).toBe(200);
    const json = await res.json();
    console.log(json)
});
