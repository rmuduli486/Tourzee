import Featured from "../../components/featured/Featured";
import FeaturedPropertiesHome from "../../components/featuredPropertiesHome/FeaturedPropertiesHome";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle" style={{ paddingTop: '30px' }}>Top 3 most famous landmarks in India</h1>
        <Featured/>
        {/* <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/> */}
        <h1 className="homeTitle" style={{ paddingTop: '30px' }}>LAKSHADWEEP</h1>
        <div
          style={{
            paddingTop: '15px',
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '100%',
            maxWidth: '1024px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            zIndex: '1',
          }}
        >
          
          <p style={{ color: '#888' }}>

            Welcome to the beautiful Lakshadweep islands, a hidden treasure in the Indian Ocean with pristine beaches, clear blue waters, and colourful coral reefs. Lakshadweep consists of 36 stunning coral islands, making it a tropical paradise waiting to be explored. If you’re looking for a vacation that combines natural beauty with cultural richness, you’re in for a treat. In this blog, we’ll be your virtual tour guide, revealing the best things to do in Lakshadweep India, for an unforgettable island experience.
            Lakshadweep means “a hundred thousand islands” in Malayalam and offers a variety of activities for different types of travellers. Whether you love the beach, water sports, or nature, these islands have something special for everyone.
            Let’s explore the wonders of Lakshadweep, from its breathtaking coral atolls to trying local food and experiencing the unique island culture. Whether you’re planning a romantic trip, a family vacation, or an adventure on your own, this guide will help you make the most of your time in this tropical paradise.
            So, get ready for an amazing experience as we discover the top things to do in Lakshadweep. Let the adventure begin!
          </p>
          
          <img
            src="https://travelophia.com/wp-content/uploads/2024/01/Untitled-design-2024-01-12T113901.796-1080x608.png"
            alt="Image Description"
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px' }}
          />
        </div>
        {/* <div style={{paddingTop: '15px',
            paddingLeft: '20px',
            paddingRight: '20px',
            width: '100%',
            maxWidth: '1024px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            zIndex: '1', }}>
          <button className="headerBtn">Visit this Place <FontAwesomeIcon icon= {faArrowRight} style={{ marginLeft: '5px' }} /></button>
        </div> */}
        
        <h1 className="homeTitle" style={{ paddingTop: '30px' }}>Popular Places in India</h1>
        <FeaturedPropertiesHome/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
