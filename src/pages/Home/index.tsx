import Flex from "../../components/common/Flex";
import Box from "../../components/common/Box";
import Image from "../../components/common/Image";
import Button from "../../components/common/Button";
import HeroImage from "../../assets/images/hero_img.png";
import PeopleIcon from "../../assets/images/people.png";
import SearchStatusIcon from "../../assets/images/search-status.png";
import About from "../../components/about";
import { useState } from "react";
import Tab from "../../components/Tab";
import ServiceIcon1 from "../../assets/images/bitcoin-(btc).png";
import ServiceIcon2 from "../../assets/images/binance-coin-(bnb).png";
import ServiceIcon3 from "../../assets/images/theta-(theta).png";
import ServiceIcon4 from "../../assets/images/nebulas-(nas).png";
import Service from "../../components/Service";
import Client1 from "../../assets/images/Client-Logos_beckman-coulter.png";
import Client2 from "../../assets/images/Client-Logos_John-Hancock.png";
import Client3 from "../../assets/images/Client-Logos_NXP.png";
import Client4 from "../../assets/images/Client-Logos_AIG.png";
import Client5 from "../../assets/images/Client-Logos_Kuoni.png";
import BitcoinImg from "../../assets/images/bitcoin.png";
import EthImg from "../../assets/images/eth.png";
import Star1 from "../../assets/images/star1.png";
import Star2 from "../../assets/images/star2.png";
import BlogImg from "../../assets/images/blog.png";
import Slider from "react-slick";
import SliderArrow from "../../components/common/SliderArrow";
import Blog from "../../components/Blog";
import ContactBg from "../../assets/images/contact.png";
import ClockImg from "../../assets/images/clock.png";
import Union from "../../assets/images/union.png";
import ContactBg1 from "../../assets/images/contact_bg.png";

