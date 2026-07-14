// ─────────────────────────────────────────────────────────────
// EDIT ME: this file is the single source of truth for all
// project + profile content on the site. Nothing here is
// invented — every line reflects what actually happened.
// Update dates, links, and details here as projects evolve.
// ─────────────────────────────────────────────────────────────

export type PipelineStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  year: string;
  role: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  pipeline: PipelineStep[];
  problem: string;
  targetUser: string;
  myRole: string;
  process: string[];
  keyDecisions: { decision: string; reasoning: string }[];
  finalResult: string;
  whatILearned: string;
};

export const projects: Project[] = [
  {
    slug: 'nyayamitra',
    name: 'NyayaMitra',
    tagline: 'A RAG-based AI legal aid agent for Indian citizens',
    status: 'Submitted — AMD Developer Hackathon ACT II',
    year: '2026',
    role: 'Solo builder',
    stack: [
      'LangChain',
      'ChromaDB',
      'Gemma 4 (31B) via Google AI Studio',
      'BAAI/bge-small-en-v1.5 embeddings',
      'Gradio',
      'Google Colab + Drive',
    ],
    repoUrl: 'https://github.com/abhishek220205-hash/NyayaMitra',
    demoUrl: 'https://youtu.be/7abNx_V_vis',
    pipeline: [
      { label: 'Ingest', detail: 'Three Indian acts chunked into 566 passages' },
      { label: 'Embed', detail: 'BAAI/bge-small-en-v1.5 → ChromaDB' },
      { label: 'Retrieve', detail: 'LangChain pulls the relevant statute text' },
      { label: 'Answer', detail: 'Gemma 4 31B grounds its reply in what was retrieved' },
    ],
    problem:
      'Most Indian citizens can\u2019t easily find out what the law actually says about their situation \u2014 a landlord dispute, a faulty purchase, an unpaid wage \u2014 and a lawyer\u2019s time is often out of reach for a quick question. The underlying statutes exist, but they\u2019re dense and hard to search.',
    targetUser:
      'Someone facing a everyday legal question \u2014 a tenant, a consumer, a wage worker \u2014 who wants a grounded, citable starting point before deciding whether to pursue it further, not a replacement for a lawyer.',
    myRole:
      'End-to-end solo build: sourcing and chunking the source acts, designing the retrieval pipeline, prompt design for Gemma 4, and building the Gradio interface.',
    process: [
      'Selected three high-relevance acts to start narrow rather than broad: the Transfer of Property Act 1882, the Consumer Protection Act 2019, and the Code on Wages 2019.',
      'Chunked the acts into 566 passages and embedded them with BAAI/bge-small-en-v1.5, stored in ChromaDB.',
      'Wired a LangChain retrieval pipeline so Gemma 4 31B (via Google AI Studio) answers only from retrieved statute text, not from memory.',
      'Built a three-tab Gradio interface \u2014 Document Analyzer, Ask Your Rights, Draft a Letter \u2014 covering both the \u201cwhat does this mean\u201d and \u201cwhat do I do next\u201d halves of a legal question.',
      'Ran the whole system on Google Colab with Google Drive for persistence, since there was no dedicated server for the hackathon build.',
    ],
    keyDecisions: [
      {
        decision: 'Retrieval-augmented generation instead of fine-tuning',
        reasoning:
          'Statute text has to be exact. RAG keeps every answer traceable back to the actual clause instead of a model\u2019s paraphrase of law it was trained on.',
      },
      {
        decision: 'A small, efficient embeddings model',
        reasoning:
          'BAAI/bge-small-en-v1.5 kept iteration fast inside Colab\u2019s compute limits without a meaningful quality trade-off at this corpus size.',
      },
      {
        decision: 'A recorded YouTube demo instead of a live Gradio share link',
        reasoning:
          'Gradio\u2019s public share links expire the moment the Colab session disconnects \u2014 not a viable way to hand a judge a working demo. A hosted video guarantees it\u2019s watchable at any time.',
      },
    ],
    finalResult:
      'Submitted to the AMD Developer Hackathon ACT II on lablab.ai, entered in the Unicorn Track and the Gemma 4 Bonus Challenge.',
    whatILearned:
      'The model is often not the hard part. Ephemeral infrastructure \u2014 a Colab session that can drop at any time \u2014 forces real product decisions, like how you prove your system works to someone who wasn\u2019t there to see it live.',
  },
  {
    slug: 'hackhazards-voice-app',
    name: 'Hindi Voice AI App',
    tagline: 'A mobile voice assistant built on a full Sarvam AI speech pipeline',
    status: 'Submitted — HackHazards 2026',
    year: '2026',
    role: 'Team lead & backend/pipeline developer',
    stack: [
      'Expo (React Native, SDK 54)',
      'Node.js + Express',
      'Sarvam AI (STT, Chat, TTS)',
      'Render',
    ],
    repoUrl: 'https://github.com/abhishek220205-hash/HackHazards-Voice-App',
    pipeline: [
      { label: 'Listen', detail: 'Sarvam STT (saarika:v2.5) transcribes Hindi speech' },
      { label: 'Think', detail: 'Sarvam Chat (sarvam-30b) generates a reply' },
      { label: 'Speak', detail: 'Sarvam TTS (speaker: vidya) voices it back' },
    ],
    problem:
      'Typing isn\u2019t always the fastest or most natural way to interact with an app, especially for Hindi speakers who default to speaking over typing. The challenge was chaining three separate AI services into one voice interaction that feels immediate on a real phone, not just a demo environment.',
    targetUser:
      'Hindi-speaking mobile users who\u2019d rather talk to an app than type into it.',
    myRole:
      'Led a 3-person team (5 total across two collaborating teams) and owned the backend architecture: the Express server, the Sarvam AI integration, and the STT \u2192 Chat \u2192 TTS chaining logic.',
    process: [
      'Built a 3-screen Expo React Native app (SDK 54) with a single App.js and state-based navigation \u2014 deliberately simple to keep the team\u2019s surface area small under a hackathon clock.',
      'Stood up a Node.js Express backend, deployed to Render, to own the Sarvam AI calls rather than hitting the API straight from the client.',
      'Chained three Sarvam AI calls in sequence: speech-to-text (saarika:v2.5), a chat completion (sarvam-30b), and text-to-speech (speaker: vidya).',
      'Diagnosed and fixed a node-fetch v3 incompatibility with the project\u2019s CommonJS setup by pinning to node-fetch v2.',
      'Stripped markdown from the model\u2019s replies and truncated text to 490 characters before sending it to TTS, to stay clear of Sarvam\u2019s 500-character input limit.',
      'Tested the full loop on two physical Android devices rather than only in an emulator.',
    ],
    keyDecisions: [
      {
        decision: 'A backend proxy instead of calling Sarvam AI directly from the app',
        reasoning:
          'Kept API keys off the client and gave one place to handle retries, truncation, and markdown stripping before text ever reaches TTS.',
      },
      {
        decision: 'Pinning node-fetch to v2',
        reasoning:
          'The project\u2019s package.json is set to "type": "commonjs", so require() is used throughout \u2014 node-fetch v3 is ESM-only and broke on import until pinned back to v2.',
      },
      {
        decision: 'Suspending the Render service between demos',
        reasoning:
          'Free-tier hosting credits are limited; suspending when not actively demoing kept the backend available for judging without burning through them early.',
      },
    ],
    finalResult:
      'Submitted for HackHazards 2026 on the Sarvam AI and Expo tracks, entered under Theme 01 (primary) and Theme 09 (secondary).',
    whatILearned:
      'Package format mismatches and hard API limits (like a 500-character TTS cap) shape an architecture just as much as model choice does \u2014 and they\u2019re the kind of thing you only catch by testing on a real device, not an emulator.',
  },
  {
    slug: 'mindscribe',
    name: 'MindScribe',
    tagline: 'An AI note-taking tool that replaces typing with voice',
    status: 'Personal project · private repo',
    year: '2025',
    role: 'Solo builder',
    stack: ['TypeScript', 'Gemini 2.5 Flash API'],
    pipeline: [
      { label: 'Capture', detail: 'Voice input replaces manual note-taking' },
      { label: 'Process', detail: 'Gemini 2.5 Flash converts speech and meeting notes into text' },
      { label: 'Structure', detail: 'Output becomes organized, readable notes' },
    ],
    problem:
      'Typing notes during a live conversation or meeting means choosing between paying attention and writing things down.',
    targetUser:
      'Anyone who wants to capture notes or meeting content without stopping to type \u2014 built primarily to solve this for myself.',
    myRole:
      'Solo, end to end: the voice capture flow, the Gemini 2.5 Flash integration, and the real-time processing logic in TypeScript.',
    process: [
      'Built the voice input capture layer first, since that\u2019s the piece that replaces typing entirely.',
      'Integrated Gemini 2.5 Flash to process unstructured voice recordings and meeting notes.',
      'Wrote the real-time processing logic in TypeScript to convert speech into organized text as it comes in, rather than only after a recording finishes.',
    ],
    keyDecisions: [
      {
        decision: 'Gemini 2.5 Flash over a larger, slower model',
        reasoning:
          'Note-taking needs to feel closer to real time than a heavier-reasoning model would allow.',
      },
    ],
    finalResult:
      'A working TypeScript tool, kept in a private repo, that converts voice input into structured notes end to end.',
    whatILearned:
      'Integrating a third-party AI API into a real-time flow surfaces different constraints than a request-response chatbot does \u2014 latency and streaming matter as much as accuracy.',
  },
  {
    slug: 'web-scraper-quotes',
    name: 'Quotes Web Scraper',
    tagline: 'A Python scraper that extracts and structures quote data from the web',
    status: 'Open-source personal project',
    year: '2026',
    role: 'Solo builder',
    stack: ['Python'],
    repoUrl: 'https://github.com/abhishek220205-hash/web-scraper-quotes',
    pipeline: [
      { label: 'Fetch', detail: 'Requests pages from the target site' },
      { label: 'Parse', detail: 'Extracts quote data out of the raw HTML' },
      { label: 'Structure', detail: 'Outputs clean, structured data' },
    ],
    problem:
      'Quote data on the web sits inside raw HTML \u2014 readable to a person, but not directly usable as data.',
    targetUser:
      'Anyone who needs quote data in a structured, usable format rather than scattered across web pages.',
    myRole: 'Solo \u2014 wrote the scraping and parsing pipeline in Python.',
    process: [
      'Built a Python scraper to fetch pages from the target site.',
      'Wrote parsing logic to extract and structure the quote data out of the raw HTML.',
      'Published the project open-source on GitHub.',
    ],
    keyDecisions: [
      {
        decision: 'Python for the scraping pipeline',
        reasoning:
          'Python\u2019s scraping and parsing libraries made it the fastest path from raw HTML to structured data.',
      },
    ],
    finalResult:
      'A published, open-source Python scraper that extracts and structures quote data from websites.',
    whatILearned:
      'Hands-on practice with data collection and parsing pipelines \u2014 a different, more foundational skill set than the AI-pipeline work in the other projects.',
  },
];

