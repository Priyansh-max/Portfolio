import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { BriefcaseIcon, CodeBracketIcon, HomeIcon, DocumentTextIcon, EnvelopeIcon, PlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaRupeeSign } from 'react-icons/fa';
import { BsBuildingsFill } from 'react-icons/bs';
import { IoLaptopOutline } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import devConnect from '../../assets/devConnect.png';
import pmis from '../../assets/pmis.png';
import niu from '../../assets/niu.jpg';
import sixD from '../../assets/sixD.png';
import findMyTeam from '../../assets/findmyteam.png';
import iitkgp from '../../assets/iitkgp.png';
import profile from '../../assets/profile.jpeg';

const Home = () => {
    const [flippedCards, setFlippedCards] = useState({});
    
    const handleCardFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    
    const workExperience = [
        {
          company: "SixD Engineering Solutions Pvt. Ltd.",
          position: "Application Developer",
          period: "Nov 2024 - Present",
          location: "Noida, India",
          type: "Internship",
          mode: "On-site",
          description: "As a developer, I am responsible for developing projects for clients. Currently working on a project for a client to build a VR application for elevator safety training for there technicians.",
          logo: sixD,
          website: "https://sixdindia.com/"
        },
        {
          company: "National Ilan University",
          position: "Machine Learning Researcher",
          period: "May-2024 - Aug-2024",
          location: "Yilan, Taiwan",
          type: "Internship",
          mode: "On-site",
          description: "Worked on Computer Vision and Image Processing involving ball tracking in table tennis. Improved the overallaccuracy of the model by 27% over previous models.",
          logo: niu,
          website: "https://www.niu.edu.tw/en/"
        },
        {
          company: "IIT Kharagpur",
          position: "Python Developer",
          period: "May-2023 - July-2023",
          location: "Kharagpur, India",
          type: "Internship",
          mode: "Hybrid",
          description: "Built python scripts for data visualization and analysis which helped increase the efficiency significantly.",
          logo: iitkgp,
          website: "http://www.iitkgp.ac.in/"
        }
      ];
    
    const projects = [
      {
        title: "FindMyTeam",
        description: "FindmyTeam is a project which allows developers to make a team for any kind of project. Post an idea and users can apply over it. Then the poster could select the best team for the project.",
        image: findMyTeam,
        technologies: ["React", "Expressjs", "Supabase","ChartJS", "Gemini" , "Javascript"],
        github: "https://github.com/Priyansh-max/FindMyCoFounder",
        live: "https://chess-trainer-demo.com",
        status: "In Progress"
      },
      {
        title: "PMIS",
        description: "PMIS is a platform which allows university placement cell to manage student record and data in a efficient manner eliminating manual paper and excel sheet.",
        image: pmis,
        technologies: ["React", "PostgreSQL", "Expressjs", "Prisma" , "Jwt" , "JavaScript"],
        github: "https://github.com/Priyansh-max/PlacementManagementApp-PIMS-",
        live: "https://smart-home-demo.com",
        status: "In Progress"
      },
      {
        title: "HireLink",
        description: "HireLink is a web3 platform which allows users to hire a developer for hourly bases and to have a 1 on 1 video call",
        image: devConnect,
        technologies: ["Next.js", "Blockchain", "Solidity", "WebRTC" , "Typescript"],
        github: "https://github.com/Priyansh-max/HireLink",
        live: "https://recipe-finder-demo.com",
        status: "In Progress"
      }
    ];
    
    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full bg-white"
        >
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <Element name="about" className="px-4 py-8 mt-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="flex flex-col md:flex-row items-center justify-between gap-8"
                  whileInView={{ 
                    opacity: [0, 1],
                    y: [20, 0]
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="profile-image">
                    <div className="profile-image-inner">
                      <motion.img
                        src={profile}
                        alt="Priyansh Agarwal"
                        className="w-full h-full object-cover rounded-md"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left max-w-xl"> 
                    <h1 className="text-6xl mb-4 text-gray-800">Hello, I'm Priyansh</h1>
                    <p className="text-xl mb-2 text-gray-600">
                      A creative developer who loves building beautiful and functional projects.
                      I combine technical skills with artistic flair to create unique digital experiences.
                    </p>
                    <motion.a
                        href="mailto:priyanshagarwal3381@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-black hover:text-red-500 mb-2 relative group/email text-lg"
                      >
                        <span className="relative">
                          priyanshagarwal3381@gmail.com
                          <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-red-600 origin-left transform scale-x-0 transition-transform duration-300 group-hover/email:scale-x-100"></span>
                        </span>
                    </motion.a>
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                      <motion.a
                        href="https://github.com/Priyansh-max"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <FaGithub className="w-8 h-8" />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/priyanshh.ez/?igsh=ODA3aTl1OGRxOWlv#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <FaInstagram className="w-8 h-8" />
                      </motion.a>
                      <motion.a
                        href="https://x.com/Priyanshh91"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <FaXTwitter className="w-8 h-8" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/priyanshagarwal01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-800 hover:text-gray-600"
                      >
                        <FaLinkedin className="w-8 h-8" />
                      </motion.a>

                    </div>
                  </div>
                </motion.div>
              </Element>
    
              {/* Work Experience Section */}
              <Element name="experience" className="px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-center mb-16">Work Experience</h2>
                <div className="space-y-8">
                  {workExperience.map((work, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ 
                        opacity: [0, 1],
                        y: [20, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-gradient-to-r from-pastel-pink to-pastel-purple p-[1px] rounded-lg"
                    >
                      <div className="gap-4 items-start bg-white p-6 rounded-lg">
                        <div className='flex flex-row mb-4'>
                          <div className="flex-shrink-0 flex items-center gap-4">
                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-md mr-4">
                              {work.logo ? (
                                <motion.a
                                  href={work.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full h-full"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <img
                                    src={work.logo}
                                    alt={`${work.company} logo`}
                                    className="w-full h-full object-contain p-2 transition-transform duration-200"
                                  />
                                </motion.a>
                              ) : (
                                <BriefcaseIcon className="w-full h-full p-3 text-pastel-purple" />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-3xl font-normal text-gray-800">{work.position}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                              <span className="font-semibold">{work.company}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{work.period}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <BsBuildingsFill className="w-4 h-4" />
                                <span>{work.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <IoLaptopOutline className="w-4 h-4" />
                                <span>{work.mode}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaMapMarkerAlt className="w-4 h-4" />
                                <span>{work.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <p className="text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Element>
    
              {/* Projects Section */}
              <Element name="projects" className="px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-5xl text-center mb-16">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ 
                        opacity: [0, 1],
                        y: [20, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="polaroid group perspective"
                    >
                      <div className={`relative preserve-3d duration-500 ${flippedCards[index] ? '[transform:rotateY(180deg)]' : ''}`}>
                        {/* Front of card */}
                        <div className="backface-hidden">
                          <div className="relative aspect-video bg-gray-200 mb-4 rounded-lg overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-3xl text-gray-800">{project.title}</h3>
                            <div className="relative group/tooltip">
                              <motion.button
                                onClick={() => handleCardFlip(index)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="focus:outline-none"
                              >
                                <InformationCircleIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                              </motion.button>
                              <span className="absolute -top-2 left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 whitespace-nowrap">
                                Click to see details
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-pastel-pink to-pastel-purple bg-opacity-10 text-gray-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === "Completed" ? "bg-green-500/90 text-white" :
                              project.status === "In Progress" ? "bg-yellow-500/90 text-white" :
                              "bg-blue-500/90 text-white"
                            }`}>
                              {project.status}
                            </span>
                            <div className="flex items-center gap-3">
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-colors"
                              >
                                <FaGithub className="w-5 h-5" />
                              </motion.a>
                              {project.status !== "In Progress" && (
                                <motion.a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-2 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-colors"
                                >
                                  <FaExternalLinkAlt className="w-4 h-4" />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-white rounded-lg p-6">
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">About {project.title}</h3>
                                <motion.button
                                  onClick={() => handleCardFlip(index)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="p-1 hover:bg-gray-100 rounded-full"
                                >
                                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </motion.button>
                              </div>
                              <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-12">
                  <RouterLink 
                    to="/projects" 
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <PlusIcon className="w-8 h-8 text-gray-600 group-hover:text-pastel-purple transition-colors duration-300" />
                    </motion.div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      View More Projects
                    </span>
                  </RouterLink>
                </div>
              </Element>
    
              {/* Footer with Social Links */}
              <footer className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-6 mb-8">
                  <div className="relative group">
                    <motion.a
                      href="https://github.com/Priyansh-max/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      <AiFillStar className="w-6 h-6" />
                    </motion.a>
                    
                    {/* Star Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
                      Star this repo
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                  </div>

                  {/* <div className="relative group">
                    <motion.a
                      href="upi://pay?pa=7486949525@ptsbi@upi&pn=Priyansh%20Agarwal&cu=INR"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      <FaRupeeSign className="w-5 h-5" />
                    </motion.a> */}
                    
                    {/* Rupee Tooltip */}
                    {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
                      Support my work with UPI
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                  </div> */}
                </div>
                <p className="footer-text text-center text-gray-600">Made with ❤️ by Priyansh Agarwal</p>
              </footer>
            </div>
        </motion.main>
    );
};

export default Home; 
