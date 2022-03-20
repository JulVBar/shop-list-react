import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            termLocal: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const termLocal = e.target.value;
        this.setState({termLocal}) // локальный терм
        this.props.onUpdateSearch(termLocal)
    }

    render() {
        return (
            <div className="search-input-wrap">
                <input type="text"
                className="search-input"
                value={this.state.termLocal}
                onChange={this.onUpdateSearchLocal}/>
                <label className="search-input-label">Search</label>
            </div>
        )
    }
}

export default SearchPanel;