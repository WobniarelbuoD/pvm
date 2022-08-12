import { useState } from 'react'
import numberToWords from './Numbers-to-words';

const PvM = () => {

    const [sum, sumUp] = useState(0);
    const [proc, procUp] = useState(21);
    let sumStr = sum.toFixed(2)
    let pvmStr = ((sum / 100) * proc).toFixed(2)
    let pvmsumStr = ((((sum / 100) * proc) + sum)).toFixed(2)


    return (
        <div id="back">
            <h1>Money Burning Aparat "Blyat"</h1>
            <div id="contain">
                <div><p>PVM tarifas</p>
                    <select className="content" onChange={e => procUp(+e.target.value)}>
                        <option value="21">21%</option>
                        <option value="9">9%</option>
                        <option value="5">5%</option>
                    </select></div>

                <div><p>Suma (be PVM)</p><input step="0.01" value={sumStr} onChange={e => sumUp(+e.target.value)} className="content"></input></div>

                <div><p>PVM suma</p><span className="content">{pvmStr}</span></div>

                <div><p>Bendra suma (su PVM)</p><input onChange={e => sumUp((+e.target.value / (100 + proc)) * 100)} value={pvmsumStr} className="content"></input></div>

            </div>
            <div id="kebab">{numberToWords.toWords(sumStr)}</div>
        </div>
    )
}
export default PvM