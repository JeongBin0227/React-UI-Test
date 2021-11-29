interface Props {
    count: number;
    page: number;
    onPageChange: (page:number)=>void
    disabled?: boolean;
    siblingCount?: number;
    boundaryCount?: number;
}

const usePagination = ({count, page, onPageChange, disavled, siblingCount=1, boundaryCount=1}:Props) => {
    const range = (start:number, end: number) => {
        const length = end - start +1;

        return Array.from({length}).map(((_,index) => index+start))
    }

    const startPage = 1;
    const endPage = count;

    const startPages = range(startPage, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count-boundaryCount+1, boundaryCount+1),count);

    const siblingStart = Math.max(
        Math.min(
            page+1 - siblingCount,
            count - boundaryCount - siblingCount * 2 -1
        ),
        boundaryCount + 2 
    )
    const siblingEnd = Math.min(
        Math.max(
            page + 1 + siblingCount,
            boundaryCount + siblingCount * 2 + 2,
        ),
        endPages.length > 0 ? endPages[0] - 2 : endPage - 1 
    )
