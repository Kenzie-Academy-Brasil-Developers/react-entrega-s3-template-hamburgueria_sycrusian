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
    const addItem = item => {
      item && setCartList([...cartList, {...item, purchaseId: crypto.randomUUID()}]);
      setCurrentItem(null);
    }
    addItem(currentItem);
  }, [currentItem]);

  useEffect(() => {
    const removeItem = item => {
      item && setCartList(cartList.filter(product => product.purchaseId !== item.purchaseId));
      setFormerItem(null);
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
