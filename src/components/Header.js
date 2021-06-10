import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(4px + 2vmin);
  color: white;
  border-bottom: 1px solid rgb(61, 61, 61);
`

function Header() {
  return (
    <StyledHeader>
      <h1>NASA Photo of The Day<span role="img" aria-label='go!'> 🚀</span></h1>
    </StyledHeader>
  );
}

export default Header;




