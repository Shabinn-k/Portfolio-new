export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "bridgeon",
    role: "Software Engineering Intern",
    company: "Bridgeon",
    period: "Present",
    type: "work",
    description: [
      "Collaborated with the engineering team to build and maintain full-stack web applications.",
      "Worked on backend APIs and database integrations.",
      "Gained hands-on experience with production-level code and agile workflows."
    ]
  },
  {
    id: "bca",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Ongoing Studies",
    period: "Present",
    type: "education",
    description: [
      "Currently pursuing BCA, focusing on core computer science fundamentals, data structures, and software engineering.",
      "Applying academic knowledge to real-world projects like DevSync and Sootika."
    ]
  },
  {
    id: "higher-secondary",
    role: "Higher Secondary (+2)",
    company: "Farook College",
    period: "Completed",
    type: "education",
    description: [
      "Completed higher secondary education.",
      "Built the foundational knowledge in mathematics and computer science."
    ]
  }
];