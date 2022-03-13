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
                Все товары
            </button>
            <button 
            className="btn-filter"
            type="button">
                <Icons 
                    name='masonry'
                    className='btn-filter-icon'
                />
                Срочно купить
            </button>
            <button 
            className="btn-filter"
            type="button">
                <Icons 
                    name='masonry'
                    className='btn-filter-icon'
                />
                Дорогие товары
            </button>
        </div>
    )
}

export default AppFilter;