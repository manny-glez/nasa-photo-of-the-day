import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
.button button {
    background-color:#222222;
    color: white;
    padding: 9px 100px 9px 100px;
    border-radius: 30px;
    font-size: 24px;
    background-color: 222222;
    font-family: monospace;
  }
  .button {
    margin-bottom: 100px;
  }
`

export default function Button({}) {
    return (
      <StyledButton>
        <div className="button">
          <button>Click me!</button>
        </div>
      </StyledButton>
    )
}