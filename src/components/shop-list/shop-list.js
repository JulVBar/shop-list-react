import ShopListItem from "../shop-list-item/shop-list-item";

import './shop-list.css';

const ShopList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            // <EmployersListItem  name={item.name} price={item.price}/>
            <ShopListItem key={id} {...itemProps}/>
        )
    });


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default ShopList;