const Home = () => {
  const about = [
    { icon: PeopleIcon, num: 250, desc: "Clients", col: 4, color: "green" },
    {
      icon: SearchStatusIcon,
      num: 10,
      desc: "Years of experience",
      col: 4,
      color: "orange",
    },
    { icon: PeopleIcon, num: 15, desc: "Team Experts", col: 4, color: "pink" },
    {
      icon: PeopleIcon,
      num: 30,
      desc: "Marketing Services",
      col: 6,
      color: "yellow",
    },
    {
      icon: PeopleIcon,
      num: 30,
      desc: "Marketing Services",
      col: 6,
      color: "yellow",
    },
  ];

  const serviceTabs = [
    { id: 1, tab: "Best Sellers" },
    { id: 2, tab: "Service 1" },
    { id: 3, tab: "Service 2" },
    { id: 4, tab: "Service 3" },
    { id: 5, tab: "Service 4" },
  ];

  const services = [
    {
      icon: ServiceIcon1,
      title: "Bitcoin Promotion",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon2,
      title: "Service 2",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon3,
      title: "Service 3",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
    },
    {
      icon: ServiceIcon4,
      title: "Service 4",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
    },
  ];

  const clients = [
    { image: Client1 },
    { image: Client2 },
    { image: Client3 },
    { image: Client4 },
    { image: Client5 },
    { image: Client5 },
    { image: Client3 },
    { image: Client1 },
    { image: Client2 },
    { image: Client4 },
  ];

  const blogs = [
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
    {
      image: BlogImg,
      title: "Business with Bitcoin",
      desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the.",
      link: "",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <>
      <Box cssClasses={["home-content"]}>
        <div id="home" className="home-section text-center container">
          <Box cssClasses={["col-xl-8", "col-lg-10", "m-auto"]}>
            <p className="text-shadow font-size-bg mt-4" data-aos="zoom-in">
              We help crypto & NFT brands go viral
            </p>
            <p
              className="font-size-md-1 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </Box>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button cssClasses={["mt-4"]} text="Let’s Talk" />
          </div>
          <Flex direction="row" justifyContent="center">
            <Box cssClasses={["col-md-10", "mt-3", "col-12"]}>
              <div data-aos="fade-up" data-aos-delay="500">
                <Image src={HeroImage} width="100%" />
              </div>
            </Box>
          </Flex>
        </div>
        <Box cssClasses={["container", "position-relative"]}>
          {/* <Image src={Bg3} cssClasses={["background-3"]} /> */}
          <div
            id="aboutus"
            className="about-section bg-2 border-r-20 position-relative"
          >
            {/* <Image src={Bg4} cssClasses={["background-4"]} /> */}
            <Flex direction="row" justifyContent="between" alignItems="center">
              <Box cssClasses={["col-lg-5"]}>
                <p className="section-title" data-aos="fade-up">
                  About Us
                </p>
                <p
                  className="mt-4 font-size-md-3 opacity-color"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                  <br />
                  <br /> If you are going to use a passage of Lorem Ipsum, you
                  need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All the Lorem Ipsum generators on the
                  Internet tend to repeat predefined chunks as necessary, making
                  this the first true generator on the Internet.
                </p>
              </Box>
              <Box cssClasses={["col-lg-1"]} />
              <Box cssClasses={["col-lg-6", "mt-4", "mt-lg-0"]}>
                <Flex
                  direction="row"
                  justifyContent="justify-between"
                  alignItems="flex-end"
                  styles={{ margin: "0 -12px" }}
                >
                  {about.map((about, index) => (
                    <About
                      key={index}
                      index={index}
                      icon={about.icon}
                      num={about.num}
                      desc={about.desc}
                      col={about.col}
                      color={about.color}
                    />
                  ))}
                </Flex>
              </Box>
            </Flex>
          </div>
        </Box>
        <div id="services" className="section container">
          <p className="section-title text-center" data-aos="fade-up">
            Services
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Flex
              cssClasses={["mt-4", "pt-4"]}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {serviceTabs.map((tab, index) => (
                <Tab
                  key={index}
                  tab={tab.tab}
                  id={tab.id}
                  activeTab={activeTab}
                  setActiveTab={(id) => setActiveTab(id)}
                />
              ))}
            </Flex>
          </div>
          <Flex
            cssClasses={["mt-4", "pt-4"]}
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
            styles={{ margin: "0 -16px" }}
          >
            {services.map((service, index) => (
              <Service
                key={index}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
                index={index}
              />
            ))}
          </Flex>
        </div>
        <div id="customers" className="section container">
          <Box
            cssClasses={[
              "bg-2",
              "p-4",
              "border-r-20",
              "position-relative",
              "m-auto",
              "col-md-12",
              "col-10",
            ]}
          >
            <Image src={BitcoinImg} cssClasses={["bitcoin-img"]} />
            <Image src={EthImg} cssClasses={["eth-img"]} />
            <Image src={Star1} cssClasses={["star1-img"]} />
            <Image src={Star2} cssClasses={["star2-img"]} />
            <Box cssClasses={["py-xxl-4"]}>
              <p className="section-title2 text-center" data-aos="fade-up">
                Our Customers
              </p>
              <Flex
                direction={"row"}
                justifyContent="center"
                alignItems="center"
                cssClasses={["py-4"]}
              >
                {clients.map((client, index) => (
                  <Box
                    key={index}
                    cssClasses={[
                      "text-center",
                      "client-content",
                      "my-xxl-4",
                      "my-2",
                      "py-xxl-2",
                    ]}
                  >
                    <div data-aos="zoom-in">
                      <Image cssClasses={["client"]} src={client.image} />
                    </div>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </div>
        <div id="words" className="section container">
          <p className="section-title text-center" data-aos="zoom-in">
            Words from our Clients
          </p>
        </div>
        <div id="blogs" className="section container">
          <p className="section-title text-center" data-aos="flip-left">
            Latest Blogs
          </p>
          <Box cssClasses={["mt-4", "pt-4", "m-auto", "col-10", "col-md-12"]}>
            <Slider
              {...{
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                nextArrow: <SliderArrow direction="next" />,
                prevArrow: <SliderArrow direction="prev" />,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ],
              }}
            >
              {blogs.map((blog, index) => (
                <Blog
                  key={index}
                  img={blog.image}
                  title={blog.title}
                  desc={blog.desc}
                  link={blog.link}
                  index={index}
                />
              ))}
            </Slider>
          </Box>
          <Box cssClasses={["pt-4"]}>
            <Button
              text="Read all blogs"
              outline
              cssClasses={["mt-4", "m-auto", "d-flex", "font-size-sm-1"]}
              styles={{ padding: "20px 50px" }}
            />
          </Box>
        </div>
        <div id="contact" className="section container">
          <Box
            cssClasses={[
              "py-md-4",
              "position-relative",
              "contact-section",
              "border-r-20",
            ]}
          >
            <Image src={ContactBg} cssClasses={["contact-bg"]} />
            <Box cssClasses={["px-md-4", "py-4"]}>
              <Flex direction={"row"} justifyContent="center">
                <Box cssClasses={["col-lg-7", "col-11"]}>
                  <p className="section-title2 text-center" data-aos="fade-up">
                    Contact Us
                  </p>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <Box
                      cssClasses={[
                        "border-gradient contact-form",
                        "p-4",
                        "mt-4",
                        "w-100",
                        "border-r-20",
                      ]}
                    >
                      <Flex
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          cssClasses={[
                            "col-md-6",
                            "col-12",
                            "pe-xxl-3",
                            "pe-md-2",
                          ]}
                        >
                          <Box>
                            <label className="font-size-md-4">Name</label>
                            <input
                              placeholder="Enter your name here"
                              type="text"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">Name</label>
                            <input
                              type="text"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">
                              Contact Number
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your mobile number here"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                        </Box>
                        <Box
                          cssClasses={[
                            "col-md-6",
                            "col-12",
                            "ps-xxl-3",
                            "ps-md-2",
                            "pt-4",
                            "pt-md-0",
                          ]}
                        >
                          <Box>
                            <label className="font-size-md-4">Email</label>
                            <input
                              placeholder="Enter your email here"
                              type="email"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">Name</label>
                            <input
                              type="text"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                          <Box cssClasses={["mt-4"]}>
                            <label className="font-size-md-4">Website</label>
                            <input
                              type="text"
                              placeholder="Type your website link here"
                              className="custom-input mt-3 font-size-sm-2"
                            />
                          </Box>
                        </Box>
                      </Flex>
                      <Button
                        text="Send"
                        cssClasses={["d-flex", "mt-4", "m-auto"]}
                      />
                    </Box>
                  </div>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
        <div id="schedule" className="section container">
          <p className="section-title2 text-center" data-aos="fade-up">
            Let’s discuss about your project
          </p>
          <Flex
            direction={"row"}
            justifyContent="space-between"
            cssClasses={["mt-4", "bg-2", "schedule-section", "border-r-20"]}
          >
            <div
              className="col-lg-5"
              data-aos-delay="200"
              data-aos="flip-right"
            >
              <span className="font-nulshock font-size-sm-1 gradient-text">
                Dentamarketing
              </span>
              <p className="font-size-lg-2 fw-700 mt-xxl-4 mt-2">
                Discovery call
              </p>
              <Flex
                direction={"row"}
                alignItems="center"
                justifyContent="start"
                cssClasses={["pt-xxl-4", "pt-2", "mt-2"]}
              >
                <Image src={ClockImg} width="40px" />
                <span className="font-size-md-2 ms-3 mt-1">45 min</span>
                <p className="font-size-md-3 opacity-color mt-xxl-4 mt-3">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                  <br />
                  <br /> If you are going to use a passage of Lorem Ipsum, you
                  need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All the Lorem Ipsum generators.
                </p>
              </Flex>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos-delay="200"
              data-aos="flip-left"
            >
              <Image src={Union} width="100%" height="100%" />
            </div>
          </Flex>
        </div>
        <div id="email" className="container position-relative">
          <Box cssClasses={["contact-bg1"]}>
            <Box cssClasses={["contact-bg1-overlay"]} />
            <Image src={ContactBg1} width="100%" />
          </Box>
          <Box cssClasses={["email-section", "col-md-8", "m-auto"]}>
            <p className="section-title2 text-center" data-aos="fade-up">
              Get growth hacking tips!
            </p>
            <p
              className="font-size-md-3 text-center mt-4 pb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Flex
                cssClasses={[
                  "col-md-6",
                  "mt-4",
                  "m-auto",
                  "border-r-10",
                  "email-form",
                  "p-1",
                ]}
                direction="row"
                justifyContent="space-between"
              >
                <form className="d-flex w-100">
                  <input
                    placeholder="Enter your email here"
                    type="email"
                    className="w-100 text-start border-0 font-size-sm-2 ps-2"
                  />
                  <Button text="Subscribe" cssClasses={["font-size-sm-2"]} />
                </form>
              </Flex>
            </div>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Home;
