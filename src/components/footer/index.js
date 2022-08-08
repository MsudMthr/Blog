import Contact from "./Contact";
import NewsLetter from "./NewsLetter";
import UsefulLink from "./UsefulLink";
const Footer = () => {
  return (
    <section className="flex min-h-[40vh] flex-col items-center justify-around bg-dark py-5 text-milkyWhite md:flex-row">
      <UsefulLink />
      <span className="h-0.5 w-8/12 bg-milkyWhite/30 md:hidden mb-1"></span>
      <NewsLetter />
      <span className="h-0.5 w-8/12 bg-milkyWhite/30 md:hidden mb-1"></span>
      <Contact />
    </section>
  );
};

export default Footer;
