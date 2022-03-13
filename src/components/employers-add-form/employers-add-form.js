import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить в список покупок</h3>
            <form
                className="add-form">
                    <div className="add-form-item">
                        <input type="text"
                        className="add-form-input"/>
                        <label className="add-form-label">Название товара</label>
                    </div>
                    <div className="add-form-item">
                        <input type="number"
                        className="add-form-input"/>
                        <label className="add-form-label">Стоимость товара</label>
                    </div>

                <button type="submit"
                        className="add-form-btn">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;