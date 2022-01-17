import React,{useMemo} from 'react'
import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/react'

interface Props {
    width?: number
    height?: number
    circle?: boolean
    rounded?: boolean
    count?: number
    unit?: string
    animation?: boolean
    color?: string
    style?: React.CSSProperties
}

const pulseAnimation = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`
const Base = styled.div<Props>`
    ${({color}) => color && `background-color : ${color}`};
    ${({rounded}) => rounded && 'border-radius: 8px'};
    ${({circle}) => circle && 'border--radius: 50%'};
    ${({width, height}) => (width||height) && 'display: block'};
    ${({animation}) => animation && pulseAnimation};
    width: ${({width, unit}) => width && unit && `${width}${unit}`};
    height: ${({height, unit}) => height && unit && `${height}${unit}`};
`

const Content = styled.span``

const Skeleton: React.FC<Props> = ({
    width,
    height,
    circle,
    rounded,
    count,
    unit,
    animation,
    color,
    style
}) => {

    const content = useMemo(() => [...Array({length:count})].map(()=>'-').join(''), [count])
    
    return(
        <Base
            width = {width}
            height = {height} 
            circle = {circle}
            rounded = {rounded}
            count = {count}
            unit = {unit}
            animation = {animation}
            color = {color}
        >
            <Content>{content}</Content>
        </Base>
    )
}

export default Skeleton