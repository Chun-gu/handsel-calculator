import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import NavBar from './NavBar';

export default function Layout() {
  return (
    <Container>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 640px;
  height: 100vh;
  padding: 10px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 10px;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 10px;
`;
