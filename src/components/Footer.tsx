import { AiFillCalculator, AiOutlineTwitter, AiFillFacebook, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-neutral text-neutral-content">
      <div className="flex items-center">
        <AiFillCalculator size={32} />
        <p className="ml-2">Copyright © 2022 - All right reserved</p>
      </div> 
      <div className="grid-flow-col gap-4 place-self-center justify-self-end">
        <a href="https://github.com/torippy1024" target="_blank" rel="noopener noreferrer"><AiFillGithub size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;