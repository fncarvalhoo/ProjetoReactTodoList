import { Container, Flex, Item, Spacer } from "./styled";
import React from "react";

export function Formulario() {
  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />
      <Flex direction="row" justify>
        <input placeholder="Digite sua tarefa" className="input"></input>
        <button className="button">Adicionar</button>
      </Flex>
      <Spacer margin="16px" />
      <ul>
        <Item checked={true}>
          <p>Fazer Bolo</p>
          <Flex direction="row">
            <button>
              <i class="bx bx-check"></i>
            </button>
            <button>
              <i class="bx bxs-trash-alt"></i>
            </button>
          </Flex>
        </Item>
        <Spacer margin="16px" />
        <Item>
          <p>Fazer Bolo</p>
          <Flex direction="row">
            <button>
              <i class="bx bx-check"></i>
            </button>
            <button>
              <i class="bx bxs-trash-alt"></i>
            </button>
          </Flex>
        </Item>
        <Spacer margin="16px" />
      </ul>
    </Container>
  );
}
