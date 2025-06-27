import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="md:mb-[150px] md:mt-14 sm:mt-16 md:mx-20 sm:mx-4"
    >
      <div className="grid md:grid-cols-4 gap-6 mt-5 p-6">
        {/* Testimonial Card 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative text-black shadow-2xl p-6 bg-white rounded-lg md:col-span-2"
        >
          <div className="flex justify-start space-x-4 relative z-10">
            <div>
              <h2 className="font-bold text-xl">vaibuavi</h2>
              <h3 className="text-lg opacity-50">★★★★</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Marketing Head, Sammy bakers
          </p>
          <p className="mt-4 md:text-2xl opacity-70">
            No more pixelation or awkward cropping! AspectAI AI-powered resizing
            ensures my brand videos always look professional on any platform.
          </p>
        </motion.div>

        {/* Testimonial Card 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative bg-white text-black p-8 rounded-lg shadow-2xl"
        >
          <div className="flex justify-start space-x-4 relative z-10">
            <div>
              <h2 className="font-bold text-xl">Anmol Dureja</h2>
              <h3 className="text-md opacity-50">★★★★</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Founder & CEO, BharatSave
          </p>
          <p className="mt-4 md:text-2xl opacity-70">
            SmartTags nailed it! The AI-generated hashtags helped my video go
            viral on Instagram. More engagement, less effort. Love it!
          </p>
        </motion.div>

        {/* Testimonial Card 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative bg-white text-black p-8 rounded-lg md:row-span-2 shadow-2xl"
        >
          <div className="flex justify-start space-x-4 relative z-10">
            <div>
              <h2 className="font-bold text-xl">Manasvi Patil</h2>
              <h3 className="text-lg opacity-96">★★★★★</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Co-founder, MiniatureArtz
          </p>
          <p className="mt-4 md:text-4xl opacity-70">
            AspectAI streamlined our social media workflow. We resize, optimize,
            and tag videos effortlessly—engagement has skyrocketed!
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative text-black p-8 rounded-lg md:col-span-2 sm:hidden md:block"
        >
          <marquee scrollAmount={15}>
            <p className="text-9xl opacity-50">Testimonials</p>
          </marquee>
        </motion.div>

        {/* Testimonial Card 4 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative bg-white text-black p-8 rounded-lg md:row-span-2 md:row-start-2 md:col-start-1 shadow-2xl"
        >
          <div className="flex justify-start space-x-4 relative z-10">
            <div>
              <h2 className="font-bold text-xl">Mohit Laddha</h2>
              <h3 className="text-lg opacity-50">★★★★</h3>
            </div>
          </div>
          <p className="relative z-10 mt-4 font-bold text-xl leading-tight">
            Founder, Boxyman
          </p>
          <p className="mt-4 md:text-2xl opacity-70">
            AspectAI saved me hours of editing! One click, and my videos are
            perfectly resized for Instagram, TikTok, and YouTube. Absolute
            game-changer!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
