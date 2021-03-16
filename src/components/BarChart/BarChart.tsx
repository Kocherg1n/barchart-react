import React, {ReactElement} from 'react'
import {getPercentageHeight, getNumberWithSpaces} from '../../helpers'
import {Bar} from './Bar'
import {Chart} from './Chart'
import {Tooltip} from '../Tooltip'

interface BarItemInterface {
    country: string
    population: number
}

interface BarChartProps {
    data: BarItemInterface[]
}

export const BarChart: React.FC<BarChartProps> = ({data}): ReactElement => {
    const maxHeight = Math.max(...data.map((el: BarItemInterface) => el.population))

    return (
        <Chart height={500}>
            {data && data.map((el: BarItemInterface) => (
                <React.Fragment key={el.country}>
                    <Bar key={el.country}
                         height={getPercentageHeight(maxHeight, el.population)}>
                        <Tooltip>
                            <div>{el.country}</div>
                            <div>{getNumberWithSpaces(el.population)}</div>
                        </Tooltip>
                    </Bar>
                </React.Fragment>))}
        </Chart>
    )
}
