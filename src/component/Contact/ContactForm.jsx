import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
const ContactForm = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const [currentFAQ, setCurrentFAQ] = useState(0);

  const faqs = [
    {
      question: "Can you build full-stack applications?",
      answer: "Yes, I work on both frontend and backend. 🧩",
    },
    {
      question: "Do you have experience with team collaboration?",
      answer:
        "Yes, I’ve worked with cross-functional teams on several projects. 🤝",
    },
    {
      question: "How many years of experience do you have?",
      answer: "I've currently more than 1.5 years. ⏳",
    },
    {
      question: "Do you contribute to open source?",
      answer: "Yes, I enjoy contributing when time allows. 🌐",
    },
    {
      question: "Do you offer freelance services?",
      answer: "Yes, I take up freelance projects occasionally. 💼",
    },
  ];

  const handleNext = () => {
    setCurrentFAQ((prev) => (prev + 1) % faqs.length);
  };

  const handlePrev = () => {
    setCurrentFAQ((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.6,
      },
    },
  };
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = formRef.current.email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_esc0stb",
        "template_t3m67qd",
        formRef.current,
        "jVupPFX0R-v8YbNnl"
      )
      .then(
        (result) => {
          toast.success(
            "Thanks for your message! I will get back to you soon."
          );
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send the message. ");
        }
      );
  };
  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6 pt-6 pb-28">
      <Toaster />
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            className="p-5 md:p-10 bg-black text-white flex-1 rounded-3xl h-[250px] md:h-[350px]"
            variants={boxVariant}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Contact Me</h1>
            <p className="text-sm font-normal leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Let&apos;s work
              together to bring your ideas to life!
            </p>

            <div className="flex items-center mt-4">
              <img
                src="/Home/email_icon.png"
                alt="Email Icon"
                className="w-6 h-4 object-cover mr-2"
              />
              <a
                href="mailto:asifsidcontact@gmail.com"
                className="hover:underline text-base"
              >
                asifsidcontact@gmail.com
              </a>
            </div>

            <div className="flex items-center mt-4">
              <img
                src="/Home/telephone_icon.png"
                alt="Phone Icon"
                className="w-6 h-6 object-cover mr-2"
              />
              <a
                href="tel:+91 8604899882"
                className="hover:underline text-base"
              >
                +91 8604899882
              </a>
            </div>
          </motion.div>

          {/* Second box - FAQ Section */}
          <motion.div
            className="p-5 md:py-8 md:px-5 bg-[#F3F1FB]  text-black flex-1 h-[250px] md:h-auto rounded-3xl relative"
            variants={boxVariant}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/Contact/FaqImg.png"
                  alt="FAQ Icon"
                  className="w-8 h-8"
                />
                <h2 className="text-lg md:text-2xl font-bold ml-4">
                  FAQ&apos;s
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex items-center">
                <button
                  onClick={handlePrev}
                  className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-md mr-2"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-md"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ Content */}
            <div>
              <h3 className="text-sm font-semibold">
                {faqs[currentFAQ].question}
              </h3>
              <p className="text-2xl font-bold mt-2 max-w-[300px]">
                {faqs[currentFAQ].answer}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Third box - Contact Form */}
        <motion.div
          className="p-5 md:p-10 bg-[#F3F1FB]  flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 pb-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full py-3 px-4 text-sm rounded-3xl text-[#333]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full py-3 px-4 text-sm text-[#333] rounded-3xl"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pb-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full py-3 px-4 text-sm text-[#333] rounded-3xl"
                  placeholder="86XXXXXX"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 w-full py-3 px-4 text-sm text-[#333] rounded-3xl "
                  placeholder="ex.Design project"
                  required
                />
              </div>
            </div>

            <div className="pb-3">
              <label className="block text-sm font-semibold text-black mb-1">
                Leave me a message
              </label>
              <textarea
                name="message"
                className="mt-1 w-full py-4 px-4 rounded-3xl text-[#333]"
                rows="4"
                placeholder="Please write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 px-4 rounded-3xl hover:bg-[#333] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
