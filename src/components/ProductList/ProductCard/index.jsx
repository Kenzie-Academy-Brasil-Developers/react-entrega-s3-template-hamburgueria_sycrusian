import styles from "./style.module.scss";

export const ProductCard = ({ product, setCurrentItem }) => {
    return(
        <li className={styles.productCard}>
            <div className={styles.image}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.data}>
                <h3 className="heading-3">{product.name}</h3>
                <span className={`${styles.category} caption`}>{product.category}</span>
                <span className={`${styles.price} body`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="body-600" onClick={() => setCurrentItem(product)}>Adicionar</button>
            </div>
        </li>
    )
}