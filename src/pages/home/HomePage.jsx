import React from "react";
//components
import Information from "../../components/footer/information/Information";
import FrequentlyViewed from "../../components/frequently viewed/FrequentlyViewed";
import BestSeller from "../../components/bestseller/BestSeller";
import RecommendedForYou from "../../components/recommended for you/RecommendedForYou";
import NewArrival from "../../components/new arrival/NewArrival";

const HomePage = () => {
  return (
    <div className="">
  
      <FrequentlyViewed/>
      <NewArrival/>
      <BestSeller/>
      <RecommendedForYou/>
      <Information />
  
    </div>
  );
};

export default HomePage;
