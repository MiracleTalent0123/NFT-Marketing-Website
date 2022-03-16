import Box from "./common/Box";
import Image from "./common/Image";

const About = ({
  icon,
  num,
  desc,
  col,
  color,
}: {
  icon: any;
  num: number;
  desc: string;
  col: number;
  color: string;
}) => {
  return (
    <Box cssClasses={[`col-sm-${col}`, "p-3", "col-12"]}>
      <Box
        cssClasses={[
          "border-gradient",
          "border-r-20",
          "p-xxl-4",
          "p-3",
          "bg-3",
          "w-100",
        ]}
        styles={{ backgroundColor: "rgba(17, 24, 55, 0.5)" }}
      >
        <Box
          cssClasses={[
            "about-icon",
            "p-2",
            "p-xxl-3",
            "border-r-10",
            "bg-1",
            "d-table",
          ]}
        >
          <Image src={icon} />
        </Box>
        <Box>
          <p className={`font-size-lg-2 fw-700 ${color}`}>{num}+</p>
        </Box>
        <p className="font-size-md-2">{desc}</p>
      </Box>
    </Box>
  );
};

export default About;
