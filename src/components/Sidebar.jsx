import styled from "styled-components";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <Container>
      <div className="Logocontent"></div>
    </Container>
  );
}
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky;
  .LogoContent{
    
  }
`;
