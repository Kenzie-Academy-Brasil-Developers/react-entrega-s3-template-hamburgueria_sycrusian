import styles from "./style.module.scss";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, setCurrentItem }) => {
   return (
      <ul className={styles.productList}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setCurrentItem={setCurrentItem} />
         ))}
      </ul>
   );
};
