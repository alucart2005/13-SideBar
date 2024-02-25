/* eslint-disable react/prop-types */
import styled from "styled-components";
import logo from "../assets/react.svg";
import { V } from "../styles/Variables";
import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbFileReport } from "react-icons/tb";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { theme, setTheme } = useContext(ThemeContext);

  const ChangeTheme = () => {
    setTheme((theme) => (theme === "Light" ? "Dark" : "Light"));
  };

  return (
    <Container $isOpen={sidebarOpen} $themeUse={theme}>
      <button className="Sidebarbuttom" onClick={ModSidebarOpen}>
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="Imgcontent">
          <img src={logo} alt="" />
        </div>
        <h2>codewizardAI</h2>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? `active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {SecundaryLinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? `active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Modo Oscuro</span>}
        <div className="ToggleContent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="theme-switcher"
                    onClick={ChangeTheme}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#region Data Links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <IoMdStats />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <MdOutlineProductionQuantityLimits />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <AiOutlineApartment />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <TbFileReport />,
    to: "/reportes",
  },
];
const SecundaryLinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];

//#endregion

//#region STYLED COMPONENTS
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
    border: none;
    color: inherit;
    font-family: inherit;
    outline: none;
    padding: 0px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ $isOpen }) => ($isOpen ? `initial` : `rotate(180deg)`)};
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
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15px;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${V.smSpacing}-2p) 0;
      .Linkicon {
        display: flex;
        padding: ${V.smSpacing} ${V.mdSpacing};
        svg {
          font-size: 25px;
        }
      }
      &.active {
        svg,
        span {
          color: ${(props) => props.theme.bg4};
          font-weight: 600;
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({$isOpen})=>($isOpen?`1`:`0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow:hidden
    }
    .ToggleContent {
      margin: ${({$isOpen}) => ($isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-switcher {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌚";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({$themeUse})=>($themeUse==="Light"?V.lightcheckbox:V.checkbox)};
              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round{
                border-radius:34px;
                &::before{
                  border-radius:50%
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${V.lgSpacing} 0;
`;

//#endregion
