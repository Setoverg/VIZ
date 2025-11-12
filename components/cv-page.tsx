"use client"

import { Mail, Linkedin, Globe, Download, Award, Code, Heart, Briefcase, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-12 print:pt-0 print:pb-0">
      <div className="container mx-auto px-4 max-w-5xl print:px-0 print:max-w-full">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary p-8 print:p-4 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)",
                }}
              ></div>
            </div>

            <div className="relative flex items-center gap-6 print:gap-3">
              <div className="w-28 h-28 print:w-20 print:h-20 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-white">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me_AlexLekarev-mE28PWk2JMKk4Dv56gH1S8sKMgwbRl.jpg"
                  alt="Alex Lekarev"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>

              <div className="flex-1">
                <h1 className="text-4xl print:text-2xl font-bold mb-2 print:mb-1">Alex Lekarev</h1>
                <p className="text-xl print:text-sm mb-3 print:mb-2 text-white/90">
                  Lead 3D Visualization Artist & Generalist
                </p>

                <div className="flex flex-wrap gap-4 print:gap-2 text-sm print:text-[8px]">
                  <a href="mailto:contact@tovizy.com" className="flex items-center gap-1 hover:underline">
                    <Mail className="w-4 h-4 print:w-2 print:h-2" />
                    contact@tovizy.com
                  </a>
                  <a href="https://tovizy.com" className="flex items-center gap-1 hover:underline">
                    <Globe className="w-4 h-4 print:w-2 print:h-2" />
                    tovizy.com
                  </a>
                  <a href="https://www.linkedin.com/in/tovizy/" className="flex items-center gap-1 hover:underline">
                    <Linkedin className="w-4 h-4 print:w-2 print:h-2" />
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/tovizystudio/" className="flex items-center gap-1 hover:underline">
                    <Instagram className="w-4 h-4 print:w-2 print:h-2" />
                    Instagram
                  </a>
                  <a
                    href="https://www.behance.net/AlexanderLekarev"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Globe className="w-4 h-4 print:w-2 print:h-2" />
                    Behance
                  </a>
                </div>
              </div>

              <div className="print:hidden">
                <Button onClick={handlePrint} className="bg-white text-primary hover:bg-white/90 gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="p-8 print:p-3 border-b border-gray-200">
            <p className="text-sm print:text-[9px] cv-bio text-gray-700 leading-relaxed print:leading-tight">
              Highly skilled 3D Visualization Artist with over 12 years of experience creating stunning, photorealistic
              exterior and interior visualizations for architectural projects worldwide. Expert in full-cycle project
              development from modeling to post-processing, with advanced proficiency in AI-enhanced workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 print:grid-cols-3 gap-0">
            {/* Left Column - 2 columns width */}
            <div className="md:col-span-2 print:col-span-2 border-r border-gray-200">
              {/* Work Experience */}
              <div className="p-8 print:p-3 border-b border-gray-200">
                <h2 className="text-xl print:text-xs font-bold mb-4 print:mb-2 flex items-center gap-2 text-primary">
                  <Briefcase className="w-5 h-5 print:w-3 print:h-3" />
                  Work Experience
                </h2>

                <div className="space-y-4 print:space-y-2">
                  <div>
                    <div className="flex justify-between items-start mb-1 print:mb-0">
                      <h3 className="font-bold text-base print:text-[9px] cv-job-title">
                        Lead 3D Visualization Artist
                      </h3>
                      <span className="text-xs print:text-[7px] text-gray-600 whitespace-nowrap">2013 - Present</span>
                    </div>
                    <p className="text-sm print:text-[8px] cv-job-location text-primary font-medium mb-2 print:mb-1">
                      Freelance • USA, Italy, Singapore
                    </p>
                    <ul className="list-disc list-inside text-xs print:text-[7px] text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                      <li className="cv-job-bullet">
                        Leading full-cycle visualization projects from modeling to post-processing
                      </li>
                      <li className="cv-job-bullet">Creating photorealistic renderings and cinematic animations</li>
                      <li className="cv-job-bullet">Managing complex projects with multiple revisions</li>
                      <li className="cv-job-bullet">Integrating AI tools for enhanced post-processing quality</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-1 print:mb-0">
                      <h3 className="font-bold text-base print:text-[9px] cv-job-title">3D Rendering Artist</h3>
                      <span className="text-xs print:text-[7px] text-gray-600 whitespace-nowrap">2020 - 2023</span>
                    </div>
                    <p className="text-sm print:text-[8px] cv-job-location text-primary font-medium mb-2 print:mb-1">
                      Douglas Stratton Design Group • Asheville, NC
                    </p>
                    <ul className="list-disc list-inside text-xs print:text-[7px] text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                      <li className="cv-job-bullet">High-end architectural visualizations for luxury projects</li>
                      <li className="cv-job-bullet">Expertise in photorealistic lighting and materials</li>
                      <li className="cv-job-bullet">Collaborative team environment and client management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="p-8 print:p-3">
                <h2 className="text-xl print:text-xs font-bold mb-4 print:mb-2 flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5 print:w-3 print:h-3" />
                  Featured Projects
                </h2>

                <div className="grid grid-cols-3 gap-2 print:gap-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%283%29-jM8TafIgHFxG7gXxoTDypSVfXi1eb3.jpg"
                    alt="Restaurant Interior"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%284%29-p8SFkgPq4R9wCBkxapqqUczymFZB4G.jpg"
                    alt="Elegant Restaurant"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%285%29-DTKJbHgegPXor4VJ6YYC3FyG4aegm5.jpg"
                    alt="Living Room"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%281%29-o5ckknK7kVdvDUf6Yg6SEgQ77Jacw0.jpg"
                    alt="Mountain Interior"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%282%29-ktiKj0AVNzVdc1jP6jHSGmJlzbK9il.jpg"
                    alt="Modern Exterior"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/For_CV%20%286%29-KfPY1Bb5Gvmor5NYrx7EkmYRiiw4UN.jpg"
                    alt="Kitchen Design"
                    className="w-full aspect-square object-cover rounded-md print:rounded-sm"
                  />
                </div>

                <p className="text-xs print:text-[7px] text-gray-600 mt-3 print:mt-1 text-center">
                  View portfolio: <span className="text-primary font-medium">tovizy.com</span>
                </p>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 print:gap-1 mt-4 print:mt-2">
                  <div className="text-center p-2 print:p-1 bg-primary/5 rounded-md print:rounded-sm">
                    <div className="text-2xl print:text-xs font-bold text-primary">150+</div>
                    <div className="text-[10px] print:text-[6px] text-gray-600">Projects</div>
                  </div>
                  <div className="text-center p-2 print:p-1 bg-primary/5 rounded-md print:rounded-sm">
                    <div className="text-2xl print:text-xs font-bold text-primary">12+</div>
                    <div className="text-[10px] print:text-[6px] text-gray-600">Years</div>
                  </div>
                  <div className="text-center p-2 print:p-1 bg-primary/5 rounded-md print:rounded-sm">
                    <div className="text-2xl print:text-xs font-bold text-primary">98%</div>
                    <div className="text-[10px] print:text-[6px] text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-2 print:p-1 bg-primary/5 rounded-md print:rounded-sm">
                    <div className="text-2xl print:text-xs font-bold text-primary">Global</div>
                    <div className="text-[10px] print:text-[6px] text-gray-600">Reach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 1 column width */}
            <div>
              {/* Skills */}
              <div className="p-8 print:p-3 border-b border-gray-200">
                <h2 className="text-xl print:text-xs font-bold mb-4 print:mb-2 flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5 print:w-3 print:h-3" />
                  Technical Skills
                </h2>

                <div className="space-y-3 print:space-y-1">
                  {[
                    { name: "3ds Max", level: 95 },
                    { name: "V-Ray/Corona", level: 95 },
                    { name: "Photoshop", level: 90 },
                    { name: "SketchUp", level: 85 },
                    { name: "AI Tools", level: 85 },
                    { name: "Unreal Engine", level: 75 },
                    { name: "ZBrush", level: 70 },
                    { name: "Substance", level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 print:mb-0">
                        <span className="text-xs print:text-[7px] cv-skill-name font-medium">{skill.name}</span>
                        <span className="text-[10px] print:text-[6px] cv-skill-percent text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 print:h-1 bg-gray-200 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div className="p-8 print:p-3 border-b border-gray-200">
                <h3 className="text-base print:text-[9px] cv-section-title font-bold mb-3 print:mb-1 text-primary">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {[
                    "Arch Visualization",
                    "Interior Design",
                    "Exterior Rendering",
                    "3D Modeling",
                    "Lighting",
                    "Animation",
                    "Post-Production",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] print:text-[6px] cv-expertise-tag px-2 py-1 print:px-1 print:py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="p-8 print:p-3 border-b border-gray-200">
                <h3 className="text-base print:text-[9px] cv-section-title font-bold mb-3 print:mb-1 text-primary">
                  Languages
                </h3>
                <div className="space-y-2 print:space-y-1">
                  <div className="flex justify-between">
                    <span className="text-xs print:text-[7px] cv-language-name font-medium">English</span>
                    <span className="text-xs print:text-[7px] cv-language-level text-gray-600">Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs print:text-[7px] cv-language-name font-medium">Russian</span>
                    <span className="text-xs print:text-[7px] cv-language-level text-gray-600">Native</span>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="p-8 print:p-3">
                <h3 className="text-base print:text-[9px] cv-section-title font-bold mb-3 print:mb-1 text-primary flex items-center gap-1">
                  <Heart className="w-4 h-4 print:w-2 print:h-2" />
                  Interests
                </h3>
                <div className="text-xs print:text-[7px] text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                  <p className="cv-interest-item">• Stoner rock musician</p>
                  <p className="cv-interest-item">• Fitness & strength training</p>
                  <p className="cv-interest-item">• Freediving enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
