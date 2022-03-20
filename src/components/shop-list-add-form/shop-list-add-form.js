import { Component } from 'react';
import './shop-list-add-form.css';

class ShopListAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value //работа с формами
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdding(this.state.name, this.state.price);
        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        const {name, price} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add to Shop List</h3>
                <form
                    className="add-form"
                    onSubmit = {this.onSubmit}>
                        <div className="add-form-item">
                            <input type="text"
                            className="add-form-input"
                            name="name"
                            value={name} //управляемые компоненты
                            onChange={this.onChangeValue}/>
                            <label className="add-form-label">Item Name</label>
                        </div>
                        <div className="add-form-item">
                            <input type="number"
                            className="add-form-input"
                            name="price"
                            value={price}
                            onChange={this.onChangeValue}/>
                            <label className="add-form-label">Item Price</label>
                        </div>
    
                    <button type="submit"
                            className="add-form-btn">Add to list</button>
                </form>
            </div>
        )
    }
}

export default ShopListAddForm;