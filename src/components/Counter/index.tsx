import React, { useState } from "react";
import { Container, NumberText, NumberArea, ButtonArea } from "./styles";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrement = () => {
    setNumber(number + 1);
  };
  const onDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <Container>
      <NumberArea>
        <NumberText green={number >= 0}>{number}</NumberText>
      </NumberArea>

      <ButtonArea>
        <button onClick={onIncrement}>Incrementar</button>
        <button onClick={onDecrement}>Decrementar</button>
      </ButtonArea>
    </Container>
  );
};

export default Counter;
