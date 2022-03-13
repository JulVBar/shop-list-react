import './shop-list-add-form.css';

const ShopListAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add to Shop List</h3>
            <form
                className="add-form">
                    <div className="add-form-item">
                        <input type="text"
                        className="add-form-input"/>
                        <label className="add-form-label">Item Name</label>
                    </div>
                    <div className="add-form-item">
                        <input type="number"
                        className="add-form-input"/>
                        <label className="add-form-label">Item Price</label>
                    </div>

                <button type="submit"
                        className="add-form-btn">Add to list</button>
            </form>
        </div>
    )
}

export default ShopListAddForm;