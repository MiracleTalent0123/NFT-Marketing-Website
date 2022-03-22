import Flex from "../common/Flex";
import Image from "../common/Image";
import Box from "../common/Box";
import Button from "../common/Button";
import ContactBg from "../../assets/images/contact.png";
import Bg7 from "../../assets/images/Ellipse_50.png";

const ContactForm = () => {
  return (
    <div id="contact" className="section position-relative">
      <Image src={Bg7} cssClasses={["background-10"]} />
      <div className="container">
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
    </div>
  );
};

export default ContactForm;
