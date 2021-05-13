import styles from "./DeliveryInfo.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

import Button from "../../Components/Button";
import Input from "../../Components/Input";

import Link from "next/link";

export default function OrderAgain() {
  const [shared, setShared, ,] = useContext(AppContext);
  const [inputName, setInputName] = useState("");
  const [inputReference, setInputReference] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  let value = Number(shared.items.length) * 6 + 1;

  const handleClick = () => {
    const messageBody = {
      Itens: shared.items.map((item, index: number) => {
        const stringItem = JSON.stringify(item);

        return " item" + ` ${index + 1}: ` + stringItem;
      }),
      Informações_da_entrega: {
        Nome: inputName,
        Endereço: inputAddress,
        Ponto_de_referencia: inputReference,
      },
      Valor: value + " R$",
    };

    const phone = "+5562998149637";
    let messageContent = JSON.stringify(messageBody);

    messageContent = messageContent.replace(/\\/g, "");
    messageContent = messageContent.replace(/_/g, " ");
    messageContent = messageContent.replace(/{/g, "");
    messageContent = messageContent.replace(/}/g, "");
    messageContent = messageContent.replace(/]/g, "");
    messageContent = messageContent.replace(/\[/g, "");
    messageContent = messageContent.replace(/"/g, "");
    messageContent = messageContent.replace(/,/g, ", ");

    let apiURL = `https://api.whatsapp.com/send?phone=${phone}&text=${
      "Pedido feito pelo site: \n" + messageContent
    }`;
    window.open(apiURL);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Informarções da Entrega</p>

      <Input
        name="name"
        settername={setInputName}
        placeholder="Nome Completo"
      />
      <Input
        name="address"
        setteraddress={setInputAddress}
        placeholder="Endereço (Rua, Número, Bairro)"
      />
      <Input
        name="reference"
        setterreference={setInputReference}
        placeholder="Ponto de Referência"
      />
      <p className={styles.info}>
        O pagamento é feito na entrega e pode ser por dinheiro ou transferência
        Pix.
      </p>

      <p className={styles.info}>
        <strong>
          Você percisa permitir abrir o WhatsApp quando aparecer na sua tela
          para concluir o pedido
        </strong>
      </p>

      <p className={styles.info}>
        Total: <strong>{value} R$ (Com entrega inclusa) :) ;)</strong>{" "}
      </p>
      <Button
        title="Finalizar Pedido"
        page="SucessOrder"
        handleClick={handleClick}
      />
    </div>
  );
}
