import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 -z-50">
      <div className="relative h-screen overflow-y-hidden">
        {/* Sky (Layer 1) */}
        <div
          className="absolute inset-0 w-full h-screen"
          style={{
            backgroundImage: "url('/assets/city 1/1.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Far Buildings (Layer 2) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/city 1/2.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Mid Buildings 1 (Layer 3) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/city 1/3.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mid Buildings 2 (Layer 4) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/city 1/4.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Foreground (Layer 5) */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/city 1/5.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />

        {/* Transition Gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#030412] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default ParallaxBackground;
