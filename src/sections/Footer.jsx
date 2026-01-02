import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space max-w-7xl mx-auto">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-3 text-white">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5 brightness-0 invert transition-colors hover:text-white" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 July. All rights reserved.</p>
    </section>
  );
};

export default Footer;
