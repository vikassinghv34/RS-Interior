import React from 'react';
import './Banner.css';

type BannerProps = {
  //   imagePosition?: 'left' | 'right' | 'center';
  backgroundColor?: 'red' | 'black' | 'blue';
  title: string;
  backgroundImage?: string;
  ctaLabel?: string;
  // onClick?: () => void;
};
const onClick = () => {
  alert('Clicked');
};
const Banner = ({
  //   imagePosition = 'center',
  backgroundColor = 'blue',
  title,
  // backgroundImage,
  ctaLabel = 'Default',
  backgroundImage = 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}: // onClick,
// ...props
BannerProps) => {
  return (
    <div className="banner bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        {/* <p className="banner-subtitle">{subtitle}</p> */}
        {/* <a href={ctaLink} onClick={onClick} className="banner-cta">
          {ctaText}
        </a> */}
        <button
          type="button"
          className={`banner-cta ${backgroundColor === 'blue' ? 'text-black' : 'text-light'}`}
          onClick={onClick}
        >
          {ctaLabel}
          <style jsx>{`
            button {
              background-color: ${backgroundColor};
            }
          `}</style>
        </button>
      </div>
    </div>
  );
};

export default Banner;
