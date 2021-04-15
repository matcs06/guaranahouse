import styles from "./Button.module.css"
import Link from "next/link"

export default function MainPage (props:any){
    
    return(
        <div className={styles.buttoncontainer} onClick={props.onclick}>
            <Link href={props.page}>
               <a className={styles.button} href="">{props.title}</a>
            </Link>
        </div>
    )
}
