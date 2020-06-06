import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Form from '../components/Form';
// import SideBar from '../components/SideBar';

import pic2 from '../assets/images/proj1.png';
import pic3 from '../assets/images/prog1.jpg';
import pic4 from '../assets/images/proj2.png';
import pic5 from '../assets/images/fact1.jpg';
import pic6 from '../assets/images/prog4.jpg';
import pic7 from '../assets/images/fact2.jpg';
import pic8 from '../assets/images/pic08.jpg';
import stats1 from '../assets/images/stats1.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    {/* <SideBar sections={sections} /> */}

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
            Tourism to be Next Big Industry in India
              <br />
            </h2>
            <p>INDIA is at third place in the new power ranking of the 2018 report of World Travel and Tourism Council (WTTC). It evaluates the performance of 185 countries over a seven year period (2011-2017). India’s revenue from travel and tourism stood at $234 billion. Tourism sector accounted for 10.4% of global GDP and 313 million jobs, accounting for 9.9% total employment in 2017.</p>
            <a href="/#" className="image featured">
              <img src={stats1} alt="" />
            </a>
            <p>The travel and tourism sector in India accounted for an estimated 12.38 percent of the total employment opportunities generated in the country in 2018. The share of indirect employment was 6.38 percent, almost one percent higher than the share of direct employment for the same year.</p>
          </header>

          <footer>
            <Scroll type="id" element={'contact'}>
              <a href="#contact" className="button">
                Contact
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="why" className="three">
        <div className="container">
          <header>
            <h2>Why to Invest in TOURISM PROPERTIES?</h2>
          </header>

          <p>
          As you can see, over 10 million foreign tourists arrived in India in 2017 compared to 8.89 million in 2016, representing a growth of 15.6%. Domestic tourists visits to all states and union territories numbered 1036.35 million in 2012, an increase of 16.5% from 2011.
These tourists visits the tourism destinations in India having Wildlife tourism, Cultural tourism, Beach tourism, Pilgrimage tourism, Food tourism, Heritage tourism, Adventure tourism and various kinds.
Tourists needs Homestays, Vacation Villas, Resorts to stay& relax, tocherrish the memories with their families. 
You should invest in Tourism properties for more Cashflow& Multifold Appreciation rather than houses and flats as we consider the potential. We are not saying it, its proven for last many centuries. 
Make your Rental Assets to get passive income on regular basis by investing in emerging stage of NGTP in tourism market, becauseTourism is the only recession free industry throughout the world from past 150 years.  
Tourism properties are always Limited in finite area, so appreciation of any tourism property is always High with respect to the Cash On Cash Returns.
Most of tourism destinations in India are mature enough with respect to market cycle, where you will either get insufficient land with high cost or No land.
          </p>
        </div>
      </section>

      <section id="where" className="three">
        <div className="container">
          <header>
            <h2>Where will you get Opportunity to Invest?</h2>
          </header>

          <p>
          As per our research, You have opportunity to invest in wildlife tourism properties near Todoba National Park, Maharashtra, India. Where, more than 30 lakh tourists visits every year for flora and fauna. International celebrities walks of life to catch the glimps of the tadoba tigers.
          Tadoba is the largest and oldest national park in Maharashtra and awarded the best tiger state in sanctuary asia awards 2012.Tadoba has the fastest growing population of tigers in India and is arguably the best to spot a tiger in the world. 
          </p>
        </div>
      </section>


      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Us</h2>
          </header>

          {/* <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a> */}

          <p>
          NGTP hold by Mr. Nikhil Gautam (Civil engineer and Young Entrepreneur)
NGTP is dedicated to eco-friendly & environment-friendly wildlife tourism properties to deliver the clients and investors for their Rental Asset Portfolio.
NGTP and team have the experience of case studies on various tourism locations in India in wildlife tourism and beach tourism.
Care for the nature, people and the society as a whole is one of our prime value.
          </p>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Buy Property</h2>
          </header>
         <h3>Our Partner - Swarna Royal Estate</h3> 
          <h4>Why Swarna Royal Estate?</h4>
          <li>
          India’s 1st and no. 1 company in tourism estate
          </li>
          <li>
          8 years study in Tourism
          </li>
          <li>
          Selection of location
          </li>
          <li>
          Legal sanctions
          </li>
          <li>
          Resort market like MIDC
          </li>
          <li>
          Not only for sell but also real appreciation is the aim
          </li><br/>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>ALIZANJHA PROJECT</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Progress</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>TADOBA The Tiger Capital - HOMESTAY RESORT COTTAGES</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Fact and Figures</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Progress</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Demand and Supply</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
          If you are interested, please contact us. 
Hurry up and grab the opportunity to get your first rental asset this month. 
          </p>

          <Form/>
          {/* <form method="post" data-netlify="true">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              { <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div> }
              <div className="col-12">
                <input type="submit" value="Submit Message" />
              </div>
            </div>
          </form> */}
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
