import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    HRFlowable
)

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Base fonts & colors
    primary_color = colors.HexColor("#1A1A1A")
    heading_color = colors.HexColor("#111111")
    link_color = colors.HexColor("#0D47A1")

    # Custom styles
    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=heading_color
    )

    header_meta = ParagraphStyle(
        'HeaderMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=primary_color
    )

    header_meta_right = ParagraphStyle(
        'HeaderMetaRight',
        parent=header_meta,
        alignment=2 # Right align
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=heading_color,
        spaceAfter=2,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=primary_color
    )

    body_bold = ParagraphStyle(
        'BodyBoldCustom',
        parent=body_style,
        fontName='Helvetica-Bold'
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        textColor=primary_color,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=1.8
    )

    job_title = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=heading_color
    )

    job_sub = ParagraphStyle(
        'JobSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=primary_color
    )

    story = []

    # 1. Header (Name + Contact info table)
    contact_left = f"""
    <b>Linkedin:</b> <a href="https://www.linkedin.com/in/himasri-r-9aa507243/" color="{link_color}">linkedin.com/in/himasri-r-9aa507243/</a><br/>
    <b>Github:</b> <a href="https://github.com/himasrikatam" color="{link_color}">github.com/himasrikatam</a>
    """
    contact_right = """
    <b>Email:</b> himasrikatam@gmail.com<br/>
    <b>Mobile:</b> 9392033103
    """

    header_data = [
        [Paragraph("HIMASRI REDDY KATAMAREDDY", name_style), Paragraph(contact_right, header_meta_right)],
        [Paragraph(contact_left, header_meta), ""]
    ]

    t_header = Table(header_data, colWidths=[340, 200])
    t_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('SPAN', (1, 0), (1, 1)),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_header)
    story.append(Spacer(1, 6))

    # Helper function for Section Titles
    def add_section(title):
        story.append(Spacer(1, 3))
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#222222"), spaceAfter=4, spaceBefore=1))

    # 2. Professional Summary
    add_section("PROFESSIONAL SUMMARY")
    summary_text = (
        "AI Engineer who ships end-to-end, LLM-powered enterprise products: RAG pipelines, embeddings, "
        "vector databases (pgVector, FAISS), vision LLMs, and multi-agent workflows (LangGraph, LangChain, LlamaIndex). "
        "Builds across FastAPI backends, data services, and React/Streamlit UIs, with attention to governance, reliability, "
        "and observability (Langfuse, OPA, audit trails). Track record of taking ambiguous business problems from POC to "
        "production in HR, finance, procurement, and logistics domains."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Skills Summary
    add_section("SKILLS SUMMARY")
    skills = [
        ("GenAI & Agents", "RAG, Hybrid retrieval (vector + full-text + RRF), Embeddings, Semantic search, Semantic Chunking, Vision LLMs, LangGraph, LangChain, LlamaIndex, CrewAI, Agno, MCP, Multi-agent systems, Prompt Engineering, LLM APIs (Azure OpenAI, Groq, Llama, Gemma, Qwen-VL via Ollama)"),
        ("Backend & APIs", "Python, FastAPI, Flask, REST APIs, Asyncio, Pydantic, JWT, OAuth2, SQLAlchemy, Alembic"),
        ("Frontend / Full-Stack", "React, TypeScript, Streamlit, Angular, Tailwind CSS, Bootstrap"),
        ("Databases & Vector Search", "PostgreSQL, pgVector, SAP HANA Cloud, FAISS, MongoDB, Neo4j, Redis"),
        ("Cloud & DevOps", "AWS (S3), Docker, Git, GitHub Actions (CI/CD), GitLab"),
        ("Observability & Governance", "Langfuse (LLM tracing), OPA (RBAC), Append-only audit logging, CMMI-aligned documentation"),
        ("AI-Assisted Development", "Cursor AI, GitHub Copilot, Claude Code, Google Antigravity"),
        ("ML Foundations", "NLP, Classification, Regression, Clustering, TensorFlow, CNNs, Transfer learning"),
        ("Practices", "Agile Scrum, Unit testing, High-level and Low-level design, CMMI-aligned documentation, Cross-functional collaboration, Stakeholder communication, Requirements gathering, Code reviews")
    ]

    for cat, items in skills:
        story.append(Paragraph(f"&bull; <b>{cat}:</b> {items}", bullet_style))

    # 4. Experience
    add_section("EXPERIENCE")

    # Letitbex AI
    letitbex_header = [
        [Paragraph("&bull; <b>LETITBEX AI</b>", job_title), Paragraph("<b>Hyderabad, India</b>", ParagraphStyle('R', parent=job_title, alignment=2))],
        [Paragraph("<i>Software Engineer (Agentic AI)</i>", job_sub), Paragraph("<i>June 2025 - Present</i>", ParagraphStyle('RS', parent=job_sub, alignment=2))]
    ]
    t_letitbex = Table(letitbex_header, colWidths=[360, 180])
    t_letitbex.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_letitbex)
    story.append(Spacer(1, 3))

    # LIPP
    story.append(Paragraph("<b>LIPP (Python, Multi-Agent Systems, LangGraph, REST APIs, PostgreSQL, pgVector, Neo4j, OPA, Docker):</b>", body_bold))
    lipp_bullets = [
        "Built an AI Copilot platform on <b>LangGraph multi-agent workflows</b> that automates HR business processes through reasoning and task delegation.",
        "Developed secure <b>FastAPI REST services</b> with context persistence for scalable, enterprise-grade task automation.",
        "Designed LLM agents with contextual memory, tool calling, and multi-step reasoning loops.",
        "Implemented role-based access control with <b>OPA</b>; containerized Neo4j and pgVector with Docker.",
        "Collaborated with the <b>Keka team</b> to align on HRIS API integration, data models, and sync behavior, translating HR process requirements into agent workflows and technical designs.",
        "Followed CMMI documentation standards, wrote unit tests, and collaborated via GitLab merge requests and peer code reviews."
    ]
    for b in lipp_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 2))

    # HSN/SAC
    story.append(Paragraph("<b>HSN/SAC Classification Platform, Philips POC (FastAPI, React 19, TypeScript, PostgreSQL + pgvector, Azure OpenAI, Langfuse, Docker, Tailwind CSS):</b>", body_bold))
    hsn_bullets = [
        "Built a full-stack AI procurement-governance platform that classifies purchase-order items against <b>22,600+ HSN/SAC tariff codes</b>.",
        "Designed a <b>hybrid RAG retrieval pipeline</b> combining dense embeddings (pgvector), full-text search, and historical precedent matching, merged with <b>Reciprocal Rank Fusion</b>.",
        "Implemented LLM query normalization and re-ranking with prompt-injection guardrails.",
        "Built a weighted confidence-scoring model that auto-routes high-confidence items and escalates ambiguous ones to senior finance reviewers (human-in-the-loop).",
        "Integrated <b>Langfuse</b> for latency and token tracking; added an append-only audit trail and SHA-256 verified PDF generation for compliance.",
        "Developed the React UI for four role-based workflows (Requester, Finance, Senior Approver, Admin) with confidence, evidence, and audit views.",
        "Partnered with the Philips finance team and client stakeholders to turn an ambiguous HSN/SAC classification process into a scoped technical design, covering approval roles, confidence thresholds, and audit requirements, then delivered the POC against their feedback."
    ]
    for b in hsn_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 2))

    # Delivery Note Verification Platform
    story.append(Paragraph("<b>Delivery Note Verification Platform, POC (FastAPI, Vision LLMs via Ollama, LangChain, AWS S3, SAP HANA Cloud, PostgreSQL, Langfuse, React, Streamlit):</b>", body_bold))
    dn_bullets = [
        "Built an end-to-end <b>vision-LLM pipeline</b> that extracts header and line-item data from delivery notes and detects driver/receiver signatures and receiver company stamps.",
        "Engineered stamp discrimination through prompt engineering and Pillow preprocessing (contrast and faint-ink enhancement) to separate genuine receiver stamps from supplier stamps and gate passes.",
        "Implemented <b>straight-through processing</b> with Valid / Partial / Invalid / Duplicate classification, plus a reviewer workflow for approve, reject, and re-upload.",
        "Optimized multi-page PDF processing with asyncio workers and bounded semaphores while preserving page order and auditability.",
        "Integrated <b>AWS S3</b> for document archiving and <b>SAP HANA Cloud</b> (hdbcli) for ERP sync; used PostgreSQL/Alembic with an append-only event log, JWT auth, and SMTP batch alerts.",
        "Instrumented LLM tracing with <b>Langfuse</b> and built a Streamlit test harness plus the React reviewer UI."
    ]
    for b in dn_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    # PAGE 2
    story.append(PageBreak())

    # Financial Transaction Analytics Platform
    story.append(Paragraph("<b>Financial Transaction Analytics Platform (Python, PostgreSQL, pgVector, LangGraph, Redis):</b>", body_bold))
    fin_bullets = [
        "Built production AI data pipelines over <b>1M+ financial transactions</b> for intelligent diagnostics and semantic retrieval.",
        "Developed <b>RAG analytics</b> using pgVector embeddings for semantic search across <b>250K+ financial records</b>.",
        "Orchestrated multi-step reasoning and aggregation workflows with <b>LangGraph</b>.",
        "Integrated <b>Redis caching</b>, cutting repeated-query latency by ~80%.",
        "Engineered XML ingestion and transformation pipelines; built REST APIs powering analytics dashboards."
    ]
    for b in fin_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 3))

    # GovernAI
    story.append(Paragraph("<b>GovernAI (Python, LLMs (Azure OpenAI), Batch Processing, RAG, Semantic Chunking, Prompt Engineering):</b>", body_bold))
    gov_bullets = [
        "Developed a document AI platform for automated compliance assessment that generates structured, normalized compliance scores.",
        "Implemented chunking, embeddings, semantic retrieval, and prompt engineering for compliance analysis.",
        "Architected batch workflows analyzing <b>100+ documents per cycle</b>, reducing API rate-limit errors by 80%.",
        "Cut token consumption by <b>~35% via semantic chunking</b>; designed explainable, audit-traceable scoring logic."
    ]
    for b in gov_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 3))

    # LexReach
    story.append(Paragraph("<b>LexReach (Python, LLMs, Playwright Web Scraping, Firecrawl Tools, CSV Processing, REST APIs):</b>", body_bold))
    lex_bullets = [
        "Built an AI outbound automation system sending <b>2,500+ personalized emails per run</b>, using domain enrichment and real-time news scraping.",
        "Designed scalable campaign orchestration with dynamic personalization, eliminating manual campaign creation."
    ]
    for b in lex_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 4))

    # Proficon Labs
    proficon_header = [
        [Paragraph("&bull; <b>PROFICON LABS</b>", job_title), Paragraph("<b>Hyderabad, India</b>", ParagraphStyle('R2', parent=job_title, alignment=2))],
        [Paragraph("<i>Full Stack Intern</i>", job_sub), Paragraph("<i>Jan 2025 - June 2025</i>", ParagraphStyle('RS2', parent=job_sub, alignment=2))]
    ]
    t_prof = Table(proficon_header, colWidths=[360, 180])
    t_prof.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_prof)
    story.append(Spacer(1, 2))

    story.append(Paragraph("<b>THE SKOOL APP (Angular, Bootstrap, Typescript, Python, Flask, API Integration):</b>", body_bold))
    prof_bullets = [
        "Contributed to the development of dynamic and responsive user interfaces using <b>Angular, Bootstrap, and TypeScript</b> to support student management and academic workflows.",
        "Integrated <b>Python (Flask)-based backend APIs</b> to enable seamless data exchange between frontend and backend systems.",
        "Optimized API calls and improved data validation processes to enhance application reliability and reduce response latency.",
        "Improved overall application responsiveness, resulting in faster load times and a smoother user experience within an Agile development environment."
    ]
    for b in prof_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 4))

    # Motto Systems
    motto_header = [
        [Paragraph("&bull; <b>MOTTO SYSTEMS</b>", job_title), Paragraph("<b>Hyderabad, India</b>", ParagraphStyle('R3', parent=job_title, alignment=2))],
        [Paragraph("<i>Summer Intern</i>", job_sub), Paragraph("<i>June 2023 - July 2023</i>", ParagraphStyle('RS3', parent=job_sub, alignment=2))]
    ]
    t_motto = Table(motto_header, colWidths=[360, 180])
    t_motto.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_motto)
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Sample Management System:</b> Contributed to the project by designing databases, writing SQL queries, and managing data operations, worked in an Agile environment, ensuring timely delivery of efficient and accurate database solutions.", bullet_style))

    # 5. Projects
    add_section("PROJECTS")

    # Personal Agentic Assistant
    story.append(Paragraph("<b>Personal Agentic Assistant (Python, Agno, LangChain, MCP, Groq (LLaMA 4), MongoDB, OAuth2, Playwright, REST APIs):</b>", body_bold))
    pa_bullets = [
        "Built a tool-augmented Agentic AI assistant using <b>Agno + Groq (LLaMA 4)</b> with persistent memory powered by <b>MongoDB</b>.",
        "Integrated <b>MCP-based tools</b> for live web search, scraping, and dynamic task execution using Playwright and Firecrawl.",
        "Implemented secure <b>OAuth2-based Google Workspace automation</b> (Gmail, Calendar, YouTube).",
        "Designed context-aware workflows with controlled tool orchestration and session-based memory handling."
    ]
    for b in pa_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 2))

    # Coconut Maturity Detection
    story.append(Paragraph("<b>Coconut Maturity Detection (Deep Learning):</b>", body_bold))
    coconut_bullets = [
        "Developed a deep learning-based image classification system using an ensemble of <b>ResNet, MobileNet, and VGG19</b>.",
        "Applied transfer learning, data preprocessing, and augmentation techniques to improve model generalization.",
        "Achieved <b>80.65% training accuracy</b> and <b>70.93% validation accuracy</b> through ensemble optimization.",
        "Evaluated model performance and reduced overfitting compared to single-model baselines."
    ]
    for b in coconut_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(Spacer(1, 2))

    # Marketing Automation
    story.append(Paragraph("<b>Marketing Automation (Python, CrewAI, Groq (LLaMA 3), Multi-Agent Systems, Tool Integration, Context Memory):</b>", body_bold))
    mkt_bullets = [
        "Built an autonomous multi-agent marketing platform executing end-to-end workflows including market research, strategy creation, blog drafting, and SEO optimization.",
        "Designed role-based agents with structured JSON outputs (Pydantic) for standardized campaign assets.",
        "Integrated web search and scraping tools for real-time competitor analysis and trend discovery.",
        "Implemented sequential task orchestration with shared context memory for scalable AI-driven campaign generation."
    ]
    for b in mkt_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    # 6. Certifications & Achievements
    add_section("CERTIFICATIONS AND ACHIEVEMENTS")
    story.append(Paragraph(f'&bull; <a href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/PUXS3BR79Y9A" color="{link_color}"><b><u>IBM RAG and Agentic AI Professional Certification</u></b></a>', bullet_style))
    story.append(Paragraph(f'&bull; <a href="https://www.credly.com/badges/3dea202d-2f0f-44ab-ad9a-6ab66ccbfe3a/whatsapp" color="{link_color}"><b><u>IBM-SkillsBuild Artificial Intelligence Fundamentals</u></b></a>', bullet_style))
    sih_text = (
        f'&bull; <a href="https://www.sih.gov.in/" color="{link_color}"><b><u>INTERNAL SMART INDIA HACKATHON 2024 | Winners of ICFAI TECH\'s internal Smart India Hackathon</u></b></a><br/>'
        "&nbsp;&nbsp;Developed a two-level AI-driven solution for problem statement 1711 - RailMadad, optimizing railway complaint "
        "resolution and significantly reducing manpower requirements. Contributed to developing a chatbot, interactive webpage, and an ML model for prioritizing complaints."
    )
    story.append(Paragraph(sih_text, bullet_style))

    # 7. Education
    add_section("EDUCATION")
    edu_table_data = [
        [Paragraph("&bull; <b>ICFAI TECH SCHOOL, Hyderabad</b>", job_title), Paragraph("<b>Telangana, India</b>", ParagraphStyle('E1', parent=job_title, alignment=2))],
        [Paragraph("<i>Bachelor of Technology, Computer Science Engineering; <b>CGPA: 8.57</b></i>", job_sub), Paragraph("<i>Nov 2021 - June 2025</i>", ParagraphStyle('E2', parent=job_sub, alignment=2))]
    ]
    t_edu = Table(edu_table_data, colWidths=[360, 180])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "..", "public")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "resume.pdf")
    build_pdf(out_path)

