import styles from "./Button.module.css"
import Link from "next/link"

export default function MainPage (props:any){
    
    return(
        <div className={styles.buttoncontainer} onClick={props.onclick}>
            <Link href={props.page}>
               <button className={styles.button} type="submit" onClick={props.handleClick}>{props.title}</button>
            </Link>
        </div>
    )
}
