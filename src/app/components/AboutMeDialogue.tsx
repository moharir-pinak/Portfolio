import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

export default function AboutMeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors">
          About Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] bg-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-orange-400">About Me</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src="/assets/coder.svg"
              alt="Pinak Moharir"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <DialogDescription className="text-gray-300">
              <p className="mb-4">
                
                Hi, I'm Pinak Moharir, a passionate MERN stack developer with a keen eye for creating
                elegant, efficient, and user-friendly web applications. With a strong foundation in
                MongoDB, Express.js, React, and Node.js, I specialize in building full-stack
                applications that are both performant and scalable.
            
             
                My journey in web development started with a fascination for creating interactive user
                interfaces, which led me to dive deep into modern JavaScript frameworks and backend
                technologies. I'm constantly learning and adapting to new technologies to stay at the
                forefront of web development.
              
              </p>
              <Button asChild className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors">
                <a href="/path-to-your-cv.pdf" download>
                  Download CV
                </a>
              </Button>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}