import { useState } from "react"
function Seacrh (props) {
    const [search, setSearch] = useState("") // merender ulang apa yang perlu di update
    const onChangeSerch = () => {
        // setSearch(event.target.value) //digunakan untuk mengubah variabel search dengan useState
        // props.onChangeSerch(event.target.value)
        props.onChangeSerch(search)
    }
    const serchKydwon = e => {
        if (e.key === "Enter"){
            onChangeSerch();
        }
    }
    return (
        <div>
            {/* untuk onKeyDown untuk melakyukan apabila dia mengkelik sesuati di kybort */}
            <div>Cari Articel : <input onChange={e=>setSearch(e.target.value)} onKeyDown={serchKydwon} type="text" />
            <button onClick={onChangeSerch}>Cari</button>
            </div>
            <hr />
            <small>Ditemukan {props.totalPost} data dengan pencarian kata {search}</small>
        </div>
    )
}
export default Seacrh