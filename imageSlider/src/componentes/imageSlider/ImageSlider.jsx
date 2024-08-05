import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
export default function ImageSlider({ url, limit = 4, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(
      currentSlide === image.length ? image.length - 1 : currentSlide + 1
    );
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div> Loading please wait</div>;
  }
  if (errorMsg !== 0) {
    return <div> Some error Occured {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className=" arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem,index) => (
            <img
              alt={imageItem.download_url}
              key={imageItem.id}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "hide-current-image "
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className=" arrow arrow-right"
      />
     <span className="circle-indicators">
        {image && image.length
          ? image.map((_,index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator hide-current-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
