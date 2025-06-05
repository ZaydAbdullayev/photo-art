// src/components/Navbar/Navbar.jsx
import { useEffect, useState } from "react";
import "../index.scss";

const navLinks = [
  { id: "upload", label: "Upload" },
  { id: "templates", label: "Templates" },
  { id: "how-it-works", label: "How it Works" },
  { id: "faq", label: "FAQ" },
];

export const Navbar = () => {
  const [active, setActive] = useState("upload");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"navbar"}>
      <div className={"logo"}>FaceFusion</div>
      <ul className={"links"}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={"actions"}>
        <a href="#" className={"appBtn"}>
          App Store
        </a>
        <div className={"userIcon"}>👤</div>
      </div>
    </nav>
  );
};


