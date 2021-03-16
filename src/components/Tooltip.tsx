import React, {ReactElement, ReactNode} from 'react'
import styled from 'styled-components'

interface TooltipProps {
    children: ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({children}): ReactElement => (
    <ToolTip>
        <ToolTipText>{children}</ToolTipText>
    </ToolTip>
)


const ToolTipText = styled.span`
    visibility: hidden;
    width: fit-content;
    background: #1da890;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 5px 5px;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    top: -70px;
    left: 58%;
    margin-left: -60px;
`
const ToolTip = styled.div`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &:hover {
      span {
        visibility: visible;
      }
    }
`
