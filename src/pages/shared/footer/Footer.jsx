import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../../../Components/Logo/Logo";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="middle footer flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between text-white py-16">
        <nav>
          <Logo></Logo>
          <p className="font-medium text-lg">
            Our platform manages students, schedules, and fees effortlessly.{" "}
            <br />
            Your complete solution for smart tuition management.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Tuitions</a>
          <a className="link link-hover">Tutors</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Information</h6>
          <p>Dhaka, Bangladesh</p>
          <p>Phone: +880 123 456 789</p>
          <p>
            Email: <a className="link link-hover">tuitionmanagerbd@gmail.com</a>
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaXTwitter size={28}></FaXTwitter>
            </a>
            <a href="#">
              <FaFacebook size={28}></FaFacebook>
            </a>
            <a href="#">
              <FaInstagram size={28}></FaInstagram>
            </a>
          </div>
        </nav>
      </footer>
      <p className="copyright text-white text-center pb-8 md">
        © 2025 tuition ManagerBD — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
