import styles from './Repositories.module.css';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import i_prev from '../../../images/i_prev.svg';
import i_next from '../../../images/i_next.svg';

const Repositories = ({ repositories }) => {

    let itemsPerPage = 4;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [count, setCount] = useState('');

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repositories.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repositories.length / itemsPerPage));
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        let num = event.selected + 1;
        let newCount = '';
        const newOffset = (event.selected * itemsPerPage) % repositories.length;
        setItemOffset(newOffset);

        itemsPerPage * (num) > repositories.length ?
            newCount = (`${itemsPerPage * (num) - 3} - ${repositories.length} of ${repositories.length} items`) :
            newCount = (`${itemsPerPage * (num) - 3} - ${itemsPerPage * (num)} of ${repositories.length} items`);
        setCount(newCount);
    }

    const mapRepositories = currentItems.map(rep => {
        console.log(rep)
        return (
            <div className={styles.rep_list} key={rep.id}>
                <a target='_blank' href={rep.html_url}>{rep.name}</a>
                <p>{rep.description}</p>
            </div>
        )
    })

    return (

        <div className={styles.repositories}>
            <h3 className={styles.rep_h}>Repositories ({repositories.length})</h3>
            {mapRepositories}
            <div className={styles.paginator_count}>
                <div className={styles.count}>{count}</div>
                <ReactPaginate
                    breakLabel='...'
                    nextLabel={<img className={styles.errow} src={i_next} alt='arrow_next' />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={<img className={styles.errow} src={i_prev} alt='arrow_prev' />}
                    renderOnZeroPageCount={null}
                    className={styles.paginator}
                    activeLinkClassName={styles.active}
                    previousClassName={styles.prev}
                />
            </div>
        </div >
    );
}

export default Repositories;