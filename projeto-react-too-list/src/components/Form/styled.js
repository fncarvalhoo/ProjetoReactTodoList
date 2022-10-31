import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 859px;
  background: #2f3139;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    margin-top: 20px;
    font-size: 60px;
    line-height: 72px;
    color: #9a85d6;
  }

  .input {
    padding: 8px 24px;
    width: 224px;
    height: 50px;
    background: #e0e0e0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #9a85d6;
  }

  .input::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #9a85d6;
  }

  .button {
    width: 112px;
    height: 50px;
    background-color: #9a85d6;
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: white;
    cursor: pointer;
  }

  .button:hover {
    opacity: 0.8;
  }
  .button:active {
    opacity: 0.6;
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
  min-height: 50px;
  background: ${(props) => (props.checked ? "#9a85d6" : "#E0e0e0")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "#line-through" : "")};
    color: ${(props) => (props.checked ? "white" : "#9a85d6")};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
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
    color: ${(props) => (props.checked ? "white" : "#9a85d6")};
  }
`;
