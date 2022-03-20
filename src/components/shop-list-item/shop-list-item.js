import './shop-list-item.css';
import Icons from '../icons/icons';

const ShopListItem = (props) => {

    const {name, price, onDelete, onToggleProp, priority, favourite} = props;

    let classNames = "list-item";

    classNames = priority ? classNames += ' priority' : classNames;
    classNames = favourite ? classNames += ' favourite' : classNames;

    return (
        <li className={classNames}>
            <span className="list-item-label" onClick={onToggleProp} data-toggle="favourite">{name}</span>
            <input type="text" className="list-item-input" defaultValue={price + ' $'}/>
            <div className="list-item-group-button">
                <button type="button"
                    className="btn-cookie list-item-button"
                    onClick={onToggleProp}
                    data-toggle="priority">
                    <Icons 
                        name='day'
                        className='list-item-icon'
                    />
                </button>

                <button type="button"
                        className="list-item-button"
                        onClick={onDelete}>
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



// class ShopListItem extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             priority: false,
//             favourite: false
//         }
//     }

//     onPriority = () => {
//         this.setState(({priority}) => ({
//             priority: !priority
//         }))    
//     }

//     addToFavourite = () => {
//         this.setState(({favourite}) => ({
//             favourite: !favourite
//         })) 
//     }

//     render() {
//         const {name, price, onDelete, onToggleIncrease, onToggleRise} = this.props;
//         const {priority, favourite} = this.state;

//         let classNames = "list-item";
//         // if (priority) {
//         //     classNames += ' priority'
//         // }
//         classNames = priority ? classNames += ' priority' : classNames;
//         classNames = favourite ? classNames += ' favourite' : classNames;

//         return (
//             <li className={classNames}>
//                 {/* < className={classNames = priority ? classNames += ' priority' : classNames}>*/}
//                 <span className="list-item-label"
//                 onClick={this.addToFavourite}>{name}</span>
//                 <input type="text" className="list-item-input" defaultValue={price + ' $'}/>
//                 <div className="list-item-group-button">
//                     <button type="button"
//                         className="btn-cookie list-item-button"
//                         onClick={this.onPriority}>
//                         <Icons 
//                             name='day'
//                             className='list-item-icon'
//                         />
//                     </button>
    
//                     <button type="button"
//                             className="list-item-button"
//                             onClick={onDelete}>
//                         <Icons 
//                             name='night'
//                             className='list-item-icon'
//                         />
//                     </button>
//                         <Icons 
//                             name='play'
//                             className='fa-star'
//                         />
//                 </div>
//             </li>
//         )
//     }
// }

export default ShopListItem;