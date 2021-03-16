import React, {ReactNode} from 'react'
import styled, {keyframes} from 'styled-components'

interface BarProps {
    height: string
    width?: string
    children?: ReactNode
}

export const Bar:React.FC<BarProps> = ({width, height, children}) => (
    <BarColumn height={height} width={width}>{children}</BarColumn>
)

const fade = (h: string) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${h};
  }
`
const BarColumn = styled.div<BarProps>`
  position: relative;
  height: ${p => p.height};
  width: ${p => p.width ? p.width : '40px'};
  min-width: ${p => p.width ? p.width : '40px'};
  margin: 0 5px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  transition: 0.3s;
  animation: ${p => fade(p.height)} 0.7s linear;
  background-image: linear-gradient(
    to bottom,
    #add9c0,
    #1da890
  );
  &:hover {
    opacity: 0.8;
  }
`
