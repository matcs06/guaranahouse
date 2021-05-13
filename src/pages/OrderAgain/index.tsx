import { useContext, useEffect, useState } from "react";

import styles from "./OrderAgain.module.css";
import Button from "../../Components/Button";
import { AppContext } from "../../context/AppContext";
import Cart from "../../Components/Cart";

export default function OrderAgain() {
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNohecked] = useState(false);
  const [page, setPage] = useState("");
  const [shared, setShared, ,] = useContext(AppContext);

  const handleYesBoxChange = () => {
    setYesChecked(!yesChecked);
    setNohecked(yesChecked);
  };

  const handleNoBoxChange = () => {
    setNohecked(!noChecked);
    setYesChecked(noChecked);
  };

  useEffect(() => {
    if (yesChecked) {
      setPage("ChooseFirst");
    } else {
      if (noChecked) {
        setPage("DeliveryInfo");
      } else {
        setPage("/OrderAgain");
      }
    }
  }, [yesChecked, noChecked]);

  return (
    <div className={styles.container}>
      <Cart />
      <p className={styles.title}>Vai querer pedir mais um?</p>
      <div className={styles.boxcontainer}>
        <input
          checked={yesChecked}
          onChange={handleYesBoxChange}
          type="checkbox"
        />
        <span className={styles.optiontitle}>Sim</span>
      </div>
      <div className={styles.boxcontainer}>
        <input
          checked={noChecked}
          onChange={handleNoBoxChange}
          type="checkbox"
        />
        <span className={styles.optiontitle}>Não</span>
      </div>
      <Button title="Continuar" page={page} />
    </div>
  );
}
