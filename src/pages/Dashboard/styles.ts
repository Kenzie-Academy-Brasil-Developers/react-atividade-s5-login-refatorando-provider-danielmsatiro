import styled from "styled-components";

export const Container = styled.div`
  background: gray;
  box-shadow: 2px 2px 5px 2px black;
  border-radius: 10px;
  padding: 40px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  input,
  button {
    border-radius: 10px;
    padding: 5px;
  }
  button {
    background: green;
    color: white;
  }
`;
