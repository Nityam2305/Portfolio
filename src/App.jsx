import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, Database, Award, GraduationCap, Briefcase } from 'lucide-react'
import './App.css'

function App() {
  const skills = {
    languages: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['TensorFlow', 'OpenCV', 'Flask', 'Streamlit'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'Linux', 'Jupyter Notebook']
  }

  const projects = [
    {
      title: "Driver Drowsiness Detection using AI",
      description: "Built a real-time driver alert system using CNNs, OpenCV, and TensorFlow. Achieved 89.96%+ accuracy and integrated audio-visual alerts.",
      tech: ["TensorFlow", "OpenCV", "Python", "CNN"]
    },
    {
      title: "Landmark Descriptor (GenAI Tourist Assistant)",
      description: "Created an app using Gemini API to describe landmarks from images. Included multilingual support, map links, Wikipedia integration, and voice narration.",
      tech: ["Gemini API", "Python", "AI", "Computer Vision"]
    },
    {
      title: "Crop Recommendation System using Deep Learning",
      description: "Designed a neural network with TensorFlow to predict optimal crops using soil and climate inputs. Deployed with a Streamlit UI, achieving high accuracy over 22 crop classes.",
      tech: ["TensorFlow", "Streamlit", "Deep Learning", "Python"]
    }
  ]

  const experiences = [
    {
      title: "Altair Data Science Master Virtual Internship",
      period: "Jan 2025 – Mar 2025",
      description: "Worked on real-world machine learning and data science projects. Part of EduSkills Cohort 11."
    },
    {
      title: "Google Cloud Generative-AI Virtual Internship",
      period: "Oct 2024 – Dec 2024",
      description: "Trained models on Vertex AI and built cloud-based intelligent apps. Part of EduSkills Cohort 10."
    },
    {
      title: "Google AI-ML Virtual Internship",
      period: "July 2024 – Sep 2024",
      description: "Developed AI solutions in computer vision and NLP using deep learning. Part of EduSkills Cohort 9."
    }
  ]

  const certifications = [
    "Google Cloud Career Launchpad Cybersecurity",
    "Google Cloud Computing Foundations",
    "E-Box: Certified in C, Java, Python, DS, DBMS, HTML, JS"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Nityam Upadhyay</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4">
              AI/ML Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Building intelligent solutions with machine learning and computer vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                I'm a passionate AI/ML developer currently pursuing B.Tech in Computer Science Engineering with specialization in AI & ML at Jawaharlal Nehru Technological University, Hyderabad. With a CGPA of 8.3/10, I'm dedicated to creating innovative solutions using cutting-edge technology.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                My expertise spans across machine learning, computer vision, and deep learning, with hands-on experience in developing real-world applications that solve practical problems.
              </p>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Graduating May 2026</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">B.Tech in CSE (AI & ML)</h4>
                      <p className="text-sm text-slate-600">JNTU Hyderabad • CGPA: 8.3/10</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Intermediate (MPC)</h4>
                      <p className="text-sm text-slate-600">Sri Chaitanya Jr Kalasala • 944/1000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-green-600" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{exp.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                  <p className="font-medium text-slate-700">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="mailto:nityamupadhyay005@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              nityamupadhyay005@gmail.com
            </a>
            <a href="tel:+918801104373" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              +91 880-110-4373
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-slate-400 text-center">
        <p>&copy; 2025 Nityam Upadhyay. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

