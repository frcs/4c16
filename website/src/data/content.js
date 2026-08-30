export const homeContent = {
  title: "Deep Learning & its Applications",
  intro: `This module provides a comprehensive introduction to Machine Learning (ML), with a specialised focus on the architecture and power of Deep Learning. Offered by the Department of Electronic & Electrical Engineering, the course is designed for fourth and fifth-year students at Trinity College Dublin looking to master the technology defining the modern era.`,
  modernCurriculum: "From Least Squares to Transformers. The material is constructed in collaboration with leading industrial practitioners including Google, YouTube, and Intel.",
  handsOnLabs: "Unique environment connecting to Colab. Labs use PyTorch are automatically assessed using Git.",
  courseOverview: {
    title: "Course Overview",
      p1: "Deep Learning is the engine driving the current AI revolution. When you witness the breakthroughs defining our world—from the creative leaps of Generative AI to the sophisticated reasoning of AI Assistants like ChatGPT—you are seeing Deep Learning in action. This course moves beyond the hype, teaching you the fundamental principles behind the models that are reshaping industry and society alike.",
    p2: "The course starts with an introduction to essential aspects of Machine Learning, including Least Squares, Logistic Regression and popular classification techniques. Then it dives into Neural Nets, including Feed Forward, CNNs, RNNs, and Transformers."
  },
  instructors: {
    title: "Teaching Team",
    people: [
      {
        name: "Asst. Prof. François Pitié",
        role: "Module Coordinator",
        image: "./assets/FrancoisPitie.jpg",
        link: "https://www.tcd.ie/research/profiles/?profile=pitief"
      },
      {
        name: "Demonstrators",
        role: "Teaching Assistants",
        description: "PhD students from the SIGMEDIA research group.",
        link: "https://sigmedia.tv"         
      }
    ]
  }
};

export const labsContent = {
  labEnvironment: {
    title: "Lab Environment",
    description: "We have designed a unique environment specifically for this course so that students can learn best industry practices. Our web platform can transparently connect students to a Google Colab cluster via web based terminal/editor/Jupyter sessions.",
    highlight: "Labs use the PyTorch framework and are automatically assessed using Git to give immediate feedback."
  },
  projects: {
    title: "Course Projects",
    intro: "Students will work on real-world challenges including:",
    list: [
      "Image classification with Deep Neural Networks",
      "Self-driving car simulation (Udacity)",
      "Text generation and detection with RNNs"
    ]
  }
};

