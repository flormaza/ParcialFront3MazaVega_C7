import { useState } from "react";
import Card from "./Card";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [clothesName, setclothesName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      firstName.startsWith(" ") ||
      firstName.length < 3 ||
      fruitName.length < 6
    ) {
      props.onError();
      console.log();
    } else {
      props.onSubmit(firstName, clothesName);
    }
  }

  return (
    <Card title="Ingresa una prenda">
      <form onSubmit={handleSubmit}>
        <p>Escribe tu nombre</p>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
        />
        <p>Escribe una prenda</p>
        <input
          onChange={(e) => setclothesName(e.target.value)}
          type="text"
          value={clothesName}
        />
        <button type="submit">Enviar</button>
      </form>
    </Card>
  );
}

export default Form;
