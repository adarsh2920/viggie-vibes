import React, { useState, useEffect } from 'react';
import './SliderVeg.scss'; // Import the Sass file


const slideWidth = 30;

const _items = [
  {
      player: {
          title: 'Farm-to-Table Guarantee',
          desc: 'We take pride in our farm-to-table approach, bringing you the freshest fruits straight from the orchards.',
          image: "https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
  },
  {
      player: {
          title: "Same-Day Delivery:",
          desc: "Enjoy the ultimate freshness with our same-day delivery service.",
          image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2565&q=80",
      },
  },
  {
      player: {
          title: 'Seasonal Fruit Promotions:',
          desc: 'Indulge in the flavors of the season with our exclusive fruit promotions',
          image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      },
  },
  {
      player: {
          title: 'Fruit Baskets and Gift Options:',
          desc: "Celebrate life's precious moments with our exquisite fruit baskets.",
          image: "https://images.unsplash.com/photo-1548016190-db560c8558bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
  },
  {
      player: {
          title: 'Wide Selection of Fresh Vegetable',
          desc:  "Explore a tantalizing assortment of fresh fruits handpicked from local farms and exotic regions around the world." ,
          image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
  },
];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


const createItem = (position, idx) => {
  const item = {
      styles: {
          transform: `translateX(${position * slideWidth}rem)`,
      },
      player: _items[idx].player,
  };

  switch (position) {
      case length - 1:
      case length + 1:
          item.styles = {...item.styles, filter: 'grayscale(1)'};
          break;
      case length:
          break;
      default:
          item.styles = {...item.styles, opacity: 0};
          break;
  }

  return item;
};


const CarouselSlideItem = ({pos, idx, activeIdx}) => {
  const item = createItem(pos, idx, activeIdx);

  return (
      <li className="carousel__slide-item" style={item.styles}>
          <div className="carousel__slide-item-img-link">
              <img src={item.player.image} alt={item.player.title} />
          </div>
          <div className="carousel-slide-item__body">
              <h4>{item.player.title}</h4>
              <p>{item.player.desc}</p>
          </div>
      </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const SliderVeg = () => {
  const [items, setItems] = useState(Array.from(Array(_items.length).keys()));
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
        setIsTicking(true);
        setItems((prev) => {
            return prev.map((_, i) => prev[(i + jump) % bigLength]);
        });
    }
};

  const nextClick = (jump = 1) => {
    if (!isTicking) {
        setIsTicking(true);
        setItems((prev) => {
            return prev.map(
                (_, i) => prev[(i - jump + bigLength) % bigLength],
            );
        });
    }
};

const handleDotClick = (idx) => {
  if (idx < activeIdx) prevClick(activeIdx - idx);
  if (idx > activeIdx) nextClick(idx - activeIdx);
};  

  

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
            ))}
          </ul>
        </div>
        <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderVeg;
