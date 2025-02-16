import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);  // Loads the slim version of tsparticles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },  // Ensure it stays in the background
        particles: {
          number: { value: 100, density: { enable: true, area: 1000 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: 2, random: true },
          move: { speed: 0.3, direction: "none", random: true, straight: false },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        background: { color: "#0d0d2b" },  // Dark theme background
      }}
    />
  );
};

export default StarBackground;
