import {useContext} from "react"
import {AppContext} from "../../context/AppContext"

import styles from "./SucessOrder.module.css"

import Check from "../../../static/Vector.png"
import Button from "../../Components/Button"


export default function SucessOrder() {

    const [shared,  , ,  ] = useContext(AppContext)

    let value = (Number(shared.items.length) * 6)  + 1;

    return(
        <div className={styles.container}>
            <div className={styles.checkcontainer}>
                <img className={styles.check} src={Check} alt="check" width={180} height={150}/>
            </div>

            <div className={styles.textcontainer}>
                <p className={styles.text}>Seu pedido foi realizado com sucesso e será entregue dentro de 15 minutos no endereço: Rua tal, número tal, bairro tal.</p>
                <p className={styles.text}>Total do pedido: <strong>{value}</strong> R$</p>  
                <p className={styles.text}>Muito Obrigado!!</p>
            </div>
            <Button title="Voltar ao Início" page="MainPage"/>
        </div>
    )
}