import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableBtn , setDisableBtm ]= useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await res.json();
      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
      }
      console.log(result);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(()=>{
    if( products && products.length===100) {setDisableBtm(true)}
  },[])

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load more Products</button>
         {disableBtn ? <p> You have reachd the end</p> : null} 
      </div>
    </div>
  );
}
