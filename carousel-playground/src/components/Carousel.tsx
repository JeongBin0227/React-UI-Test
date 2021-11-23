import React from 'react'
import styled from '@emotion/styled/macro'
import {css} from '@emotion/react'
import {RiArrowDropLeftLine, RiArrowDropRightLine} from 'react-icons/ri'


const Base = styled.div``

const Container = styled.div`
    position: relative;
`

const ArrowButton = styled.button<{pos:'left' | 'right'}>`
    position: absolute;
    top:50%;
    z-index:1;
    padding:8px 12px;
    font-size:48px;
    font-weight:bold;
    background-color: transparent;
    color:#fff;
    border:none;
    margin:0;
    cursor: pointer;
    ${ ( {pos} ) => pos === 'left' ? css`left:0` : css`right:0`}
`;

const CarouselList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    overflow: hidden;
`

const CarouselListItem = styled.li<{activeIndex:number}>`
    width: 100%;
    flex: 1 0 100%;
    transform: translate(-${({activeIndex}) => activeIndex *100}%);
    transition: 200ms ease;
    > img{
        width: 100%;
        height: fit-content;
    }
`

const NavButton = styled.button<{ isActive?: boolean}>`
    width: 4px;
    height: 4px;
    background-color: #000;
    opacity: ${({isActive})=>isActive?0.3:0.1};
`

const NavItem = styled.li`
    display: inline-block;
`

const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    ${NavItem} + ${NavItem} {
        margin-left:4px;
    }
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const handleNext = () => {
        setActiveIndex(prev=>(prev+1)%banners.length)
    }

    const handlePrev = () => {
        setActiveIndex(prev=>(prev-1)%banners.length)
            <ArrowButton onClick={handlePrev}>
                <RiArrowDropLeftLine/>
            </ArrowButton>
            <ArrowButton onClick={handleNext}>
                <RiArrowDropRightLine/>
            </ArrowButton>
                    <NavItem key={idx}>
                        <NavButton isActive={activeIndex === idx}/>
                    </NavItem>
