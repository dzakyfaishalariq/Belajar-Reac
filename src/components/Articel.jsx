import { useContext } from "react";
import { GlobalContext } from "../context";
const ArticelStatus = ({isNow}) => { //componen 1
    return isNow && <span> --Baru </span>;
}
const ArticelStatus2 = () => { // componen 2
    return <span>--Baru</span>
}
// todo : komponen untuk memasikan ke dalam App.jsx
function Articel(props){
    const user = useContext(GlobalContext);

    return (
        <>
            <h1>{props.title}</h1>
            <small>{props.date} tags : {props.tags.join(", ")}</small>
            <p>artikel - {props.isNow ? "Baru":"lama"}</p>
            <ArticelStatus isNow={props.isNow}></ArticelStatus>
            {props.isNow && <ArticelStatus2></ArticelStatus2>}
            <div>
                <small>-ditulis oleh {user.username}</small>
            </div>
        </>
    )
    // return (
    //     <>
    //         <h1>{props.name}</h1>
    //         <h2>{props.umur}</h2>
    //         <div>
    //             <ul>
    //             {props.titles.map(title => {
    //                 return (
    //                     <li>{title}</li>
    //                 )
    //             })}
    //             </ul>
    //         </div>
    //     </>
    // )
    // const name = "Dzaky Faishalariq"
    // const titles = [
    //     "Tutorial React",
    //     "Tutorial Python",
    //     "Tutorial Golang"
    // ]
    // let no = 0
    // return (
    //     <>
    //         <div>{name}</div>
    //         <div>{titles.map(title=>{ // looping
    //             return (
    //                 <>
    //                     <div>{no++}</div>
    //                     <div>{title}</div>
    //                 </>
    //             )
    //         })}</div>
    //     </>
    // )
}
export default Articel;
