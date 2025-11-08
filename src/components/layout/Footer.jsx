import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["About Us", "Contacts", "Shippings", "Refferal Program"];

  const categories = ["Plants", "Tools", "Fertilizers", "Pesticies"];

  const socials = [FaFacebook, FaInstagram, FaTwitter, FaYoutube];
  return (
    <div className="bg-primary text-white">
      <div className="content-container">
        <div className="space-y-10 lg:flex items-center justify-between">
          <div>
            <p className="semi-bold-3xl-text">TriGardening</p>
            <p className="text-lg">Your Slogan goes here</p>
          </div>
          <div>
            <p className="semi-bold-2xl-text">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="semi-bold-2xl-text">Categories</p>
            <ul className="space-y-2">
              {categories.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="semi-bold-2xl-text">Connect With Us</p>
            <ul className="flex items-center gap-5">
              {socials.map((Item, index) => {
                return Item && <Item className="mobile-nav-icon" key={index} />;
              })}
            </ul>
            <p className="semi-bold-2xl-text">support@trigardening.com</p>
            <p className="semi-bold-2xl-text">Call Now</p>
            <p className="text-lg">+088123456789</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white my-2"></div>
        <p className="text-center">
          © {new Date().getFullYear()} TriGardening. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
