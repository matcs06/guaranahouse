import styles from "./Input.module.css";

export default function Input(props: any) {
  const setterName = props.settername;
  const setterReference = props.setterreference;
  const setterAddress = props.setteraddress;

  const handleSet = (e) => {
    if (props.name == "name") {
      setterName(e.target.value);
    }

    if (props.name == "reference") {
      setterReference(e.target.value);
    }

    if (props.name == "address") {
      setterAddress(e.target.value);
    }
  };

  return (
    <div className={styles.inputcontainer}>
      <input
        onChange={handleSet}
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
