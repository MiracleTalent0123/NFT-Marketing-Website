import Flex from "../../components/common/Flex";
import Box from "../../components/common/Box";
import Image from "../../components/common/Image";
import Button from "../../components/common/Button";
import HeroImage from "../../assets/images/hero_img.png";
import PeopleIcon from "../../assets/images/people.png";
import SearchStatusIcon from "../../assets/images/search-status.png";
import About from "../../components/about";
import Bg3 from "../../assets/images/bg3.png";
import Bg4 from "../../assets/images/bg4.png";

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

  return (
    <>
      <Box cssClasses={["home-content"]}>
        <div id="home" className="home-section text-center">
          <p className="text-shadow font-size-bg mt-4">
            We help crypto & NFT
            <br /> brands go viral
          </p>
          <p className="font-size-md-1 mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the <br /> majority have suffered alteration in some form, by
            injected humour
          </p>
          <Button cssClasses={["mt-4"]} text="Let’s Talk" />
          <Flex
            direction="row"
            cssClasses={["container"]}
            justifyContent="center"
          >
            <Box cssClasses={["col-md-10", "mt-3"]}>
              <Image src={HeroImage} width="100%" />
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
              <Box cssClasses={["col-md-5"]}>
                <p className="section-title">About Us</p>
                <p className="mt-4 font-size-md-3 opacity-color">
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
              <Box cssClasses={["col-md-1"]} />
              <Box cssClasses={["col-md-6"]}>
                <Flex
                  direction="row"
                  justifyContent="justify-between"
                  alignItems="flex-end"
                  styles={{ margin: "0 -12px" }}
                >
                  {about.map((about, index) => (
                    <About
                      key={index}
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
      </Box>
    </>
  );
};

export default Home;
