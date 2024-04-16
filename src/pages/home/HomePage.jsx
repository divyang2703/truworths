import React from "react";
//components
import Information from "../../components/footer/information/Information";
import FrequentlyViewed from "../../components/frequently viewed/FrequentlyViewed";
import BestSeller from "../../components/bestseller/BestSeller";
import RecommendedForYou from "../../components/recommended for you/RecommendedForYou";
import NewArrival from "../../components/new arrival/NewArrival";
import Header from '../../components/header/Header.jsx'
import Footer from '.././../components/footer/Footer.jsx'
import BannerCarousel from "../../components/banner image/BannerCarousel.jsx";
import OfferCard from "../../components/offer card/OfferCard.jsx";
import Trends from "../../components/trends/Trends.jsx";
import FullSizeImage from "../../components/full size image/FullSizeImage.jsx";

const HomePage = () => {
  return (
    <div className="">
      <Header/>
      <BannerCarousel/>
      <OfferCard/>
      <FrequentlyViewed/>
      <NewArrival/>
      <FullSizeImage/>
      <BestSeller/>
      <RecommendedForYou/>
      <Trends/>
      <Information />
      <Footer/>
  
    </div>
  );
};

export default HomePage;
