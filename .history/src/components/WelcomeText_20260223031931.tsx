import { motion } from "framer-motion"

const WelcomeText = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="text-primary-color text-xl lg:text-3xl font-medium"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {text}
    </motion.p>
  )
}

export default WelcomeText