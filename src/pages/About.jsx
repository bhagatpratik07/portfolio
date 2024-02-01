export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 font-medium">
      <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
      <p className="mb-4">
        Hey 👋! I&apos;m a{" "}
        <span className="text-white">Full stack developer</span> from India,
        passionate about exploring new tech adventures and solving cool
        challenges. I&apos;ve got a solid grasp of both front-end and back-end
        development, and I particularly enjoy working with{" "}
        <span className="text-white">Reactjs, Nodejs and MongoDB</span>
      </p>
      <p className="mb-4">
        I&apos;m all about collaboration, learning, and contributing to projects
        that truly make a difference. Let&apos;s build something amazing
        together! 🚀
      </p>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue "
      >
        <a
          href="https://drive.google.com/file/d/1DwuE91B4MAB5CxSpTc0n_C95Sl1Zt-6h/view?usp=sharing"
          className="text-white no-underline mb-4 bg-blue-500 "
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </button>
    </div>
  );
}
