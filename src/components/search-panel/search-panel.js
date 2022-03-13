import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="search-input-wrap">
            <input type="text"
            className="search-input"/>
            <label className="search-input-label">Найти товар</label>
        </div>
    )
}

export default SearchPanel;