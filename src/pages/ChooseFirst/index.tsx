
import {useContext, useEffect, useState} from "react"
import {AppContext} from "../../context/AppContext"

import style from "./ChooseFirst.module.css"

import morango from "../../../static/morango.png"
import chocolate from "../../../static/chocolate.png"
import Link from "next/link"
import Cart from "../../Components/Cart"

export default function ChooseFirst() {
    
  const [shared, setShared, cover, setCover ] = useContext(AppContext)
 
  function handleSelection (cobertura1:string) {
    setCover(cobertura1)
  }
 
  return (
    <>
      <Cart/>
      <main className={style.container}>
        <div className={style.titlecontainer}>
            <p className={style.title}>Escolha a cobertura</p>
        </div>
        <Link href="ChooseSecond">
          <div className={style.box} onClick={()=> handleSelection("chocolate")}>
              <img src={chocolate} alt="chocolate" width={200} height={200} />
          </div>
        </Link>
         <span className={style.pictitle}>Chocolate</span>

        <Link href="ChooseSecond"> 
          <div className={style.box}  onClick={()=> handleSelection("morango")}>
            <img src={morango} alt="chocolate" width={170} height={200}/>
          </div>
        </Link> 
         <span className={style.pictitle}>Morango</span>    
      </main>
    </>
  );
}
