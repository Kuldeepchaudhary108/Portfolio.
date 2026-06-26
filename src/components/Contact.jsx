import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/choudharykuldeep5511@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: "Portfolio contact form message",
            _captcha: false,
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="reveal relative mt-10 border-4 border-black bg-white p-6 shadow-hard-xl sm:mt-12 sm:p-8 md:p-12">
        <div className="absolute -left-2 -top-8 rotate-[-5deg] border-4 border-black bg-neo-yellow px-4 py-2 shadow-hard sm:-left-6 sm:-top-10 sm:px-6">
          <span className="text-lg font-black sm:text-2xl">
            START A PROJECT
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-[0.9] sm:text-5xl lg:text-6xl">
              Let's
              <br />
              Talk
              <br />
              Code.
            </h2>
            <p className="mb-8 max-w-md font-mono text-base text-gray-600 sm:text-lg">
              I am currently available for freelance work and open to full-time
              opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-neo-black text-white">
                  <i className="ri-mail-line text-xl" />
                </div>
                <a
                  href="mailto:choudharykuldeep5511@gmail.com"
                  className="cursor-hover break-all text-base font-bold hover:bg-neo-blue sm:text-xl"
                >
                  choudharykuldeep5511@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-neo-black text-white">
                  <i className="ri-map-pin-line text-xl" />
                </div>
                <span className="text-base font-bold sm:text-xl">
                  Remote / Earth
                </span>
              </div>
            </div>
          </div>

          {status === "success" ? (
            <div className="border-2 border-black bg-gray-50 p-4 text-center sm:p-6">
              <div className="py-14 sm:py-20">
                <i className="ri-checkbox-circle-fill mb-4 block text-6xl text-neo-green" />
                <h3 className="text-xl font-black uppercase sm:text-2xl">
                  Transmission Received
                </h3>
                <p className="mt-2 font-mono text-sm">
                  Message sent to choudharykuldeep5511@gmail.com. I will reach
                  out shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="space-y-6 border-2 border-black bg-gray-50 p-4 sm:p-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label className="mb-1 font-mono text-xs font-bold uppercase">
                  Identity
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="NAME / COMPANY"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cursor-hover border-2 border-black bg-white p-3 font-bold transition-all focus:bg-neo-yellow focus:outline-none focus:shadow-hard-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-mono text-xs font-bold uppercase">
                  Coordinates
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cursor-hover border-2 border-black bg-white p-3 font-bold transition-all focus:bg-neo-yellow focus:outline-none focus:shadow-hard-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-mono text-xs font-bold uppercase">
                  Transmission
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="PROJECT DETAILS..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="cursor-hover resize-none border-2 border-black bg-white p-3 font-bold transition-all focus:bg-neo-yellow focus:outline-none focus:shadow-hard-sm"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-hover neo-button w-full border-2 border-black bg-neo-blue py-4 text-lg font-black text-white shadow-hard transition-all hover:-translate-y-1 hover:bg-neo-black hover:shadow-none sm:text-xl"
              >
                {status === "sending" ? "TRANSMITTING..." : "TRANSMIT DATA"}
              </button>
              {status === "error" ? (
                <p className="font-mono text-sm font-bold text-red-600">
                  Delivery failed. Try again or email
                  choudharykuldeep5511@gmail.com directly.
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
