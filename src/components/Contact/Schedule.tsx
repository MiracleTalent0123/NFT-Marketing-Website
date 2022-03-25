import Flex from "../common/Flex";
import Image from "../common/Image";
import ClockImg from "../../assets/images/clock.png";
import Union from "../../assets/images/union.png";
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
    </>
  );
};

export default Schedule;
