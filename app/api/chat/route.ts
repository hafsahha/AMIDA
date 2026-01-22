import { google } from '@ai-sdk/google'
import { streamText } from 'ai'

export const runtime = 'edge'

const HAFSAH_DATA = `
**PROFILE:**
- Name: Hafsah Hamidah (Nickname: Mimi/Amida)
- Age: 21 years old (Born 2005)
- Current Status: 3rd Year Student (Semester 6) at Universitas Pendidikan Indonesia (UPI)
- Major: Computer Science (Ilmu Komputer)
- GPA: 3.84 / 4.00 (Cumulative). Achieved perfect 4.00 in Semester 4
- Location: Bandung, West Java, Indonesia
- Availability: **OPEN** for Internship (Magang), Freelance, and Part-time projects immediately

**WHY TRUST HAFSAH? (Reliability & Track Record):**
- **Proven High-Stakes Experience:**
  1. **Commercial Developer at Xtrahera Innovations** (Mar 2025 - Present): Delivering diverse technical solutions including AILearn (EdTech) and Maya Zaskia (E-Commerce)
  2. **BUMN Project**: Frontend Developer for PT Rekayasa Industri via Xtrahera - Developed "CoComm" digital approval dashboard
  3. **Treasurer (Bendahara)** at CPC UPI (Jan 2025 - Jan 2026) - Trusted with financial management
  4. **Head of Division** at Dinamik 20 (Jun 2025 - Dec 2025) - Led opening/closing ceremony team
- **Fast Learner:** Mastered 23 credits of AI/Data Engineering in Semester 5 with high grades
- **Teaching Experience:** Selected as Database Practicum Assistant, mentoring 70+ students
- **Community Impact:** Led village digitization project in Indragiri Village (P2M Program)

**PROFESSIONAL EXPERIENCE (Industry):**

1. **Full-Stack Developer** at Xtrahera Innovations (Remote)
   - Period: Mar 2025 - Present
   - Commercial Development: AILearn (EdTech AI platform), Maya Zaskia (E-Commerce)
   - End-to-End Engineering: Database architecture (SQL/NoSQL), API development, live server deployment
   - Data & AI Solutions: Integrated AI Chatbots and scraping pipelines

2. **Frontend Developer** at PT Rekayasa Industri (BUMN) via Xtrahera (Hybrid)
   - Period: Mar 2025 - May 2025
   - Enterprise Solution: Built "CoComm" digital approval dashboard for corporate workflows
   - Tech Implementation: Translated Figma to responsive interfaces using Laravel + Tailwind CSS
   - Agile Collaboration: Cross-functional team of 5, weekly sprints for strict deliverables

3. **IT Staff & Web Developer** at Kemakom UPI P2M Project (Indragiri Village)
   - Period: Jun 2025 - Aug 2025
   - Digital Transformation: Developed Resident Data Security System (replacing manual records)
   - Tourism Promotion: Created village tourism profile website
   - Training: Conducted user training for village officials

4. **Practicum Assistant - Database Management System** at UPI
   - Period: Feb 2025 - Jun 2025
   - Mentorship: Led lab sessions for 70+ students (ERD, Normalization, Advanced SQL)
   - Project Supervision: Guided students in MySQL + PHP integration projects
   - Evaluation: Assessed code efficiency and query optimization

**LEADERSHIP & ORGANIZATIONAL EXPERIENCE:**

1. **Secretary** at Competitive Programming Club (CPC) UPI
   - Period: Jan 2025 - Jan 2026
   - Operations Management: Managed member databases and administrative workflows
   - Event Coordination: Facilitated programming contests and training sessions

2. **Head of Opening & Closing Subdivision** at Dinamik 20 (Dies Natalis KEMAKOM)
   - Period: Jun 2025 - Dec 2025
   - Show Director: Orchestrated grand opening/closing ceremonies for department's largest annual event
   - Team Leadership: Led specialized team for stage flow and talent coordination

3. **Graphic Design Staff** at Dinamik 19
   - Period: Jul 2024 - Dec 2024
   - Visual Identity: Contributed to event branding and social media assets

4. **General Treasurer** at A-Storia Inauguration 2023
   - Period: Oct 2023 - Nov 2023
   - Financial Management: Managed event budget and financial reporting

**TECHNICAL EXPERTISE:**
- **Expert Level:** Next.js, Laravel, Tailwind CSS, MySQL, Python
- **Advanced:** YOLOv8 (Computer Vision), Flutter (Mobile), MongoDB, Docker, FastAPI
- **Currently Learning:** Golang, Cloud Architecture (Alibaba Cloud, AWS)
- **AI/ML Stack:** TensorFlow, PyTorch, YOLOv8, Computer Vision, Deep Learning
- **IoT & Hardware:** ESP32, Arduino, Sensor Integration, Real-time Systems
- **Design:** Figma, Adobe Creative Suite, UI/UX Design

**TOP 5 PROJECTS (For Matching):**

1. **SIGMA-UMKM** (System Architect - BIG 4 Project)
   - Distributed microservices platform for UMKM business analytics
   - Tech: Apache Cassandra, MongoDB, Docker, Next.js 16, TypeScript
   - Scale: Multi-database architecture with real-time data processing
   - Role: System design, database architecture, backend optimization

2. **Smart Batik Lens** (Lead Developer - BIG 4 Project)
   - Real-time batik pattern recognition using Edge AI
   - Tech: YOLOv8, TensorFlow, Python, Computer Vision
   - Achievement: 95% accuracy in pattern classification
   - Innovation: Edge computing for fast mobile inference

3. **PantaniZz** (IoT Engineer - BIG 4 Project)
   - Smart agriculture monitoring system with IoT sensors
   - Tech: ESP32, DHT Sensors, Firebase Real-time Database, Flutter
   - Features: Real-time environmental monitoring, automated alerts
   - Impact: Helps farmers optimize crop conditions

4. **PahamSaham** (AI/Data Lead - BIG 4 Project)
   - Stock market analysis platform with AI predictions
   - Tech: Python, Sentiment Analysis, Predictive Modeling, Next.js
   - Features: Market trend analysis, stock price forecasting

5. **EcoSCha** (Game Developer - Featured Project)
   - Educational game about environmental awareness
   - Tech: Unity, C#, Game Design
   - Achievement: Award-winning project at university competition

**OTHER NOTABLE PROJECTS:**
- **AILearn Pancasila:** Educational AI platform with chatbot (Live Web - Commercial Project)
- **Maya Zaskia:** E-commerce platform (Live Web - Commercial Project)
- **CoComm:** Laravel digital approval system (BUMN Client - PT Rekayasa Industri)
- **P2M Web:** Village resident data security system + Tourism website
- **DOXXER:** Cybersecurity tool for OSINT analysis
- **MASAKIO:** Recipe app with dual backend architecture
- **Forgotten Memory:** Game with promotional video
- **Campink:** Camping equipment rental platform
- **BinBuddy:** Waste management gamification app

**EDUCATION DETAILS:**
- University: Universitas Pendidikan Indonesia (UPI)
- Program: S1 Ilmu Komputer (Computer Science Bachelor)
- Current Semester: 6 (3rd Year)
- Academic Performance: GPA 3.84/4.00 (Top performer)
- Special Achievement: Perfect 4.00 GPA in Semester 4
- Notable: Selected as Practicum Assistant by faculty (Teaching Assistant for DBMS course)

**PERSONALITY & WORK STYLE:**
- **Brand Philosophy:** "AMIDA-MI 谧" - Fusion of Innovation (Amida/Infinite Light) and Logic (Mi/Serenity)
- **Problem Solver:** Approaches challenges with systematic analysis and creative solutions
- **Fast Learner:** Quickly adapts to new technologies and frameworks
- **Team Player:** Proven collaboration in cross-functional teams (BUMN project, P2M, events)
- **Leadership:** Experience managing teams and financial responsibilities
- **Communication:** Bilingual professional (Indonesian native, English professional)

**AVAILABILITY & CONTACT:**
- **Status:** Actively seeking internship/freelance opportunities
- **Work Types:** Internship, Freelance Projects, Part-time Remote Work
- **Preferred Roles:** Full-Stack Developer, AI/ML Engineer, System Architect, Frontend Developer
- **Languages:** Indonesian (Native), English (Professional)
- **Work Mode:** Remote-ready, Hybrid flexible, On-site available (Bandung area)
`

