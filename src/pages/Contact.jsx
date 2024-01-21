import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/GyiPkA5XIEO", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert(
            "Thanks for reaching out! I've received your message and will get back to you shortly."
          );
          setName("");
          setEmail("");
          setMessage("");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="max-w-3xl mx-auto px-8 font-medium">
      <div className=" p-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <p className=" mb-6">
          {" "}
          Want to get in touch? Fill out the form below or send me an email.{" "}
          <a
            href="mailto:bhagatpratik.2002@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 inline-block"
          >
            bhagatpratik.2002@gmail.com
          </a>{" "}
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="john@doe.com"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              placeholder="Enter your message..."
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>

          {error && <div className="text-red-600 mb-4">{error}</div>}

          <div className="formcarry-block">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
