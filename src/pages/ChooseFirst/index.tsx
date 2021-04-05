
import style from "./ChooseFirst.module.css"
import morango from "../../../static/morango.png"
import chocolate from "../../../static/chocolate.png"

export default function ChooseFirst({history}) {
  
  return (
    <>
      <main className={style.container}>
        <div className={style.titlecontainer}>
            <p className={style.title}>Escolha a cobertura</p>
        </div>
        <div className={style.box}>
            <img src={chocolate} alt="chocolate" width={200} height={200}/>
        </div>
         <span className={style.pictitle}>Chocolate</span>
        <div className={style.box}>
           <img src={morango} alt="chocolate" width={170} height={200}/>
        </div>
         <span className={style.pictitle}>Morango</span>
      </main>
    </>
  );
}
