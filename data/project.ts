import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sootika",
    title: "Sootika",
    description: "A full-stack e-commerce platform specializing in premium women's clothing, featuring secure checkout and inventory management.",
    techStack: ["Go", "Gin", "PostgreSQL", "GORM", "Redis", "React", "Tailwind CSS", "Stripe/Razorpay"],
    githubUrl: "https://github.com/yourusername/sootika",
    liveUrl: "https://sootika.com",
    featured: true,
    architectureNotes: [
      "Engineered a normalized PostgreSQL schema handling products, variants, and user carts, utilizing GORM transactions to ensure ACID compliance during checkout.",
      "Implemented Redis caching for high-read product catalogs and filtering endpoints, significantly reducing database load during peak traffic.",
      "Integrated secure payment gateway webhooks to handle asynchronous order fulfillment and inventory deduction safely.",
      "Built JWT-based authentication with role-based access control (RBAC) for admin inventory management."
    ]
  },
  {
    id: "devsync",
    title: "DevSync",
    description: "A real-time developer collaboration platform designed for high-throughput messaging and code sharing.",
    techStack: ["Go", "Gin", "PostgreSQL", "GORM", "Redis", "gRPC", "WebSockets", "Docker"],
    githubUrl: "https://github.com/yourusername/devsync",
    featured: false,
    architectureNotes: [
      "Implemented WebSocket connections in Go to handle real-time bi-directional communication.",
      "Used Redis for caching active sessions and Pub/Sub for scaling WebSocket servers.",
      "Integrated websocket for asynchronous event processing (e.g., notifications, activity feeds).",
      "Designed a normalized PostgreSQL schema using GORM, with indexes optimized for high-read queries.",
      "Secured APIs using JWT authentication and middleware."
    ]
  }
];