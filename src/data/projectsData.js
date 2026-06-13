export const projectsData = [
    {
        id: 'attack-sim',
        title: 'AttackSim',
        shortDescription: 'Simulates real-world attack paths across infrastructure using graph modelling and probabilistic analysis.',
        fullDescription: 'Engineered a distributed simulation engine to model multi-stage cyber attacks across enterprise networks. Implemented Monte Carlo probabilistic evaluation to predict attack paths, improving risk assessment accuracy by 94%.',
        type: 'Cyber Security',
        status: 'Completed',
        tags: [
            'Python',
            'Graph Algorithms',
            'Monte Carlo Simulation',
            'Machine Learning',
            'Next.js'
        ],
        features: [
            'Attack path computation using graph structures',
            'Multi-stage attack chain simulation',
            'Privilege escalation modelling',
            'Lateral movement simulation',
            'Exfiltration path analysis',
            'Monte Carlo probabilistic risk evaluation',
            'MITRE ATT&CK based threat modelling',
            'AI-assisted threat prediction'
        ],
        metrics: [
            { label: 'Simulation Scale', value: '10M+ Nodes' },
            { label: 'Risk Eval Accuracy', value: '94%' }
        ],
        featured: true,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/attacksim',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'doc-verify',
        title: 'DocVerify',
        shortDescription: 'Provides secure document verification using decentralized storage and cryptographic validation.',
        fullDescription: 'Designed a high-throughput verification platform addressing document forgery vulnerabilities. Integrated Ethereum smart contracts with IPFS to anchor SHA-256 document fingerprints, enabling decentralized, immutable, and sub-2-second asynchronous validation workflows.',
        type: 'Blockchain',
        status: 'Completed',
        tags: [
            'React',
            'Node.js',
            'PostgreSQL',
            'Redis',
            'Ethereum',
            'IPFS'
        ],
        features: [
            'SHA-256 document fingerprinting',
            'Blockchain anchoring',
            'Ethereum smart contract integration',
            'IPFS decentralized storage',
            'Immutable verification records',
            'Async validation workflows',
            'Proof-based verification architecture'
        ],
        metrics: [
            { label: 'Verification Speed', value: '< 2s' },
            { label: 'Storage Mechanism', value: 'Decentralized' }
        ],
        featured: true,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/DocVerify',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'resil-ai',
        title: 'ResilAI',
        shortDescription: 'Simulates infrastructure failures and generates recovery strategies using AI decision systems.',
        fullDescription: 'Developed an infrastructure resilience testing platform to mitigate single points of failure in distributed architectures. Deployed a hybrid decision engine utilizing large language models to autonomously analyze failure cascades and generate recovery strategies with 120ms latency.',
        type: 'Artificial Intelligence',
        status: 'Completed',
        tags: [
            'Python',
            'Simulation Systems',
            'Large Language Models',
            'Hugging Face'
        ],
        features: [
            'Distributed failure simulation',
            'Hybrid decision engine',
            'Infrastructure stress testing',
            'Recovery planning',
            'Autonomous response generation',
            'Resilience optimization'
        ],
        metrics: [
            { label: 'Decision Latency', value: '120ms' },
            { label: 'Recovery Scenarios', value: '500+' }
        ],
        featured: true,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/ResiliAI',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'peer-link',
        title: 'PeerLink',
        shortDescription: 'Decentralized GPU Virtualization & Remote Execution Platform',
        fullDescription: 'Designed a decentralized compute sharing platform targeting resource underutilization. Engineered containerized execution environments with sub-20ms latency streaming protocols via WebRTC, enabling real-time remote GPU access across distributed networks.',
        type: 'Distributed Systems',
        status: 'In Progress',
        tags: [
            'Docker',
            'KVM',
            'WebRTC',
            'WebSockets',
            'FFmpeg',
            'CUDA'
        ],
        features: [
            'GPU virtualization',
            'Resource isolation',
            'Containerized execution',
            'Real-time remote execution',
            'Low latency streaming',
            'Distributed compute architecture',
            'Decentralized resource sharing'
        ],
        metrics: [
            { label: 'Latency', value: '< 20ms' },
            { label: 'Throughput', value: '10 Gbps' }
        ],
        featured: false,
        inProgress: true,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: null,
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'gan-ids',
        title: 'GAN-Based Intrusion Detection System',
        shortDescription: 'Uses GANs to generate evolving cyber attacks and improve intrusion detection systems.',
        fullDescription: 'Addressed the limitations of signature-based IDS in detecting novel threats. Trained Generative Adversarial Networks (GANs) using realistic network payloads to generate zero-day attack variations. Implemented a continuous adversarial feedback loop, improving detection accuracy of unknown anomalies to 98.5%.',
        type: 'Research',
        status: 'Research',
        tags: [
            'Python',
            'PyTorch',
            'GANs',
            'Cyber Security',
            'Machine Learning'
        ],
        features: [
            'Train GAN models using attack datasets',
            'Generate realistic attack variations',
            'Evaluate attacks against IDS systems',
            'Build a feedback loop between generator and detector',
            'Improve robustness against unknown threats'
        ],
        metrics: [
            { label: 'Detection Accuracy', value: '98.5%' },
            { label: 'Research Focus', value: 'Adversarial ML' }
        ],
        featured: false,
        inProgress: true,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: null,
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'pack-ai',
        title: 'PackAI',
        shortDescription: 'AI-powered package inspection and damage classification system.',
        fullDescription: 'Built an automated visual inspection pipeline to address high false-positive rates in logistics damage classification. Integrated OpenCV and TensorFlow models to process high-throughput conveyor imagery with minimal latency.',
        type: 'Computer Vision',
        status: 'Completed',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'React'],
        featured: false,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/PackAI',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'pulse-link',
        title: 'PulseLink',
        shortDescription: 'Real-time communication and alert delivery platform.',
        fullDescription: 'Architected a highly concurrent WebSocket messaging platform capable of broadcasting real-time alerts. Utilized Redis Pub/Sub to scale delivery pipelines across horizontally distributed Node.js instances.',
        type: 'Distributed Systems',
        status: 'Completed',
        tags: ['Node.js', 'WebSockets', 'Redis', 'React'],
        featured: false,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/PulseLink',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'venture-sim',
        title: 'VentureSim',
        shortDescription: 'Decision intelligence platform for startup and business evaluation.',
        fullDescription: 'Engineered a predictive evaluation model using Scikit-Learn to assess startup viability based on historical market datasets. Deployed a FastAPI backend to serve concurrent classification requests to a data intelligence dashboard.',
        type: 'Data Science',
        status: 'Completed',
        tags: ['Python', 'Pandas', 'Scikit-Learn', 'FastAPI'],
        featured: false,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/VentureSim',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'macos-web-sim',
        title: 'macOS Web Simulation',
        shortDescription: 'Browser-based simulation of macOS user interactions and workflows.',
        fullDescription: 'Developed a high-fidelity browser emulation of the macOS environment to demonstrate advanced state management and complex UI animations using React and Framer Motion.',
        type: 'Frontend',
        status: 'Completed',
        tags: ['React', 'Framer Motion', 'TailwindCSS'],
        featured: false,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/macOS',
            demo: 'https://rohhithg.github.io',
            documentation: null,
            caseStudy: null
        }
    },
    {
        id: 'zephyx',
        title: 'Zephyx',
        shortDescription: 'Role-based issue resolution and tracking platform.',
        fullDescription: 'Designed a full-stack defect tracking system utilizing Prisma ORM and PostgreSQL. Implemented robust role-based access controls (RBAC) to securely segment issue visibility across varied organizational hierarchies.',
        type: 'Full Stack',
        status: 'Completed',
        tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
        featured: false,
        repositoryStats: {
            stars: 0,
            forks: 0,
            lastUpdated: 'Recently'
        },
        links: {
            github: 'https://github.com/rohhithguna/Zephyx',
            demo: null,
            documentation: null,
            caseStudy: null
        }
    }
];