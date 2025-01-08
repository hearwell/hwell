import HearingAidTrial from './Component/HearingAidTrial';
import Header from './Component/Header';
import SpecialCTA from './Component/SpecialCTA.js'
import FeaturesSection from './Component/featuresection.js';
import CardComponent from './Component/CardComponent.js';
import WhyHear from './Component/WhyHear.js';
import AllRate from './Component/AllRate.js';
import CustomerReviews from './Component/CustomerReviews.js';
function App() {
  return (
    <>
    <Header/>
    <HearingAidTrial/>
    <SpecialCTA/>
    <FeaturesSection/>
    <CardComponent/>
    <WhyHear/>
    <AllRate/>
    <CustomerReviews/>
    <SpecialCTA/>
    </>
  );
}

export default App;
