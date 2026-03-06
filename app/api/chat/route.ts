import { createHuggingFace } from '@ai-sdk/huggingface'
import { streamText } from 'ai'

export const runtime = 'edge'

// Initialize Hugging Face provider
const huggingface = createHuggingFace({
  apiKey: process.env.HUGGING_FACE_API_KEY,
})

const HAFSAH_DATA = `
[PERSONAL INFO]
- Full Name: Hafsah Hamidah (Nickname: Mimi or Hafsah)
- Age: 21 years old (Born 2005)
- NIM (Student ID): 2311474
- University: Universitas Pendidikan Indonesia (UPI)
- Major: Computer Science (Ilmu Komputer)
- Current Status: 3rd Year Student (Semester 6)
- Location: Bandung, West Java, Indonesia
- GPA: 3.82 / 4.00 (Cumulative). Achieved perfect 4.00 in Semester 4

[AVAILABILITY & WORK STATUS]
- Current Internship (Mar-Jun 2026): PT Telkom Indonesia (IT Division, Enterprise Service Support (ESS), focusing on Supply Chain Management).
- Open to Work: YES! 🚀
- Preferences: Despite her active internship at Telkom, Hafsah is highly capable of time management and is FULLY AVAILABLE for freelance, part-time, or any project collaborations. She specifically prefers REMOTE work.

[PROFESSIONAL & INDUSTRY EXPERIENCE]
1. Full-Stack Developer at Xtrahera Innovations (Mar 2025 - Present): Built AILearn (EdTech) and Maya Zaskia (E-Commerce).
2. Frontend Developer at PT Rekayasa Industri (BUMN) via Xtrahera (Mar-May 2025): Built "CoComm" digital approval dashboard using Laravel + Tailwind.
3. Database Practicum Assistant at UPI: Mentored 70+ students in MySQL, PHP, and schema design.
4. IT Staff at Kemakom UPI P2M Project (Indragiri Village): Built Resident Data Security System and Tourism Web.

[LEADERSHIP & VOLUNTEERING]
- Secretary at Competitive Programming Club (CPC) UPI (Jan 2025 - Jan 2026).
- Head of Opening & Closing Ceremony Subdivision at Dinamik 20: Acted as primary Show Director for the department's largest event.
- Graphic Design Staff at Dinamik 19: Designed visual assets for the 19th Anniversary event.
- Graphic Design Staff at PARAMPA 2024 (BEM KEMA FPMIPA): Created visual branding, social media assets, and large-scale print designs for the annual sports parade.
- General Treasurer at A-Storia Inauguration 2023: Managed event budget and financial reporting.

[TECH STACK & SKILLS]
- Expert: Next.js, Laravel, Tailwind CSS, MySQL, Python, TypeScript.
- Advanced: YOLOv8 (Computer Vision), Flutter (Mobile), MongoDB, Docker, FastAPI.
- Learning: Golang, Cloud Architecture (Alibaba Cloud, AWS).
- Interests: Software Engineering (Backend) and Data Science.

[LICENSES & CERTIFICATIONS]
1. Alibaba Cloud Certified Developer (Issued Jan 2024 - Expires Jan 2026): Official certification validating competency in ECS and cloud infrastructure. (Credential: ACCD0119700100005773).
2. Competitive Programming Basic Training (Aug 2024): Official transcript for 43 hours of intensive algorithmic training covering C++, Graph Theory, Dynamic Programming, and Greedy algorithms.

[KEY PROJECTS - Complete Portfolio]

🌟 THE BIG 4 (Featured Projects):

1. SIGMA-UMKM - Centralized UMKM Monitoring Ecosystem
   - Role: System Architect & Full Stack Engineer
   - Tech Stack: Apache Cassandra, MongoDB, Docker, Next.js 16, TypeScript
   - Context: Centralized monitoring ecosystem supporting SDGs 8, tracking the legality of Indonesian MSMEs.
   - Problem: Handling distinct data workloads: dynamic geospatial profiles (flexible schema) and high-velocity financial audit trails (time-series data).
   - Solution: Architected a hybrid database system using MongoDB for geospatial flexibility and Apache Cassandra for ultra-fast financial audit trails. Optimized partition keys for sub-millisecond retrieval.
   - Key Features: Polyglot Persistence Architecture, Sub-millisecond Time-Series Queries, RBAC Security, Zod API Validation.
   - Links: GitHub available

2. Smart Batik Lens - Real-time Batik Pattern Recognition
   - Role: ML Engineer
   - Tech Stack: Python, YOLOv8, TFLite, Flutter, Computer Vision
   - Context: Final Project for Computer Vision (IK542) course - Real-time Batik motif detection on complex surfaces.
   - Problem: Existing batik apps use Image Classification, which fails when the fabric is folded, curved on a body, or has poor lighting.
   - Solution: Shifted from classification to detection using YOLOv8 Nano, allowing the app to localize multiple motifs in a single frame regardless of the object's shape. Quantized the model to INT8 (~6MB, 70% reduction) and integrated into Flutter using tflite_flutter.
   - Key Features: Real-time Detection @ 15+ FPS, INT8 Model Quantization (70% size reduction), 900+ Geometrically Augmented Images, Mobile Optimization.
   - Accuracy: 95%
   - Links: GitHub available

3. PantaniZz - Automated Hydroponic Farming IoT
   - Role: Backend & IoT Engineer
   - Tech Stack: Golang, MQTT, C++ (ESP32), Flutter
   - Context: End-to-end IoT ecosystem for automated hydroponic farming with real-time sensor data aggregation.
   - Problem: Manual hydroponic monitoring is labor-intensive. Need real-time sensor data (pH, TDS, Temperature) aggregation and automated control.
   - Solution: Built Golang backend to handle concurrent sensor streams using Goroutines. Implemented MQTT protocol for low-latency hardware-to-app communication. ESP32 sensors send data to broker.
   - Key Features: Goroutine-based Concurrency, MQTT Protocol Integration, Real-time Sensor Aggregation, Automated Actuator Control, Mobile Dashboard.
   - Links: GitHub available

4. PahamSaham - Stock Market ETL Pipeline
   - Role: Data Engineer
   - Tech Stack: Apache Airflow, Docker, MongoDB, Pandas, Python, FastAPI
   - Context: Automated ETL pipeline ingesting Indonesian stock market data (IDX) for financial analysis.
   - Problem: Manual stock data analysis is inefficient. Needed a centralized, automated source of truth for Indonesian stock market (IDX) data.
   - Solution: Built containerized ETL pipeline using Apache Airflow with Docker. Developed Python scrapers for IDX data extraction, cleaned with Pandas, and stored in MongoDB. Exposed via FastAPI.
   - Key Features: Containerized Orchestration (Airflow), Automated Daily DAGs, Data Extraction & Transformation, MongoDB Storage.
   - Links: GitHub available

5. EcoSCha - Environmental Education Game (PKM-RSH 2025 Grant Winner)
   - Role: Lead Developer & PM
   - Tech Stack: Gamification, Web Dev, Research, UI/UX
   - Context: National Grant Awardee (PKM-RSH 2025) - Ethnopedagogy-based environmental game platform.
   - Problem: Low youth engagement in environmental conservation. Need to blend local wisdom (Sundanese values) with modern gamification.
   - Solution: Designed gameplay mechanics inspired by 'Werewolf' and 'Quizizz'. Conducted social humanities research to integrate Sundanese environmental values into game logic.
   - Key Features: Gamification Mechanics, Ethnopedagogy Research, Environmental Awareness, Community Engagement.
   - Links: Google Drive available

💼 COMMERCIAL & ENTERPRISE PROJECTS:

6. AILearn Pancasila - AI Civic Education Platform (LIVE)
   - Role: Full Stack Engineer at Xtrahera Innovations
   - Tech Stack: Laravel, Gemini API, MySQL, Tailwind CSS
   - Context: Live commercial project via Xtrahera Innovations - AI-powered civic education platform.
   - Problem: Providing instant, context-aware answers to students' questions about national values (Pancasila) without human tutors.
   - Solution: Integrated a Generative AI model via API with specific system prompts to act as a Civic Tutor. Deployed the full-stack application to a live VPS environment.
   - Key Features: System Prompt Engineering, Live VPS Deployment, Intent Recognition, Session Management.
   - Links: https://ailearn-pancasila.id

7. Maya Zaskia - Beauty E-Commerce Platform (LIVE)
   - Role: Full Stack Developer at Xtrahera Innovations
   - Tech Stack: Laravel, MySQL, E-Commerce, Payment Gateway
   - Context: Live commercial project via Xtrahera Innovations - Beauty e-commerce platform.
   - Problem: Building high-performance beauty e-commerce with focus on mobile conversion and secure checkout.
   - Solution: Optimized mobile responsiveness and streamlined checkout flow to reduce cart abandonment. Built dynamic product CMS for client management.
   - Key Features: Mobile Optimized Checkout, Dynamic Product CMS, Secure Payment Integration, Inventory Management.
   - Links: https://mayazaskia.com/

8. CoComm - Corporate Approval Dashboard (BUMN Project)
   - Role: Full Stack Developer at PT Rekayasa Industri (via Xtrahera)
   - Tech Stack: Laravel, PHP, Tailwind CSS, Figma, MySQL
   - Context: Professional Consultation Project (Prokon) for major State-Owned Enterprise - Enterprise approval dashboard.
   - Problem: Digitizing strict, manual corporate document approval workflows into user-friendly dashboard while adhering to enterprise design standards.
   - Solution: Built full-stack solution using Laravel backend with Tailwind CSS frontend. Translated high-fidelity Figma prototypes into responsive components. Collaborated in Agile team of 5 for BUMN client.
   - Key Features: Figma-to-Code Translation, Laravel Backend Architecture, Enterprise Design Compliance, Approval Workflow Logic.
   - Links: Figma available

🤖 AI & DATA SCIENCE PROJECTS:

9. Hate Speech Classification - Indonesian NLP
   - Role: ML Engineer
   - Tech Stack: Python, SimpleRNN, LSTM, Bi-LSTM, Transformer, Deep Learning
   - Context: Deep Learning project for Indonesian text classification.
   - Problem: Detecting hate speech in Indonesian language text requires understanding context and language nuances.
   - Solution: Implemented multiple deep learning architectures (SimpleRNN, LSTM, Bi-LSTM, Transformer) and compared their performance for Indonesian hate speech detection.
   - Key Features: Multiple DL Architectures, Indonesian NLP, Model Comparison, Text Classification.
   - Links: Research project

10. Anatomy Android App - Medical AR Application (Ongoing)
    - Role: Frontend Developer & Data Collector
    - Tech Stack: Android, CameraX, Room Database, Object Detection
    - Context: Medical education app using real-time object detection for anatomy learning.
    - Problem: Medical students need interactive tools to learn anatomy in real-world contexts.
    - Solution: Uses CameraX for real-time object detection and Room database for offline storage. Hafsah's role focuses on frontend development, API bridging to the backend, and dataset collection.
    - Key Features: Real-time Object Detection, Offline Storage, Medical Dataset Collection, Camera Integration.
    - Status: In Development

11. Amarta Mobile - Enterprise ERP System
    - Role: Full Stack Developer
    - Tech Stack: Laravel, Flutter, Real-time Tracking, Payroll System
    - Context: ERP system for enterprise resource planning with mobile interface.
    - Problem: Companies need integrated systems for tracking operations and managing payroll efficiently.
    - Solution: Built comprehensive ERP system using Laravel backend and Flutter mobile app for real-time tracking and automated payroll management.
    - Key Features: Real-time Tracking, Payroll Automation, Mobile Integration, Enterprise Backend.
    - Links: Enterprise project

🌐 WEB & MOBILE APPLICATIONS:

12. XKW - Twitter Clone with MongoDB
    - Role: Full Stack Developer
    - Tech Stack: Next.js, MongoDB, TypeScript, Mongoose
    - Context: Final Project for Non-Relational Databases (IK380) - Scalable social media platform.
    - Problem: Modeling complex social interactions (Nested Replies, Retweets, Follow graphs) which are computationally expensive in traditional SQL.
    - Solution: Utilized MongoDB's flexible schema with the Embedding Pattern for comment threads to optimize read performance. Implemented optimistic UI updates.
    - Key Features: Nested Comments Architecture, Optimistic UI, Infinite Scroll, Follow System.
    - Links: GitHub available

13. P2M Sistem Informasi Kependudukan - Village Administration
    - Role: Frontend Developer & IT Staff
    - Tech Stack: PHP, MySQL, Web Development, Information Systems
    - Context: Community Development Project - Village administration system digitization for Indragiri Village.
    - Problem: Village administration system to digitize manual population data management and improve data accessibility.
    - Solution: Built comprehensive web system for managing village population data with user-friendly interface and secure storage. Implemented RBAC security. Also conducted user training for village officials.
    - Key Features: Population Database, Admin Dashboard, Data Analytics, Report Generation, RBAC Security, Community Training.
    - Links: GitHub available

14. MASAKIO - Recipe Sharing Platform
    - Role: Mobile & Backend Developer
    - Tech Stack: Flutter, Node.js, Express, REST API
    - Context: Recipe-sharing mobile application - Culinary social platform.
    - Problem: Creating a seamless recipe discovery and sharing platform with clean architecture.
    - Solution: Built Flutter mobile app with Node.js/Express backend API. Clean separation of concerns with RESTful endpoint design.
    - Key Features: Recipe Database, User Authentication, Recipe Sharing, Search & Filter.
    - Links: GitHub (frontend & backend) available

15. Campink - Camping Equipment Rental
    - Role: Mobile Developer
    - Tech Stack: Flutter, Mobile Design, Dart
    - Context: Equipment rental mobile marketplace - Camping gear rental platform.
    - Problem: Building a mobile rental platform with intuitive product browsing and cart management.
    - Solution: Developed Flutter app with product catalog, search, filtering, and cart functionality. Clean mobile-first design.
    - Key Features: Product Catalog, Search & Filter, Shopping Cart, Mobile Optimization.
    - Links: GitHub available

16. Sports Facility Booking System
    - Role: Web Developer
    - Tech Stack: PHP Native, SQL, Database Normalization
    - Context: Database Management course project - Facility reservation system.
    - Problem: Building a booking system with strict database integrity to manage facility schedules.
    - Solution: Designed highly normalized database schema focusing on referential integrity and avoiding data anomalies.
    - Key Features: Facility Booking, Schedule Management, Database Normalization, Conflict Prevention.
    - Links: GitHub available

🔧 ENGINEERING & CREATIVE PROJECTS:

17. DOXXER Search Engine - Graph-based Web Crawler
    - Role: Algorithm Engineer
    - Tech Stack: Python, NetworkX, BFS/DFS, Graph Theory, Selenium, Flask
    - Context: Data Structures & Algorithms project - Graph-based web crawler and visualizer.
    - Problem: Understanding and visualizing web node relationships and organizational website dependencies.
    - Solution: Built graph-based search engine implementing BFS/DFS algorithms to crawl and visualize web node relationships. Semantic mapping between URLs.
    - Key Features: Web Crawling with Selenium, Graph Traversal (BFS/DFS), Node Visualization, Route Mapping.
    - Links: GitHub available

18. OS File Manager Simulator
    - Role: System Programmer
    - Tech Stack: Electron.js, Node.js, JavaScript, Operating Systems
    - Context: OS Simulation Project - Memory allocation and file operations visualization.
    - Problem: Demonstrating memory allocation and file operations logic in an OS environment with visual feedback.
    - Solution: Built Electron.js GUI simulating OS file management, demonstrating Contiguous, Linked, and Indexed allocation strategies.
    - Key Features: Memory Allocation Simulation, File Operations, Disk Block Visualization, Fragmentation Handling.
    - Links: GitHub available

19. Forgotten Memory - Indie Game
    - Role: Game Artist & Designer
    - Tech Stack: Game Art, Video Editing, Storyboarding, 2D Graphics
    - Context: COMPFEST 16 (Indie Game Ignite) - 2D adventure puzzle game.
    - Problem: Creating an engaging narrative-driven indie game with original artistic vision.
    - Solution: Designed all original 2D characters and environments. Produced promotional trailer. Focused on atmosphere and emotional storytelling.
    - Key Features: Original Character Design, Environment Art, Promotional Media, Puzzle Mechanics.
    - Links: YouTube trailer available

20. BinBuddy - Gamified Waste Management
    - Role: UI/UX Designer
    - Tech Stack: Figma, UI/UX, Prototyping, Gamification
    - Context: Arkavidia Competition - Gamified waste management solution.
    - Problem: Designing a gamified waste management app to increase youth participation in environmental sustainability.
    - Solution: Created high-fidelity Figma prototype focused on gamification mechanics and intuitive UX. Community-driven mission system.
    - Key Features: Gamification Elements, User Engagement Loops, Visual Design System, Interactive Prototypes.
    - Links: Figma prototype available

21. Amida Portfolio AI - This Chatbot!
    - Role: Full Stack Developer
    - Tech Stack: Next.js, Hugging Face (Mistral-7B), Vercel AI SDK
    - Context: Personal portfolio AI assistant built specifically for answering questions about Hafsah.
    - Problem: Need an interactive way for recruiters and visitors to learn about experience and skills 24/7.
    - Solution: Built chatbot using Hugging Face API with Mistral-7B model, comprehensive knowledge base (HAFSAH_DATA), 160+ fallback responses, bilingual support (EN/ID), and strict hallucination prevention rules.
    - Key Features: Bilingual Support, Hallucination Prevention, 160+ Fallback Responses, Context-Aware Answers.
    - Note: This is a simple system specifically designed to answer questions about Hafsah based on her portfolio data, not a complex pre-built feature. Built in stages with Mistral-7B.

[FUN FACTS & GOALS]
- Future Plans: Wants to pursue a Master's degree in South Korea (considering UST).
- Motivation: To be closer to her favorite K-pop artist, Longshot from the More Vision label.

[PROVEN RELIABILITY & TRACK RECORD]
- Commercial Experience: BUMN project (PT Rekayasa Industri), Xtrahera Innovations (current).
- Leadership Positions: Secretary, Head of Division, Treasurer. Trusted with financial and operational responsibilities.
- Teaching: Mentored 70+ students as Database Practicum Assistant.
- Community Impact: Village digitization project in Indragiri.
- Academic Excellence: 3.82 GPA, perfect 4.0 in Semester 4.
`

