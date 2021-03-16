import React, {ReactElement} from 'react'
import {render} from 'react-dom'
import {BarChart} from './components/BarChart/BarChart'
import styled from 'styled-components'
import {data} from './data'

const StyledApp = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  
  h1 {
    margin-bottom: 6rem;
  }
`

export const App: React.FC = (): ReactElement => {

    return (
        <StyledApp>
            <h1>Ten largest countries in the world by population</h1>
            <BarChart data={data}/>
        </StyledApp>
    )
}

render(<App/>, document.getElementById('root'))
