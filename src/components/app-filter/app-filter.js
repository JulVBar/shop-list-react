import './app-filter.css';
import Icons from '../icons/icons';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All Goods', icon: 'total'},
        {name: 'firstly', label: 'Buy Firstly', icon: 'buyfirstly'},
        {name: 'expensive', label: 'Expensive', icon: 'expensive'}
    ];

    const buttons = buttonsData.map(({ name, label, icon}) => {
        const active = props.filter === name;
        const clazz = active ? 'active' : '';
        return (
            <button 
            className={`btn-filter ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                <Icons 
                    name={icon}
                    className='btn-filter-icon'
                />
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;