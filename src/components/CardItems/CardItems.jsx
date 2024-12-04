import React from 'react';
import './CardItem.scss';

const cardData = [
  {
    imgSrc: "https://imgpanda.com/upload/ib/1yIWjyG41o.png",
    title: "Core Planning",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    link: "https://www.fiverr.com/aliali44"
  },
  {
    imgSrc: "https://imgpanda.com/upload/ib/Q4tSh2ctkH.png",
    title: "Traditional Designs",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    link: "https://www.fiverr.com/aliali44"
  },
  {
    imgSrc: "https://imgpanda.com/upload/ib/YQdOwN6IDJ.png",
    title: "Quality Materials",
    description: "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    link: "https://www.fiverr.com/aliali44"
  }
];

export default function CardItems() {
  return (
    <section className="creative-cards">
      {cardData.map((card, index) => (
        <div className="card-column" key={index}>
          <div className="card-details">
            <div className="card-icons">
              <img src={card.imgSrc} alt={`${card.title} icon`} />
            </div>
            <h3>
              <a href={card.link}>{card.title}</a>
            </h3>
            <p>{card.description}</p>
            <a className="read-more-btn" href={card.link}>
              &raquo;
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
