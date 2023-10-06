import "./styles/index.scss";
import { useEffect, useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage"

function App() {
  const [ cartList, setCartList ] = useState([]);
  const [ currentItem, setCurrentItem ] = useState(null);
  const [ formerItem, setFormerItem ] = useState(null);
  const [ showCart, setShowCart ] = useState(false);

  const cartCount = cartList.length;

  useEffect(() => {
    const getShoppingCart = () => {
      const cart = JSON.parse(localStorage.getItem("@shoppingCart"));
      cart && setCartList(cart);
    }
    getShoppingCart();
  }, []);

  useEffect(() => {
    const addItem = item => {
      if (item) {
        const newCartList = [...cartList, {...item, purchaseId: crypto.randomUUID()}];
        localStorage.setItem("@shoppingCart", JSON.stringify(newCartList));
        setCartList(newCartList);
        setCurrentItem(null);
      }
    }
    addItem(currentItem);
  }, [currentItem]);

  useEffect(() => {
    const removeItem = item => {
      if (item) {
        const newCartList = cartList.filter(product => product.purchaseId !== item.purchaseId);
        localStorage.setItem("@shoppingCart", JSON.stringify(newCartList));
        item && setCartList(newCartList);
        setFormerItem(null);
      }
    }
    removeItem(formerItem);
  }, [formerItem]);

  return (
    <>
      <HomePage setShowCart={setShowCart} setCurrentItem={setCurrentItem} cartCount={cartCount} />
      {showCart && <CartModal cartList={cartList} setShowCart={setShowCart} setCartList={setCartList} setFormerItem={setFormerItem}/>}
    </>
  )
}

export default App
