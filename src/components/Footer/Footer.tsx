import amazonPayLog from "../../assets/images/amazon-pay.png";
import americanExpressLog from "../../assets/images/American-Express-Color.png";
import mastercard from "../../assets/images/mastercard.webp";
import visaLogo from "../../assets/images/visaLogo.png";
import paypal from "../../assets/images/paypal.png";
import apple from "../../assets/images/get-apple-store.png";
import google from "../../assets/images/get-google-play.png";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
export default function Footer() {
  const footerSections = [
    {
      id: 1,
      title: "Let Us Help You",
      className: "md:justify-self-start",
      items: [
        { id: 1, text: "Help", link: "/help" },
        { id: 2, text: "Shipping & Delivery", link: "/shipping" },
        { id: 3, text: "Returns & Replacements", link: "/returns" },
        { id: 4, text: "Recalls and Product Safety Alerts", link: "/recalls" },
      ],
    },
    {
      id: 2,
      title: "Support",
      className: "md:justify-self-center",
      items: [
        { id: 1, text: "Phone: +2(0) 1120 850", link: "tel:+201120847850" },
        {
          id: 2,
          text: "Email: Ma@gmail.com",
          link: "mailto:ma@gmail.com",
        },
        { id: 3, text: "Address:Cairo, Egypt", link: "#" },
      ],
    },
    {
      id: 3,
      title: "About Us",
      className: "lg:justify-self-end",
      items: [
        { id: 1, text: "Privacy Policy", link: "/privacy" },
        { id: 2, text: "Events", link: "/events" },
        { id: 3, text: "Our Stop", link: "/shop" },
      ],
    },
  ];
  const socialLinks = [
    {
      id: 1,
      icon: "fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=100005360088833",
    },
    {
      id: 2,
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/in/mahmoud-saeed-8890092b5/",
    },
    {
      id: 3,
      icon: "fa-instagram",
      link: "https://www.instagram.com/mahmoud_sa3eed_/",
    },
    {
      id: 4,
      icon: "fa-google",
      link: "mailto:mahmoudsaeed0112074@gmail.com",
    },
  ];
  const payment = [
    { src: amazonPayLog, alt: "Amazon Pay" },
    { src: americanExpressLog, alt: "American Express" },
    { src: paypal, alt: "Paypal" },
    { src: visaLogo, alt: "Visa" },
    { src: mastercard, alt: "Mastercard" },
  ];
  const getApp = [
    { src: apple, alt: "App Store" },
    { src: google, alt: "Google Play" },
  ];
  const terms = [
    { text: "Privacy Policy", link: "/privacy" },
    { text: "Terms of Use", link: "/terms" },
  ];
  return (
    <footer className="pt-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center justify-items-star">
          {footerSections.map((section) => (
            <div key={section.id} className={section.className}>
              <h2 className="text-2xl cursor-default font-semibold mb-2 text-text">
                {section.title}
              </h2>
              <ul className="cursor-pointer">
                {section.items.map((item) => (
                  <li key={item.id} className={`${style.listItem} w-fit`}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
              {section.id === 3 && (
                <>
                  <h3 className="text-2xl cursor-default font-semibold mb-2 text-text">
                    Follow Us Now:
                  </h3>
                  <ul className="flex gap-3 cursor-pointer">
                    {socialLinks.map((social) => (
                      <li
                        key={social.id}
                        className="size-8 rounded-full border hover:bg-main duration-200 transition-colors hover:text-white border-black/50 flex justify-center items-center"
                      >
                        <Link
                          to={social.link}
                          target="_blank"
                          className={`self-center fa-brands ${social.icon}`}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border-b border-gray-400 pb-4">
          <h2 className="text-2xl cursor-default font-semibold text-text">
            Are you new with us?
          </h2>
          <p className="my-3 text-text cursor-default">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="flex flex-col md:flex-row gap-4 ">
            <input
              type="text" 
              className="flex-grow shadow-none  outline-none p-2 rounded-md bg-white" 
              placeholder="Email.."
            />
            <Button className="">Subscribe</Button>
          </div>
        </div>

        <div className="flex justify-between items-center my-8">
          <div className="flex-wrap flex gap-2 items-center">
            <span className="me-3 text-text cursor-default font-semibold">
              Payment Partners
            </span>
            {payment.map((payment, index) => (
              <img
                key={index}
                src={payment.src}
                alt={payment.alt}
                className="w-16"
              />
            ))}
          </div>

          <div className="flex-wrap flex gap-2 items-center">
            <span className="me-3 text-text cursor-default font-semibold">
              Get App Now
            </span>
            <div className="sm:flex">
              {getApp.map((store, index) => (
                <img
                  key={index}
                  src={store.src}
                  alt={store.alt}
                  className="w-28"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D242D] text-white/60 p-6">
        <div className="container flex justify-between">
          <div className="flex space-x-4 cursor-default">
            {terms.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="hover:text-white/80 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="cursor-default">
            Copyright © {new Date().getFullYear()}, Outreach Monks. All rights
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
