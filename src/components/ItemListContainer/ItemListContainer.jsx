import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); //por ahora
    const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("/data/products.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al cargar los productos");
            }
            return res.json();
        })
        .then((data) =>  setProducts(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
        
    }, []); //dependencia category para que se vuelva a ejecutar el useEffect cuando cambie la categoria

    //valor truthy y falsy
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return <>
    <section>
        <h1>Productos</h1>
        <ItemList products={products} />
    </section>
    </>;
};