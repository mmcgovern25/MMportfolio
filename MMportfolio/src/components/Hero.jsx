import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import bluetech from "../assets/bluetech2.jpg";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <img src={bluetech} className="absolute inset-0 w-full h-full object-cover">
    </img>
      <div
        className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4169E1]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#4169E1]'>Matt</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100`}>
            I'm a front-end developer, <br className='md:block hidden' />
            with a passion for blending design with technical code.
          </p>

        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
