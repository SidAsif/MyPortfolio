import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SocialMedia = () => {
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

  return (
    <div className="max-w-[980px] mx-auto px-6 py-7">
      {/* Container for all boxes */}
      <div className="flex flex-col md:flex-row gap-6" ref={ref}>
        {/* First box - PDF viewer */}
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={controls}
          whileInView="visible"
          className="bg-[#F3F1FB]  flex-[2] rounded-3xl mb-6 md:mb-0 overflow-hidden"
        >
          <iframe
            src="/myresume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            title="Resume PDF"
            className="w-full h-[350px] rounded-lg"
          ></iframe>
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
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-300"
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
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-300"
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
                  className="w-full h-full object-cover rounded-3xl  hover:scale-105 transition duration-300"
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
                  className="w-full h-full object-cover rounded-3xl  hover:scale-105 transition duration-300"
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
