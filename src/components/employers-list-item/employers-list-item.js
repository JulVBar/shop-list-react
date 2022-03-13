
import './employers-list-item.css';
import Icons from '../icons/icons';

const EmployersListItem = ({name, price, priority}) => {

    let classNames = "list-item";
    // if (priority) {
    //     classNames += ' priority'
    // }
    classNames = priority ? classNames += ' priority' : classNames;

    return (
        <li className={classNames}>
            {/* < className={classNames = priority ? classNames += ' priority' : classNames}>*/}
            <span className="list-item-label">{name}</span>
            <input type="text" className="list-item-input" defaultValue={price + ' $'}/>
            <div className="list-item-group-button">
                <button type="button"
                    className="btn-cookie list-item-button">
                    <Icons 
                        name='day'
                        className='list-item-icon'
                    />
                </button>

                <button type="button"
                        className="list-item-button">
                    <Icons 
                        name='night'
                        className='list-item-icon'
                    />
                </button>
                    <Icons 
                        name='play'
                        className='fa-star'
                    />
            </div>
        </li>
    )
}

export default EmployersListItem;