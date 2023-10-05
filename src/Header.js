import Ieeshah from './Ieeshah';
import Green from './Green';
import {Link} from 'react-router-dom';
function Header() {
    return(
        <div >
        <h1>Hi Its Aishat
        <Link to ='./Green'>new react link method</Link>
        </h1>
        </div>
    )
}

export default Header;