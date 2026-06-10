export type Lesson = {
  title: string;
  duration: string;
  videoId: string; // YouTube video ID (verified embeddable)
};

export type Module = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  instructor: { name: string; title: string };
  price: number; // 0 = free
  originalPrice?: number;
  tags: string[];
  curriculum: Module[];
  outcomes: string[];
  gradient: string;
};

// Helper to count lessons
const total = (c: Module[]) => c.reduce((n, m) => n + m.lessons.length, 0);

const raw: Omit<Course, "lessons">[] = [
  {
    slug: "mastering-data-structures",
    title: "Mastering Data Structures & Algorithms",
    tagline: "From arrays to graphs — think like a problem solver",
    description:
      "A deep, project-based dive into DSA. Learn the patterns top engineers use, with AI-personalized practice that adapts to your weak spots in real time.",
    category: "Algorithms",
    level: "Intermediate",
    duration: "12 hours",
    rating: 4.9,
    students: 18420,
    instructor: { name: "Dr. Aanya Rao", title: "Ex-Google • CS PhD" },
    price: 0,
    tags: ["DSA", "LeetCode", "Interview Prep"],
    gradient: "from-cyan/30 to-violet/30",
    curriculum: [
      {
        title: "Foundations",
        lessons: [          { title: "Recursion explained", duration: "11:33", videoId: "ngCos392W4w" },
          { title: "Arrays & strings deep dive", duration: "14:20", videoId: "QJNwK2uJyGs" },
        ],
      },
      {
        title: "Linear & Tree Structures",
        lessons: [
          { title: "Linked lists from scratch", duration: "21:08", videoId: "njTh_OwMljA" },
          { title: "Stacks & queues in practice", duration: "13:55", videoId: "wjI1WNcIntg" },
          { title: "Binary trees & traversal", duration: "18:30", videoId: "fAAZixBzIAI" },
        ],
      },
      {
        title: "Advanced Patterns",
        lessons: [
          { title: "BFS / DFS on graphs", duration: "22:14", videoId: "pcKY4hjDrxk" },
          { title: "Dynamic programming intro", duration: "27:45", videoId: "oBt53YbR9Kk" },
          { title: "Sliding window pattern", duration: "16:02", videoId: "MK-NZ4hN7rs" },
        ],
      },
    ],
    outcomes: [
      "Solve 250+ classic interview problems",
      "Identify the right pattern in under 60 seconds",
      "Build muscle memory with adaptive AI drills",
    ],
  },
  {
    slug: "fullstack-react-node",
    title: "Full-Stack React + Node",
    tagline: "Ship a real product, not just todo apps",
    description:
      "Build, deploy, and scale a complete SaaS — auth, payments, dashboards, and AI features. The AI tutor reviews your code as you go.",
    category: "Full-Stack",
    level: "Intermediate",
    duration: "14 hours",
    rating: 4.8,
    students: 31250,
    instructor: { name: "Marcus Chen", title: "Staff Engineer • Vercel" },
    price: 0,
    tags: ["React", "Node.js", "TypeScript"],
    gradient: "from-violet/30 to-fuchsia-500/30",
    curriculum: [
      {
        title: "Modern React",
        lessons: [
          { title: "React in 100 seconds", duration: "2:25", videoId: "Tn6-PIqc4UM" },
          { title: "React Hooks crash course", duration: "26:48", videoId: "TNhaISOUy6Q" },
          { title: "TypeScript for React devs", duration: "12:10", videoId: "ahCwqrYpIuM" },
        ],
      },
      {
        title: "Backend with Node",
        lessons: [
          { title: "Node.js in 100 seconds", duration: "2:28", videoId: "ENrzD9HAZK4" },
          { title: "Express.js crash course", duration: "44:22", videoId: "L72fhGm1tfE" },
          { title: "PostgreSQL crash course", duration: "30:18", videoId: "qw--VYLpxG4" },
        ],
      },
      {
        title: "Production",
        lessons: [
          { title: "JWT authentication tutorial", duration: "33:45", videoId: "mbsmsi7l3r4" },
        ],
      },
    ],
    outcomes: [
      "Ship a production-grade SaaS",
      "Master modern TypeScript end-to-end",
      "Confidently architect new systems",
    ],
  },
  {
    slug: "applied-machine-learning",
    title: "Applied Machine Learning",
    tagline: "Models that actually solve problems",
    description:
      "From linear regression to transformers — but always grounded in shipping. Includes a personalized capstone matched to your career goals.",
    category: "Machine Learning",
    level: "Advanced",
    duration: "16 hours",
    rating: 4.9,
    students: 12800,
    instructor: { name: "Prof. Lina Okafor", title: "ML Researcher • DeepMind alum" },
    price: 0,
    tags: ["Python", "PyTorch", "MLOps"],
    gradient: "from-emerald-500/30 to-cyan/30",
    curriculum: [
      {
        title: "Math foundations",
        lessons: [
          { title: "Essence of linear algebra", duration: "10:58", videoId: "fNk_zzaMoSs" },
          { title: "Probability for ML", duration: "13:14", videoId: "sEte4hXEgJ8" },
          { title: "Gradient descent, intuitively", duration: "21:00", videoId: "IHZwWFHWa-w" },
        ],
      },
      {
        title: "Classical ML",
        lessons: [
          { title: "Linear regression explained", duration: "16:42", videoId: "nk2CQITm_eo" },
          { title: "Decision trees & random forests", duration: "22:00", videoId: "v6VJ2RO66Ag" },
          { title: "K-Means clustering", duration: "8:35", videoId: "4b5d3muPQmA" },
        ],
      },
      {
        title: "Deep Learning",
        lessons: [
          { title: "But what is a neural network?", duration: "19:13", videoId: "aircAruvnKk" },
          { title: "Convolutional neural networks", duration: "15:40", videoId: "FmpDIaiMIeA" },
          { title: "Attention is all you need", duration: "27:14", videoId: "iDulhoQ2pro" },
        ],
      },
    ],
    outcomes: [
      "Build & deploy 4 production ML systems",
      "Understand transformers from first principles",
      "Get hired as an ML engineer",
    ],
  },
  {
    slug: "system-design-interview",
    title: "System Design for Senior Engineers",
    tagline: "Design Twitter, Uber, and Netflix — confidently",
    description:
      "The system design course that goes beyond buzzwords. Real trade-offs, real numbers, and AI mock interviews that grade you.",
    category: "System Design",
    level: "Advanced",
    duration: "8 hours",
    rating: 4.9,
    students: 9620,
    instructor: { name: "Ravi Patel", title: "Principal Eng • ex-Uber" },
    price: 0,
    tags: ["System Design", "Scalability", "Senior+"],
    gradient: "from-orange-500/30 to-rose-500/30",
    curriculum: [
      {
        title: "Building blocks",
        lessons: [          { title: "Caching strategies", duration: "11:18", videoId: "dGAgxozNWFE" },
          { title: "Load balancing 101", duration: "9:00", videoId: "K0Ta65OqQkY" },
        ],
      },
      {
        title: "Case studies",
        lessons: [
          { title: "Design Twitter", duration: "24:00", videoId: "wYk0xPP_P_8" },
          { title: "Design Uber", duration: "29:11", videoId: "umWABit-wbk" },
          { title: "Design Netflix", duration: "25:30", videoId: "lsMQRaeKNDk" },
        ],
      },
    ],
    outcomes: [
      "Pass FAANG system design rounds",
      "Lead architecture conversations at work",
      "Reason about scale with confidence",
    ],
  },
  {
    slug: "product-design-foundations",
    title: "Product Design Foundations",
    tagline: "Design like a senior — not like a template",
    description:
      "Typography, color, layout, and interaction. Build a portfolio of real product work that recruiters actually remember.",
    category: "UI/UX Design",
    level: "Beginner",
    duration: "9 hours",
    rating: 4.8,
    students: 14200,
    instructor: { name: "Sofia Berg", title: "Design Lead • Linear" },
    price: 0,
    tags: ["UI/UX", "Figma", "Portfolio"],
    gradient: "from-pink-500/30 to-violet/30",
    curriculum: [
      {
        title: "Visual fundamentals",
        lessons: [
          { title: "Typography for designers", duration: "14:20", videoId: "QrNi9FmdlxY" },
          { title: "Color theory in UI", duration: "11:30", videoId: "_2LLXnUdUIc" },
        ],
      },
      {
        title: "Interaction & portfolio",
        lessons: [
          { title: "Figma tutorial for beginners", duration: "24:00", videoId: "FTFaQWZBqQ8" },
        ],
      },
    ],
    outcomes: [
      "Ship a portfolio of 3 real products",
      "Develop your visual taste",
      "Land your first design role",
    ],
  },
  {
    slug: "python-from-zero",
    title: "Python from Zero to Hero",
    tagline: "The most-loved language, taught the right way",
    description:
      "Learn Python the way working engineers actually use it — clean syntax, real projects, and a path into data, AI, and automation.",
    category: "Python",
    level: "Beginner",
    duration: "10 hours",
    rating: 4.9,
    students: 48200,
    instructor: { name: "Mosh Hamedani", title: "Senior dev • Educator" },
    price: 0,
    tags: ["Python", "Beginner", "Scripting"],
    gradient: "from-yellow-400/30 to-cyan/30",
    curriculum: [
      {
        title: "Core language",
        lessons: [
          { title: "Python for beginners", duration: "60:00", videoId: "kqtD5dpn9C8" },
          { title: "Variables & data types", duration: "15:00", videoId: "khKv-8q7YmY" },
          { title: "Functions & modules", duration: "18:30", videoId: "9Os0o3wzS_I" },
        ],
      },
      {
        title: "Real projects",
        lessons: [
          { title: "Build 12 Python projects", duration: "60:00", videoId: "8ext9G7xspg" },
          { title: "Web scraping with Python", duration: "47:00", videoId: "XVv6mJpFOb0" },
        ],
      },
    ],
    outcomes: [
      "Write clean, idiomatic Python",
      "Build 5 real automation projects",
      "Be ready for data science or backend work",
    ],
  },
  {
    slug: "web-foundations",
    title: "Web Foundations: HTML, CSS & JavaScript",
    tagline: "Everything frontend, in one cohesive course",
    description:
      "Master semantic HTML, modern CSS (Grid, Flexbox, Tailwind), and JavaScript deeply — closures, the event loop, async/await, and the patterns used in real codebases.",
    category: "Frontend",
    level: "Beginner",
    duration: "19 hours",
    rating: 4.8,
    students: 81010,
    instructor: { name: "Jen Simmons", title: "Web standards advocate" },
    price: 0,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "Async"],
    gradient: "from-pink-500/30 to-orange-500/30",
    curriculum: [
      {
        title: "HTML & CSS basics",
        lessons: [
          { title: "HTML full course", duration: "120:00", videoId: "kUMe1FH4CHE" },
          { title: "CSS in 100 seconds", duration: "2:15", videoId: "OEV8gMkCHXQ" },
          { title: "Flexbox crash course", duration: "20:00", videoId: "fYq5PXgSsbE" },
        ],
      },
      {
        title: "Modern layout",
        lessons: [
          { title: "CSS Grid full course", duration: "60:00", videoId: "rg7Fvvl3taU" },
          { title: "Responsive design", duration: "21:30", videoId: "srvUrASNj0s" },
          { title: "Tailwind CSS crash course", duration: "30:00", videoId: "UBOj6rqRUME" },
        ],
      },
      {
        title: "JavaScript — the language",
        lessons: [
          { title: "JavaScript crash course", duration: "63:00", videoId: "hdI2bqOjy3c" },
          { title: "Closures explained", duration: "14:25", videoId: "vKJpN5FAeF4" },
          { title: "The event loop", duration: "26:52", videoId: "8aGhZQkoFbQ" },
        ],
      },
      {
        title: "Async & modules",
        lessons: [
          { title: "Promises in 100 seconds", duration: "2:08", videoId: "RvYYCGs45L4" },
          { title: "Async / await deep dive", duration: "12:00", videoId: "vn3tm0quoqE" },
          { title: "ES modules explained", duration: "10:30", videoId: "qgRUr-YUk1Q" },
        ],
      },
    ],
    outcomes: [
      "Build pixel-perfect, responsive UIs",
      "Use modern CSS confidently (Grid, container queries, Tailwind)",
      "Read any JS codebase with confidence",
      "Write fast, async-correct JavaScript",
    ],
  },
  {
    slug: "data-sql-essentials",
    title: "Data & SQL Essentials",
    tagline: "Pandas, NumPy, SQL & Postgres — the full data toolkit",
    description:
      "The complete data toolkit: wrangle messy data with Pandas/NumPy, visualize trends, and master SQL — joins, indexes, query plans, and Postgres schema design.",
    category: "Data Science",
    level: "Beginner",
    duration: "19 hours",
    rating: 4.8,
    students: 45400,
    instructor: { name: "Keith Galli", title: "Data Scientist • MIT" },
    price: 0,
    tags: ["Pandas", "NumPy", "SQL", "Postgres", "Visualization"],
    gradient: "from-emerald-500/30 to-blue-500/30",
    curriculum: [
      {
        title: "Python data stack",
        lessons: [
          { title: "Pandas full tutorial", duration: "60:00", videoId: "vmEHCJofslg" },
          { title: "NumPy crash course", duration: "58:00", videoId: "QUT1VHiLmmI" },
          { title: "Matplotlib tutorial", duration: "30:00", videoId: "3Xc3CA655Y4" },
        ],
      },
      {
        title: "Real analysis",
        lessons: [
          { title: "Data analysis project", duration: "45:00", videoId: "eMOA1pPVUc4" },
          { title: "Data cleaning techniques", duration: "21:00", videoId: "bDhvCp3_lYw" },
          { title: "Storytelling with data", duration: "18:00", videoId: "8EMW7io4rSI" },
        ],
      },
      {
        title: "SQL fundamentals",
        lessons: [
          { title: "SQL full course for beginners", duration: "240:00", videoId: "HXV3zeQKqGY" },
          { title: "Joins explained visually", duration: "13:00", videoId: "9yeOJ0ZMUYw" },
          { title: "Indexes & query performance", duration: "18:00", videoId: "YuRO9-rOgv4" },
        ],
      },
      {
        title: "Postgres in practice",
        lessons: [
          { title: "PostgreSQL crash course", duration: "60:00", videoId: "qw--VYLpxG4" },
          { title: "Database design fundamentals", duration: "27:00", videoId: "ztHopE5Wnpc" },
          { title: "Window functions", duration: "23:00", videoId: "Ww71knvhQ-s" },
        ],
      },
    ],
    outcomes: [
      "Wrangle any messy CSV with Pandas",
      "Build clear, insightful visualizations",
      "Write fast SQL queries on huge datasets",
      "Design normalized, scalable Postgres schemas",
    ],
  },
  {
    slug: "cloud-aws-essentials",
    title: "AWS Cloud Essentials",
    tagline: "From zero to deploying real workloads",
    description:
      "EC2, S3, Lambda, IAM, and the architecture patterns AWS-certified engineers actually use. Hands-on labs throughout.",
    category: "Cloud / AWS",
    level: "Beginner",
    duration: "11 hours",
    rating: 4.7,
    students: 19850,
    instructor: { name: "Stephane Maarek", title: "AWS Hero • 11x certified" },
    price: 0,
    tags: ["AWS", "Cloud", "Serverless"],
    gradient: "from-orange-500/30 to-yellow-400/30",
    curriculum: [
      {
        title: "AWS core",
        lessons: [
          { title: "AWS in 10 minutes", duration: "10:00", videoId: "a9__D53WsUs" },
          { title: "AWS full course", duration: "240:00", videoId: "Ia-UEYYR44s" },
          { title: "IAM explained", duration: "18:00", videoId: "Ul6FW4UANGc" },
        ],
      },
      {
        title: "Serverless & beyond",
        lessons: [
          { title: "AWS Lambda tutorial", duration: "30:00", videoId: "EBSdyoO3goc" },
          { title: "S3 crash course", duration: "20:00", videoId: "tfU0JEZjcsg" },
        ],
      },
    ],
    outcomes: [
      "Deploy production workloads on AWS",
      "Understand IAM and security boundaries",
      "Pass the AWS Solutions Architect Associate",
    ],
  },
  {
    slug: "git-github-pro",
    title: "Git & GitHub for Pros",
    tagline: "Branching, rebasing, and shipping like a team",
    description:
      "Stop fearing rebase. Master the workflows used by top open-source teams — feature branches, PR reviews, and CI integration.",
    category: "Git & Workflow",
    level: "Beginner",
    duration: "5 hours",
    rating: 4.8,
    students: 33500,
    instructor: { name: "Kevin Powell", title: "Educator • Frontend" },
    price: 0,
    tags: ["Git", "GitHub", "Workflow"],
    gradient: "from-orange-500/30 to-pink-500/30",
    curriculum: [
      {
        title: "Git basics",
        lessons: [
          { title: "Git & GitHub crash course", duration: "60:00", videoId: "RGOj5yH7evk" },
          { title: "Git branching explained", duration: "20:00", videoId: "FyAAIHHClqI" },
          { title: "Merge vs rebase", duration: "12:00", videoId: "0chZFIZLR_0" },
        ],
      },
      {
        title: "Team workflows",
        lessons: [
          { title: "Pull request workflow", duration: "15:00", videoId: "8lGpZkjnkt4" },
          { title: "GitHub Actions intro", duration: "25:00", videoId: "R8_veQiYBjI" },
          { title: "Conventional commits", duration: "8:00", videoId: "OJqUWvmf4gg" },
        ],
      },
    ],
    outcomes: [
      "Use Git confidently in any team",
      "Resolve any merge conflict",
      "Set up CI/CD with GitHub Actions",
    ],
  },
];

export const courses: Course[] = raw.map((c) => ({ ...c, lessons: total(c.curriculum) }));

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);