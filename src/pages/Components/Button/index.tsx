import styles from "./Button.module.css"

export default function MainPage (props:any){
    
    console.log("props page: " + props.page)

    return(
        <div className={styles.buttoncontainer} onClick={props.onclick}>
            <a className={styles.button} href={String(props.page)}>{props.title}</a>
        </div>
    )
}
