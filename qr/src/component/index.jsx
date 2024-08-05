import { useEffect, useState } from "react"
import QrCode from "react-qr-code"
import "./style.css"


export default function QrCodeGenerator (){

    const [qr, setQr]=useState('')
    const [ input, setInput]= useState('')

    useEffect(() => {
      
        setQr(input)
      
    }, [input])
    

   

    return (

        <>
        <h1> QrCode Generator</h1>
        <div className="cont">
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter Something" name="qr-code" />
        <button disabled={input && input.trim() !== '' ? false : true} > Generate </button>
        </div>
        <div className="qr">
            <QrCode
            id="qr-code-value"
            value={qr}
            size={400}
            />
        </div>
        </>
    )

}