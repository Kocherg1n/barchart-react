import React, {ReactElement, ReactNode} from 'react'
import styled from 'styled-components'

interface ChartProps {
    height?: number
    children: ReactNode
}

export const Chart: React.FC<ChartProps> = ({children, height}): ReactElement => (
    <ChartContainer height={height}>{children}</ChartContainer>
)


const ChartContainer = styled.div<ChartProps>`
  height: ${p => p.height ? p.height + 'px' : '500px'};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 5rem 2rem 0 2rem;
  max-width: 80vw;
  overflow-x: scroll;
`
