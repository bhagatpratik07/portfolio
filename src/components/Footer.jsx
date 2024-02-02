import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="max-w-3xl mx-auto p-3 font-medium">
      <hr className="my-4" />
      <footer className="text-center">
        <a
          href="https://twitter.com/bhagatpratik07"
          target="_blank"
          rel="noreferrer"
          className="mr-4 mb-2 inline-flex items-center"
        >
          <FaXTwitter size={20} className="mr-2" />
          <span className="text-blue-600">@bhagatpratik07</span>
        </a>

        <a
          href="https://github.com/bhagatpratik07/"
          target="_blank"
          rel="noreferrer"
          className=" mr-4 mb-2 inline-flex items-center"
        >
          <FaGithub size={20} className="mr-2" />
          <span className="text-blue-600">@bhagatpratik07</span>
        </a>

        <a
          href="https://www.linkedin.com/in/pratik-bhagat07/"
          target="_blank"
          rel="noreferrer"
          className=" mr-4 mb-2 inline-flex items-center"
        >
          <FaLinkedin size={20} className="mr-2" />{" "}
          <span className="text-blue-600">@pratik-bhagat07</span>
        </a>
      </footer>
    </div>
  );
}
