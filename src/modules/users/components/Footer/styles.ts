import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  position: relative;
  max-width: 1120px;
  margin: 450px auto 0;

  /** Mobile */
  @media screen and (max-width: 764px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: none;
    }
  }

  img {
    position: absolute;
    bottom: 0px;
    left: -400px;
    z-index: -1;
    width: 1913px;
  }

  span {
    color: #f4ede8;
    font-size: 16px;
    margin-bottom: 100px;

    a {
      color: #a3a3a3;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
