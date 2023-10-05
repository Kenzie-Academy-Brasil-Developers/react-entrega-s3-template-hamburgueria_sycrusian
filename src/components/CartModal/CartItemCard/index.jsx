import styles from "./style.module.scss";
import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, setFormerItem }) => {
   return (
      <li className={styles.itemCard}>
         <div className={styles.cardData}>
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className="heading-3">{product.name}</h3>
               <h4 className="body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</h4>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => setFormerItem(product)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
