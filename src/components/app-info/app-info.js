import './app-info.css';
import Icons from '../icons/icons';

const AppInfo = ({data}) => {

    const goods = data.length;

    let arr = [];
    data.forEach(item => {
        arr.push(+item.price);
    })
    const sum =  arr.reduce((sum, curr) => sum + curr, 0);
    
    return (
        <div className="app-info">
                <div className="app-info-amount">
                    <h2>Goods</h2>
                    <div className="app-info-summary">
                        <Icons 
                            name='night'
                            className='app-info-icon'
                        />
                        <span>{goods}</span>
                    </div>
                </div>
                <div className="app-info-sum">
                    <h2>Sum, $</h2>
                    <div className="app-info-summary">
                        <Icons 
                            name='night'
                            className='app-info-icon'
                        />
                        <span>{sum}</span>
                    </div>
                </div>
            </div>
    )
}

export default AppInfo;