export const labSystemContent = {
  title: "Lab Infrastructure & Autograding Platform",
  subtitle: "Architecture, Evolution (2017–Present), and Pedagogical Design",
  platformUrl: "https://4c16.dev/",
  handbookUrl: "handouts/4c16-lab-system-handbook.pdf",
  overview: "When EEU44C16 / EE5C16 (Deep Learning and its Applications) was introduced in 2017 as Ireland's first undergraduate deep learning module, standard university computing setups could not support large-scale deep learning coursework. To bridge the GPU hardware divide and eliminate multi-week grading delays for cohorts of 150+ students, we engineered a custom autograding cloud platform. Today, 4c16.dev operates as a containerized stack delivering automated validation within seconds while reserving lab contact hours for continuous oral vivas.",
  award: {
    title: "University Excellence in Teaching Award",
    year: "2026",
    recipient: "Dr. François Pitié",
    institution: "Trinity College Dublin",
    awardUrl: "https://www.tcd.ie/academicpractice/awards/staff-teaching-awards/",
    newsUrl: "https://www.tcd.ie/engineering/news/2026/professor-franois-pitie-recognised-with-dual-honours-at-2026-trinity-teaching-awards/"
  },
  stats: [
    { label: "Cohort Size", value: "150+", detail: "Senior undergraduate and postgraduate students annually" },
    { label: "Assessment Latency", value: "< 10s", detail: "Automated unit tests and validation feedback on git push" },
    { label: "Operational Life", value: "Since 2017", detail: "Continuous development across three system generations" },
    { label: "Hosting Footprint", value: "5 Containers", detail: "Self-hosted Docker Compose stack on a single virtual host" },
  ],
  designGoals: [
    {
      title: "Hardware Equity",
      problem: "Training deep networks requires dedicated GPUs that students rarely possess on personal laptops. Local workstation setups consistently introduce CUDA driver and OS dependency conflicts.",
      solution: "Interactive model training is decoupled to Google Colab GPU runtimes, with persistent storage anchored in student Trinity Google Drive accounts at zero cost to students."
    },
    {
      title: "Beyond 'Cookbook' Labs",
      problem: "Prescriptive step-by-step labs tend to reward passive compliance rather than developing genuine problem-solving intuition.",
      solution: "Immediate automated testing allows students to tackle open-ended machine learning challenges on real-world datasets, testing creative architectures and submitting multiple iterations."
    },
    {
      title: "Immediate Programmatic Feedback",
      problem: "With cohorts exceeding 150 students, traditional manual grading takes weeks, disconnecting assessment from the active learning cycle.",
      solution: "A push-based automated pipeline validates tensor dimensions, execution integrity, and model performance on hold-out test sets in under ten seconds."
    },
    {
      title: "Focus on Continuous Oral Vivas",
      problem: "Teaching assistants often spend the bulk of contact hours manually checking syntax, file paths, and output shapes.",
      solution: "Automating execution verification shifts contact time to deep technical discussions, where students defend their model design choices during in-person oral vivas."
    }
  ],
  architecture: {
    title: "Current System Architecture (Generation 3, 2026 - Present)",
    summary: "The current platform is a lightweight, self-hosted containerised micro-platform operating at 4c16.dev as 5 Docker containers via docker compose on a single host. No Kubernetes or external message brokers are required.",
    philosophy: "Every component must justify its operational existence and be maintainable by a single operator with minimal friction.",
    workflowSteps: [
      {
        step: "1",
        title: "Student Workspace",
        desc: "Interactive PyTorch training in Google Colab (browser GPU), code and model weights synced with Trinity Google Drive.",
        tech: "Colab + Drive"
      },
      {
        step: "2",
        title: "Git Push over SSH",
        desc: "Student commits and pushes code directly to Forgejo over SSH (Port 2222) via workflow scripts.",
        tech: "SSH Port 2222"
      },
      {
        step: "3",
        title: "Edge Routing & TLS",
        desc: "Caddy reverse proxy handles TLS termination via Let's Encrypt and routes traffic to Forgejo (/git/*) and FastAPI (/*).",
        tech: "Caddy (Ports 80/443)"
      },
      {
        step: "4",
        title: "Atomic Job Dispatch",
        desc: "Forgejo webhooks notify FastAPI, which inserts pending grading jobs into PostgreSQL 16.",
        tech: "PostgreSQL 16 Queue"
      },
      {
        step: "5",
        title: "Dockerized Autograding",
        desc: "An async worker daemon claims jobs via SELECT FOR UPDATE SKIP LOCKED, executes test suites in Docker, and updates the student dashboard.",
        tech: "Docker Worker (<10s)"
      }
    ],
    components: [
      {
        name: "Caddy Reverse Proxy",
        role: "Edge routing & automatic TLS",
        description: "Single entry point for incoming HTTP/HTTPS traffic. Handles automatic Let's Encrypt certificate acquisition and renewals. Multiplexes /git/* requests to Forgejo (port 3000) and general application traffic /* to FastAPI (port 8000).",
        tech: ["Ports 80 & 443", "Automatic TLS", "Zero-config renewals"]
      },
      {
        name: "Forgejo Git Engine",
        role: "Version control & OAuth2 identity provider",
        description: "A lightweight, self-hosted Git server (Gitea fork) hosting isolated private repositories ({academic_year}/{username}-code) for all enrolled students. Acts as the OAuth2 SSO provider and dispatches webhooks to the FastAPI portal on each push.",
        tech: ["SSH Port 2222", "OAuth2 SSO Provider", "Automated Webhooks"]
      },
      {
        name: "FastAPI Application Portal",
        role: "Web interface & assessment API",
        description: "Built with Python 3.13, providing async API endpoints and server-rendered dashboards (Jinja2). Manages student results, cohort progress tracking, administrative enrollment sync, and course releases.",
        tech: ["Python 3.13", "Jinja2 Templates", "Course Admin & Releases"]
      },
      {
        name: "PostgreSQL 16 Database & Atomic Queue",
        role: "Data persistence & job broker",
        description: "Serves as the primary relational store (users, enrollments, assessments) and as an atomic job queue. The worker claims pending jobs using SELECT FOR UPDATE SKIP LOCKED, guaranteeing reliable, single-consumer processing without needing external brokers like Redis or RabbitMQ.",
        tech: ["PostgreSQL 16", "SELECT FOR UPDATE SKIP LOCKED", "Zero external broker dependencies"]
      },
      {
        name: "Async Containerized Grading Worker",
        role: "Sandboxed test execution",
        description: "A background daemon that polls the database queue every 2 seconds. When a job is claimed, it clones the repository via an internal link and runs assess-lab test suites in an isolated Docker container, testing PyTorch models against unseen hold-out sets and writing scores back directly.",
        tech: ["Docker Sandbox", "PyTorch Hold-Out Eval", "< 10s Feedback"]
      }
    ]
  },
  generations: [
    {
      gen: "Generation 1",
      period: "2017 - 2020",
      title: "GCP Cluster, Gitolite & Synchronous Hooks",
      architects: "Architected and built by Dr. Hugh Denman",
      stack: "Gitolite over SSH, Ruby on Rails 5.1, PostgreSQL 9.6, Google Cloud Platform compute instances",
      summary: "Supported by ~€10,000 in Google Cloud Platform educational grants, Dr. Hugh Denman built the initial platform using Gitolite over SSH and synchronous post-receive Git hooks that intercepted pushes and streamed test results directly into student terminals.",
      lessons: "Demonstrated the pedagogical power of automated testing, but synchronous execution caused push timeouts during peak submission windows, and maintaining custom cloud virtual machine clusters imposed significant sysadmin overhead."
    },
    {
      gen: "Generation 2",
      period: "2021 - 2025",
      title: "Colab Compute, Google Drive & Caddy HTTPS",
      architects: "Architected by Dr. Vibhoothi",
      stack: "Google Colab GPU runtimes, Trinity Google Drive storage, Git workflow notebook, Gitolite & Rails backend, Caddy for HTTPS",
      summary: "To address hardware disparity sustainably and give students experience with Google Colab (which Google had recently launched and which students could continue using in their research and careers), Dr. Vibhoothi re-architected the student workflow around Colab GPUs and institutional Trinity Google Drive accounts. A custom orchestration notebook (4c16-git-workflow.ipynb) bridged Colab with remote Git servers via the Python kernel, with Caddy handling HTTPS.",
      lessons: "Completely eliminated local GPU hardware barriers and allowed the module to expand from 70 to over 150 students across engineering and computer science without dedicated university GPU hardware."
    },
    {
      gen: "Generation 3",
      period: "2026 - Present",
      title: "Containerized Stack on 4c16.dev",
      architects: "Architected by Dr. Vibhoothi (Major Platform Upgrade)",
      stack: "Forgejo Git, FastAPI, PostgreSQL 16 Job Queue, Caddy (Auto-TLS), Sandboxed Docker Grading Workers",
      summary: "A major overhaul led by Dr. Vibhoothi to replace complex CLI maintenance operations with automated web administration and prepare the infrastructure to scale for an upcoming expansion to a 3rd-year module in 2027/28. Running on 4c16.dev as 5 Docker containers on a single host with automated dashboards, asynchronous queues, and sub-10s evaluations.",
      lessons: "Drastically simplified day-to-day operations for course instructors, eliminated manual CLI friction, and ensured reliable scaling across multiple cohorts and modules."
    }
  ],
  team: [
    {
      name: "Dr. François Pitié",
      role: "Module Coordinator & Course Creator",
      affiliation: "Associate Professor, Dept. of Electronic & Electrical Engineering, Trinity College Dublin",
      bio: "Initiated 4C16 in 2017 as Ireland's first undergraduate deep learning module; established the curriculum, pedagogical vision, and the oral viva examination model.",
      link: "https://www.tcd.ie/research/profiles/?profile=pitief"
    },
    {
      name: "Dr. Vibhoothi",
      role: "Architect of the Renewed Framework (Gen 2 & Gen 3 Major Upgrade)",
      affiliation: "Dept. of Electronic & Electrical Engineering, Trinity College Dublin",
      bio: "The architect behind the platform's evolution: designed the migration to decoupled Colab/Drive workflows (Gen 2) and authored the major Gen 3 upgrade into the modern containerized autograding platform operating at 4c16.dev.",
    },
    {
      name: "Dr. Hugh Denman",
      role: "Architect of Generation 1 Infrastructure",
      affiliation: "Dept. of Electronic & Electrical Engineering, Trinity College Dublin",
      bio: "Ex-Google engineer; architected the initial 2017 platform infrastructure (Gen 1), pioneering Git-based synchronous automated grading on GCP.",
    }
  ],
  features: [
    {
      title: "Cloud Computing",
      description: "Zero-cost high-performance GPU runtimes via Google Colab, backed by persistent Trinity Google Drive storage."
    },
    {
      title: "Automated Assessment",
      description: "An asynchronous Git-based feedback loop that automatically assesses student submissions and provides immediate performance metrics."
    },
    {
      title: "Professional Tooling",
      description: "Industry-standard software engineering workflow: Git, SSH keys, unit tests, continuous integration, and PyTorch."
    },
    {
      title: "Secure Access",
      description: "Single sign-on via Forgejo OAuth2, automatic TLS certificate management via Caddy, and sandboxed Docker test execution."
    }
  ]
};


