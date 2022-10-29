import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 859px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: green;
  }

  .input {
    padding: 8px 24px;
    width: 224px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: green;
  }

  .input::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: green;
  }

  .button {
    width: 112px;
    height: 50px;
    background-color: green;
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: white;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  height: 50px;
  background: ${(props) => (props.checked ? "green" : "white")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "#line-through" : "")};
    color: ${(props) => (props.checked ? "white" : "green")};
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }
  button:active {
    opacity: 0.6;
  }
  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "white" : "green")};
  }
`;
