import styles from "./style.module.scss";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";

export const Header = ({ setShowCart,cartCount }) => {
   return (
      <header className={styles.header}>
         <div className={styles.div}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setShowCart(true)}>
               <MdShoppingCart size={22} />
               <span className="counter">{cartCount}</span>
            </button>
         </div>
      </header>
   );
};
