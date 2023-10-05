
import avatar from "./image/sales.png";
import { Link } from 'react-router-dom';
import './Body.css';
import Product from './Product';
import About from './About';

function Body() {
    return (
        <>


            <div>
                <form>
                    <div className="par">
                        <span>Nav</span>
                    </div>


                    <div className="child">

                        <a href="./" alt="">Home</a>
                        <a href="./About" alt="">About</a>
                        <a href="./Product" alt="">Product</a>
                    </div>


                </form>
            </div>


            <div className="bit">
                <div className="col">
                    <img src={avatar} alt="" className='pic' />
                </div>
                <div className="list">
                    <ul>
                        <li>My Name Is Busari Aisha</li>
                        <li>I'm a Frontend developer</li>
                        <li>A student of Valuemax</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Body;