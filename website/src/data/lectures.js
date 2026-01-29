export const lectures = [
  { 
    id: '00', 
    title: 'Introduction', 
    description: 'Course logistics, history of Deep Learning, and module overview.',
    resources: [{ type: 'slides', url: '/handouts/handout-00-intro.pdf' }] 
  },
  { 
    id: '01', 
    title: 'Linear Regression/Least Squares', 
    description: 'Fundamentals of regression, least squares estimation, and maximum likelihood.',
    resources: [
      { type: 'slides', url: '/handouts/handout-01-linear-regression.pdf' },
      { type: 'tutorial', text: 'Linear Algebra', url: '/handouts/tutorial-00-linear-algebra.pdf', solution: '/handouts/tutorial-00-linear-algebra-solutions.pdf' },
      { type: 'tutorial', text: 'Least Squares', url: '/handouts/tutorial-01-linear-regression.pdf', solution: '/handouts/tutorial-01-linear-regression-solutions.pdf' }
    ]
  },
  { 
    id: '02', 
    title: 'Logistic Regression', 
    description: 'Binary classification, sigmoid functions, and cross-entropy loss.',
    resources: [{ type: 'slides', url: '/handouts/handout-02-logistic-regression.pdf' }] 
  },
  { 
    id: '03', 
    title: 'Classic Classifiers', 
    description: 'k-NN, Decision Trees, SVMs, and the Kernel Trick.',
    resources: [{ type: 'slides', url: '/handouts/handout-03-classic-classifiers.pdf' }] 
  },
  { 
    id: '04', 
    title: 'Evaluating Classifier Performance', 
    description: 'Confusion matrices, ROC curves, precision-recall, and F1 scores.',
    resources: [{ type: 'slides', url: '/handouts/handout-04-evaluating-classifier-performance.pdf' }] 
  },
  { 
    id: '05', 
    title: 'FeedForward Neural Networks', 
    description: 'Perceptrons, multi-layer networks, backpropagation, and activation functions.',
    resources: [{ type: 'slides', url: '/handouts/handout-05-deep-feedforward-networks.pdf' }] 
  },
  { 
    id: '06', 
    title: 'Convolutional Neural Networks', 
    description: 'Convolutional layers, pooling, stride, and architectures for image processing.',
    resources: [{ type: 'slides', url: '/handouts/handout-06-convolutional-neural-networks.pdf' }] 
  },
  { 
    id: '07', 
    title: 'Advances in Network Architectures', 
    description: 'Residual connections, batch normalization, dropout, and modern architectures (ResNet, Inception).',
    resources: [{ type: 'slides', url: '/handouts/handout-07-advances-in-network-architectures.pdf' }] 
  },
  { 
    id: '08', 
    title: 'Recurrent Neural Networks', 
    description: 'Sequential data processing, vanishing gradients, LSTMs, and GRUs.',
    resources: [{ type: 'slides', url: '/handouts/handout-08-recurrent-neural-networks.pdf' }] 
  },
  { 
    id: '09', 
    title: 'Attention Mechanism and Transformer Model', 
    description: 'Attention mechanisms, self-attention, and the Transformer architecture (BERT, GPT).',
    resources: [{ type: 'slides', url: '/handouts/handout-09-transformers.pdf' }] 
  },
  { 
    id: '10', 
    title: 'Generative Models', 
    description: 'Autoencoders, VAEs, GANs, and diffusion models.',
    resources: [{ type: 'slides', url: '/handouts/handout-10-generative-models.pdf' }] 
  },
  { 
    id: '11', 
    title: 'Large Language Models', 
    description: 'Large Language Models, tokenization, pre-training, and fine-tuning.',
    resources: [{ type: 'slides', url: '/handouts/handout-11-large-language-models.pdf' }] 
  },
];
