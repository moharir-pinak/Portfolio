// 'use client';

// import { motion } from "framer-motion";
// import Image from "next/image";
// import technologiesData from "../data/technologies.json";

// export default function TechnologySlider() {
//   return (
//     <div className="overflow-hidden w-full">
//       <motion.div
//         className="flex"
//         initial={{ x: 0 }}
//         animate={{ x: "-100%" }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         style={{ display: "flex" }}
//       >
//         {/* Duplicate the data to create a continuous scrolling effect */}
//         {[...technologiesData, ...technologiesData].map((tech, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 mx-4"
//             style={{ minWidth: "20%" }} // Adjust to control the number of items in view
//           >
//             <Image src={tech.icon} alt={tech.name} width={100} height={100} />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import Image from "next/image";
import technologiesrev from "../data/technologiesrev.json";

export default function ReverseTechnologySlider() {
  return (
    <div className="overflow-hidden py-8 rounded-lg">
      <motion.div
        className="flex"
        initial={{ x: "100%" }} // Start from the right
        animate={{ x: "0%" }} // Move to the left
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...technologiesrev, ...technologiesrev].map((tech, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image 
              src={tech.icon} 
              alt={tech.name} 
              width={64} 
              height={64}
              className="filter invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