const SYSTEM_PROMPT = `You are 'Mimi' 🎀, Hafsah Hamidah's intelligent portfolio assistant.

**YOUR MISSION:**
- Convince recruiters and clients to hire Hafsah by showcasing her skills, reliability, and achievements
- Answer ALL questions about her: age, semester, availability, projects, skills, personality, trustworthiness
- Use the HAFSAH_DATA above as your complete knowledge base

**ANSWERING STRATEGY:**
- **If asked about TRUST/RELIABILITY:** Highlight her BUMN project experience and leadership roles (Treasurer, Head of Division)
- **If asked about AVAILABILITY:** She is OPEN for internship, freelance, and part-time work immediately
- **If asked about AGE/SEMESTER:** 21 years old, currently in Semester 6 at UPI
- **If asked about PROJECTS:** Match her projects to the question (AI → Smart Batik Lens, Web → PantaniZz, etc.)
- **If asked about TECH STACK:** Mention Expert (Next.js, Laravel) and Advanced (YOLOv8, Flutter) skills
- **If asked "Why hire her?":** Fast learner (23 credits in Sem 5), proven track record (BUMN + organizational leadership), GPA 3.84

**COMMUNICATION STYLE:**
- Professional but friendly (Gen-Z professional vibe)
- Keep answers concise (2-4 sentences) unless details are requested
- Use emojis sparingly: 🎀 (your signature), ✨ (achievements), 🚀 (skills)
- Answer in the SAME LANGUAGE as the user (Indonesian or English)
- Be confident about her skills but humble about achievements

**EXAMPLES:**
Q: "Is she available for internship?"
A: "Yes! Hafsah is actively seeking internship opportunities right now. She's in Semester 6 and available for both on-site and remote positions. 🚀"

Q: "Apakah dia bisa dipercaya?"
A: "Absolutely! Hafsah pernah handle project BUMN (PT Rekayasa Industri) dan dipercaya jadi Bendahara di organisasi CPC UPI. Track record-nya solid! ✨"

Q: "What's her strongest skill?"
A: "Her strongest skills are Next.js + Laravel for full-stack development, plus YOLOv8 for AI/Computer Vision. She delivered 95% accuracy on Smart Batik Lens! 🎀"

Remember: Your goal is to make recruiters say "I need to hire her!" after talking to you.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // CRITICAL: Message Sanitization for Google Gemini API
    // Filter out system messages
    let coreMessages = messages.filter((msg: any) => msg.role !== 'system')
    
    // Google Gemini REQUIRES conversations to start with 'user' role
    // Remove assistant-first messages (like welcome message)
    if (coreMessages.length > 0 && coreMessages[0].role !== 'user') {
      coreMessages = coreMessages.slice(1)
    }
    
    if (coreMessages.length === 0) {
      return new Response('No user messages to process', { status: 400 })
    }

    const lastMessage = coreMessages[coreMessages.length - 1]
    const userInput = lastMessage.content.toLowerCase()

    // Fallback responses for common questions (primary answer source)
    const fallbackResponses: { [key: string]: string } = {
      'age|how old|berapa umur|umurnya': 'Hafsah is 21 years old (born in 2005). She\'s currently in her 3rd year at Universitas Pendidikan Indonesia (UPI), Semester 6! 🎀',
      'gpa|nilai|ipk': 'Her GPA is 3.84 out of 4.00! She achieved a perfect 4.00 in Semester 4, which shows her academic excellence. 📚✨',
      'available|internship|magang|freelance|part-time|remote': 'Yes! Hafsah is actively available for internship (magang), freelance projects, and part-time remote work right now. 🚀',
      'skills|keahlian|skill terbaik|strongest': 'Her strongest skills are Next.js, Laravel, and Tailwind CSS for full-stack development. She\'s also advanced in YOLOv8 for AI/Computer Vision (95% accuracy on Smart Batik Lens!). 💻',
      'bumn|rekayasa industri|cocomm': 'She worked on the BUMN project at PT Rekayasa Industri (Mar-May 2025), developing "CoComm" - a digital approval dashboard for corporate workflows. She translated Figma designs to responsive interfaces using Laravel + Tailwind CSS! 🏢',
      'experience|pengalaman|kerja|work': 'Hafsah has diverse experience: Full-Stack Developer at Xtrahera (present), BUMN project at PT Rekayasa Industri, IT Staff at UPI P2M Project, and Database Practicum Assistant mentoring 70+ students. 💼',
      'trust|reliable|bisa dipercaya|trustworthy': 'Absolutely! She\'s trusted as Treasurer (Bendahara) at CPC UPI and Head of Division at Dinamik 20. Her BUMN project experience and leadership roles prove her reliability. ✨',
      'semester|education|pendidikan|university|upi': 'She\'s in Semester 6 (3rd year) at Universitas Pendidikan Indonesia (UPI) studying Computer Science (Ilmu Komputer). 🎓',
      'sigma|umkm|microservices': 'SIGMA-UMKM is one of her BIG 4 projects - a distributed microservices platform for UMKM business analytics using Apache Cassandra, MongoDB, Docker, Next.js 16, and TypeScript. She handled system architecture and database design! 🏗️',
      'smart batik|batik lens|yolo': 'Smart Batik Lens is her award-winning AI project using YOLOv8 and TensorFlow for real-time batik pattern recognition with 95% accuracy. She implemented edge computing for fast mobile inference! 🎨',
      'pantanizz|agriculture|iot|esp32|farming': 'PantaniZz is an IoT smart agriculture system using ESP32, DHT sensors, Firebase, and Flutter. It monitors environmental conditions in real-time to help farmers optimize crop production! 🌾',
      'paham saham|stock|trading|sentiment analysis': 'PahamSaham is an AI-powered stock market analysis platform using Python, sentiment analysis, and predictive modeling to forecast stock trends! 📈',
      'ecoscha|game|unity|award': 'EcoSCha is an educational game about environmental awareness built with Unity and C#. It won an award at the university competition! 🎮',
      'ailearn|pancasila|education': 'AILearn Pancasila is a live educational AI platform with chatbot functionality - currently deployed commercially! It\'s one of her active projects. 📱',
      'maya zaskia|ecommerce|shop': 'Maya Zaskia is a live e-commerce platform she developed commercially. It\'s a real deployed project showcasing her full-stack capabilities! 🛍️',
      'leadership|leader|team|organize|kepalageban': 'She\'s Secretary at CPC UPI (2025-2026), Head of Opening & Closing at Dinamik 20, Treasurer of A-Storia, and Graphics Staff at Dinamik 19. She leads and organizes! 👑',
      'language|bahasa|english|indonesian|bilingual': 'She\'s bilingual! Native Indonesian speaker with professional English proficiency. She can communicate effectively in both languages. 🗣️',
      'next.js|nextjs|react|frontend': 'Next.js is one of her expert-level skills! She\'s proficient in Next.js 16, React, and modern frontend frameworks. She built this portfolio with Next.js! 🚀',
      'laravel|php|backend|server': 'Laravel is another expert skill! She has strong backend development experience with Laravel, PHP, and server-side architecture. She used it for the BUMN project! 💾',
      'mysql|database|sql|data': 'She\'s excellent with MySQL and relational databases. She mentored 70+ students as a Database Practicum Assistant at UPI! 🗄️',
      'flutter|mobile|app': 'She has advanced skills in Flutter for mobile app development. She built mobile solutions for smart agriculture systems! 📱',
      'docker|deployment|devops|server': 'She has Docker and deployment experience. She worked with containerization and server management on commercial projects! 🐳',
      'python|programming|coding': 'Python is one of her expert languages! She uses it for AI/ML projects, computer vision, and backend development. 🐍',
      'yolov8|computer vision|ai|ml|tensorflow': 'She\'s skilled in YOLOv8, TensorFlow, and computer vision. She achieved 95% accuracy on batik pattern recognition! 🤖',
      'mentor|teaching|assistant|practicum': 'She mentored 70+ students as a Database Practicum Assistant at UPI! She has teaching and mentorship experience. 👨‍🏫',
      'project|portfolio|work|what did': 'Her notable projects include SIGMA-UMKM, Smart Batik Lens, PantaniZz, PahamSaham, EcoSCha, AILearn Pancasila, Maya Zaskia, and CoComm! She has 17+ projects total. 🎯',
      'tech stack|technologies|tools': 'Her tech stack includes Next.js, Laravel, React, TypeScript, MySQL, MongoDB, Python, YOLOv8, Flutter, Docker, Tailwind CSS, and more! 🛠️',
      'hire|recruit|hiring|job|employment': 'Hafsah is the perfect hire! She has proven commercial experience (BUMN, Xtrahera), strong GPA (3.84), AI/ML expertise, full-stack capabilities, and proven leadership. 🌟',
      'location|bandung|where|kota': 'She\'s based in Bandung, West Java, Indonesia. She\'s open to remote work, hybrid, and on-site positions in the Bandung area! 📍',
      'personality|character|trait|vibe': 'She\'s a fast learner, problem solver, team player with excellent communication skills. Her brand philosophy is "AMIDA-MI 谧" - Innovation meets Serenity! 💫',
      'communication|soft skill|collaborate': 'She excels at collaboration, communication, and problem-solving. She worked in cross-functional BUMN teams and led events successfully! 🤝',
      'fast learner|quick|adapt|master': 'She\'s a fast learner! She mastered 23 credits of AI/Data Engineering in Semester 5. She quickly adapts to new frameworks and technologies! ⚡',
      'commercial|real|deploy|live|production': 'She has real commercial experience! AILearn and Maya Zaskia are live deployed projects, plus the BUMN corporate project. She\'s production-ready! 🎁',
      'financial|budget|treasurer|manage money': 'She was General Treasurer at A-Storia - trusted with financial management and budgeting responsibilities! 💰',
      'reliability|track record|proven': 'Her track record speaks: BUMN commercial project ✓, Xtrahera employment ✓, 70+ student mentorship ✓, leadership roles ✓, perfect GPA semester ✓. She\'s reliable! ✅',
      'why hire|why choose|why her|best': 'Why hire Hafsah? She combines solid academics (3.84 GPA), real-world commercial experience (BUMN, Xtrahera), diverse skill set (full-stack + AI), proven mentorship, AND proven leadership. She\'s a complete package! 💎',
      'growth|learning|future|goal': 'She\'s currently learning Golang and Cloud Architecture (Alibaba Cloud, AWS). She\'s always growing and mastering new tech! 📚',
      'collaborator|team player|work with others': 'Absolutely! She\'s worked with cross-functional teams on BUMN projects, coordinated events, and mentored students. She\'s a great team player! 👥',
      'creative|innovative|problem solver': 'She\'s creative and innovative! Her AI projects show innovation, and her approach to technical problems is systematic and creative. 🎨',
      'contact|reach|how to|email|whatsapp': 'You can find her portfolio right here! Check out her projects, GitHub, or reach out through her portfolio contact information to connect! 📧',
      'portfolio|website|this site': 'You\'re already on it! This is Hafsah\'s portfolio - showcasing her projects, skills, and capabilities. Explore her work! 🌐',
      'competitive programming|cpc|coding contest': 'She\'s Secretary at CPC (Competitive Programming Club) at UPI. She participates and leads in programming competitions! 🏆',
      'graphics|design|visual|ui|ux': 'She has graphics design and UI/UX experience! She contributed to visual branding and design tasks in organizational roles. 🎨',
      'p2m|village|community|social': 'She worked on the P2M project in Indragiri Village, developing resident data systems and tourism websites. She has community impact! 🏘️',
      'semester 4|perfect|4.0': 'She achieved a perfect 4.00 GPA in Semester 4! This shows her dedication and excellence in academics. 🌟',
      'xtrahera|innovations': 'She\'s currently a Full-Stack Developer at Xtrahera Innovations, developing real commercial projects like AILearn and Maya Zaskia! 💼',
      'summary|about hafsah|tell me about|who is|introduce': 'Hafsah Hamidah is a 21-year-old Computer Science student (Sem 6, UPI) with a 3.84 GPA and proven commercial experience. She\'s a full-stack developer at Xtrahera, worked on BUMN projects, and has 17+ projects including AI/ML expertise. She\'s available for internship, freelance, and remote work NOW! 🚀✨',
      'profile|biography|bio|cv|resume': 'Hafsah is a full-stack dev + AI engineer with expertise in Next.js, Laravel, YOLOv8, and Flutter. She has 4 professional roles, 4 leadership positions, 17+ projects, and proven commercial track record. Perfect for tech roles seeking a fast learner with AI capabilities! 💼',
      'first question|where start|hello|hi': 'Hi! I\'m Mimi, Hafsah\'s AI assistant. I\'m here to tell you everything about her skills, experience, projects, and why she\'d be a great addition to your team! Ask about anything - her tech stack, projects, availability, or why she\'s trustworthy! 🎀',
      'overview|big picture|entire story': 'Here\'s Hafsah\'s story: 21-year-old CS student → Full-Stack Dev at Xtrahera → BUMN corporate project → AI/ML specialist → Mentored 70+ students → Led teams → GPA 3.84 → 17+ projects → Now seeking internship/freelance. She\'s ready! 📖',
      'quick summary|short answer|tldr': 'TL;DR: Hafsah = Fast learner + Full-stack skills + AI expertise + Commercial experience + Leadership proven + Available NOW. She\'s the complete package! ✅',
      'what make|what special|what different|why': 'What makes her special: Commercial BUMN experience + Real deployed projects (AILearn, Maya Zaskia) + 95% AI accuracy on real projects + Mentored 70+ students + Perfect semester GPA + Diverse tech stack + Leadership proven! 🌟',
      'current work|right now|present|today': 'Right now she\'s working as a Full-Stack Developer at Xtrahera Innovations on commercial projects. She\'s also available for additional internships, freelance, and part-time opportunities! 🚀',
      'background|history|journey|career path': 'Career journey: Started with academic excellence (3.84 GPA), gained teaching experience (70+ students), secured BUMN commercial project, landed full-stack role at Xtrahera, developed 17+ real projects, and held 4 leadership positions! 📈',
      'why her|pick her|choose|select': 'Pick Hafsah because: ✓ Proven commercial work (BUMN, Xtrahera) ✓ Real deployed projects ✓ AI/ML expertise (95% accuracy) ✓ Full-stack capabilities ✓ 3.84 GPA ✓ Leadership & mentorship ✓ Fast learner ✓ Team player. She\'s investment-ready! 💎',
      'what can do|capable|competent|what offer': 'She can do: Full-stack web dev (Next.js + Laravel) → AI/Computer Vision projects → Mobile apps (Flutter) → Database design → Mentorship → Team leadership → Cloud deployment → Project architecture. She\'s versatile! 🎯',
      'education background|school|study': 'She studied Computer Science at Universitas Pendidikan Indonesia (UPI) and is currently in Semester 6 (3rd year). Academic excellence with 3.84 GPA and perfect 4.00 in Semester 4! 🎓',
      'duration|how long|time|years experience': 'She has diverse experience spanning: BUMN projects, Xtrahera employment (present), UPI practicums, organizational roles, and 17+ personal/professional projects. Multiple concurrent roles showing her capacity! ⏱️',
    }

    // Try to match user input with fallback responses (primary answer source)
    for (const [keywords, response] of Object.entries(fallbackResponses)) {
      const keywordList = keywords.split('|')
      if (keywordList.some(kw => userInput.includes(kw))) {
        return new Response(response, {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        })
      }
    }

    // If no fallback match, try Gemini API with Vercel AI SDK
    try {
      const result = await streamText({
        model: google('gemini-1.5-flash'),
        system: `${HAFSAH_DATA}\n\n${SYSTEM_PROMPT}`,
        messages: coreMessages,
        temperature: 0.7,
        maxTokens: 500,
      })

      return result.toDataStreamResponse()
    } catch (apiError: any) {
      // If API fails (quota exceeded, 404, etc), return friendly fallback
      console.error('Gemini API Error:', apiError)
      return new Response(
        "I can answer many questions about Hafsah! Try asking about her age, skills, availability, GPA, projects (SIGMA-UMKM, Smart Batik Lens, etc), BUMN experience, or why she's trustworthy. 😊",
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
      )
    }
  } catch (error) {
    console.error('Chat API Error:', error)
    return new Response('Sorry, I encountered an error. Please try asking about her experience, skills, or projects!', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' } 
    })
  }
}

