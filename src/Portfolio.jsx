import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code, Palette, Monitor, Menu, X, Calendar, GraduationCap, Briefcase, ChevronDown, Star, Sparkles, Zap, Rocket, Eye, Heart, Github, Linkedin, Twitter, ArrowRight, CheckCircle, Coffee, Users, Award, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#6366f1",
      mixBlendMode: "normal",
      scale: 1
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      scale: 1
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
      scale: 1.2
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => {
    setCursorVariant("button");
    setIsHoveringButton(true);
  };
  const buttonLeave = () => {
    setCursorVariant("default");
    setIsHoveringButton(false);
  };

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Web Development",
      description: "Creating visually appealing and user-friendly websites with minimalistic or dynamic interactive designs. Ensuring seamless functionality across all devices with modern responsive design.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      delay: "0ms",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development",
      description: "Building robust, full-stack applications using Laravel, Angular, Node.js, and more. From simple CRUD applications to AI-powered systems and dynamic e-commerce platforms.",
      color: "from-emerald-500 to-green-400",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      delay: "200ms",
      features: ["Laravel & Angular", "AI Integration", "E-commerce", "Scalable Architecture"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description: "Crafting stunning graphic designs with attention to detail and creativity. Specializing in logos, marketing materials, and web graphics that align with your brand identity.",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      delay: "400ms",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Web Graphics"]
    }
  ];

  const skills = [
    { name: "React", level: 90, color: "bg-blue-500", category: "Frontend" },
    { name: "Laravel", level: 85, color: "bg-red-500", category: "Backend" },
    { name: "Node.js", level: 80, color: "bg-green-500", category: "Backend" },
    { name: "Angular", level: 75, color: "bg-purple-500", category: "Frontend" },
    { name: "UI/UX Design", level: 88, color: "bg-pink-500", category: "Design" },
    { name: "Graphic Design", level: 92, color: "bg-yellow-500", category: "Design" }
  ];

  const education = [
    {
      period: "July 2022 - Present",
      institution: "SIBA Campus",
      degree: "Undergraduate Student",
      description: "A unique liberal arts higher education institution set in a monastic and eco-friendly environment. Rooted in Buddhist principles, it aims to cultivate local and global leaders with strong academic and ethical foundations.",
      color: "from-blue-500 to-purple-600",
      achievements: ["Strong Academic Foundation", "Leadership Development", "Ethical Principles"]
    },
    {
      period: "Jan 2011 - August 2019",
      institution: "Previous Education",
      degree: "Secondary Education",
      description: "A multicultural institution that promotes the free exchange of ideas and diversity. Known for its rich traditions and innovative approach to excellence in education.",
      color: "from-emerald-500 to-blue-500",
      achievements: ["Multicultural Experience", "Innovation Focus", "Academic Excellence"]
    }
  ];

  const experience = [
    {
      period: "Oct 2024 - Present",
      position: "Peer Tutor",
      company: "SIBA Campus",
      description: "Started my internship as a peer tutor at my campus, where I assist lecturers with teaching and guide students to achieve a deeper understanding of their subjects.",
      color: "from-orange-500 to-red-500",
      responsibilities: ["Teaching Assistance", "Student Mentoring", "Curriculum Support", "Knowledge Transfer"]
    }
  ];

  const projects = [
    {
      title: "AI-Powered Web Application",
      description: "Developed a cutting-edge AI integration system with modern frameworks",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tech: ["React", "Node.js", "AI/ML", "MongoDB"],
      status: "Completed"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced features",
      image: "bg-gradient-to-br from-emerald-500 to-green-600",
      tech: ["Laravel", "Angular", "MySQL", "Stripe"],
      status: "In Progress"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand package including logo and marketing materials",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      tech: ["Illustrator", "Photoshop", "Figma", "After Effects"],
      status: "Completed"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      comment: "Isuru's attention to detail and creative approach made our project exceptional. The final result exceeded our expectations.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      comment: "Professional, reliable, and incredibly talented. Isuru transformed our vision into a stunning digital reality.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      comment: "The graphic design work was outstanding. Our brand identity perfectly captures our company's essence.",
      avatar: "ER",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Enhanced Custom Cursor */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        {isHoveringButton && (
          <motion.span 
            className="absolute inset-0 flex items-center justify-center text-black font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Floating Background Elements - More Dynamic */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-blue-400' :
              i % 4 === 1 ? 'bg-purple-400' :
              i % 4 === 2 ? 'bg-emerald-400' : 'bg-pink-400'
            } opacity-20`}
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 0.5 + Math.random()
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              filter: 'blur(4px)'
            }}
          />
        ))}
      </div>

      {/* Navigation - More Interactive */}
      <nav className={`fixed w-full top-0 z-40 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <span className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-500 ${
                  scrollY > 50 ? 'scale-90' : 'scale-100'
                } group-hover:scale-105`}>
                  Isuru Bandara
                </span>
                <motion.div 
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Education', 'Contact'].map((item) => (
                <motion.button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300 font-medium group"
                  whileHover={{ y: -2 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                    layoutId={`nav-underline-${item}`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-500 transition-all duration-300"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <X size={24} className="animate-spin" />
                ) : (
                  <Menu size={24} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/98 backdrop-blur-lg shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['Home', 'About', 'Services', 'Projects', 'Education', 'Contact'].map((item, index) => (
                  <motion.button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - More Dynamic */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-blue-400' :
                i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
              } opacity-30 mix-blend-screen`}
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: 0.5 + Math.random()
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
                transition: {
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              style={{
                width: `${50 + Math.random() * 150}px`,
                height: `${50 + Math.random() * 150}px`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Animated Avatar */}
            <motion.div 
              className="mb-8 relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500">
                <motion.div 
                  className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">IB</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <motion.div 
                className="absolute -top-3 -right-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-10 h-10 text-yellow-400 fill-current drop-shadow-lg" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-3 -left-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-cyan-400 fill-current" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Isuru Bandara
              </span>
            </motion.h1>
            
            {/* Role Badge */}
            <motion.div 
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div 
                className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 hover:bg-white/20 transition-all duration-500"
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Zap className="w-6 h-6 text-yellow-400 group-hover:animate-pulse" />
                <span className="text-xl font-semibold">Software Engineer & Creative Developer</span>
                <Rocket className="w-6 h-6 text-blue-400 group-hover:animate-bounce" />
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              A highly motivated undergraduate with a <span className="text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-300">strong foundation in software development</span>. 
              Passionate about <span className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-300">creative solutions</span> and 
              <span className="text-pink-300 font-semibold hover:text-pink-200 transition-colors duration-300"> innovative projects</span>.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Eye className="w-5 h-5 group-hover:animate-pulse" />
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <Heart className="w-5 h-5 group-hover:text-red-500 group-hover:animate-pulse" />
                <span>Let's Connect</span>
              </motion.button>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                { icon: <MapPin />, title: "Location", text: "Gampola, Kandy" },
                { icon: <Mail />, title: "Email", text: "isurubandara318@gmail.com" },
                { icon: <Phone />, title: "Mobile", text: "(+94) 76 600 85 27" }
              ].map((card, index) => (
                <motion.div 
                  key={index}
                  className="group text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 shadow-lg"
                  variants={item}
                  whileHover={{ y: -5 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className={`bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-blue-500 to-cyan-400' :
                    index % 3 === 1 ? 'from-purple-500 to-pink-400' : 'from-emerald-500 to-green-400'
                  } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    {React.cloneElement(card.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            <ChevronDown className="w-8 h-8 text-white/70 hover:text-white cursor-pointer" />
          </motion.div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              About Me
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by passion, powered by innovation, and dedicated to excellence.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate software engineer with an insatiable curiosity for technology and design. 
                  My journey began with a simple fascination for how things work, which evolved into a 
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"> love for creating digital experiences</span> 
                  that make a difference.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently seeking opportunities to leverage my technical expertise and contribute to 
                  innovative projects that <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300">shape the future</span> 
                  of technology. Equipped with robust problem-solving skills gained through extensive self-study and hands-on experience.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { number: "3+", text: "Years Experience", color: "from-blue-50 to-cyan-50", textColor: "text-blue-600" },
                    { number: "50+", text: "Projects Completed", color: "from-purple-50 to-pink-50", textColor: "text-purple-600" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-6 bg-gradient-to-br ${stat.color} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}
                      whileHover={{ y: -5, scale: 1.03 }}
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    >
                      <div className={`text-4xl font-bold ${stat.textColor}`}>{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.text}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 
                  className="text-3xl font-bold text-gray-800 mb-8"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Technical Skills
                </h3>
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-3 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{skill.category}</span>
                        <span className="text-gray-600 font-bold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div 
                        className={`h-full ${skill.color} rounded-full shadow-md group-hover:shadow-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* What I Do Section */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { icon: <Code />, title: "Development", color: "from-blue-500 to-cyan-400", textColor: "text-blue-600", description: "Full-stack development with cutting-edge technologies and modern frameworks. Building scalable, secure, and fast applications." },
                { icon: <Monitor />, title: "Web Design", color: "from-emerald-500 to-green-400", textColor: "text-emerald-600", description: "User-centric designs that blend aesthetics with exceptional functionality. Creating responsive, accessible web experiences." },
                { icon: <Palette />, title: "Graphics", color: "from-purple-500 to-pink-400", textColor: "text-purple-600", description: "Creative visual storytelling through innovative design and branding. Crafting stunning graphics that communicate effectively." }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={item}
                  whileHover={{ y: -10 }}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <div className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                    {React.cloneElement(service.icon, { className: "w-10 h-10 text-white group-hover:animate-pulse" })}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-gray-800 group-hover:${service.textColor} transition-colors duration-300`}>{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              My Services
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs and business goals.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`${service.bgColor} rounded-2xl p-8 shadow-lg overflow-hidden relative group`}
                variants={item}
                whileHover={{ y: -10 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:animate-pulse`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Featured Projects
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of my recent work showcasing my skills and expertise.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl group"
                variants={item}
                whileHover={{ y: -10 }}
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <div className={`${project.image} h-48 relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button 
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Project</span>
                    </motion.button>
                  </motion.div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.status === "Completed" ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section - Enhanced */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Education & Experience
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and professional experience.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${edu.color}`}></div>
                    <div className="flex items-start mb-4">
                      <Calendar className="w-5 h-5 text-gray-500 mr-2 mt-1" />
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h4>
                    <p className="text-gray-500 font-medium mb-4">{edu.degree}</p>
                    <p className="text-gray-600 mb-6">{edu.description}</p>
                    <div className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-purple-500" />
                Experience
              </h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}></div>
                    <div className="flex items-start mb-4">
                      <Calendar className="w-5 h-5 text-gray-500 mr-2 mt-1" />
                      <span className="text-gray-500">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.position}</h4>
                    <p className="text-gray-500 font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-600 mb-6">{exp.description}</p>
                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Client Testimonials
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What people say about working with me.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20"
                variants={item}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Get In Touch
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              whileHover={{ width: 160 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Let's talk!
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-purple-700 shadow-lg flex items-center justify-center space-x-2"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">isurubandara318@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(+94) 76 600 85 27</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-400 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Gampola, Kandy, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github />, color: "from-gray-700 to-gray-900", url: "#" },
                    { icon: <Linkedin />, color: "from-blue-600 to-blue-800", url: "#" },
                    { icon: <Twitter />, color: "from-cyan-500 to-blue-500", url: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {React.cloneElement(social.icon, { className: "w-6 h-6" })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Isuru Bandara
              </span>
              <p className="text-gray-400 mt-2">Software Engineer & Creative Developer</p>
            </div>
            <div className="flex space-x-6">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Isuru Bandara. All rights reserved.</p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;