import { url } from "inspector";

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
    const token = await res.json()

    //realizar reserva
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
    console.log(json)
})