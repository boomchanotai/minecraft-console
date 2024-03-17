import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-8 py-4 text-center">
      Create & Design by{" "}
      <Link to="https://github.com/boomchanotai" className="underline">
        BoomChanotai
      </Link>
      .
    </footer>
  );
};

export default Footer;
