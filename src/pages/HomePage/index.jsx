import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = ({ setShowCart, setCurrentItem, cartCount }) => {
   const [productList, setProductList] = useState([]);
   
   useEffect(() => {
      const loadProducts = async () => {
         try {
            const { data } = await api.get("products");
            setProductList(data);
         } catch (error) {
            console.error(error.message);
         }
      }
      loadProducts();
   }, []);

   return (
      <>
         <Header setShowCart={setShowCart} cartCount={cartCount} />
         <main className={styles.main}>
            <ProductList productList={productList} setCurrentItem={setCurrentItem} />
         </main>
      </>
   );
};
