test("POST: /api/quartosDisponiveis = 200", async () => {
    const response = await fetch("http://localhost:3000/api/quartosDisponiveis", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            dataInicio: "2025-10-04",
            dataFim: "2025-09-29",
            quantidade: 1
        })
    });
    expect(response.status).toBe(200);
    const json = await response.json();
    console.log(json);
});