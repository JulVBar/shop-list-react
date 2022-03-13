import './app-info.css';
import Icons from '../icons/icons';

const AppInfo = () => {
    return (
        <div className="app-info">
                <div className="app-info-amount">
                    <h2>Goods</h2>
                    <div className="app-info-summary">
                        <Icons 
                            name='night'
                            className='app-info-icon'
                        />
                        <span>10</span>
                    </div>
                </div>
                <div className="app-info-sum">
                    <h2>Sum, $</h2>
                    <div className="app-info-summary">
                        <Icons 
                            name='night'
                            className='app-info-icon'
                        />
                        <span>1600</span>
                    </div>
                </div>
            </div>
    )
}

export default AppInfo;