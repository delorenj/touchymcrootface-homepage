import { Terminal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
          >
            <Badge variant="outline" className="border-cyan-500 text-cyan-400">
              Introducing TouchyMcRootFace
            </Badge>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Sudo with Style
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Use TouchyMcRootFace instead of typing your password every time you need sudo access. 
            Simple. Secure. Seamless.
          </motion.p>
          
          {/* Command Copy Section */}
          <motion.div 
            className="w-full max-w-xl mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur-md" />
            <div className="relative bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between bg-black rounded px-4 py-3">
                <motion.code 
                  className="font-mono text-lg text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  brew install touchymcrootface
                </motion.code>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/50 hover:bg-fuchsia-500/30 hover:border-fuchsia-400 transition-all duration-200"
                    onClick={() => {
                      navigator.clipboard.writeText('brew install touchymcrootface');
                    }}
                  >
                    Copy
                  </Button>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-30"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-fuchsia-500">Goodbye</span> sudo password
                <br />
                <span className="text-cyan-400">Hello</span> TouchyMcRootFace
              </h2>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Terminal className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Simple Installation</h3>
                    <p className="text-gray-400">One command to install, zero configuration needed</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-fuchsia-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" strokeWidth="2" />
                      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Secure by Design</h3>
                    <p className="text-gray-400">Uses Apple's secure TouchyMcRootFace system</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl -z-10" />
              <motion.div 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2011.41.33%E2%80%AFAM-Xd5zjo4LlaNNVdVW1jutscL7uhXZn5.png"
                  alt="TouchyMcRootFace sudo prompt"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-3xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get Started in Seconds</h2>
            <p className="text-gray-400">Three simple steps to sudo enlightenment</p>
          </div>
          <div className="grid gap-8">
            {[
              { number: 1, title: "Install via Homebrew", code: "brew install touchymcrootface", color: "cyan" },
              { number: 2, title: "Run the Setup", code: "touchymcrootface-setup", color: "fuchsia" },
              { number: 3, title: "Enjoy TouchyMcRootFace with sudo!", description: "That's it! Now just use TouchyMcRootFace whenever sudo asks for authentication.", color: "purple" }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="bg-gray-900 rounded-lg p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute -left-4 -top-4 w-8 h-8 bg-${step.color}-500 rounded-full flex items-center justify-center font-bold`}>
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                {step.code ? (
                  <div className="bg-black rounded p-3">
                    <code className={`text-${step.color}-400`}>{step.code}</code>
                  </div>
                ) : (
                  <p className="text-gray-400">{step.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-400">© {new Date().getFullYear()} TouchyMcRootFace. Open source and free forever.</p>
              <p className="text-sm">
                <span className="text-gray-500">Made with</span>{' '}
                <a 
                  href="https://charm.sh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-200 font-medium"
                >
                  charm.sh
                </a>{' '}
                <span className="text-gray-500">magic ✨</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors duration-200">
                GitHub
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors duration-200">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

