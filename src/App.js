import { Fragment, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer';
import MainHeader from './components/Layout/MainHeader';
import Products from './components/Products/Products';
import CartContextProvider from './store/cart-context-provider';


const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const history = useHistory();
  // const location = useLocation();

  // const background = location.state && location.state.background;

  const toggleCartHandler = () => {
    history.replace('/');
    setIsCartShown(prevState => !prevState);
  }

  return (
    <CartContextProvider>
      <MainHeader onToggleCart={toggleCartHandler} />
      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
      {isCartShown && <Cart onToggleCart={toggleCartHandler} />}
      {/* <Route path='/cart'>
        {isCartShown && <Cart onToggleCart={toggleCartHandler} />}
      </Route> */}
      <Footer />
    </CartContextProvider>
  );
}

export default App;
