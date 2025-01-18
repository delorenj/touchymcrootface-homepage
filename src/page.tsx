import { Terminal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline" className="border-cyan-500 text-cyan-400">
            Introducing TouchyMcRootFace
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Sudo with Style
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Use TouchyMcRootFace instead of typing your password every time you need sudo access. 
            Simple. Secure. Seamless.
          </p>
          
          {/* Command Copy Section */}
          <div className="w-full max-w-xl bg-gray-900 rounded-lg p-4 mt-8">
            <div className="flex items-center justify-between bg-gray-800 rounded px-4 py-2">
              <code className="font-mono text-cyan-400">brew install touchymcrootface</code>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-fuchsia-500">Goodbye</span> sudo password
                <br />
                <span className="text-cyan-400">Hello</span> TouchyMcRootFace
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Terminal className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Simple Installation</h3>
                    <p className="text-gray-400">One command to install, zero configuration needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
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
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl -z-10" />
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20at%2011.41.33%E2%80%AFAM-Xd5zjo4LlaNNVdVW1jutscL7uhXZn5.png"
                  alt="TouchyMcRootFace sudo prompt"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get Started in Seconds</h2>
            <p className="text-gray-400">Three simple steps to sudo enlightenment</p>
          </div>
          <div className="grid gap-8">
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="font-semibold text-xl mb-2">Install via Homebrew</h3>
              <div className="bg-black rounded p-3">
                <code className="text-cyan-400">brew install touchymcrootface</code>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="font-semibold text-xl mb-2">Run the Setup</h3>
              <div className="bg-black rounded p-3">
                <code className="text-fuchsia-400">touchymcrootface-setup</code>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="font-semibold text-xl">Enjoy TouchyMcRootFace with sudo!</h3>
              <p className="text-gray-400">That's it! Now just use TouchyMcRootFace whenever sudo asks for authentication.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} TouchyMcRootFace. Open source and free forever.</p>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                GitHub
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
