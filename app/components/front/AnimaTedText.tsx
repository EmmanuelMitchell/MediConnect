"use client";
import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => (
  <TypeAnimation
    sequence={[
      "Book Your Therapist Session Now",
      1000, // Pause for 1 second
      "Find the Best Therapist for You",
      1000, // Pause for 1 second
      "Schedule Your Therapy Session Online",
      1000, // Pause for 1 second
      "Talk to a Licensed Therapist Today",
      1000, // Pause for 1 second
    ]}
    speed={50} // Typing speed
    style={{ fontSize: "2em" }}
    repeat={Infinity} // Infinite loop
  />
);

export default AnimatedText;
