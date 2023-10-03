import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NavBar() {
  return (
    <nav>
      <PathList>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <PathName $isActive={isActive}>세뱃돈 계산기</PathName>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/deposit">
            {({ isActive }) => (
              <PathName $isActive={isActive}>떼인 돈 계산기</PathName>
            )}
          </NavLink>
        </li>
      </PathList>
    </nav>
  );
}

const PathList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const PathName = styled.span<{ $isActive: boolean }>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.red10 : theme.color.slate12};
`;
