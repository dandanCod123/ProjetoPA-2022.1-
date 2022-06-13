import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
  height: 100vh;
  background: linear-gradient(#567c93, #081f3e);
  flex: 1;
  display: flex;
  justify-content: center;
`


export const Column = styled.div`
  width: 80%;
  flex-direction: column;
  display: flex;
  align-items: center;
  color: white;
`;

export const ContainerDiv = styled.div`
margin-top: 60px;
font-size: 22px;
font-weight: bold;
font-family: 'Inter';

height: 60%;
width: 80%;
border: 5px solid;
border-color: white;
overflow-y: scroll;
`