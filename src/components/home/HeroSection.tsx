// // "use client"
// // import React, { useRef, useState } from 'react'
// // import Image from 'next/image'

// // const HeroSection = () => {
// //   const videoRef = useRef<HTMLVideoElement>(null)
// //   const [isMuted, setIsMuted] = useState(true)

// //   const toggleMute = () => {
// //     if (videoRef.current) {
// //       videoRef.current.muted = !isMuted
// //       setIsMuted(!isMuted)
// //     }
// //   }

// //   return (
// //     <div className="relative w-full">
// //       <video
// //         ref={videoRef}
// //         width="100%"
// //         height="auto"
// //         autoPlay
// //         muted={isMuted}
// //         loop
// //       >
// //         <source src="/HOspital trailer.mp4" type="video/mp4" />
// //       </video>
// //       <div
// //         className="absolute top-2 right-2 cursor-pointer w-10 h-10"
// //         onClick={toggleMute}
// //         aria-label={isMuted ? 'Unmute video' : 'Mute video'}
// //       >
// //         {isMuted ? (
// //           <Image src="/mute.png" alt="Muted" width={40} height={40} />
// //         ) : (
// //           <Image src="/unmute.png" alt="Unmuted" width={40} height={40} />
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default HeroSection






// "use client"
// import React, { useRef, useState } from 'react'
// import { Volume2, VolumeX } from 'lucide-react'



// const HeroSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [isMuted, setIsMuted] = useState(true)

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted
//       setIsMuted(!isMuted)
//     }
//   }

//   return (
//     <div className="relative w-full h-screen">
//       {/* Video */}
//       <video
//         ref={videoRef}
//         className="w-full h-full object-cover"
//         autoPlay
//         muted={isMuted}
//         loop
//       >
//           <source src="/HOspital trailer.mp4" type="video/mp4" />
//       </video>

//       {/* Mute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 cursor-pointer"
//       >
//         {isMuted ? (
//           <VolumeX className="w-5 h-5" />
//         ) : (
//           <Volume2 className="w-5 h-5" />
//         )}
//       </button>

 
//     </div>
//   )
// }

// export default HeroSection


"use client";
import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full h-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/HOspital trailer.mp4" type="video/mp4" />
      </video>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </motion.div>
  );
};

export default HeroSection;
