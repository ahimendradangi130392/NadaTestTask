import styled from 'styled-components'

export const AlertStyle = styled.div`
  width: 100%;
  position: fixed;
  min-height: 100vh;
  z-index: 999;

  background-color: #00000038;

  > .wrapper {
    position: absolute;
    max-width: 531px;
    width: 100%;
    top: 65px;
    left: 14px;
  }
`
