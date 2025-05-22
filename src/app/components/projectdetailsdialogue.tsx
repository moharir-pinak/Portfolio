import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectDetailDialogProps {
  project: {
    id: number
    title: string
    description: string
    details: string
    images?: string[]
    demoLink?: string
    sourceLink?: string
  }
  onClose: () => void
}

export default function ProjectDetailDialog({ project, onClose }: ProjectDetailDialogProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[725px] bg-gray-950 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2 text-orange-400">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-300">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {project.images && project.images.length > 0 && (
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}
          <p className="text-gray-300">{project.details}</p>
          <div className="flex space-x-4">
            {project.demoLink && (
              <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.sourceLink && (
              <Button asChild variant="outline" className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600">
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}