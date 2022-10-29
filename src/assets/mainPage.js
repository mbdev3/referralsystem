import styled from "styled-components";
import bg from "./images/mainCover.jpg";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
