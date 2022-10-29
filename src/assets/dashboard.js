import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    @supports (backdrop-filter: blur(1rem)) {
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);
      background-color: hsla(0, 0%, 100%, 0.1);
      box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    }
    border-radius: 10px;
  }
  h1 {
    letter-spacing: 2px;
    color: #ced4da;
  }
  button {
    background-color: #ba339a;
    transition: all 1s ease;
    color: #ced4da;
    :hover {
      background-color: #82246c;
    }
  }
`;

export default Wrapper;
