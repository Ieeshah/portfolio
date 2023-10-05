import { Link } from 'react-router-dom';

import Body from './Body';
import About from './About';
import meta from "./image/meta.png";
import asana from "./image/asana.png";
import mong from "./image/mong.png";
import netflix from "./image/netflix.png";
import sales from "./image/sales.png";
import uber from "./image/uber.png";
import zoom from "./image/zoom.png";
import './Product.css';

function Product(){
    return(
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

        <h3>8 Pages Project</h3>
        <div className="row">
            
            <img src={meta} alt="#" className='images' />
            <button className='but'> <a href="https://ieeshah.github.io/index/" alt="">View Page</a></button>
            
            
            <img src={asana} alt="#" className='images'/>
             <button className='but'><a href="https://ieeshah.github.io/index/asana.html" alt="">View Page</a></button>
            
            <img src={mong} alt="#" className='images'/> 
            <button className='but'> <a href="https://ieeshah.github.io/index/mongodb.html" alt="">View Page</a></button>
            
        <img src={netflix} alt="#" className='images'/> 
        <button className='but'> <a href="https://ieeshah.github.io/index/Netflix.html" alt="">View Page</a></button>
        
        </div>
        <div className="row" >
            <img src={sales} alt="#" className='images'/> 
            <button className='but'> <a href="https://ieeshah.github.io/index/salesforce" alt="">View Page</a></button>
            
            <img src={uber} alt="#" className='images'/> 
            <button className='but'> <a href="https://ieeshah.github.io/index/Uber.html" alt="">View Page</a></button>
            
            <img src={zoom} alt="#" className='images'/>
             <button className='but'> <a href="https://ieeshah.github.io/index/Zoom" alt="">View Page</a></button>
            
            <img src={zoom} alt="" className='images'/>
             <button className='but'> <a href="" alt="">View Page</a></button>
            
        </div>
        <div>
            <h3>JavaScript Project</h3>
            <div className='row'>
            <img src={zoom} alt="" className='images'/>
             <button className='but'> <a href="" alt="">View Page</a></button>
        </div>
        </div>
        </>
    )
}
export default Product;