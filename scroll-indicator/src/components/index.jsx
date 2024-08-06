import { useEffect, useState } from "react";
import './style.css'

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScroll() {

    const totalScrolled= document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScroll((totalScrolled/height)*100)

  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  return (
    
    <div className="tot">
      <div className="topContainer">
      <h1> Costom Scroll Indicator</h1>
      <div className="scrollIndi" >
        <div className="bar" style={{width : `${scroll}%`}}> 

        </div>
      </div>
      
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p> {dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