const SYSTEM_PROMPT = `You are 'Mimi' 🎀, Hafsah Hamidah's intelligent portfolio assistant.

CRITICAL RULES:
1. ONLY answer based on the provided HAFSAH_DATA. Do NOT make up information.
2. Answer EXACTLY what the user asks. If they ask for her name, say "Her name is Hafsah Hamidah." DO NOT hallucinate or output programming languages (like "TypeScript") when asked basic personal questions.
3. LANGUAGE MATCHING (STRICT): 
   - If the user asks in Indonesian, YOU MUST reply in natural Indonesian.
   - If they ask in English, YOU MUST reply in English.
   - NEVER mix languages in a single response.
4. AVAILABILITY RULE: If asked about her availability or hiring, ALWAYS emphasize that although she is interning at PT Telkom Indonesia (Mar-Jun 2026), she is FULLY AVAILABLE for freelance, part-time, and remote projects.
5. If you don't know the answer, say "I don't have that information. You can contact Hafsah directly." Do NOT guess.
6. Be concise (2-4 sentences), polite, and professional. Use emojis sparingly (🎀, ✨, 🚀).
7. Be helpful and warm, like a personal assistant, not robotic.

COMMUNICATION STYLE:
- Professional yet friendly (Gen-Z professional vibe)
- Match the user's tone and energy
- Highlight achievements when relevant
- Be confident about her skills but humble about achievement

EXAMPLES:
Q (English): "Is she available for internship?"
A: "Yes! Although Hafsah is currently interning at PT Telkom Indonesia (Mar-Jun 2026), she is FULLY AVAILABLE for freelance, part-time, and remote projects. She's excellent at time management! 🚀"

Q (Indonesian): "Apa namanya?"
A: "Namanya Hafsah Hamidah, tapi kamu bisa memanggilnya Mimi atau Hafsah! 🎀"

Q (English): "What's her strongest skill?"
A: "Her strongest skills are Next.js + Laravel for full-stack development, plus YOLOv8 for AI/Computer Vision. She delivered 95% accuracy on Smart Batik Lens! 🎀"`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // CRITICAL: Message Sanitization for API compatibility
    // Filter out system messages
    let coreMessages = messages.filter((msg: any) => msg.role !== 'system')
    
    // API REQUIRES conversations to start with 'user' role
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
      // Personal Info
      'name|nama|siapa|who is she|siapakah': 'Her name is Hafsah Hamidah, but you can call her Mimi or Hafsah! 🎀',
      'age|how old|berapa umur|umurnya': 'Hafsah is 21 years old (born in 2005). She\'s currently in her 3rd year at Universitas Pendidikan Indonesia (UPI), Semester 6! 🎀',
      'student id|nim|nomorstudent': 'Her NIM (Student ID) is 2311474.',
      'gpa|nilai|ipk|academic': 'Her GPA is 3.82 out of 4.00! She achieved a perfect 4.00 in Semester 4, which shows her academic excellence. 📚✨',
      
      // Availability & Work Status
      'available|internship|magang|freelance|part-time|remote|hiring|work': 'Although Hafsah is currently interning at PT Telkom Indonesia (Mar-Jun 2026) in IT/ESS division, she is FULLY AVAILABLE for freelance, part-time, and remote projects! She\'s excellent at managing multiple commitments. 🚀',
      'telkom|telekomunikasi|pt telkom': 'She\'s currently interning at PT Telkom Indonesia (Mar-Jun 2026) in the IT Division, Enterprise Service Support (ESS) team, focusing on Supply Chain Management. Great experience in a major telecom company! 📱💼',
      
      // Skills & Tech Stack
      'skills|keahlian|skill terbaik|strongest|expert': 'Her strongest skills are Next.js, Laravel, and Tailwind CSS for full-stack development. She\'s also advanced in YOLOv8 for AI/Computer Vision (95% accuracy on Smart Batik Lens!). 💻',
      'tech stack|technologies|tools|stack|programming': 'Her tech stack includes: Expert (Next.js, Laravel, Tailwind CSS, MySQL, Python, TypeScript) and Advanced (YOLOv8, Flutter, MongoDB, Docker, FastAPI). She\'s learning Golang and Cloud Architecture! 🛠️',
      
      // Professional Experience
      'bumn|rekayasa industri|cocomm|pt rekayasa': 'She worked on a BUMN project at PT Rekayasa Industri (Mar-May 2025), developing "CoComm" - a digital approval dashboard for corporate workflows. She translated Figma designs to responsive interfaces using Laravel + Tailwind CSS! 🏢',
      'xtrahera|innovations|current work|right now': 'She\'s currently a Full-Stack Developer at Xtrahera Innovations, building commercial projects like AILearn (EdTech) and Maya Zaskia (E-Commerce). Real-world production experience! 💼',
      'experience|pengalaman|kerja|work history': 'Hafsah has diverse experience: Full-Stack Developer at Xtrahera (present), BUMN project at PT Rekayasa Industri, IT Staff at UPI P2M Project, Database Practicum Assistant mentoring 70+ students, and Telkom internship. 💼',
      
      // Trust & Reliability
      'trust|reliable|bisa dipercaya|trustworthy|why hire|choose|pick her': 'Absolutely! She\'s been trusted as Secretary at CPC UPI and Head of Division at Dinamik 20. Her BUMN project experience, commercial work at Xtrahera, 70+ student mentorship, and academic excellence (3.82 GPA) prove her reliability. 💎',
      
      // Education
      'semester|education|pendidikan|university|upi|school': 'She\'s in Semester 6 (3rd year) at Universitas Pendidikan Indonesia (UPI) studying Computer Science (Ilmu Komputer). 🎓',
      'location|bandung|where|kota|area': 'She\'s based in Bandung, West Java, Indonesia. She\'s open to remote work, hybrid, and on-site positions! 📍',
      'future|master|graduate|plans|goal|south korea': 'She wants to pursue a Master\'s degree in South Korea (considering UST). Her long-term goal is to continue advancing in software engineering and data science! 🌍',
      
      // Leadership
      'leadership|leader|team|organize|kepalageban|cpc|dinamik|treasurer|secretary': 'She\'s Secretary at CPC UPI (2025-2026), Head of Sub Division at Dinamik 20, and General Treasurer at A-Storia Inauguration 2023. She leads, organizes, and manages well! 👑',
      
      // Language
      'language|bahasa|english|indonesian|bilingual|communicate': 'She\'s bilingual! Native Indonesian speaker with professional English proficiency. She can communicate effectively in both languages. 🗣️',
      
      // Individual Technologies - Languages
      'javascript|js|node': 'Yes! She\'s proficient in JavaScript, including Node.js and modern ES6+ features. She uses it extensively in her Next.js and React projects! 🟨',
      'typescript|ts': 'Absolutely! TypeScript is one of her core skills. She used it in SIGMA-UMKM (Next.js 16 + TypeScript) and understands type safety! 🔷',
      'python|programming|coding': 'Python is one of her expert languages! She uses it for AI/ML projects, computer vision, and data engineering. 🐍',
      'html|css|markup': 'Yes, she\'s expert in HTML5 and CSS3! Combined with Tailwind CSS, she creates beautiful, responsive interfaces. 🎨',
      'tailwind|tailwindcss': 'Tailwind CSS is one of her expert-level skills! She uses it for rapid UI development in commercial projects. 💨',
      'react|reactjs': 'Yes! React is her go-to frontend library. She\'s built multiple projects with React and Next.js. ⚛️',
      'next.js|nextjs': 'Next.js is one of her expert skills! She\'s proficient in Next.js 16 and modern React frameworks. She built this portfolio with Next.js! 🚀',
      'laravel|php|backend': 'Laravel is another expert skill! She has strong backend development with Laravel and PHP. She used it for the BUMN project! 💾',
      'java|jawa': 'Yes, she has Java experience from her Computer Science curriculum at UPI. She understands OOP principles! ☕',
      'c++|cpp': 'Yes, she knows C++! She learned it for competitive programming and algorithm courses at UPI. 🔧',
      'golang|go lang': 'She\'s currently learning Golang! It\'s part of her growth plan for backend microservices. 🐹',
      'rust': 'She has basic knowledge of Rust and is interested in systems programming. 🦀',
      
      // Individual Technologies - Databases
      'mysql|database|sql': 'She\'s excellent with MySQL and relational databases. She mentored 70+ students as a Database Practicum Assistant! 🗄️',
      'mongodb|mongo|nosql': 'Yes! MongoDB is one of her skills. She used it in SIGMA-UMKM for distributed microservices with NoSQL databases. 🍃',
      'postgresql|postgres': 'She has experience with PostgreSQL. Strong SQL fundamentals! 🐘',
      'redis|cache': 'She understands caching systems like Redis for performance optimization. 🔴',
      'firebase|firestore': 'Yes! Firebase is one of her tools. She used Firebase Real-time Database in PantaniZz IoT project. 🔥',
      'cassandra|apache cassandra': 'Absolutely! She used Apache Cassandra in SIGMA-UMKM for distributed database architecture. Expert-level! 💎',
      
      // Individual Technologies - Tools & Platforms
      'git|github|version control': 'Yes! Git and GitHub are essential tools in her workflow. She manages all her projects with version control. 🐙',
      'figma|design tool': 'She\'s proficient in Figma! She translated Figma designs to code in the BUMN project. 🎨',
      'vscode|visual studio code': 'She uses VS Code as her primary IDE. Familiar with modern dev tools! 💻',
      'postman|api testing': 'She uses Postman for API testing and development. 📮',
      'docker|deployment|devops': 'She has Docker and deployment experience from commercial projects! 🐳',
      'linux|ubuntu|terminal': 'She\'s comfortable with Linux/Unix and command-line interfaces. DevOps-ready! 🐧',
      'aws|amazon web services': 'She\'s currently learning AWS as part of her cloud architecture studies! ☁️',
      'alibaba cloud|aliyun': 'She\'s learning Alibaba Cloud for cloud deployment! ☁️',
      'vercel|deployment': 'She knows Vercel! This portfolio is deployed on Vercel. ▲',
      'nginx|web server': 'She understands Nginx for production deployments. 🌐',
      
      // Individual Technologies - APIs & Architecture
      'rest api|restful|api': 'Yes! She builds RESTful APIs used in commercial projects at Xtrahera and BUMN. 🔌',
      'graphql|graph api': 'She has knowledge of GraphQL as a modern API query language. 📊',
      'websocket|real-time': 'She understands WebSocket for real-time communication. Used in IoT projects! ⚡',
      'jwt|authentication|auth': 'She understands JWT and authentication systems for secure applications! 🔐',
      'socket.io|socketio': 'She understands Socket.io for real-time bidirectional communication. 🔌',
      
      // Individual Technologies - Mobile
      'flutter|mobile|app|mobile app': 'She has advanced skills in Flutter for mobile app development. She built mobile solutions for smart agriculture (PantaniZz)! 📱',
      'dart': 'Dart is the language for Flutter! She uses it in her mobile projects. 🎯',
      'camerax|android': 'She uses CameraX for real-time object detection in her Android projects like the Anatomy App. 📷',
      
      // Individual Technologies - AI/ML
      'yolov8|computer vision|ai|ml|tensorflow': 'She\'s skilled in YOLOv8, TensorFlow, and computer vision. She achieved 95% accuracy on batik pattern recognition! 🤖',
      'opencv|cv': 'She works with computer vision! Good understanding of OpenCV fundamentals. 👁️',
      'pandas|numpy|data analysis': 'Yes! She uses Pandas and NumPy for data manipulation in AI/ML projects. 🐼',
      'scikit-learn|sklearn|machine learning': 'She uses scikit-learn for ML tasks. Strong ML fundamentals! 🤖',
      'keras|deep learning': 'She understands Keras for deep learning with neural networks! 🧠',
      'matplotlib|seaborn|visualization': 'She uses Matplotlib and Seaborn for data visualization and analysis. 📊',
      'jupyter|notebook|ipynb': 'She uses Jupyter Notebooks for data science and AI experimentation! 📓',
      'lstm|rnn|transformer|hate speech': 'She has deep learning experience with LSTM, SimpleRNN, Bi-LSTM, and Transformers! Used in Hate Speech Classification for Indonesian text. 🧠',
      
      // Individual Technologies - Backend Frameworks
      'express|expressjs|node framework': 'She understands Express.js for Node.js backend development. Full-stack JavaScript! 🚂',
      'fastapi|fast api': 'Yes! FastAPI is in her advanced skillset. Modern Python framework for APIs. 🚀',
      'django|python web': 'She has Django knowledge for Python web development. 🎸',
      
      // Individual Technologies - Build & Quality
      'webpack|bundler': 'She understands Webpack (used internally by Next.js). Modern tooling knowledge! 📦',
      'babel|transpiler': 'She understands Babel for JavaScript transpilation. 🗼',
      'eslint|linting': 'She uses ESLint for code quality. Clean code practices! ✨',
      'prettier|code format': 'She uses Prettier for automatic code formatting. 💅',
      'jest|testing|unit test': 'She understands testing principles and Jest for JavaScript/TypeScript. 🧪',
      'selenium|automation': 'She has knowledge of Selenium for testing automation. 🤖',
      
      // Individual Technologies - IoT
      'esp32|microcontroller': 'She works with ESP32! Used in PantaniZz IoT project. 🔌',
      'arduino|board': 'She has Arduino experience from IoT projects like PantaniZz. 🍓',
      'mqtt|iot protocol': 'She understands MQTT for IoT device communication! 📡',
      'dht|sensor|iot hardware': 'She works with IoT sensors! DHT sensors in PantaniZz for temperature/humidity. 🌡️',
      
      // Projects - Detailed
      'sigma umkm|sigma project|tell sigma': 'SIGMA-UMKM is her system architecture masterpiece! Distributed microservices using Apache Cassandra, MongoDB, Docker, Next.js 16, and TypeScript. She designed the system architecture and database schema for real-time UMKM business analytics. BIG 4 project! 🏗️',
      'smart batik|batik lens|yolo|95%': 'Smart Batik Lens uses YOLOv8 + TensorFlow for real-time batik pattern recognition with 95% accuracy! Edge AI computing for fast mobile inference. Recognizes batik patterns in real-time through camera. Lead developer! 🎨🤖',
      'pantanizz|agriculture|iot|farming|esp32': 'PantaniZz is an IoT smart farming system! ESP32 + DHT sensors + Firebase Real-time Database + Flutter. Real-time environmental monitoring and automated alerts for farmers to optimize crop growth. BIG 4 IoT! 🌾📱',
      'amarta|erp|laravel': 'Amarta Mobile is an ERP system built with Laravel & Flutter for real-time tracking and payroll management. Shows her enterprise-level backend + mobile integration skills! 💼',
      'paham saham|stock|trading|prediction': 'PahamSaham is an AI-powered stock market analysis platform using Python, sentiment analysis, and predictive modeling. Features market trend analysis and stock price forecasting. BIG 4! 📈💰',
      'hate speech|nlp|indonesian|deep learning': 'Hate Speech Classification project using deep learning (SimpleRNN, LSTM, Bi-LSTM, Transformer) for Indonesian text detection. Shows her NLP and deep learning expertise! 🧠',
      'anatomy|android|camerax|object detection': 'Anatomy Android App (Ongoing) uses CameraX for real-time object detection and Room database. Hafsah focuses on frontend development, API bridging, and dataset collection. 📱👨‍⚕️',
      'mimi chatbot|amida portfolio|this chatbot': 'This is Amida Portfolio AI! Built as a simple system to answer questions about Hafsah based on her portfolio data using Mistral-7B. Not a complex pre-built feature - built in stages specifically for this! 🎀',
      'ecoscha|game|unity|award': 'EcoSCha is an educational game built with Unity and C# about environmental awareness. Won an award at the university competition! Shows versatility! 🎮',
      'ailearn|pancasila|education|chatbot': 'AILearn Pancasila is a LIVE commercial EdTech platform! An AI chatbot teaching about Pancasila. Currently deployed at Xtrahera. Features conversational AI and student engagement. 📚🤖',
      'maya zaskia|ecommerce|shop|live': 'Maya Zaskia is a LIVE e-commerce platform! Product catalog, shopping cart, payment integration, orders, admin dashboard. Built at Xtrahera - real customers! 🛍️💳',
      'cocomm|dashboard|approval|bumn': 'CoComm is the BUMN corporate project at PT Rekayasa Industri! Digital approval dashboard replacing manual workflows. Laravel backend + Tailwind CSS. Translated Figma to pixel-perfect interfaces. 🏢✅',
      'p2m|village|indragiri|community|resident': 'P2M Project in Indragiri Village: She built (1) Resident Data Security System replacing manual records, and (2) Tourism Profile Website. Also conducted user training for officials. Community impact! 🏘️💻',
      'doxxer|osint|cybersecurity': 'DOXXER is her cybersecurity tool for OSINT analysis! Automates information gathering from public sources. OSINT & security skills! 🔍🔒',
      'masakio|recipe app|food': 'MASAKIO is a recipe application with flexible backend architecture. Features recipe database, search, and cooking instructions. 🍳📱',
      'forgotten memory|game|video|promotional': 'Forgotten Memory is a game project with promotional video! She handled game development and marketing materials. 🎮🎬',
      'campink|camping|rental|equipment': 'Campink is a camping equipment rental platform! Catalog, booking system, availability management, rental tracking. ⛺📦',
      'binbuddy|waste|gamification|recycling': 'BinBuddy gamifies waste management! Uses gamification (points, rewards, challenges) to encourage sorting and recycling. ♻️🎮',
      
      // Project Count & Portfolio
      'how many project|total project|17 project|portfolio': 'She has 17+ total projects! BIG 4 (SIGMA-UMKM, Smart Batik Lens, PantaniZz, PahamSaham), Commercial (AILearn, Maya Zaskia, CoComm), Community (P2M), and others across web, AI, IoT, games! 🎯',
      'biggest project|most proud|best|impressive': 'Most impressive: (1) Smart Batik Lens - 95% accuracy AI, (2) SIGMA-UMKM - complex distributed architecture, (3) BUMN CoComm - enterprise work, (4) AILearn & Maya Zaskia - LIVE deployed! 🌟',
      'ai project|ml project|machine learning': 'Her AI/ML projects: Smart Batik Lens (YOLOv8 95%), PahamSaham (predictions), AILearn (educational chatbot), Hate Speech Classification (NLP). Strong CV and ML! 🤖',
      'iot project|hardware project': 'PantaniZz is her main IoT using ESP32, DHT sensors, Firebase, Flutter. Smart agriculture! 🌾',
      'web project|fullstack|web development': 'Web projects: SIGMA-UMKM, Maya Zaskia, CoComm, AILearn, P2M, MASAKIO, Campink. Full-stack expertise! 🌐',
      'game|game project|unity': 'EcoSCha (Unity + C#, award-winning) and Forgotten Memory (game + video). Versatile! 🎮',
      
      // Teaching & Mentorship
      'mentor|teaching|assistant|practicum|70': 'She mentored 70+ students as Database Practicum Assistant at UPI! Teaching experience in ERD, SQL, normalization. 👨‍🏫',
      'certification|certificate|alibaba|cloud certified': 'Hafsah holds an official Alibaba Cloud Certified Developer certification (valid until 2026) and a 43-hour Competitive Programming Basic Training certificate (C++, Graph Theory, DP)! 📜✨',
      'parampa|sports parade|design|banner': 'She was the Graphic Design Staff for PARAMPA 2024, handling visual branding, social media assets, and large-scale print designs for the faculty\'s sports parade! 🎨',
      
      // Generic
      'summary|about|tell me|who is|introduce|bio': 'Hafsah is a 21-year-old CS student (3.82 GPA) with proven commercial experience at Xtrahera and BUMN. Interning at PT Telkom while FULLY AVAILABLE for freelance/remote. 17+ projects spanning full-stack, AI, IoT. Fast learner, proven leader! 🚀',
      'profile|biography|resume|cv': 'Full-stack + AI engineer: Next.js, Laravel, YOLOv8, Flutter expert. 4 professional roles, 4 leadership positions, 17+ projects, strong track record. Perfect for tech roles seeking fast learner with AI skills! 💼',
      'first question|where start|hello|hi|greet': 'Hi! I\'m Mimi, Hafsah\'s AI assistant. I\'m here to tell you everything about her skills, experience, projects, and why she\'d be great for your team! Ask about anything! 🎀',
      'overview|big picture|entire story': 'Here\'s her story: 21-year-old → Full-Stack at Xtrahera → BUMN project → AI specialist → Mentored 70+ → Led teams → 3.82 GPA → 17+ projects → Telkom internship → AVAILABLE for freelance! 📖',
      'quick summary|tldr': 'TL;DR: Hafsah = Fast learner + Full-stack skills + AI expertise + Commercial experience + Leadership + Available NOW. Complete package! ✅',
      'what make|special|different|why': 'Special: BUMN experience + Real deployed projects + 95% AI accuracy + 70+ students mentored + Perfect 4.0 GPA + Diverse stack + Leadership proven! 🌟',
      'current|present|today|now': 'Right now: Telkom internship (Mar-Jun 2026) in IT/ESS. But FULLY AVAILABLE for freelance, part-time, remote! 🚀',
      'background|history|career path': 'Career: Academic excellence (3.82 GPA) → Teaching (70+ students) → BUMN commercial project → Xtrahera → 17+ projects → 4 leadership roles → Telkom internship. Impressive trajectory! 📈',
      'why hire|pick|choose|select': 'Pick her: ✓ Commercial work ✓ Real deployed projects ✓ AI expertise (95%) ✓ Full-stack ✓ 3.82 GPA ✓ Leadership ✓ Fast learner ✓ Team player! 💎',
      'what can do|capable|competent|offer': 'She can: Full-stack web → AI/CV projects → Mobile apps → Database design → Mentorship → Team leadership → Cloud deployment → Architecture. Versatile! 🎯',
      'education background|school': 'Computer Science at UPI, Semester 6 (3rd year). 3.82 GPA + perfect 4.0 in Semester 4! 🎓',
      'duration|time|years|experience': 'Diverse experience: BUMN projects, Xtrahera employment, UPI practicums, leadership roles, 17+ projects. Multiple concurrent roles! ⏱️',
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

    // If no fallback match, try Hugging Face API with Vercel AI SDK
    try {
      const result = await streamText({
        model: huggingface('mistralai/Mistral-7B-Instruct-v0.2'),
        system: `You are Mimi 🎀, Hafsah's assistant.\n\n${HAFSAH_DATA}\n\n${SYSTEM_PROMPT}`,
        messages: coreMessages,
        temperature: 0.7,
        maxTokens: 500,
      })

      return result.toDataStreamResponse()
    } catch (apiError: any) {
      // If API fails, return friendly fallback
      console.error('Hugging Face API Error:', apiError)
      return new Response(
        "I can answer many questions about Hafsah! Try asking about her name, age, skills, availability, GPA, projects (SIGMA-UMKM, Smart Batik Lens, etc), BUMN experience, Telkom internship, or why she's trustworthy. 😊",
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

