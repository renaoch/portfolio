"use client"
import React, { useState, useEffect } from 'react'

const PortfolioSite = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTech, setCurrentTech] = useState(0)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello, I'm an AI assistant with detailed knowledge about Renao's background, projects, and career goals. Feel free to ask me anything about his experience or aspirations.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const techStack = [
    { 
      name: 'React', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.563-.455-.468-.91-.991-1.36-1.563z"/>
        </svg>
      )
    },
    { 
      name: 'Next.js', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.8531.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7474-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1686.237.2909.0186.0721.0234 1.3543.0186 4.3618l-.0067 4.2493-.7436-1.1343-.7461-1.1383v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/>
        </svg>
      )
    },
    { 
      name: 'Node.js', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.250,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.020-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      )
    },
    { 
      name: 'MongoDB', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-4.473.304-4.622.011-.063.017-.11.017-.163 0-.004.009-.009.009-.009-.012-.007-.015-.011-.024-.017-.011-.007-.017-.018-.024-.027-.007-.009-.016-.018-.016-.023.017.007.033.018.05.024.009.004.018.013.033.013.004 0 .013-.009.013-.009v-.004c-.01-.012-.02-.025-.03-.036-.01-.01-.02-.021-.03-.033-.009-.01-.018-.022-.027-.034-.009-.012-.018-.025-.027-.037-.003-.004-.005-.009-.008-.013 0 .004.009.013.009.013.024.015.033.024.05.04.009.007.018.018.033.018.004 0 .013-.009.013-.009v-.004c-.01-.012-.02-.025-.03-.036-.01-.01-.02-.021-.03-.033-.009-.01-.018-.022-.027-.034-.009-.012-.018-.025-.027-.037-.003-.004-.005-.009-.008-.013 0 .004.009.013.009.013.024.015.033.024.05.04.009.007.018.018.033.018.004 0 .013-.009.013-.009v-.004c-.01-.012-.02-.025-.03-.036-.01-.01-.02-.021-.03-.033-.009-.01-.018-.022-.027-.034-.009-.012-.018-.025-.027-.037-.003-.004-.005-.009-.008-.013 0 .004.009.013.009.013z"/>
        </svg>
      )
    },
    { 
      name: 'Solana', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M7.5 8.25L12 4.5L16.5 8.25M7.5 15.75L12 19.5L16.5 15.75M3 12L7.5 7.5L12 12L16.5 7.5L21 12L16.5 16.5L12 12L7.5 16.5L3 12Z"/>
        </svg>
      )
    },
    { 
      name: 'Tailwind', 
      color: 'bg-gray-50', 
      textColor: 'text-gray-800', 
      iconColor: 'text-gray-700',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
        </svg>
      )
    }
  ]

  const projects = [
    {
      title: "Stream Forge",
      description: "Video collaboration SaaS platform designed for creators and editors with real-time chat functionality, file upload systems, and YouTube integration capabilities.",
      tech: ["React", "Node.js", "Socket.io", "Express"],
      metrics: "Real-time collaboration platform"
    },
    {
      title: "SkillMint",
      description: "Solana-based hackathon project featuring on-chain badge and skill NFT systems with peer endorsements and Solana Blinks integration for credentialing.",
      tech: ["Solana", "Anchor", "React", "Metaplex"],
      metrics: "Blockchain credentialing system"
    },
    {
      title: "Time Capsule NFT",
      description: "Innovative Solana application implementing time-locked NFT mechanisms with community voting unlocks and memory chain features for temporal blockchain experiences.",
      tech: ["Solana", "Anchor", "Next.js", "Token-2022"],
      metrics: "Time-locked NFT platform"
    }
  ]

  const experience = [
    {
      company: "Freelance Development",
      role: "Full-Stack Developer",
      period: "2024 - Present",
      description: "Developing SaaS applications and blockchain projects with focus on React ecosystem and Solana development. Managing deployment pipelines on Render with custom DevOps configurations."
    },
    {
      company: "Structured Learning",
      role: "Self-Directed Study",
      period: "2022 - 2024", 
      description: "Following comprehensive 100-day web development roadmap covering JavaScript, React, Node.js, databases, DevOps practices, and system design principles with emphasis on practical implementation."
    },
    {
      company: "Snowman Dessert Bar",
      role: "Developer Contributor",
      period: "2021 - 2022",
      description: "Contributing to blockchain and web development projects including browser extensions, Solana wallet integrations, and developer tooling with GitHub username linking systems."
    }
  ]

  const floatingElements = [
    { content: '<div>', top: '15%', left: '8%', delay: '0s' },
    { content: '</>', top: '65%', left: '12%', delay: '1s' },
    { content: '{ }', top: '25%', right: '15%', delay: '2s' },
    { content: 'fn()', top: '75%', right: '8%', delay: '1.5s' },
    { content: 'API', top: '35%', left: '3%', delay: '0.5s' },
  ]

  // Professional AI responses without emojis
  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase()
    
    // Personal information
    if (message.includes('who') || message.includes('name') || message.includes('about')) {
      return "Renao is a 22-year-old full-stack developer based in Guwahati, India. He specializes in building SaaS applications and blockchain projects, particularly focusing on the Solana ecosystem. He's currently following a structured learning approach while actively developing real-world applications."
    }
    
    // Location and background
    if (message.includes('age') || message.includes('old') || message.includes('location') || message.includes('where') || message.includes('from')) {
      return "He's 22 years old and based in Guwahati, India. He works with both Mac and Windows development environments and has experience with remote development workflows. He's part of the growing tech community in Northeast India."
    }
    
    // Technical skills
    if (message.includes('skills') || message.includes('technology') || message.includes('tech stack') || message.includes('technologies')) {
      return "His technical expertise includes React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Socket.io, and Zustand for state management. He has significant experience with Solana blockchain development using Anchor framework, Metaplex, Solana Mobile Stack, and Token-2022 standards."
    }
    
    // Blockchain focus
    if (message.includes('solana') || message.includes('blockchain') || message.includes('nft') || message.includes('crypto') || message.includes('web3')) {
      return "He has deep expertise in Solana development, working with Anchor framework for smart contracts, Metaplex for NFT creation, Solana Blinks for enhanced functionality, and Token-2022 standards. His Time Capsule NFT project demonstrates innovative use of time-locked blockchain mechanisms."
    }
    
    // Projects
    if (message.includes('projects') || message.includes('built') || message.includes('work') || message.includes('portfolio')) {
      return "His notable projects include Stream Forge, a video collaboration SaaS platform with real-time features; SkillMint, a Solana hackathon project for on-chain credentialing; and Time Capsule NFT, featuring innovative time-locked NFT mechanisms. He also develops browser extensions for Solana wallet integration."
    }
    
    // Career goals
    if (message.includes('goals') || message.includes('future') || message.includes('career') || message.includes('plans') || message.includes('ambition')) {
      return "His career trajectory is well-defined: securing a remote position with approximately $2500 monthly compensation within six months, pursuing MSc Computer Science at IIT, and ultimately working at Google while completing a PhD in Computer Science. He values both theoretical understanding and practical implementation."
    }
    
    // Learning approach
    if (message.includes('learning') || message.includes('study') || message.includes('roadmap') || message.includes('education')) {
      return "He follows a structured 100-day web development roadmap covering JavaScript, React, Node.js, databases, DevOps, UI/UX, and systems programming. His approach emphasizes understanding system architecture at scale, similar to how companies like Meta, Stripe, and Airbnb operate."
    }
    
    // DevOps and deployment
    if (message.includes('devops') || message.includes('deployment') || message.includes('render') || message.includes('deploy') || message.includes('infrastructure')) {
      return "He manages his own DevOps processes, primarily deploying applications on Render with custom proxy configurations, SSL setup, and routing management. He's actively learning about scaling infrastructure and implementing best practices for production environments."
    }
    
    // Work style and personality
    if (message.includes('personality') || message.includes('work style') || message.includes('approach') || message.includes('philosophy')) {
      return "He's methodical and self-reflective in his approach to development, preferring comprehensive understanding over surface-level tutorials. He values detailed explanations and systematic problem-solving, often questioning fundamental concepts to build solid foundations."
    }
    
    // Contact and hiring
    if (message.includes('hire') || message.includes('contact') || message.includes('work together') || message.includes('available') || message.includes('job')) {
      return "He's actively seeking remote development opportunities, particularly roles that offer around $2500 monthly compensation. His ideal positions involve full-stack development with React and Node.js, potentially incorporating blockchain technology. He's open to discussing project requirements and technical challenges."
    }
    
    // Challenges and problem solving
    if (message.includes('challenge') || message.includes('problem') || message.includes('difficult') || message.includes('complex')) {
      return "He approaches complex problems systematically, whether they involve system scaling, performance optimization, or intricate Solana program interactions. His methodology focuses on understanding underlying principles rather than implementing quick fixes, ensuring robust and maintainable solutions."
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello. I have comprehensive information about Renao's technical background, project experience, and career objectives. What specific aspect would you like to explore?"
    }
    
    // Default professional responses
    const defaultResponses = [
      "I can provide detailed information about Renao's technical expertise, project portfolio, learning methodology, or career objectives. What specific area interests you?",
      "That's an insightful question. I have extensive knowledge about his development approach, blockchain projects, and professional goals. Which aspect would you like me to elaborate on?",
      "I can discuss his technical skills, project implementations, career trajectory, or learning philosophy in detail. What would be most relevant for your inquiry?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Professional response timing
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 2000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col xl:flex-row items-center justify-between min-h-[80vh] relative">
            
            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <div
                key={index}
                className="absolute text-gray-300 text-sm font-mono pointer-events-none select-none"
                style={{
                  top: element.top,
                  left: element.left,
                  right: element.right,
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: element.delay
                }}
              >
                {element.content}
              </div>
            ))}

            {/* Left Content */}
            <div className={`xl:w-1/2 text-center xl:text-left relative z-10 max-w-2xl transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 text-sm font-medium rounded-full mb-8">
                <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                <span className="font-mono">Available for remote work</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-none mb-8 tracking-tight">
                <span className="block">Full-Stack</span>
                <span className="block">Developer</span>
              </h1>
              
              <div className="flex items-center justify-center xl:justify-start mb-12">
                <span className="text-xl text-gray-600 font-medium mr-4">Currently working with</span>
                <div className="relative">
                  <span className="px-4 py-2 rounded-xl bg-gray-900 text-white font-semibold text-lg">
                    {techStack[currentTech].name}
                  </span>
                </div>
              </div>

             <div className="mb-12">
  <div className="mb-12 space-y-1 max-w-xl mx-auto xl:mx-0">
  <p className="text-xl mb-2 font-semibold text-gray-900">
    Renao, 22 y/o , Full-Stack Developer from Guwahati, India.
  </p>
  
  <p className="text-gray-700">
    Builds SaaS apps and Solana blockchain projects leveraging React and Next.js.
  </p>

  <p className="text-gray-700">
    Long-term goals: MSc at IIT, work at Google, and pursue a PhD in CS.
  </p>
</div>

</div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start">
                <a
                  href="#contact"
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in touch
                </a>
                
                <a
                  href="#projects"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View projects
                </a>
              </div>
            </div>

            {/* Right Side - Clean AI Assistant */}
            <div className={`xl:w-1/2 xl:pl-12 mt-16 xl:mt-0 w-full max-w-lg xl:max-w-none transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
                
                {/* Chat Header */}
                <div className="bg-gray-50 px-6 py-5 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a8.841 8.841 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">AI Assistant</h3>
                      <p className="text-gray-600 text-sm">Ask about background and experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm font-medium">Online</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-6 space-y-4 bg-white">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gray-900 text-white rounded-br-md'
                          : 'bg-gray-100 border border-gray-200 text-gray-800 rounded-bl-md'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about skills, projects, or career goals..."
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-sm text-gray-900 placeholder-gray-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all duration-200 flex items-center justify-center transform hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused expertise in modern web development and blockchain technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`${tech.color} border border-gray-300 rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentTech(index)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto ${tech.iconColor}`}>
                  {tech.icon}
                </div>
                <h3 className={`text-sm font-semibold ${tech.textColor} text-center`}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning approach combined with practical project development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300 last:hidden"></div>
                <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg ml-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                      <h4 className="text-lg text-gray-700 font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical applications demonstrating full-stack and blockchain development capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-700 font-semibold mb-3">{project.metrics}</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View
                    </a>
                    <a href="http://github.com/renaoch" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Open to remote opportunities and technical discussions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">chetriprem.work@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">linkedin.com/in/renao_tw</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                    <p className="text-gray-600">github.com/renao-dev</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-300 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-gray-900" />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 text-gray-900" />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 resize-none text-gray-900"></textarea>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Renao</h3>
            <p className="text-gray-400 mb-8">Full-Stack Developer from Guwahati, India</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>2025 Renao. Available for remote opportunities.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default PortfolioSite
