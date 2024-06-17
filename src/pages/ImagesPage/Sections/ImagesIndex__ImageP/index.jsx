import React from "react";
import { Link } from "react-router-dom";
import "../Images__ImagesP/images__ImagesP.scss";

export default function index({ item, index }) {
  return (
    <section className="imagesPageContent">
      <Link to={`/project/${item._id}`}>
        <img
          src="/assets/components/Header/arrowBlack.svg"
          alt="Image back"
          width={20}
          height={15}
          className="imagesPageContent__img"
        />
      </Link>
      <ul className="imagesPageContent__list">
        {item.generalInfo.images[index].photos.map((photo, index) => (
          <li key={index} className="imagesPageContent__item">
            <img
              src={photo}
              alt={`Image ${index}`}
              className="imagesPageContent__item-img"
            />
          </li>
        ))}
      </ul>
      <div className="imagesPageContent__bottom"></div>
    </section>
  );
}
