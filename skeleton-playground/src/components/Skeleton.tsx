import React from 'react'
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

const Base = styled.div<props>`
    ${({color}) => color && `background-color : ${color}`};
    ${({rounded}) => rounded && 'border-radius: 8px'};
`

const Content = styled.span``

const Skeleton: React.FC<Prop s> = () => {
    return(
        <Base>
            <Content></Content>
        </Base>
    )
}

export default Skeleton