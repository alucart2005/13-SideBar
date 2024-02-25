import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routers/routes";
import styled, { ThemeProvider } from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";
import React, { useState } from "react";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("Light");
  const themeStyle = theme === "Light" ? Light : Dark;
  // const ChangeTheme = () => {
  //   setTheme((theme) => (theme === "Light" ? "Dark" : "Light"));
  // };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : " "}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.6s;
  &.active {
    grid-template-columns: 300px auto;
  }
`;

export default App;
