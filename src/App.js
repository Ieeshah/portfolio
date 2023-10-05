import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Footer from './Footer';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import Ieeshah from './Ieeshah';
// import Green from './Green';
import Body from './Body';
import './Body.css';
import Product from './Product';
import './Product.css';
import About from './About';
import { RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Link from 'react-router-dom';

const myRouter= createBrowserRouter([
  {path:'/',element: <Body />},
  {path:'/about', element: <About />},
  {path:'/product', element: <Product />}


  
])
function App() {
  return (
    <div className="App">
      
      <RouterProvider router={myRouter} />
    </div>
  );
}





// const myRouter= createBrowserRouter([
//   {path:'/',element: <Header />},
//   {path:'/green', element: <Green />}

  
// ])



// function App() {
//   return (
//     <div className="App">
      
//       <RouterProvider router={myRouter} />
      
//     </div>
//   );
// }

export default App;
