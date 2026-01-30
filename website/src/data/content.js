export const homeContent = {
  title: "Deep Learning & its Applications",
  intro: `This module is an introduction course to Machine Learning (ML), with a focus on Deep Learning. The course is offered by the Electronic & Electrical Engineering department to the fourth and fifth year students of Trinity College Dublin. In this module, you will learn the foundations of Machine Learning, Deep Learning, understand how to build neural networks, and learn the building components of modern AI.`,
  modernCurriculum: "From Least Squares to Transformers. The material is constructed in collaboration with leading industrial practitioners including Google, YouTube, and Intel.",
  handsOnLabs: "Unique environment connecting to Colab. Labs use PyTorch are automatically assessed using Git.",
  courseOverview: {
    title: "Course Overview",
      p1: "Deep Learning is at the core of the AI revolution. When you read or hear about AI or machine Learning successes in the news, it really means Deep Learning successes.",
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
  title: "Lab Infrastructure",
  overview: "Our custom-built lab system provides students with seamless access to high-performance computing resources while maintaining a professional development workflow.",
  features: [
    {
      title: "Cloud Computing",
      description: "Direct integration with Google Cloud Platform (GCP) and now Google Colab, providing the GPU/TPU power required for training Deep Learning models."
    },
    {
      title: "Automated Assessment",
      description: "A Git-based feedback loop that automatically assesses student submissions and provides immediate performance metrics."
    },
    {
      title: "Professional Tooling",
      description: "Full access to web-based VS Code editors, Linux terminals, and Jupyter Notebooks directly through the browser."
    },
    {
      title: "Secure Access",
      description: "Transparent authentication and secure proxying to remote compute clusters without complex local setup."
    }
  ]
};

