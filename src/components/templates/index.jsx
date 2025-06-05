// src/components/TemplatesSection/TemplatesSection.jsx
import { TbFaceId } from "react-icons/tb";
import "../index.scss";
import { RiUploadCloudFill } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";

const imgs = [
  "https://oficialbac.com.br/cdn/shop/products/BAC21_2.jpg?v=1681937165",
  "https://cea.vtexassets.com/arquivos/ids/58410395/top-cropped-halter-neck-de-poliamida-off-white-1028226-Off_White_1.jpg?v=638405751972130000",
  "https://img.pica-cdn.com/image/aigc/f69a05f8e2724173565daa1d0625c167.webp",
  "https://img.pica-cdn.com/image/aigc/098abf58e0740707b6895d18719164a0.webp",
  "https://img.pica-cdn.com/image/aigc/dd9c961862dba5af874c3e6bd6b31a65.webp",
  "https://img.pica-cdn.com/image/aigc/b5b034233845dae902572567b3100143.webp",
  "https://img.pica-cdn.com/image/aigc/630d240da80bcb63b4b5750ebd3baba6.webp",
  "https://img.pica-cdn.com/image/aigc/489af1be76714a2f2a55e50c29dc71a1.webp",
  "https://img.pica-cdn.com/image/aigc/b50e0aa8b73266fc2216a01b5ac684ee.webp",
  "https://img.pica-cdn.com/image/aigc/9e3d67a06d941a2b6713a4c38e206904.webp",
  "https://img.pica-cdn.com/image/aigc/3861a3758b53329f1f51161e19c5d503.webp",
  "https://img.pica-cdn.com/image/aigc/2b52aa71d77e477588b2456eb9429254.webp",
  "https://img.pica-cdn.com/image/aigc/e3a4127804880f4f94448ec6dbe79003.webp",
];

const templates = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Template ${i + 1}`,
  image: imgs[i % imgs.length],
  className: i % 3 === 0 ? "tall" : i % 3 === 1 ? "big" : "wide",
}));

export const TemplatesSection = () => {
  return (
    <section id="templates" className={"temp-wrapper"}>
      <h2>Choose a Template</h2>
      <div className={"grid"}>
        {templates.map((tpl) => (
          <div key={tpl.id} className={"card " + tpl.className}>
            <img src={tpl.image} alt={tpl.title} />
            <div className={"overlay"}>
              <p>{tpl.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={"loadMore"}>Load More</button>
    </section>
  );
};

const steps = [
  {
    title: "1. Upload Your Photo",
    description: "Choose a portrait or use one of our examples.",
    icon: <RiUploadCloudFill />,
  },
  {
    title: "2. Select a Face",
    description: "Add your face or someone else’s to swap with the template.",
    icon: <TbFaceId />,
  },
  {
    title: "3. Click Swap",
    description: "AI blends the features and generates your final image.",
    icon: <FaWandMagicSparkles />,
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className={"steps-wrapper"}>
      <h2>How It Works</h2>
      <div className={"steps"}>
        {steps.map((step, i) => (
          <div key={i} className={"stepCard"}>
            <div className={"icon"}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
