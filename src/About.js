import Body from "./Body";
import { Link } from "react-router-dom";
import Product from "./Product";
import './About.css'
function About(){
    return(
        <>
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
        <div className="you">
            <p>My name is Busari Aisha.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero explicabo aut animi cum dignissimos eius maiores ipsa neque voluptatibus, labore distinctio cumque aperiam suscipit, reiciendis itaque eligendi. Quis, cum possimus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corrupti hic dolor, doloribus magni qui perspiciatis similique voluptas omnis a libero praesentium asperiores quasi nam odit cumque velit vel ratione autem! Iure ipsum est ad, vitae blanditiis sed ea debitis dolor, alias in nulla commodi tempore voluptates error quas! Ex!</p>

            
            
        </div>
        </>
    )
}
export default About;