export const certifications = [
  {
    name: 'Startup School: Prompt to Prototype',
    issuer: 'Google for Startups',
    date: 'January 2026',
  },
];

export const profile = {
  name: 'Abhishek Kumar',
  role: 'AI Product Builder',
  location: 'Delhi, India',
  email: 'abhishek220205@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishek-kumar-2b4a26324',
  github: 'https://github.com/abhishek220205-hash',
  education: {
    institution: 'HMR Institute of Technology & Management (HMRITM), GGSIPU',
    degree: 'B.Tech, Computer Science Engineering (Core)',
    years: '2024 \u2013 2028',
  },
  bio:
    'I build AI products end to end \u2014 from retrieval pipelines to the interface someone actually taps through \u2014 and I direct the build across multiple AI tools rather than hand-coding every line myself. Most recently, that meant shipping two hackathon submissions in the same week: a legal-aid RAG agent and a Hindi voice assistant, each with a working pipeline behind it and a real device or a real statute at the other end.',
  workingStyle: [
    {
      label: 'Architecture first',
      detail:
        'I design the pipeline \u2014 what retrieves what, what calls what \u2014 before any interface work starts.',
    },
    {
      label: 'AI-directed build',
      detail:
        'Claude for strategy and architecture, ChatGPT for code generation, Gemini as backup, v0.dev for interface work, Gamma for decks \u2014 I direct the build, I don\u2019t do every line solo.',
    },
    {
      label: 'Ship under real constraints',
      detail:
        'Free-tier hosting limits, API character caps, sessions that disconnect \u2014 I design for the infrastructure I actually have, not the infrastructure I wish I had.',
    },
    {
      label: 'Test on real devices',
      detail:
        'An emulator doesn\u2019t catch everything. Both hackathon builds were verified on physical hardware before submission.',
    },
  ],
};
