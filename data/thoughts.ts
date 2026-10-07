export interface Thought {
  slug: string;
  date: string;
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  summary: string;
  takeaway: string;
  paragraphs: string[];
  tags: string[];
}

export const thoughts: Thought[] = [
  {
    slug: "multimodal-ai-cancer-diagnostics",
    date: "2026.06",
    category: "AI & Healthcare",
    readTime: "4 min read",
    title: "Bridging vision and clinical semantics in cancer diagnostics",
    subtitle: "Lessons from whole-slide imaging, multimodal attention fusion, and explainable AI in oncology.",
    summary: "Why pure computer vision falls short in oncology without multimodal grounding in pathology reports and tissue spatial hierarchy.",
    takeaway: "A medical AI predicting malignancy with 94% accuracy is clinically unusable if a pathologist cannot trace the cellular morphology driving that score. True diagnostic power lies in grounding visual patch embeddings in structured medical ontologies.",
    paragraphs: [
      "During my Final Year Design Project (FYDP) researching cancer AI frameworks at United International University, the hardest challenge was never training convolution layers—it was bridging the profound semantic chasm between raw pixel activations and clinical oncology. Pathologists do not classify tissue in a statistical vacuum; they evaluate nuclear pleomorphism, hyperchromasia, mitotic count, architectural disorganization, and the surrounding tumor microenvironment.",
      "Naive deep learning pipelines slice gigapixel Whole-Slide Images (WSI) into arbitrary 512×512 patches and pool their embeddings into a flat classification head. This naive tiling destroys critical tissue topology and dilutes isolated dysplastic focal points. By engineering a multimodal fusion framework that aligns patch-level visual embeddings with structured clinical reports and medical ontology knowledge graphs, the neural network learns to interpret cellular morphology through standard medical semantics rather than memorizing statistical noise.",
      "Most fundamentally, interpretability is not a cosmetic feature in clinical AI; it is an absolute ethical prerequisite. When our framework generates attention heatmaps highlighting cellular boundaries and pairs them with verifiable confidence metrics, it stops being an opaque black box. Instead, it becomes an assistive diagnostic partner that clinicians can genuinely scrutinize, understand, and trust."
    ],
    tags: ["Multimodal AI", "Healthcare", "Computer Vision", "Histopathology", "Research"]
  },
  {
    slug: "human-ai-interfaces",
    date: "2026.05",
    category: "HCI & AI Systems",
    readTime: "3 min read",
    title: "Why AI needs better human interfaces, not just bigger parameters",
    subtitle: "Steering over prompting: Moving beyond passive chat boxes into synchronous cognitive instruments.",
    summary: "Model intelligence has scaled exponentially, but user interaction remains trapped in passive text boxes. The real bottleneck is human bandwidth.",
    takeaway: "We have created trillion-parameter models, yet our primary interface remains a 1970s terminal chat box. AI will feel truly transformative when users can steer latent spaces through visual controls, dynamic canvases, and real-time uncertainty feedback.",
    paragraphs: [
      "The dominant paradigm of modern AI interaction is prompt-and-wait. You type a paragraph into a rectangular text box, press Enter, and wait passively while tokens stream one-by-one onto the screen. This interaction pattern is inherently high-latency and cognitively restrictive. Human thought is non-linear, associative, and visual—yet we force it through the narrow straw of sequential text queries.",
      "A truly powerful AI interface should feel like an instrument rather than an oracle. It should give users tactile steering wheels: spatial canvases where ideas branch dynamically, parameter sliders that adjust tone and reasoning depth in real time, and transparent confidence indicators that visually signal when a model is confident versus when it is hallucinating.",
      "As artificial intelligence transitions from conversational novelties into mission-critical engineering tools, the developers who master interface latency, state clarity, and steerable ergonomics will shape the future far more profoundly than those who merely benchmark model weights."
    ],
    tags: ["UI/UX Design", "HCI", "AI Engineering", "Product Design"]
  },
  {
    slug: "lessons-from-building-cubiq",
    date: "2026.04",
    category: "Embedded & IoT",
    readTime: "4 min read",
    title: "Physicality in a digital world: Lessons from engineering CUBIQ",
    subtitle: "Building a dual-processor gyroscopic system with Raspberry Pi and ESP32.",
    summary: "What building a dual-processor gyroscopic hardware product taught me about strict state hygiene, microsecond timing, and tangible computing.",
    takeaway: "In web engineering, a bug throws an exception. In embedded hardware, an unhandled interrupt locks the microprocessor bus. CUBIQ taught me strict state hygiene and the irreplaceable magic of tangible computing.",
    paragraphs: [
      "Modern web engineering pampers developers with forgiving safety nets—virtual DOMs, automatic garbage collectors, and instant hot-module reload. But the moment you wire an MPU6050 6-axis gyroscopic sensor to an ESP32 and interface it with a Raspberry Pi, every millivolt, solder joint, and microsecond of bus contention demands strict discipline.",
      "With CUBIQ, our primary architectural challenge was dual-processor synchronization: running microsecond-accurate interrupt polling on the ESP32 to track gyroscopic tilt and motion, while streaming telemetry over high-speed serial UART to a Raspberry Pi running our web dashboard and network server. In an embedded context, you cannot pass sloppy megabyte JSON payloads; every packet requires tight byte serialization, checksum validation, and ring-buffer management.",
      "Yet the greatest lesson was the visceral emotional resonance of physical hardware. When someone physically tilts a cube on their desk and watches a 3D interface mirror that exact rotation instantaneously with zero noticeable lag, software stops feeling like pixels on glass. Tangible computing anchors abstract digital algorithms in physical reality."
    ],
    tags: ["Embedded Systems", "Raspberry Pi", "ESP32", "IoT", "Hardware"]
  },
  {
    slug: "building-skill-binimoy",
    date: "2026.03",
    category: "Product Engineering",
    readTime: "3 min read",
    title: "What I learned building Skill Binimoy: Peer economies and barter utility",
    subtitle: "Decentralizing student talent exchange with React, TypeScript, and Firebase real-time architecture.",
    summary: "How transitioning to a real-time event-driven React, TypeScript, and Firebase architecture made community skill sharing frictionless.",
    takeaway: "Community platforms fail when transaction friction exceeds motivation. By removing monetary barriers through a direct barter mechanism and optimizing for sub-100ms real-time sync, Skill Binimoy turned peer reciprocity into a habit.",
    paragraphs: [
      "University campuses are treasure troves of latent human talent. One student is brilliant at frontend development, another excels in advanced calculus, and a third is a gifted UI designer. Yet nearly all of them lack the disposable income to pay each other. Skill Binimoy emerged from a straightforward hypothesis: what if the currency was the skill itself?",
      "From a product perspective, traditional platforms fail because they drown users in escrow negotiations, commission cuts, and tedious onboarding forms. By reimagining skill exchange as a zero-fee peer barter economy, we eliminated the biggest psychological barrier to collaboration.",
      "Architecturally, pairing React and TypeScript with Firebase Firestore and Vercel edge deployment gave us instant real-time synchronization. Users could negotiate exchanges, send proposals, and track mutual commitments without manual page refreshes. When a peer accepts an offer, the event updates everywhere in under 80 milliseconds. Great software is fundamentally about eliminating the friction between human intent and fulfillment."
    ],
    tags: ["React", "TypeScript", "Firebase", "Web Architecture", "Community"]
  },
  {
    slug: "crafting-pocket-pilot",
    date: "2026.02",
    category: "FinTech & UI/UX",
    readTime: "3 min read",
    title: "Designing for financial clarity: Why micro-interactions matter in Pocket Pilot",
    subtitle: "Turning cold numbers into effortless behavioral habits with optimistic UI and instant telemetry.",
    summary: "Expense tracking fails when logging feels like doing taxes. Designing optimistic UI and instant telemetry turns bookkeeping into an effortless habit.",
    takeaway: "Personal finance software fails when logging feels like doing taxes. If adding a transaction takes more than two taps, the habit dies. Optimistic updates and calm visual hierarchy transform chore-like tracking into effortless clarity.",
    paragraphs: [
      "The average lifespan of a personal budgeting app on a smartphone is less than two weeks. People download an expense tracker during a burst of financial motivation, log their expenses diligently for three days, and abandon the app forever the moment an entry form demands five required fields and an awkward modal date picker.",
      "When designing Pocket Pilot, my singular obsession was minimizing input latency. If logging a transaction takes longer than three seconds, the cognitive friction compounds until user retention collapses. We engineered a rapid numeric keypad paired with smart contextual suggestions based on past spending patterns, enabling users to categorize and record an expense in literally two taps.",
      "Under the hood, every single transaction uses optimistic UI mutations. The moment a user taps save, the category progress rings animate, the monthly burn rate updates, and the balance recedes instantly—long before any server handshake concludes. Replacing sterile accounting tables with calm, glanceable visual telemetry transforms financial tracking from anxiety-inducing work into an effortless daily habit."
    ],
    tags: ["FinTech", "UI/UX", "Micro-Interactions", "Optimistic UI", "Full-Stack"]
  },
  {
    slug: "computer-vision-in-the-wild",
    date: "2026.01",
    category: "Edge Vision & Signals",
    readTime: "4 min read",
    title: "Computer vision in the wild: Beyond synthetic benchmarks",
    subtitle: "Bridging the gap between sanitized academic datasets and edge sensor reality.",
    summary: "In research datasets, lighting is uniform and objects are centered. In real-world sensor streams, hardware noise, glare, and edge constraints dictate survival.",
    takeaway: "Sanitized benchmarks praise high mAP on static images, but real-world camera streams suffer from lens distortion, motion blur, and glare. Signal preprocessing and edge quantization on hardware like Raspberry Pi matter far more than an extra 50 epochs.",
    paragraphs: [
      "One of the most humbling experiences in computer vision engineering is taking a neural network that achieved 95% mAP on a pristine public benchmark and pointing it at a live camera stream in an uncontrolled room. Glare from fluorescent bulbs, motion blur from fast movement, camera sensor noise, and oblique viewing angles immediately degrade naive models.",
      "What separates resilient computer vision systems from fragile prototypes is classical signal processing. Before a single pixel tensor feeds into deep convolution layers, techniques like Contrast Limited Adaptive Histogram Equalization (CLAHE), morphological noise filtering, and temporal Kalman filters do the foundational work. Cleaning the signal at the sensory layer consistently outperforms throwing more model parameters at corrupted inputs.",
      "Furthermore, deploying inference onto edge processors like Raspberry Pi forces strict computational budgeting. Quantizing weights from FP32 down to INT8, fusing convolution-activation layers, and selecting lightweight architectures like MobileNet or YOLO-nano teaches you that true engineering elegance is about squeezing maximum perceptual insight out of minimal watt-hours."
    ],
    tags: ["Computer Vision", "Edge AI", "OpenCV", "Signal Processing", "Raspberry Pi"]
  },
  {
    slug: "academic-theory-to-production-craft",
    date: "2025.12",
    category: "Engineering Philosophy",
    readTime: "3 min read",
    title: "From university classrooms to production-grade engineering",
    subtitle: "Bridging theoretical computer science foundations at UIU with the pragmatic art of shipping products.",
    summary: "How bridging theoretical computer science at UIU with shipping real products shaped my approach to software architecture and craft.",
    takeaway: "Academia teaches algorithmic complexity and OS schedulers so you don't treat machines like magic; building products teaches resilience, telemetry, and human empathy. The sweet spot is respecting the math while obsessing over the user experience.",
    paragraphs: [
      "Studying Computer Science & Engineering at United International University provided the indispensable intellectual bedrock: understanding memory allocation on the heap, instruction pipelining, operating system concurrency primitives, and graph theory. That foundational knowledge is vital because it stops you from treating modern frameworks like black boxes.",
      "Yet the true inflection point in my engineering journey occurred when I started shipping live applications to real users. Production systems do not fail on clean algorithmic boundaries; they fail when network sockets drop silently, when mobile browsers throttle background execution, or when a user inputs data in a way no test case anticipated. Building CUBIQ, Skill Binimoy, and Pocket Pilot taught me the gritty realities of error boundaries, state hygiene, and operational telemetry.",
      "The most exciting place to work in modern engineering is at the confluence of rigorous academic theory and pragmatic user empathy. You respect the underlying computational physics, but you dedicate your craft to making technology feel effortless, transparent, and empowering for the person on the other side of the glass."
    ],
    tags: ["Software Craft", "Philosophy", "Engineering", "CS Foundations", "Life Lessons"]
  }
];

