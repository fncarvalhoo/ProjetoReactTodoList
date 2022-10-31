import styled from "styled-components";

export const AreaHeader = styled.div`
  height: 60px;
  background-color: #9a85d6;
  color: white;
`;

export const Container = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;

  .logo {
    flex: 1;
    margin-top: 4px;
    font-size: 30px;
  }

  nav {
    ul {
      display: flex;
    }

    li{
        list-style: none;
        margin-left: 60px;
        margin-top: 0px;
        a{
            text-decoration: none;
            color: white;

            &:hover{
                color: red;
            }
        }
    }
  }
`;
