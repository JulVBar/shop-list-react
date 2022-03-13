import './app-filter.css';
import Icons from '../icons/icons';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            className="btn-filter"
            type="button">
                <Icons 
                    name='masonry'
                    className='btn-filter-icon'
                />
                All Goods
            </button>
            <button 
            className="btn-filter"
            type="button">
                <Icons 
                    name='masonry'
                    className='btn-filter-icon'
                />
                Buy Firstly
            </button>
            <button 
            className="btn-filter"
            type="button">
                <Icons 
                    name='masonry'
                    className='btn-filter-icon'
                />
                Expensive
            </button>
        </div>
    )
}

export default AppFilter;