import type { TitleSectionProp } from "../interfaces"
import { motion } from "framer-motion"

const TitleSection = ({ title }: TitleSectionProp) => {
  return (
    <motion.h2
      className="mx-auto lg:ml-0 w-fit
      text-xl lg:text-4xl text-primary-color font-semibold
      mb-4 lg:mb-9 border-b border-primary-color"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  )
}

export default TitleSection