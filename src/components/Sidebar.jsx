/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "../assets/react.svg";
import { V } from "../styles/Variables";
import { AiOutlineLeft } from "react-icons/ai";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <Container $isOpen={sidebarOpen}>
      <button className="Sidebarbuttom">
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="Imgcontent">
          <img src={logo} alt="" />
        </div>
        <h2>codewizardAI</h2>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky;
  padding-top: 20px;
  .Sidebarbuttom {
    position: absolute;
    top: ${V.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props)=>props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props)=>props.theme.bg3}, 0 0 7px ${(props)=>props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({$isOpen})=>($isOpen?`initial`:`rotate(180deg)`)};
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${V.lgSpacing};
    .Imgcontent {
      display: flex;
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ $isOpen }) => ($isOpen ? `scale(0.7)` : `scale(1.5)`)};
      img {
        max-width: 100%;
        height: auto;
      }
    }
    h2 {
      display: ${({ $isOpen }) => ($isOpen ? `block` : `none`)};
    }
  }
`;
