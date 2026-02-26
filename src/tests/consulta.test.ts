
test("POST: /api/quartosDisponiveis = 200", async()=>{
    const resp = await fetch("http://localhost:3000/api/quartosDisponiveis",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            fim:"06-10-2026",
            inicio:"05-10-2026",   
            quantidade: 2
        })
    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    //console.log(json)
})