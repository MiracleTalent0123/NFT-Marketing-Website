import Flex from "../common/Flex";
import Image from "../common/Image";
import Box from "../common/Box";
import Button from "../common/Button";
import ClockImg from "../../assets/images/clock.png";
import Union from "../../assets/images/union.png";
import ContactBg1 from "../../assets/images/contact_bg.png";
import Bg8 from "../../assets/images/Ellipse_51.png";
import Bg9 from "../../assets/images/Ellipse_53.png";

const Schedule = () => {
  return (
    <>
      <div id="schedule" className="section position-relative">
        <Image src={Bg8} cssClasses={["background-11"]} />
        <div className="container">
          <p
            className="section-title2 text-center pb-xxl-4 pb-2"
            data-aos="fade-up"
          >
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
              className="col-lg-6 mt-4 mt-lg-0 position-relative"
              data-aos-delay="200"
              data-aos="flip-left"
            >
              <Image src={Bg9} cssClasses={["background-12"]} />
              <Image src={Union} width="100%" height="100%" />
            </div>
          </Flex>
        </div>
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
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators.
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
    </>
  );
};

export default Schedule;
