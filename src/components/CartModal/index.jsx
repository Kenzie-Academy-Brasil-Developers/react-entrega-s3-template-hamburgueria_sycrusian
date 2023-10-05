import styles from "./style.module.scss";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeyDown } from "../../hooks/useKeyDown";

export const CartModal = ({ cartList, setShowCart, setCartList, setFormerItem }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const closeCart = () => setShowCart(false);

   const cartRef = useOutClick(closeCart);

   useKeyDown("Escape", closeCart);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={cartRef} className={styles.modalBox}>
            <div className={styles.modalHeader}>
               <h2 className="heading-3">Carrinho de compras</h2>
               <button onClick={closeCart} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.modalMain}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.purchaseId} product={product} setFormerItem={setFormerItem} />
                     ))}
               </ul>
            </div>
            <div className={styles.modalFooter}>
               <div>
                  <span className="body-600">Total</span>
                  <span className={`${styles.price} body-600`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className="headline" onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
