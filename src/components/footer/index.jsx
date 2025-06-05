import { useState } from "react";
import { RiDiscordFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import "../index.scss";

export const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"top"}>
        <div className={"brand"}>FaceFusion</div>
        <ul className={"socials"}>
          <li>
            <a href="#">
              <RiTwitterXFill />
            </a>
          </li>
          <li>
            <a href="#">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href="#">
              <RiDiscordFill />
            </a>
          </li>
        </ul>
      </div>
      <div className={"bottom"}>
        <p>© {new Date().getFullYear()} FaceFusion. All rights reserved.</p>
      </div>
    </footer>
  );
};

const faqData = [
  {
    question: "Is FaceFusion free to use?",
    answer: "Yes! All basic features are completely free. Premium templates may require credits.",
  },
  {
    question: "Are my photos stored or shared?",
    answer: "No. All photos are processed temporarily and automatically deleted after generation.",
  },
  {
    question: "Can I use it on mobile?",
    answer: "Absolutely! The site is mobile-optimized for iOS and Android browsers.",
  },
  {
    question: "Can I swap multiple faces at once?",
    answer: "Currently, only one face can be swapped at a time. Multi-face support is coming soon!",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={"faq-wrapper"}>
      <h2>Frequently Asked Questions</h2>
      <div className={"accordion"}>
        {faqData.map((item, i) => (
          <div key={i} className={"item"}>
            <div className={"question"} onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <span className={"icon"}>{activeIndex === i ? "−" : "+"}</span>
            </div>
            {activeIndex === i && <div className={"answer"}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

