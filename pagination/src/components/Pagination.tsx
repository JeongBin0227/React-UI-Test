import React from 'react'
import styeld from '@emotion/styled/macro'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { AiOutLineEllipsis } from 'react-icons/ai'
import usePagination from '../hooks/usePagination'

interface Props {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
    disabled?: boolean;
    siblingCount?: number;
    boundaryCount?: number;
}

const Pagination: React.FC<Props> = ({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount,
    boundaryCount}) => {
        const {}  = usePagination({
            count,
            page,
            onPageChange,
            disabled,
            siblingCount,
            boundaryCount})
        return(
            <nav>
                <li>
                    {
                        items.map(({key, disabled, selected, onClick, item})=>(
                            <li key={key}>
                                <button disabled={disabled} onClick={onClick}>{item}</button>
                            </li>
                        ))
                    }
                </li>
            </nav>
        )
}

export default Pagination