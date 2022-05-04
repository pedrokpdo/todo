import { useState } from "react"

export default function ({moedaA, moedaB}:any) {
    const [moedaAValue, setmoedaAValue] = useState(0)
    const [moedaBValue, setmoedaBValue] = useState('')

    const de_para = `${moedaA}_${moedaB}`
    const url = `https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=79417eb8d60d71151757`

    return (
        <div className="conversor">
            <h2>{moedaA} para {moedaB}</h2>
            <input type="number" onChange={(e) => {
                const inputValue = Number(e.target.value)
                setmoedaAValue(inputValue)
                }} ></input>
            <input type="button" value='converter' onClick={() => {
                fetch(url)
                .then(res => {
                    return res.json()
                })   
                .then(json => {
                    let cotacao = json[de_para].val;
                    let moedaB_valor = (moedaAValue * cotacao).toFixed(2)
                    setmoedaBValue(moedaB_valor)
                })             
            }}></input>
            <h2>{moedaBValue}</h2>
        </div>
    )
}