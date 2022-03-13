import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ShopList from '../shop-list/shop-list';
import ShopListAddForm from '../shop-list-add-form/shop-list-add-form';


import './app.css';

function App() {

    const data = [
        {name:"one", price: 800, priority: true, id:1},
        {name:"two", price: 200, priority: false, id:2},
        {name:"three", price: 6000, priority: true, id:3},
    ]; 

    return (
        <div className="app">
            <div className="app-title">
                <h1>Shop List</h1>
            </div>

            <div className="app-body">
                <div className="app-dashboard">
                    <AppInfo/>
                    <ShopListAddForm/>
                    <ShopList data={data}/>
                </div>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
            </div>
        </div>
    );
}

export default App;