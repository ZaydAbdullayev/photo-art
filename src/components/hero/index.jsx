import { useState } from "react";
import "../index.scss";
import { RiUploadCloudFill } from "react-icons/ri";

const exampleImgs = [
  "https://img.pica-cdn.com/image/aigc/7a68093af5a5045aa443530f7a723684.webp",
  "https://img.artguru-cdn.com/image/aigc/a2c41919289074a58332e664bf6ae672.webp",
  "https://img.pica-cdn.com/image/aigc/e38732a0944e067d94448a5aa1f1c92e.webp",
  "https://img.pica-cdn.com/image/aigc/9dc7fddce1ab421c516c5e10725e7542.webp",
  "https://img.pica-cdn.com/image/aigc/571ce914a8e56ec9ce087d2c40e5aaad.webp",
];

export const HeroUploadSection = () => {
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);

  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      side === "left" ? setLeftImage(imgURL) : setRightImage(imgURL);
    }
  };

  const selectExample = (src) => {
    setLeftImage(src);
  };

  return (
    <section id="upload" className="hero-wrapper">
      <div className="sidebar">
        <h3>Examples</h3>
        <div className="thumbList">
          {exampleImgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`example ${i}`}
              className="thumbnail"
              onClick={() => selectExample(src)}
            />
          ))}
        </div>
      </div>

      <div className="previewArea">
        <div className="image-pair">
          <div className="faceColumn">
            <label className="upload-label">
              {leftImage ? (
                <img src={leftImage} alt="Left" />
              ) : (
                <span>
                  <RiUploadCloudFill />
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "left")}
                hidden
              />
            </label>
          </div>

          <div className="faceColumn">
            <label className="upload-label">
              {rightImage ? (
                <img src={rightImage} alt="Right" />
              ) : (
                <span>
                  <RiUploadCloudFill />
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "right")}
                hidden
              />
            </label>
          </div>
        </div>

        <button className="generateBtn">Generate</button>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className={"aboutWrapper"}>
      <div className={"container"}>
        <h2>About Our AI</h2>
        <p>
          Our cutting-edge AI uses state-of-the-art facial recognition and
          blending techniques to deliver stunningly accurate face swaps. Whether
          you're just having fun or exploring new creative ideas, our system
          adapts to your inputs with precision and speed.
        </p>
        <p>
          We prioritize <strong>user privacy</strong>. All uploads are processed
          in real-time and automatically deleted — nothing is stored on our
          servers. Your creativity is yours alone.
        </p>
        <div className={"features"}>
          <div className={"feature"}>🤖 Advanced Neural Engine</div>
          <div className={"feature"}>🔒 Secure & Private Processing</div>
          <div className={"feature"}>⚡ Instant Results, No Waiting</div>
        </div>
      </div>
    </section>
  );
};
