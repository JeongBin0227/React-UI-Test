interface Props {
    count: number;
    page: number;
    onPageChange: (page:number)=>void
    disabled?: boolean;
    siblingCount?: number;
    boundaryCount?: number;
}
