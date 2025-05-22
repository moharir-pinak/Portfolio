// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import projectsData from "../data/projects.json"

// export default function ProjectList() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
//       {projectsData.map((project, index) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <Card className="bg-gray-950 border-gray-700 hover:border-orange-400 transition-colors">
//             <CardHeader>
//               <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
//               <CardDescription className="text-gray-400">{project.description}</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-300 mb-4">{project.details}</p>
//               <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors">
//                 <Link href={`/ProjectDetailDialog/${project.id}`}>View Details</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// 'use client'

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import projectsData from "../data/projects.json"
// import ProjectDetailDialog from "./projectdetailsdialogue"

// export default function ProjectList() {
//   const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
//         {projectsData.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <Card className="bg-gray-950 border-gray-700 hover:border-orange-400 transition-colors">
//               <CardHeader>
//                 <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
//                 <CardDescription className="text-gray-400">{project.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-300 mb-4">{project.details.slice(0, 100)}...</p>
//                 <Button 
//                   className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors"
//                   onClick={() => setSelectedProject(project)}
//                 >
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//       {selectedProject && (
//         <ProjectDetailDialog
//           project={selectedProject}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </>
//   )
// }

'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import Card from "./card";
import ProjectDetailDialog from "./projectdetailsdialogue";

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              title={project.title} 
              subtitle={project.description} 
              description={`${project.details.slice(0, 100)}...`} 
              image={project.images && project.images.length > 0 ? project.images[0] : undefined}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
