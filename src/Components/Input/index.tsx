import styles from "./Input.module.css"

export default function Input (props:any){

    return(
       <div className={styles.inputcontainer}>
            <input className={styles.input} type="text" placeholder={props.placeholder}/>    
       </div>  
    )
}
