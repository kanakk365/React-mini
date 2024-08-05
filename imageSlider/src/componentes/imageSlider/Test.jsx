import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function Test({ url, limit = 4, page = 1 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true)
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  function handlePrev() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  function handleNext() {
    setCurrentImage(
      currentImage === images.length ?0 : currentImage + 1
    );
  }

  useEffect(() => {
    if (url !== " ") {
      fetchImages(url);
    }
  }, [url]);
  if (loading) {
    return <div> Loading please wait</div>;
  }
  if (errorMsg !== "") {
    return <div> Some error Occured {errorMsg}</div>;
  }

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          className=" arrow arrow-left"
          onClick={handlePrev}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                src={imageItem.download_url}
                key={imageItem.id}
                className={
                  currentImage === index
                    ? "current-image"
                    : "hide-current-image "
                }
              />
          ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentImage === index
                      ? "current-indicator"
                      : "current-indicator hide-current-indicator"
                  }
                  key={index}
                  onClick={() => setCurrentImage(index)}
                ></button>
            ))
            : null}
        </span>
      </div>
    </>
  );
}
