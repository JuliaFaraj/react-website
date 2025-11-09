import HeroMain from "../Components/HeroMain.jsx";
import HeroSub from "../Components/HeroSub.jsx";
import Brands from '../Components/Brands.jsx';
import OurServices from "../Components/OurServices.jsx"; 
import ClientTestimonial from '../Components/clientTestimonial.jsx';
import WhychooseUs from '../Components/WhychooseUs.jsx';
import Pricing from '../Components/Pricing.jsx';
import CallToAction from '../Components/CallToAction.jsx';
import LatestBlogs from '../Components/LatestBlogs.jsx';
import Subscribe from '../Components/Subscribe.jsx';


const Home = () => {
  return (
   <main>
    <HeroMain />
    <HeroSub />
    <Brands />
    <OurServices />
    <ClientTestimonial />
    <WhychooseUs />
    <Pricing />
    <CallToAction />
    <LatestBlogs />
    <Subscribe />

    </main>
  )
}

export default Home
