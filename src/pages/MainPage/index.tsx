import styles from "./MainPage.module.css"
import Button from "../Components/Button"
import guaranafoto from "../../../static/nana.png"


export default function MainPage (){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>GuaranáHouse</h1>
            <main className={styles.card}>
                <img className={styles.guarana} src={guaranafoto} alt="guaraná"/>
            </main>
            <>
                 <span className={styles.price}>6.00 R$ + 1 R$(Entrega)</span>
            </>
            <Button title="Iniciar Pedido" page="ChooseFirst"/>
        </div>
    )
}
