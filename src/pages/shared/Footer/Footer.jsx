import React from "react";
import { NavLink } from "react-router";
import Logo from "../Navbar/Logo";
import FooterLogo from "./FooterLogo"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-neutral">
      <div className="footer sm:footer-horizontal text-neutral-content py-10 max-w-[1600px] w-11/12 mx-auto">
      <aside>
        <p>
        <FooterLogo></FooterLogo>
          <br />
          Find Your Next Home. Where Comfort Meets Convenience.
        </p>
        <p className="mt-2 text-sm">
          📞 Phone:{" "}
          <a href="tel:+880123456789" className="link link-hover">
            +880 1234-56789
          </a>
        </p>
        <p className="text-sm">
          📧 Email:{" "}
          <a href="mailto:support@roommate.com" className="link link-hover">
            support@build-mate.com
          </a>
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Links</h6>
        
        <NavLink to='/' className="link link-hover">Home</NavLink>
        <NavLink to='/apartment' className="link link-hover">Apartments</NavLink>
        <NavLink to='/contact-us' className="link link-hover">Contact Us</NavLink>
        <NavLink to='/terms-and-conditions' target="_blank" className="link link-hover">Terms and Conditions</NavLink>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/jahid_sabbir1" target="_blank">
            <FaTwitter className="h-6 w-6"/>
          </a>
          <a href="https://github.com/jahidhasansabbir/" target="_blank">
            <FaGithub className="h-6 w-6"></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/jahid-hasan-sabbir/" target="_blank">
            <FaLinkedin className="h-6 w-6"></FaLinkedin>
          </a>
        </div>
      </nav>
    </div>
    </footer>
  );
};

export default Footer;
