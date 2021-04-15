
import {useContext, useEffect, useState} from "react"
import {AppContext} from "../../context/AppContext"

import style from "./ChooseSecond.module.css"
import flocos from "../../../static/flocos.png"
import amendoin from "../../../static/amendoin.png"
import Link from "next/link"
import Cart from "../../Components/Cart"

export default function ChooseSecond(props) {

  const cobertura = props.cobertura1 

  const [shared, setShared, cover, setCover] = useContext(AppContext)
  

  function handleSelection (cobertura2:string) {

    const cobertura = {
      "cobertura1": cover,
      "cobertura2": cobertura2
    }

    setShared({
      items: [...shared.items, cobertura] 
    }
    )

  }

  useEffect(()=>{
    console.log(shared)
  },[shared])
  

  return (
    <> 
    <Cart/>
    <main className={style.container}>
        <Link href="OrderAgain">
          <div className={style.box} onClick={()=> handleSelection("flocos")}>
              <img src={flocos} alt="flocos" width={200} height={200}/>
          </div>
        </Link>
        <span className={style.pictitle} >Flocos</span>
        <Link href="OrderAgain">
          <div className={style.box} onClick={()=> handleSelection("amendoin")}>
           <img src={amendoin} alt="amendoin" width={170} height={200}/>
          </div>
        </Link>
        <span className={style.pictitle} >Amendoin</span>
      </main> 
    </>
  );
}


