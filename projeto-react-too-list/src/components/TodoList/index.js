import { useState } from "react";
import { Container, Flex, Item, Spacer } from "./styled";


export function Formulario() {
  const [tarefa, setTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  
  const addTarefa = () => {
    if (!tarefa) return alert("Preencha o campo");
    const newTarefa = {
      id: Math.random(),
      tarefa: tarefa,
      checked: false,
    };

    setListTarefa([...listTarefa, newTarefa]);
    setTarefa("");
  };

  const removeTarefa = (id) => {
    const newList = listTarefa.filter((tarefa) => tarefa.id !== id);
    setListTarefa(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTarefa.findIndex((tarefa) => tarefa.id === id);
    const newList = listTarefa;
    newList[index].checked = !checked;
    setListTarefa([...newList]);
  };

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />
      <Flex direction="row" justify>
        <input
          value={tarefa}
          placeholder="Digite sua tarefa"
          className="input"
          onChange={(e) => setTarefa(e.target.value)}
        ></input>
        <button className="button" onClick={addTarefa}>
          Adicionar
        </button>
      </Flex>
      <Spacer margin="16px" />
      <ul>
        {listTarefa.map((tarefa) => (
          <>
            <Item Item checked={tarefa.checked} key={tarefa.id}>
              <p>{tarefa.tarefa}</p>
              <Flex direction="row">
                <button
                  onClick={() => toggleChecked(tarefa.id, tarefa.checked)}
                >
                  <i class="bx bx-check "></i>
                </button>
                <button onClick={() => removeTarefa(tarefa.id)}>
                  <i class="bx bx-trash "></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}
