import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };
  const handleOpen = () => {
    window.open("/AsifSidResume.pdf", "_blank");
  };
  return (
    <div className="max-w-[980px] mx-auto px-6 py-7">
      {/* Container for all boxes */}
      <div className="flex flex-col gap-6 md:flex-row" ref={ref}>
        {/* First box - PDF viewer */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={controls}
          whileInView="visible"
          className="bg-[#23232a] rounded-3xl mb-6 md:mb-0 overflow-hidden flex flex-col items-center justify-center p-6
                 w-full  sm:max-w-md md:max-w-lg "
        >
          <div className="flex flex-col items-center">
            {/* PDF icon or placeholder */}
            <svg
              className="w-16 h-16 mb-4 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M..." />
            </svg>
            <span className="mb-4 text-xl font-medium text-white">
              AsifSidResume.pdf
            </span>
            <button
              onClick={handleOpen}
              className="bg-[#A5B4FC] text-[#23232a] px-8 py-3 rounded-lg font-bold transition hover:bg-[#818cf8]"
            >
              Open
            </button>
          </div>
        </motion.div>

        {/* Second social box */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          className="flex-[1.5] flex flex-col gap-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.a
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              href="https://www.instagram.com/sid_asif_md?igsh=MXEzYjdybGdmaWtuYQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F3F1FB]  rounded-3xl md:h-[162px]">
                <img
                  src="/Home/Insta.png"
                  loading="lazy"
                  alt="Image 1"
                  className="object-cover w-full h-full transition duration-300 rounded-3xl hover:scale-105"
                />
              </div>
            </motion.a>
            <motion.a
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              href="https://wa.me/8604899882"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F3F1FB] rounded-3xl md:h-[162px]">
                <img
                  src="/Home/whatsapp.png"
                  alt="WhatsApp"
                  loading="lazy"
                  className="object-cover w-full h-full transition duration-300 rounded-3xl hover:scale-105"
                />
              </div>
            </motion.a>
            <motion.a
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              href="https://www.linkedin.com/in/md-asif-siddiqui-157497208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F3F1FB]  rounded-3xl md:h-[162px]">
                <img
                  src="/Home/LinkedIn_logo.png"
                  alt="Image 2"
                  loading="lazy"
                  className="object-cover w-full h-full transition duration-300 rounded-3xl hover:scale-105"
                />
              </div>
            </motion.a>
            <motion.a
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              href="https://github.com/SidAsif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#F3F1FB]  rounded-3xl md:h-[162px]">
                <img
                  src="/Home/github.png"
                  alt="Image 3"
                  loading="lazy"
                  className="object-cover w-full h-full transition duration-300 rounded-3xl hover:scale-105"
                />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMedia;
