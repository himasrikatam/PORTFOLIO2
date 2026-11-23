import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-charcoal/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-[#FBF8F3] rounded-3xl border border-warm-border shadow-soft-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border bg-warm-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blush-soft text-charcoal">
              <FileText className="w-5 h-5 text-charcoal" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="font-serif text-lg font-medium text-charcoal">
                Curriculum Vitae &bull; {content.personal.fullName}
              </h3>
              <p className="text-xs text-charcoal-muted">Complete 2-Page Verified Resume Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Himasri_Reddy_Katamareddy_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-charcoal text-[#F6F0E8] hover:bg-[#433A37] transition-colors shadow-soft"
              title="Download full PDF"
            >
              <Download className="w-3.5 h-3.5 text-blush" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-warm-border bg-warm-bg text-charcoal hover:bg-blush-soft transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="p-2 rounded-full border border-warm-border bg-warm-bg text-charcoal-muted hover:text-charcoal hover:bg-blush-soft transition-colors hidden sm:inline-flex"
              title="Print Resume"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-full border border-warm-border bg-warm-bg text-charcoal-muted hover:text-charcoal hover:bg-blush-soft transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 text-charcoal font-sans bg-white selection:bg-blush selection:text-charcoal">
          {/* Printable container styling matching physical paper */}
          <div className="max-w-[760px] mx-auto bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm print:shadow-none print:border-none print:p-0">

            {/* Header */}
            <div className="border-b-2 border-charcoal pb-4 mb-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-charcoal font-sans">
                    Himasri Reddy Katamareddy
                  </h1>
                  <div className="mt-1.5 space-y-0.5 text-xs text-gray-700">
                    <div>
                      <span className="font-semibold">Linkedin: </span>
                      <a href="https://www.linkedin.com/in/himasri-r-9aa507243/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                        linkedin.com/in/himasri-r-9aa507243/
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold">Github: </span>
                      <a href="https://github.com/himasrikatam" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                        github.com/himasrikatam
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-700 text-left sm:text-right space-y-0.5">
                  <div><span className="font-semibold">Email: </span>himasrikatam@gmail.com</div>
                  <div><span className="font-semibold">Mobile: </span>9392033103</div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs text-gray-800 leading-relaxed text-justify">
                AI Engineer who ships end-to-end, LLM-powered enterprise products: RAG pipelines, embeddings, vector databases (pgVector, FAISS), vision LLMs, and multi-agent workflows (LangGraph, LangChain, LlamaIndex). Builds across FastAPI backends, data services, and React/Streamlit UIs, with attention to governance, reliability, and observability (Langfuse, OPA, audit trails). Track record of taking ambiguous business problems from POC to production in HR, finance, procurement, and logistics domains.
              </p>
            </section>

            {/* Skills Summary */}
            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-2">
                Skills Summary
              </h2>
              <ul className="text-xs space-y-1 text-gray-800">
                <li>&bull; <strong className="text-black">GenAI & Agents:</strong> RAG, Hybrid retrieval (vector + full-text + RRF), Embeddings, Semantic search, Semantic Chunking, Vision LLMs, LangGraph, LangChain, LlamaIndex, CrewAI, Agno, MCP, Multi-agent systems, Prompt Engineering, LLM APIs (Azure OpenAI, Groq, Llama, Gemma, Qwen-VL via Ollama)</li>
                <li>&bull; <strong className="text-black">Backend & APIs:</strong> Python, FastAPI, Flask, REST APIs, Asyncio, Pydantic, JWT, OAuth2, SQLAlchemy, Alembic</li>
                <li>&bull; <strong className="text-black">Frontend / Full-Stack:</strong> React, TypeScript, Streamlit, Angular, Tailwind CSS, Bootstrap</li>
                <li>&bull; <strong className="text-black">Databases & Vector Search:</strong> PostgreSQL, pgVector, SAP HANA Cloud, FAISS, MongoDB, Neo4j, Redis</li>
                <li>&bull; <strong className="text-black">Cloud & DevOps:</strong> AWS (S3), Docker, Git, GitHub Actions (CI/CD), GitLab</li>
                <li>&bull; <strong className="text-black">Observability & Governance:</strong> Langfuse (LLM tracing), OPA (RBAC), Append-only audit logging, CMMI-aligned documentation</li>
                <li>&bull; <strong className="text-black">AI-Assisted Development:</strong> Cursor AI, GitHub Copilot, Claude Code, Google Antigravity</li>
                <li>&bull; <strong className="text-black">ML Foundations:</strong> NLP, Classification, Regression, Clustering, TensorFlow, CNNs, Transfer learning</li>
                <li>&bull; <strong className="text-black">Practices:</strong> Agile Scrum, Unit testing, High-level and Low-level design, CMMI-aligned documentation, Cross-functional collaboration, Stakeholder communication, Requirements gathering, Code reviews</li>
              </ul>
            </section>

            {/* Experience */}
            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-3">
                Experience
              </h2>

              {/* Letitbex */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">&bull; LETITBEX AI</h3>
                  <span className="text-xs font-bold text-black">Hyderabad, India</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs italic text-gray-700">Software Engineer (Agentic AI)</span>
                  <span className="text-xs italic text-gray-700">June 2025 – Present</span>
                </div>

                {/* LIPP */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    LIPP (Python, Multi-Agent Systems, LangGraph, REST APIs, PostgreSQL, pgVector, Neo4j, OPA, Docker):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built an AI Copilot platform on <strong className="text-black">LangGraph multi-agent workflows</strong> that automates HR business processes through reasoning and task delegation.</li>
                    <li>&bull; Developed secure <strong className="text-black">FastAPI REST services</strong> with context persistence for scalable, enterprise-grade task automation.</li>
                    <li>&bull; Designed LLM agents with contextual memory, tool calling, and multi-step reasoning loops.</li>
                    <li>&bull; Implemented role-based access control with <strong className="text-black">OPA</strong>; containerized Neo4j and pgVector with Docker.</li>
                    <li>&bull; Collaborated with the <strong className="text-black">Keka team</strong> to align on HRIS API integration, data models, and sync behavior, translating HR process requirements into agent workflows and technical designs.</li>
                    <li>&bull; Followed CMMI documentation standards, wrote unit tests, and collaborated via GitLab merge requests and peer code reviews.</li>
                  </ul>
                </div>

                {/* HSN/SAC */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    HSN/SAC Classification Platform, Philips POC (FastAPI, React 19, TypeScript, PostgreSQL + pgvector, Azure OpenAI, Langfuse, Docker, Tailwind CSS):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built a full-stack AI procurement-governance platform that classifies purchase-order items against <strong className="text-black">22,600+ HSN/SAC tariff codes</strong>.</li>
                    <li>&bull; Designed a <strong className="text-black">hybrid RAG retrieval pipeline</strong> combining dense embeddings (pgvector), full-text search, and historical precedent matching, merged with <strong className="text-black">Reciprocal Rank Fusion</strong>.</li>
                    <li>&bull; Implemented LLM query normalization and re-ranking with prompt-injection guardrails.</li>
                    <li>&bull; Built a weighted confidence-scoring model that auto-routes high-confidence items and escalates ambiguous ones to senior finance reviewers (human-in-the-loop).</li>
                    <li>&bull; Integrated <strong className="text-black">Langfuse</strong> for latency and token tracking; added an append-only audit trail and SHA-256 verified PDF generation for compliance.</li>
                    <li>&bull; Developed the React UI for four role-based workflows (Requester, Finance, Senior Approver, Admin) with confidence, evidence, and audit views.</li>
                    <li>&bull; Partnered with the Philips finance team and client stakeholders to turn an ambiguous HSN/SAC classification process into a scoped technical design.</li>
                  </ul>
                </div>

                {/* Delivery Note */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    Delivery Note Verification Platform, POC (FastAPI, Vision LLMs via Ollama, LangChain, AWS S3, SAP HANA Cloud, PostgreSQL, Langfuse, React, Streamlit):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built an end-to-end <strong className="text-black">vision-LLM pipeline</strong> that extracts header and line-item data from delivery notes and detects driver/receiver signatures and receiver company stamps.</li>
                    <li>&bull; Engineered stamp discrimination through prompt engineering and Pillow preprocessing (contrast and faint-ink enhancement) to separate genuine receiver stamps from supplier stamps and gate passes.</li>
                    <li>&bull; Implemented <strong className="text-black">straight-through processing</strong> with Valid / Partial / Invalid / Duplicate classification, plus a reviewer workflow for approve, reject, and re-upload.</li>
                    <li>&bull; Optimized multi-page PDF processing with asyncio workers and bounded semaphores while preserving page order and auditability.</li>
                    <li>&bull; Integrated <strong className="text-black">AWS S3</strong> for document archiving and <strong className="text-black">SAP HANA Cloud</strong> (hdbcli) for ERP sync; used PostgreSQL/Alembic with an append-only event log, JWT auth, and SMTP batch alerts.</li>
                    <li>&bull; Instrumented LLM tracing with <strong className="text-black">Langfuse</strong> and built a Streamlit test harness plus the React reviewer UI.</li>
                  </ul>
                </div>

                {/* Financial Transaction Analytics */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    Financial Transaction Analytics Platform (Python, PostgreSQL, pgVector, LangGraph, Redis):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built production AI data pipelines over <strong className="text-black">1M+ financial transactions</strong> for intelligent diagnostics and semantic retrieval.</li>
                    <li>&bull; Developed <strong className="text-black">RAG analytics</strong> using pgVector embeddings for semantic search across <strong className="text-black">250K+ financial records</strong>.</li>
                    <li>&bull; Orchestrated multi-step reasoning and aggregation workflows with <strong className="text-black">LangGraph</strong>.</li>
                    <li>&bull; Integrated <strong className="text-black">Redis caching</strong>, cutting repeated-query latency by ~80%.</li>
                    <li>&bull; Engineered XML ingestion and transformation pipelines; built REST APIs powering analytics dashboards.</li>
                  </ul>
                </div>

                {/* GovernAI */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    GovernAI (Python, LLMs (Azure OpenAI), Batch Processing, RAG, Semantic Chunking, Prompt Engineering):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Developed a document AI platform for automated compliance assessment that generates structured, normalized compliance scores.</li>
                    <li>&bull; Implemented chunking, embeddings, semantic retrieval, and prompt engineering for compliance analysis.</li>
                    <li>&bull; Architected batch workflows analyzing <strong className="text-black">100+ documents per cycle</strong>, reducing API rate-limit errors by 80%.</li>
                    <li>&bull; Cut token consumption by <strong className="text-black">~35% via semantic chunking</strong>; designed explainable, audit-traceable scoring logic.</li>
                  </ul>
                </div>

                {/* LexReach */}
                <div className="mb-2.5">
                  <h4 className="text-xs font-semibold text-gray-900">
                    LexReach (Python, LLMs, Playwright Web Scraping, Firecrawl Tools, CSV Processing, REST APIs):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built an AI outbound automation system sending <strong className="text-black">2,500+ personalized emails per run</strong>, using domain enrichment and real-time news scraping.</li>
                    <li>&bull; Designed scalable campaign orchestration with dynamic personalization, eliminating manual campaign creation.</li>
                  </ul>
                </div>
              </div>

              {/* Proficon Labs */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">&bull; PROFICON LABS</h3>
                  <span className="text-xs font-bold text-black">Hyderabad, India</span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs italic text-gray-700">Full Stack Intern</span>
                  <span className="text-xs italic text-gray-700">Jan 2025 – June 2025</span>
                </div>
                <h4 className="text-xs font-semibold text-gray-900">
                  THE SKOOL APP (Angular, Bootstrap, Typescript, Python, Flask, API Integration):
                </h4>
                <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                  <li>&bull; Contributed to the development of dynamic and responsive user interfaces using <strong className="text-black">Angular, Bootstrap, and TypeScript</strong> to support student management and academic workflows.</li>
                  <li>&bull; Integrated <strong className="text-black">Python (Flask)-based backend APIs</strong> to enable seamless data exchange between frontend and backend systems.</li>
                  <li>&bull; Optimized API calls and improved data validation processes to enhance application reliability and reduce response latency.</li>
                  <li>&bull; Improved overall application responsiveness, resulting in faster load times and a smoother user experience within an Agile development environment.</li>
                </ul>
              </div>

              {/* Motto Systems */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">&bull; MOTTO SYSTEMS</h3>
                  <span className="text-xs font-bold text-black">Hyderabad, India</span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs italic text-gray-700">Summer Intern</span>
                  <span className="text-xs italic text-gray-700">June 2023 – July 2023</span>
                </div>
                <p className="text-xs text-gray-800 pl-3">
                  <strong className="text-black">Sample Management System:</strong> Contributed to the project by designing databases, writing SQL queries, and managing data operations, worked in an Agile environment, ensuring timely delivery of efficient and accurate database solutions.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-3">
                Projects
              </h2>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    &bull; Personal Agentic Assistant (Python, Agno, LangChain, MCP, Groq (LLaMA 4), MongoDB, OAuth2, Playwright, REST APIs):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built a tool-augmented Agentic AI assistant using <strong className="text-black">Agno + Groq (LLaMA 4)</strong> with persistent memory powered by <strong className="text-black">MongoDB</strong>.</li>
                    <li>&bull; Integrated <strong className="text-black">MCP-based tools</strong> for live web search, scraping, and dynamic task execution using Playwright and Firecrawl.</li>
                    <li>&bull; Implemented secure <strong className="text-black">OAuth2-based Google Workspace automation</strong> (Gmail, Calendar, YouTube).</li>
                    <li>&bull; Designed context-aware workflows with controlled tool orchestration and session-based memory handling.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    &bull; Coconut Maturity Detection (Deep Learning):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Developed a deep learning-based image classification system using an ensemble of <strong className="text-black">ResNet, MobileNet, and VGG19</strong>.</li>
                    <li>&bull; Applied transfer learning, data preprocessing, and augmentation techniques to improve model generalization.</li>
                    <li>&bull; Achieved <strong className="text-black">80.65% training accuracy</strong> and <strong className="text-black">70.93% validation accuracy</strong> through ensemble optimization.</li>
                    <li>&bull; Evaluated model performance and reduced overfitting compared to single-model baselines.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-900">
                    &bull; Marketing Automation (Python, CrewAI, Groq (LLaMA 3), Multi-Agent Systems, Tool Integration, Context Memory):
                  </h4>
                  <ul className="text-xs text-gray-800 space-y-1 mt-1 pl-3">
                    <li>&bull; Built an autonomous multi-agent marketing platform executing end-to-end workflows including market research, strategy creation, blog drafting, and SEO optimization.</li>
                    <li>&bull; Designed role-based agents with structured JSON outputs (Pydantic) for standardized campaign assets.</li>
                    <li>&bull; Integrated web search and scraping tools for real-time competitor analysis and trend discovery.</li>
                    <li>&bull; Implemented sequential task orchestration with shared context memory for scalable AI-driven campaign generation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Certifications and Achievements */}
            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-2">
                Certifications and Achievements
              </h2>
              <ul className="text-xs text-gray-800 space-y-1.5 pl-3">
                <li>
                  &bull; <a href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/PUXS3BR79Y9A" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:text-blue-700 underline inline-flex items-center gap-1">
                    IBM RAG and Agentic AI Professional Certification
                    <ExternalLink className="w-3 h-3 text-gray-500 inline" />
                  </a>
                </li>
                <li>
                  &bull; <a href="https://www.credly.com/badges/3dea202d-2f0f-44ab-ad9a-6ab66ccbfe3a/whatsapp" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:text-blue-700 underline inline-flex items-center gap-1">
                    IBM-SkillsBuild Artificial Intelligence Fundamentals
                    <ExternalLink className="w-3 h-3 text-gray-500 inline" />
                  </a>
                </li>
                <li>
                  &bull; <a href="https://lnkd.in/p/dQKBQcqT" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:text-blue-700 underline inline-flex items-center gap-1">
                    INTERNAL SMART INDIA HACKATHON 2024 | Winners of ICFAI TECH’s internal Smart India Hackathon
                    <ExternalLink className="w-3 h-3 text-gray-500 inline" />
                  </a><br />
                  <span className="text-gray-700">Developed a two-level AI-driven solution for problem statement 1711 - RailMadad, optimizing railway complaint resolution and significantly reducing manpower requirements. Contributed to developing a chatbot, interactive webpage, and an ML model for prioritizing complaints.</span>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal border-b border-charcoal pb-0.5 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-bold text-black">&bull; ICFAI TECH SCHOOL, Hyderabad</span>
                <span className="font-bold text-black">Telangana, India</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-gray-800 pl-3">
                <span>Bachelor of Technology, Computer Science Engineering; <strong className="text-black">CGPA: 8.57</strong></span>
                <span className="italic text-gray-700">Nov 2021 – June 2025</span>
              </div>
            </section>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 border-t border-warm-border bg-warm-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-muted">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% of resume records verified against official CV.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Himasri_Reddy_Katamareddy_Resume.pdf"
              className="font-medium text-charcoal hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              Download as PDF
            </a>
            <span>&bull;</span>
            <button
              onClick={onClose}
              className="font-medium text-charcoal hover:underline"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

