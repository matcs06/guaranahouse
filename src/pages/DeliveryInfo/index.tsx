import styles from "./DeliveryInfo.module.css"
import Button from "../Components/Button"
import Input from "../Components/Input"

export default function OrderAgain() {
  
  return (
      <div className={styles.container}>
         <p className={styles.title}>Informarções da Entrega</p>

        <Input placeholder="Nome Completo" />
        <Input placeholder="Número (Whats App)"/>
        <Input placeholder="Endereço (Rua, Número, Bairro)" />

        <p className={styles.info}>O pagamento é feito na entrega e pode ser por dinheiro ou transferência Pix.</p> 

        <p className={styles.info}>Esse é o endereço caso você queira pegar no local:  <strong>Rua Barão, Número 77, Bairro Centro.</strong></p>  

        <p className={styles.info}>Total: <strong>13 R$ (Com entrega inclusa) :) ;)</strong>  </p>  
        <Button title="Finalizar Pedido" page="SucessOrder"/>    

      </div>
  )
}
