'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import technologiesrev from "../data/technologiesrev.json"

export default function ReverseTechnologySlider() {
  return (
    <div className="overflow-hidden py-8 rounded-lg">
      <motion.div
        className="flex"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
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
  )
}