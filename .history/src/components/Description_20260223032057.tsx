import { motion } from "framer-motion"

const Description = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="text-white text-xl mt-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  )
}

export default Description