import ShopListItem from "../shop-list-item/shop-list-item";

import './shop-list.css';

const ShopList = ({data, onDelete, onToggleProp}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <ShopListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp = { (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default ShopList;