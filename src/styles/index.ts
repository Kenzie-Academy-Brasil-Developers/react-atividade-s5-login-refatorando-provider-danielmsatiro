import styled from "styled-components";
import bg from "../assets/img/bg.jpg";

export const Container = styled.div`
  background-image: url(${bg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 100vh;
`;
