import { Progress } from "antd"
import { useState } from "react"
import Footer from './Components/Footer'

export default function Cont() {
    const [contPos, setContPos] = useState(0)
    const [contNeg, setContNeg] = useState(0)


    return (
        <>
        <div style={{ marginLeft: '190px', marginTop: '30px', background: 'white', width: '900px', height: '300px', display:'flex', justifyContent:'space-around' }}>
            <div>
                <h1>Positivo</h1>
                <Progress type="circle" percent={contPos} />
                <button onClick={() => {if(contPos >=0  && contPos < 100 ) {setContPos(contPos+1)} else ''}}>+</button>
                <button onClick={() => {if(contPos >0) {setContPos(contPos-1)} else ''}}>-</button>
            </div>
            <div>
                <h1>Negativo</h1>
                <h2>{contNeg}</h2>
                <button onClick={() => {if(contNeg <0) {setContNeg(contNeg+1)} else ''}}>+</button>
                <button onClick={() => {if(contNeg <=0 && contNeg > -100) {setContNeg(contNeg-1)} else ''}}>-</button>
            </div>
        </div>
            <Footer />
        </>

    )
}