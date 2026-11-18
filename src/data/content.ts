export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  highlights: string[];
  architecture: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface ExperienceProject {
  name: string;
  stack: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  highlights: string[];
  subProjects?: ExperienceProject[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: 'certification' | 'achievement';
  year?: string;
  highlight?: string;
  description: string;
  url: string;
}

export interface PortfolioContent {
  personal: {
    name: string;
    fullName: string;
    title: string;
    roleTag: string;
    location: string;
    phone?: string;
    headline: string;
    subheadline: string;
    bioParagraphs: string[];
    education: {
      degree: string;
      institution: string;
      location: string;
      cgpa: string;
      period: string;
      note?: string;
    };
    socials: {
      email: string;
      linkedin: string;
      github: string;
      resumeUrl: string;
    };
    keyStats: { label: string; value: string; detail: string }[];
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  certifications: CertificationItem[];
}

export const content: PortfolioContent = {
  personal: {
    name: "Himasri Reddy",
    fullName: "Himasri Reddy Katamareddy",
    title: "Software Engineer (Agentic AI)",
    roleTag: "Applied AI & GenAI Systems",
    location: "Hyderabad, India",
    headline: "I build full-stack GenAI products: RAG pipelines, multi-agent workflows, and the interfaces around them.",
    subheadline: "Specializing in autonomous multi-agent reasoning, enterprise hybrid retrieval, governance guardrails, and production-grade full-stack delivery.",
    bioParagraphs: [
      "AI Engineer who ships end-to-end, LLM-powered enterprise products: RAG pipelines, embeddings, vector databases (pgVector, FAISS), vision LLMs, and multi-agent workflows (LangGraph, LangChain, LlamaIndex).",
      "Builds across FastAPI backends, data services, and React/Streamlit UIs, with attention to governance, reliability, and observability (Langfuse, OPA, audit trails). Track record of taking ambiguous business problems from POC to production in HR, finance, procurement, and logistics domains.",
      "Partners directly with business, finance, and client stakeholders to turn ambiguous domain requirements into scalable system designs and rapid proof-of-concepts, taking them from whiteboard architecture to production deployment."
    ],
    education: {
      degree: "Bachelor of Technology, Computer Science Engineering",
      institution: "ICFAI Tech School (IFHE)",
      location: "Hyderabad, Telangana, India",
      cgpa: "8.57 / 10.0",
      period: "Nov 2021 – June 2025",
      note: "Winners of ICFAI TECH’s Internal Smart India Hackathon 2024"
    },
    socials: {
      email: "himasrikatam@gmail.com",
      linkedin: "https://www.linkedin.com/in/himasri-r-9aa507243/",
      github: "https://github.com/himasrikatam",
      resumeUrl: "/resume.pdf"
    },
    keyStats: [
      { label: "Production POCs", value: "8+", detail: "Enterprise AI systems & pipelines shipped" },
      { label: "Knowledge Scale", value: "22,600+", detail: "Tariff codes indexed in hybrid RAG" },
      { label: "Query Acceleration", value: "~80%", detail: "Latency reduction via smart Redis caching" },
      { label: "Token Efficiency", value: "~35%", detail: "Cost savings via semantic chunking" }
    ]
  },

  experiences: [
    {
      id: "letitbex",
      company: "LETITBEX AI",
      role: "Software Engineer (Agentic AI)",
      location: "Hyderabad, India",
      period: "June 2025 – Present",
      current: true,
      type: "Full-time",
      description: "Leading design and implementation of autonomous agent architectures, hybrid retrieval engines, vision-LLMs, and enterprise AI copilots across HR, finance, procurement, and logistics domains.",
      highlights: [
        "LIPP: Built an AI Copilot platform on LangGraph multi-agent workflows automating HR business processes through multi-step reasoning, contextual memory, tool calling, and Keka HRIS synchronization.",
        "HSN/SAC Classification Platform (Philips POC): Built full-stack AI procurement platform classifying items against 22,600+ tariff codes with Reciprocal Rank Fusion, Langfuse tracing, and 4-role React workflows.",
        "Delivery Note Verification Platform (POC): Engineered end-to-end vision-LLM pipeline detecting receiver stamps/signatures with straight-through processing, AWS S3 archiving, and SAP HANA Cloud sync.",
        "Financial Analytics Platform: Scaled production AI data pipelines over 1M+ transactions with pgVector RAG over 250K+ records and Redis caching cutting latency by ~80%.",
        "GovernAI: Document compliance AI with semantic chunking reducing token usage by ~35% and batch workflows analyzing 100+ documents/cycle.",
        "LexReach: Outbound automation system dispatching 2,500+ personalized emails per run using domain enrichment and real-time news scraping."
      ],
      subProjects: [
        {
          name: "LIPP",
          stack: "Python, Multi-Agent Systems, LangGraph, REST APIs, PostgreSQL, pgVector, Neo4j, OPA, Docker",
          bullets: [
            "Built an AI Copilot platform on LangGraph multi-agent workflows that automates HR business processes through reasoning and task delegation.",
            "Developed secure FastAPI REST services with context persistence for scalable, enterprise-grade task automation.",
            "Designed LLM agents with contextual memory, tool calling, and multi-step reasoning loops.",
            "Implemented role-based access control with OPA; containerized Neo4j and pgVector with Docker.",
            "Collaborated with the Keka team to align on HRIS API integration, data models, and sync behavior, translating HR process requirements into agent workflows and technical designs.",
            "Followed CMMI documentation standards, wrote unit tests, and collaborated via GitLab merge requests and peer code reviews."
          ]
        },
        {
          name: "HSN/SAC Classification Platform (Philips POC)",
          stack: "FastAPI, React 19, TypeScript, PostgreSQL + pgvector, Azure OpenAI, Langfuse, Docker, Tailwind CSS",
          bullets: [
            "Built a full-stack AI procurement-governance platform that classifies purchase-order items against 22,600+ HSN/SAC tariff codes.",
            "Designed a hybrid RAG retrieval pipeline combining dense embeddings (pgvector), full-text search, and historical precedent matching, merged with Reciprocal Rank Fusion.",
            "Implemented LLM query normalization and re-ranking with prompt-injection guardrails.",
            "Built a weighted confidence-scoring model that auto-routes high-confidence items and escalates ambiguous ones to senior finance reviewers (human-in-the-loop).",
            "Integrated Langfuse for latency and token tracking; added an append-only audit trail and SHA-256 verified PDF generation for compliance.",
            "Developed the React UI for four role-based workflows (Requester, Finance, Senior Approver, Admin) with confidence, evidence, and audit views.",
            "Partnered with the Philips finance team and client stakeholders to turn an ambiguous HSN/SAC classification process into a scoped technical design."
          ]
        },
        {
          name: "Delivery Note Verification Platform (POC)",
          stack: "FastAPI, Vision LLMs via Ollama, LangChain, AWS S3, SAP HANA Cloud, PostgreSQL, Langfuse, React, Streamlit",
          bullets: [
            "Built an end-to-end vision-LLM pipeline extracting header and line-item data from delivery notes and detecting receiver signatures and company stamps.",
            "Engineered stamp discrimination through prompt engineering and Pillow preprocessing (contrast/faint-ink enhancement).",
            "Implemented straight-through processing with Valid / Partial / Invalid / Duplicate classification, plus a reviewer workflow.",
            "Optimized multi-page PDF processing with asyncio workers and bounded semaphores while preserving page order and auditability.",
            "Integrated AWS S3 for document archiving and SAP HANA Cloud (hdbcli) for ERP sync; used PostgreSQL/Alembic with append-only logs, JWT auth, and SMTP batch alerts.",
            "Instrumented LLM tracing with Langfuse and built a Streamlit test harness plus the React reviewer UI."
          ]
        },
        {
          name: "Financial Transaction Analytics Platform",
          stack: "Python, PostgreSQL, pgVector, LangGraph, Redis",
          bullets: [
            "Built production AI data pipelines over 1M+ financial transactions for intelligent diagnostics and semantic retrieval.",
            "Developed RAG analytics using pgVector embeddings for semantic search across 250K+ financial records.",
            "Orchestrated multi-step reasoning and aggregation workflows with LangGraph.",
            "Integrated Redis caching, cutting repeated-query latency by ~80%.",
            "Engineered XML ingestion and transformation pipelines; built REST APIs powering analytics dashboards."
          ]
        },
        {
          name: "GovernAI",
          stack: "Python, LLMs (Azure OpenAI), Batch Processing, RAG, Semantic Chunking, Prompt Engineering",
          bullets: [
            "Developed a document AI platform for automated compliance assessment that generates structured, normalized compliance scores.",
            "Implemented chunking, embeddings, semantic retrieval, and prompt engineering for compliance analysis.",
            "Architected batch workflows analyzing 100+ documents per cycle, reducing API rate-limit errors by 80%.",
            "Cut token consumption by ~35% via semantic chunking; designed explainable, audit-traceable scoring logic."
          ]
        },
        {
          name: "LexReach",
          stack: "Python, LLMs, Playwright Web Scraping, Firecrawl Tools, CSV Processing, REST APIs",
          bullets: [
            "Built an AI outbound automation system sending 2,500+ personalized emails per run, using domain enrichment and real-time news scraping.",
            "Designed scalable campaign orchestration with dynamic personalization, eliminating manual campaign creation."
          ]
        }
      ],
      skills: ["LangGraph", "FastAPI", "React", "pgVector", "Neo4j", "Docker", "Langfuse", "OPA", "Python", "Redis", "AWS S3", "SAP HANA Cloud"]
    },
    {
      id: "proficon",
      company: "PROFICON LABS",
      role: "Full Stack Intern",
      location: "Hyderabad, India",
      period: "Jan 2025 – June 2025",
      current: false,
      type: "Internship",
      description: "Engineered scalable web applications and enterprise portals with modular frontend architectures and robust Python microservices.",
      highlights: [
        "THE SKOOL APP: Contributed to the development of dynamic and responsive user interfaces using Angular, Bootstrap, and TypeScript to support student management and academic workflows.",
        "Integrated Python (Flask)-based backend APIs to enable seamless data exchange between frontend and backend systems.",
        "Optimized API calls and improved data validation processes to enhance application reliability and reduce response latency.",
        "Improved overall application responsiveness, resulting in faster load times and a smoother user experience within an Agile development environment."
      ],
      skills: ["Angular", "TypeScript", "Bootstrap", "Python", "Flask", "REST APIs", "Agile Scrum"]
    },
    {
      id: "motto",
      company: "MOTTO SYSTEMS",
      role: "Summer Intern",
      location: "Hyderabad, India",
      period: "June 2023 – July 2023",
      current: false,
      type: "Internship",
      description: "Focused on relational database engineering, data modeling, query optimization, and structured ETL routines.",
      highlights: [
        "Sample Management System: Contributed to the project by designing databases, writing SQL queries, and managing data operations.",
        "Worked in an Agile environment, ensuring timely delivery of efficient and accurate database solutions.",
        "Gained deep foundational expertise in ACID compliance, schema migrations, and relational architecture."
      ],
      skills: ["Database Design", "SQL", "Schema Optimization", "Relational Modeling", "PostgreSQL", "Agile"]
    }
  ],

  projects: [
    {
      id: "lipp",
      title: "LIPP: AI Copilot for HR Operations",
      shortTitle: "LIPP HR Copilot",
      category: "Multi-Agent Systems",
      role: "Lead Agentic AI Engineer",
      summary: "LangGraph multi-agent copilot with tool calling, memory, and multi-step reasoning integrated with Keka HRIS.",
      description: "An autonomous HR copilot designed to handle complex employee queries, policy resolution, leave reconciliation, and role-based workflows. Utilizes LangGraph stateful graphs with dynamic tool calling, graph-based knowledge traversal in Neo4j, and strict fine-grained access control with Open Policy Agent.",
      highlights: [
        "Implemented stateful LangGraph workflows enabling recursive tool execution, fallback branches, and persistent session memory.",
        "Integrated bi-directional synchronization with Keka HRIS APIs for live employee records and policy lookups.",
        "Enforced OPA (Open Policy Agent) zero-trust access control protecting confidential HR salary and management data.",
        "Combined PostgreSQL + pgVector embeddings with Neo4j entity graphs for rich context-aware policy answers."
      ],
      architecture: [
        "Stateful LangGraph coordinator with dynamic supervisor/worker graph topologies",
        "FastAPI asynchronous backend containerized via Docker",
        "PostgreSQL + pgVector for document chunk embeddings and vector similarity",
        "Neo4j graph database for organizational hierarchy and department relationships",
        "Open Policy Agent (OPA) policy engine for authorization gates",
        "Keka HRIS webhook and REST integration"
      ],
      tags: ["LangGraph", "FastAPI", "Keka HRIS", "pgVector", "Neo4j", "OPA", "Docker", "Python"],
      metrics: [
        { label: "HR Query Automation", value: "70%+" },
        { label: "Policy Retrieval Precision", value: "96%" }
      ],
      featured: true
    },
    {
      id: "hsn-sac",
      title: "HSN/SAC Classification Platform (Philips POC)",
      shortTitle: "HSN/SAC Tariff Classifier",
      category: "Hybrid RAG & Enterprise AI",
      role: "AI Architecture & RAG Pipeline",
      summary: "Hybrid RAG over 22,600+ tariff codes with Reciprocal Rank Fusion, LLM re-ranking, and human-in-the-loop approvals.",
      description: "An enterprise classification system developed as a POC for Philips to automate customs tariff assignment across tens of thousands of complex technical items. Employs hybrid retrieval uniting vector embeddings, BM25 full-text search, and historical classification precedents with Reciprocal Rank Fusion (RRF), backed by an audit-ready React interface.",
      highlights: [
        "Indexed 22,600+ official Indian HSN/SAC customs codes using high-dimensional domain-adapted embeddings.",
        "Built Reciprocal Rank Fusion (RRF) combining dense vector search and BM25 full-text sparse retrieval.",
        "Implemented an LLM re-ranking stage with strict prompt-injection guardrails and weighted confidence scoring.",
        "Designed a human-in-the-loop React dashboard with 4 distinct role-based approval stages and complete audit trails.",
        "Integrated full Langfuse tracing for token usage, latency, and retrieval quality telemetry."
      ],
      architecture: [
        "Dual-engine retrieval: pgVector dense embeddings + PostgreSQL tsvector BM25 search",
        "Reciprocal Rank Fusion (RRF) combining top-k candidates with historical audit scores",
        "Re-ranker LLM stage validating item specifications against customs regulations",
        "Prompt-injection and jailbreak sanitization layer before generation",
        "FastAPI async backend + React four-role approval dashboard",
        "Langfuse session and trace observability pipeline"
      ],
      tags: ["Hybrid RAG", "Reciprocal Rank Fusion", "pgVector", "Langfuse", "React", "FastAPI", "Guardrails"],
      metrics: [
        { label: "Tariff Codes Covered", value: "22,600+" },
        { label: "Workflows", value: "4 Roles" },
        { label: "Audit Traceability", value: "100%" }
      ],
      featured: true
    },
    {
      id: "delivery-note",
      title: "Delivery Note Verification Platform (POC)",
      shortTitle: "Delivery Note Vision-LLM",
      category: "Vision-LLM & Document AI",
      role: "Full-Stack AI Developer",
      summary: "Vision-LLM pipeline for delivery note extraction, signature/receiver stamp detection, and SAP HANA Cloud sync.",
      description: "An automated logistics verification platform that processes physical, scanned, and photographed delivery notes. Leverages multimodal vision models to extract tabular items, verify receiver signatures, detect corporate rubber stamps, and route records through a straight-through processing pipeline.",
      highlights: [
        "Orchestrated vision-LLM processing with automated image preprocessing via Pillow (contrast enhancement, deskewing).",
        "Developed automated straight-through classification: Valid, Partial, Invalid, and Duplicate buckets.",
        "Engineered concurrent batch processing using Python asyncio for high-throughput invoice handling.",
        "Integrated AWS S3 for secure document storage and SAP HANA Cloud for automated ERP verification.",
        "Shipped interactive review interfaces in both Streamlit and modern React."
      ],
      architecture: [
        "Multimodal Vision-LLM extractor parsing handwritten notes, timestamps, and line items",
        "Pillow image preprocessing pipeline for skew correction and contrast normalization",
        "Asyncio task queue for concurrent parallel image extraction",
        "AWS S3 bucket with signed URLs for confidential storage",
        "SAP HANA Cloud ERP connector for invoice matching",
        "Langfuse tracing for confidence scoring and model latency metrics"
      ],
      tags: ["Vision-LLM", "Pillow", "Asyncio", "AWS S3", "SAP HANA Cloud", "Langfuse", "Streamlit", "React"],
      metrics: [
        { label: "Processing Mode", value: "Straight-Through" },
        { label: "Stamp & Signature Acc.", value: "95%+" }
      ],
      featured: true
    },
    {
      id: "personal-assistant",
      title: "Personal Agentic Assistant",
      shortTitle: "Agentic Assistant",
      category: "Autonomous Agents & Tooling",
      role: "Creator & Developer",
      summary: "Agno, MCP tools, Groq LLaMA 4, MongoDB persistent memory, and OAuth2 Google Workspace automation.",
      description: "An autonomous agentic assistant built for deep workflow automation. Harnesses the Model Context Protocol (MCP) to seamlessly interface with desktop and cloud tools, high-speed Groq LLaMA models, persistent MongoDB conversation memory, and automated Google Workspace calendar/email scheduling.",
      highlights: [
        "Built a tool-augmented Agentic AI assistant using Agno + Groq (LLaMA 4) with persistent memory powered by MongoDB.",
        "Integrated MCP-based tools for live web search, scraping, and dynamic task execution using Playwright and Firecrawl.",
        "Implemented secure OAuth2-based Google Workspace automation (Gmail, Calendar, YouTube).",
        "Designed context-aware workflows with controlled tool orchestration and session-based memory handling."
      ],
      architecture: [
        "Agno agent orchestration framework with tool calling",
        "Model Context Protocol (MCP) client communicating with local/remote tool servers",
        "Groq API client utilizing high-throughput LLaMA 4 inference",
        "MongoDB storage for long-term user memory and interaction episodic recall",
        "OAuth2 authentication pipeline for Google Workspace integration"
      ],
      tags: ["Agno", "MCP", "Groq LLaMA", "MongoDB", "OAuth2", "Google Workspace", "Playwright"],
      metrics: [
        { label: "Inference Engine", value: "Groq LLaMA 4" },
        { label: "Tool Protocol", value: "MCP Standard" }
      ],
      featured: true
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation Platform",
      shortTitle: "Marketing Swarm",
      category: "Multi-Agent Systems",
      role: "Lead Developer",
      summary: "Autonomous multi-agent marketing platform executing market research, blog drafting, and SEO optimization with CrewAI and Groq.",
      description: "An autonomous multi-agent platform designed to execute end-to-end digital marketing workflows. Employs CrewAI role-based agents with structured Pydantic JSON outputs, real-time competitor scraping tools, and shared context memory for scalable campaign generation.",
      highlights: [
        "Built an autonomous multi-agent marketing platform executing end-to-end workflows including market research, strategy creation, blog drafting, and SEO optimization.",
        "Designed role-based agents with structured JSON outputs (Pydantic) for standardized campaign assets.",
        "Integrated web search and scraping tools for real-time competitor analysis and trend discovery.",
        "Implemented sequential task orchestration with shared context memory for scalable AI-driven campaign generation."
      ],
      architecture: [
        "CrewAI multi-agent coordinator with specialized researcher, writer, and SEO critic roles",
        "Groq (LLaMA 3) ultra-low-latency generation engine",
        "Web scraping and search tool integration for real-time market data",
        "Pydantic strict schema validation for campaign deliverables"
      ],
      tags: ["CrewAI", "Python", "Groq (LLaMA 3)", "Multi-Agent Systems", "Pydantic", "SEO"],
      metrics: [
        { label: "Agent Roles", value: "Collaborative Swarm" },
        { label: "Output Fidelity", value: "100% Typed JSON" }
      ],
      featured: false
    },
    {
      id: "coconut-maturity",
      title: "Coconut Maturity Detection",
      shortTitle: "Coconut Deep Learning",
      category: "Computer Vision & Deep Learning",
      role: "ML & Computer Vision Developer",
      summary: "Deep learning image classification ensemble using ResNet, MobileNet, and VGG19 achieving 80.65% training accuracy.",
      description: "An automated agricultural computer vision system that classifies coconut maturity levels from field imagery. Utilizes an ensemble architecture combining ResNet, MobileNet, and VGG19 with transfer learning, specialized image preprocessing, and data augmentation.",
      highlights: [
        "Developed a deep learning-based image classification system using an ensemble of ResNet, MobileNet, and VGG19.",
        "Applied transfer learning, data preprocessing, and augmentation techniques to improve model generalization.",
        "Achieved 80.65% training accuracy and 70.93% validation accuracy through ensemble optimization.",
        "Evaluated model performance and reduced overfitting compared to single-model baselines."
      ],
      architecture: [
        "Ensemble convolutional model combining ResNet, MobileNet, and VGG19 backbones",
        "Transfer learning and fine-tuning on domain-specific imagery",
        "Data augmentation pipeline for rotation, lighting variation, and zoom invariance",
        "Evaluation harness measuring precision, recall, and cross-entropy loss"
      ],
      tags: ["Deep Learning", "ResNet", "MobileNet", "VGG19", "TensorFlow", "Computer Vision", "Python"],
      metrics: [
        { label: "Training Accuracy", value: "80.65%" },
        { label: "Validation Acc.", value: "70.93%" }
      ],
      featured: false
    },
    {
      id: "fin-analytics",
      title: "Financial Transaction Analytics Platform",
      shortTitle: "Financial Analytics Engine",
      category: "Large-Scale RAG & Analytics",
      role: "Backend & Data Pipeline Lead",
      summary: "AI pipelines over 1M+ transactions with 250K+ record RAG, LangGraph orchestration, and Redis caching.",
      description: "A financial intelligence system capable of querying and synthesizing insights across high-volume transactional data. Features LangGraph multi-agent orchestration for query decomposition, dynamic SQL generation, and pgVector search, with multi-tiered Redis caching.",
      highlights: [
        "Processed high-throughput analytics over 1,000,000+ historical transactional ledger items.",
        "Constructed a semantic RAG index over 250,000+ unstructured financial commentary records.",
        "Incorporated intelligent Redis caching layer, slashing repeated query latency by approximately 80%.",
        "Orchestrated complex financial reconciliation queries using LangGraph conditional routing."
      ],
      architecture: [
        "LangGraph query decomposition graph separating quantitative aggregation from semantic lookups",
        "PostgreSQL + pgVector indexed on high-dimensional financial transaction embeddings",
        "Redis caching layer storing query vector embeddings and computed analytics responses",
        "FastAPI service with Pydantic data validation and structured JSON outputs"
      ],
      tags: ["LangGraph", "pgVector", "Redis", "FastAPI", "Python", "Docker", "Financial AI"],
      metrics: [
        { label: "Transactions Handled", value: "1M+" },
        { label: "RAG Record Depth", value: "250K+" },
        { label: "Latency Reduction", value: "~80%" }
      ],
      featured: false
    },
    {
      id: "govern-ai",
      title: "GovernAI: Document Compliance Scoring",
      shortTitle: "GovernAI Compliance",
      category: "Compliance & Semantic Chunking",
      role: "Applied AI Engineer",
      summary: "Document AI for compliance scoring, batch workflows over 100+ documents/cycle, and 35% token reduction.",
      description: "An enterprise regulatory compliance tool that scans dense policy documents, vendor contracts, and legal disclosures against compliance standards. Implements custom semantic chunking algorithms to preserve cross-clause dependencies while minimizing LLM token expenditure.",
      highlights: [
        "Designed batch processing workflows executing compliance scoring on 100+ lengthy documents per run.",
        "Achieved approximately 35% token reduction through intelligent boundary-aware semantic chunking.",
        "Built automated compliance scorecards with source-attributed citations for regulatory auditing.",
        "Standardized JSON schema outputs with Pydantic for deterministic downstream integration."
      ],
      architecture: [
        "Semantic chunking pipeline analyzing header hierarchies and clause boundaries",
        "Parallel batch evaluation harness processing document suites asynchronously",
        "Deterministic scoring engine computing rubric-based compliance grades",
        "Audit trail generator linking citations back to exact page and paragraph indices"
      ],
      tags: ["Document AI", "Semantic Chunking", "Compliance", "Python", "FastAPI", "Pydantic"],
      metrics: [
        { label: "Token Reduction", value: "~35%" },
        { label: "Batch Scale", value: "100+ docs/run" }
      ],
      featured: false
    },
    {
      id: "lex-reach",
      title: "LexReach: AI Outbound Automation",
      shortTitle: "LexReach Automation",
      category: "Outbound AI & Web Scraping",
      role: "AI Workflow Engineer",
      summary: "AI outbound automation sending 2,500+ personalized emails per run with Playwright web scraping and Firecrawl.",
      description: "An enterprise outbound sales and communication engine powered by domain enrichment and real-time news scraping. Eliminates manual campaign drafting by autonomously generating highly customized emails grounded in company news, hiring trends, and market signals.",
      highlights: [
        "Built an AI outbound automation system sending 2,500+ personalized emails per run.",
        "Utilized Playwright and Firecrawl for deep domain enrichment and real-time news scraping.",
        "Designed scalable campaign orchestration with dynamic personalization, eliminating manual campaign creation.",
        "Integrated high-speed CSV processing and REST API webhooks."
      ],
      architecture: [
        "Playwright headless browser scraper extracting corporate press releases and team pages",
        "Firecrawl API integration for structured site crawling",
        "LLM contextual personalizer crafting tailored outreach proposals",
        "Batch email queuing engine with domain-level rate limiting"
      ],
      tags: ["Playwright", "Firecrawl", "Python", "LLMs", "REST APIs", "Automation"],
      metrics: [
        { label: "Emails per run", value: "2,500+" },
        { label: "Personalization", value: "100% Dynamic" }
      ],
      featured: false
    }
  ],

  skillGroups: [
    {
      category: "GenAI & Agents",
      description: "Multi-agent frameworks, hybrid RAG pipelines, and autonomous reasoning systems",
      skills: [
        "RAG",
        "Hybrid retrieval (vector + full-text + RRF)",
        "Embeddings",
        "Semantic search",
        "Semantic Chunking",
        "Vision LLMs",
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "CrewAI",
        "Agno",
        "MCP",
        "Multi-agent systems",
        "Prompt Engineering",
        "LLM APIs (Azure OpenAI, Groq, Llama, Gemma, Qwen-VL via Ollama)"
      ]
    },
    {
      category: "Backend & APIs",
      description: "High-concurrency microservices, async APIs, and security protocols",
      skills: [
        "Python",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Asyncio",
        "Pydantic",
        "JWT",
        "OAuth2",
        "SQLAlchemy",
        "Alembic"
      ]
    },
    {
      category: "Frontend / Full-Stack",
      description: "Modern, reactive, and accessible enterprise interfaces",
      skills: [
        "React",
        "TypeScript",
        "Streamlit",
        "Angular",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      category: "Databases & Vector Search",
      description: "Relational, graph, vector, and in-memory cache architectures",
      skills: [
        "PostgreSQL",
        "pgVector",
        "SAP HANA Cloud",
        "FAISS",
        "MongoDB",
        "Neo4j",
        "Redis"
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Containerization, object storage, and automated CI/CD pipelines",
      skills: [
        "AWS (S3)",
        "Docker",
        "Git",
        "GitHub Actions (CI/CD)",
        "GitLab"
      ]
    },
    {
      category: "Observability & Governance",
      description: "Model tracing, zero-trust policy enforcement, and audit systems",
      skills: [
        "Langfuse (LLM tracing)",
        "OPA (RBAC)",
        "Append-only audit logging",
        "CMMI-aligned documentation"
      ]
    },
    {
      category: "AI-Assisted Development",
      description: "Next-generation developer acceleration tools and agentic harnesses",
      skills: [
        "Cursor AI",
        "GitHub Copilot",
        "Claude Code",
        "Google Antigravity"
      ]
    },
    {
      category: "ML Foundations",
      description: "Fundamental machine learning architectures and computer vision",
      skills: [
        "NLP",
        "Classification",
        "Regression",
        "Clustering",
        "TensorFlow",
        "CNNs",
        "Transfer learning"
      ]
    },
    {
      category: "Practices",
      description: "Enterprise software delivery, code health, and engineering standards",
      skills: [
        "Agile Scrum",
        "Unit testing",
        "High-level and Low-level design",
        "CMMI-aligned documentation",
        "Cross-functional collaboration",
        "Stakeholder communication",
        "Requirements gathering",
        "Code reviews"
      ]
    }
  ],

  certifications: [
    {
      title: "IBM RAG and Agentic AI Professional Certification",
      issuer: "IBM",
      type: "certification",
      year: "2025",
      highlight: "Professional Credential",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/PUXS3BR79Y9A",
      description: "Comprehensive enterprise certification in retrieval-augmented generation (RAG), vector database engineering, agent tool-use, and autonomous multi-agent systems."
    },
    {
      title: "IBM-SkillsBuild Artificial Intelligence Fundamentals",
      issuer: "IBM",
      type: "certification",
      year: "2024",
      highlight: "Foundational AI",
      url: "https://www.credly.com/badges/3dea202d-2f0f-44ab-ad9a-6ab66ccbfe3a/whatsapp",
      description: "Core competency certification encompassing machine learning principles, neural architectures, data prep, and ethical AI deployment."
    },
    {
      title: "INTERNAL SMART INDIA HACKATHON 2024 | Winners of ICFAI TECH’s internal Smart India Hackathon",
      issuer: "ICFAI Tech School",
      type: "achievement",
      year: "2024",
      highlight: "1st Place Winner",
      url: "https://www.sih.gov.in/",
      description: "Developed a two-level AI-driven solution for problem statement 1711 - RailMadad, optimizing railway complaint resolution and significantly reducing manpower requirements. Contributed to developing a chatbot, interactive webpage, and an ML model for prioritizing complaints."
    }
  ]
};
