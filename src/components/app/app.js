import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ShopList from '../shop-list/shop-list';
import ShopListAddForm from '../shop-list-add-form/shop-list-add-form';


import './app.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name:"Milk", price: 800, priority: false, favourite: false, id:1},
                {name:"Meet", price: 200, priority: false, favourite: true, id:2},
                {name:"Sugar", price: 6000, priority: true, favourite: false, id:3},
                {name:"Bread", price: 5500, priority: false, favourite: false, id:4},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }

    addItem = (name, price) => {
        if (name && price) {
            this.setState(({data}) => {
                return {
                    data: [...data, {
                        name, 
                        price,
                        priority: false,
                        favourite: false,
                        id: this.maxId++
                    }]
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'firstly':
                return items.filter(item => item.priority);

            case 'expensive':
                return items.filter(item => item.price > 1000);

            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchItem(data, term), filter);

        return (
            <div className="app">
                <div className="app-title">
                    <h1>Shop List</h1>
                </div>
    
                <div className="app-body">
                    <div className="app-dashboard">
                        <AppInfo
                        data={data}/>
                        <ShopListAddForm
                        onAdding={this.addItem}/>
                        <ShopList 
                        data={visibleData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>
                    </div>
    
                    <div className="search-panel">
                        <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                        <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;