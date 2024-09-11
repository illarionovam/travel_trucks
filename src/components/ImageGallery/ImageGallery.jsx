import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageBlock}>
      {images.map((image_i, index) => (
        <li key={index}>
          <div className={css.imageContainer}>
            <img src={image_i.original} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
