import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#567c93, #081f3e);
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100vw;

  margin-top: 100px;
  flex-direction: column;
  display: flex;
  align-items: center;
  color: white;
`;

export const ContainerDiv = styled.div`
  height: 80%;
  width: 80%;
  border: 5px solid;
  align-items: center;
  justify-content: center;

  display: flex;
  border-color: white;
`;

export const Row = styled.div`
  justify-content: space-between;
  display: flex;

  button {
    margin-right: 70px;
    margin-left: 70px;
  }
`;
