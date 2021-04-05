
import style from "./ChooseSecond.module.css"
import flocos from "../../../static/flocos.png"
import amendoin from "../../../static/amendoin.png"

export default function ChooseSecond({history}) {
  
  return (
    <>
      <main className={style.container}>
        <div className={style.box}>
            <img src={flocos} alt="flocos" width={200} height={200}/>
        </div>
        <span className={style.pictitle} >Flocos</span>
        <div className={style.box}>
           <img src={amendoin} alt="amendoin" width={170} height={200}/>
        </div>
        <span className={style.pictitle} >Amendoin</span>
      </main>
    </>
  );
}
