// Academic Data - Easy to update
const academicData = {
    // Personal Information
    personal: {
        name: "Dr. Ameer Hadi",
        title: "Assistant Professor",
        specialization: "Artificial Intelligence, IoT, and Cloud Computing",
        email: "ameer.hadi@university.edu",
        phone: "+1 (555) 123-4567",
        office: "Computer Science Department<br>University Building, Room 123",
        profileImage: "https://via.placeholder.com/300x300/4f46e5/ffffff?text=AH"
    },

    // About section
    about: {
        description: [
            "I am an Assistant Professor with expertise in cutting-edge technologies including Artificial Intelligence, Internet of Things (IoT), and Cloud Computing. My research focuses on developing innovative solutions that bridge the gap between theoretical computer science and practical applications.",
            "With a passion for education and research, I strive to contribute to the advancement of technology while mentoring the next generation of computer scientists and engineers."
        ],
        stats: [
            { number: "15+", label: "Research Papers" },
            { number: "5+", label: "Active Projects" },
            { number: "100+", label: "Students Taught" }
        ]
    },

    // Publications
    publications: [
        {
            title: "Advanced Machine Learning Techniques for IoT Data Analysis",
            authors: "A. Hadi, M. Smith, J. Johnson",
            venue: "IEEE Transactions on Internet of Things",
            year: "2024",
            link: "#"
        },
        {
            title: "Cloud-Based AI Framework for Smart City Applications",
            authors: "A. Hadi, S. Brown, K. Wilson",
            venue: "International Conference on Cloud Computing",
            year: "2023",
            link: "#"
        },
        {
            title: "Security Protocols for Edge Computing in IoT Networks",
            authors: "A. Hadi, R. Davis, L. Miller",
            venue: "Journal of Network Security",
            year: "2023",
            link: "#"
        },
        {
            title: "Deep Learning Approaches for Predictive Analytics in Smart Systems",
            authors: "A. Hadi, T. Anderson, M. Taylor",
            venue: "ACM Computing Surveys",
            year: "2022",
            link: "#"
        }
    ],

    // Projects
    projects: [
        {
            title: "Smart City IoT Platform",
            description: "A comprehensive IoT platform for smart city management including traffic monitoring, environmental sensing, and energy optimization.",
            technologies: ["Python", "TensorFlow", "AWS", "MongoDB", "React"],
            icon: "fas fa-city",
            link: "#"
        },
        {
            title: "AI-Powered Healthcare System",
            description: "Machine learning system for medical diagnosis and patient monitoring using wearable devices and cloud computing.",
            technologies: ["Python", "PyTorch", "Docker", "Kubernetes", "PostgreSQL"],
            icon: "fas fa-heartbeat",
            link: "#"
        },
        {
            title: "Edge Computing Framework",
            description: "Distributed computing framework for processing IoT data at the edge to reduce latency and improve efficiency.",
            technologies: ["Go", "Docker", "Kubernetes", "Redis", "InfluxDB"],
            icon: "fas fa-microchip",
            link: "#"
        },
        {
            title: "Blockchain-based Security Protocol",
            description: "Novel security protocol using blockchain technology for securing IoT communications and data integrity.",
            technologies: ["Solidity", "Web3.js", "Node.js", "Ethereum", "IPFS"],
            icon: "fas fa-shield-alt",
            link: "#"
        }
    ],

    // Courses
    courses: [
        {
            title: "Introduction to Artificial Intelligence",
            code: "CS 4301",
            description: "Fundamental concepts of AI including search algorithms, knowledge representation, machine learning, and neural networks."
        },
        {
            title: "Internet of Things Systems",
            code: "CS 4350",
            description: "Design and implementation of IoT systems, sensor networks, communication protocols, and data analytics."
        },
        {
            title: "Cloud Computing Architecture",
            code: "CS 5320",
            description: "Advanced topics in cloud computing including virtualization, distributed systems, and scalable architectures."
        },
        {
            title: "Machine Learning Applications",
            code: "CS 5340",
            description: "Practical applications of machine learning in various domains with hands-on projects and real-world datasets."
        }
    ],

    // Gallery items (placeholder)
    gallery: [
        { type: "conference", icon: "fas fa-users", title: "Conference Presentation" },
        { type: "lab", icon: "fas fa-flask", title: "Research Lab" },
        { type: "students", icon: "fas fa-graduation-cap", title: "With Students" },
        { type: "award", icon: "fas fa-trophy", title: "Research Award" },
        { type: "workshop", icon: "fas fa-chalkboard-teacher", title: "Workshop" },
        { type: "collaboration", icon: "fas fa-handshake", title: "Industry Collaboration" }
    ],

    // Social links
    social: [
        { platform: "linkedin", icon: "fab fa-linkedin", url: "#" },
        { platform: "scholar", icon: "fab fa-google", url: "#" },
        { platform: "researchgate", icon: "fab fa-researchgate", url: "#" },
        { platform: "orcid", icon: "fab fa-orcid", url: "#" },
        { platform: "github", icon: "fab fa-github", url: "#" }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = academicData;
}

