import { url } from "inspector";

test("POST: /api/reserva = 200", async()=>{
    // realizar login
    const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "braga@email.com",
            senha: "123"}
        )
    });
    expect(res.status).toBe(200);
    const token = await res.json()

    const resp = await fetch("http://localhost:3000/api/reserva",{
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            pagamento: "Cartão",
            quartos: [
                {
                    id: 1,
                    fim: "2026/02/25",
                    inicio: "2026/02/24",
                }

            ]
        })

    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
})