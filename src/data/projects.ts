import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Forensic Disk Imaging and NTFS File System Analysis",
    slug: "forensic-disk-imaging-ntfs-analysis",
    period: "2025–Present",
    role: "Junior Research Fellow",
    organization: "NIT Raipur",
    summary:
      "Research and development of a forensic-grade acquisition and analysis tool for Windows-based storage devices.",
    problem:
      "Digital investigations require sound disk acquisition, integrity validation, and deep file-system analysis for recovery and post-incident examination.",
    approach: [
      "Implemented bit-stream acquisition for physical and logical drives.",
      "Integrated MD5, SHA-1, and SHA-256 hashing for integrity verification.",
      "Parsed NTFS structures including Boot Sector, $MFT, $Bitmap, runlists, and timestamps.",
      "Added deleted artifact recovery and metadata reconstruction.",
      "Maintained chain-of-custody logging and validation workflows.",
    ],
    stack: ["Python", "PyQt", "NTFS", "Hashing", "Disk Imaging"],
    outcomes: [
      "Supported forensic soundness and repeatability.",
      "Enabled storage-level post-incident analysis and artifact recovery.",
    ],
    featured: true,
  },
  {
    title: "Secure and Auditable IoT Payment System",
    slug: "secure-auditable-iot-payment-system",
    period: "2023–2025",
    role: "Project Engineer",
    organization: "IIT Bhilai Innovation and Technology Foundation",
    summary:
      "Designed a secure IoT-enabled framework for transparent wage payment and work monitoring.",
    problem:
      "Rural welfare systems need transparent, secure, and auditable transaction infrastructure under low-connectivity constraints.",
    approach: [
      "Implemented two-factor authentication with NFC smart cards and facial recognition.",
      "Built LoRaWAN communication with ACK-based chunked transmission.",
      "Developed RESTful APIs for secure processing, logs, and audit trails.",
    ],
    stack: ["Python", "Flask", "OpenCV", "LoRaWAN", "NFC"],
    outcomes: [
      "Paper presented at ICSCA-2025.",
      "Received Best Paper Award.",
    ],
    featured: true,
  },
  {
    title: "Solar-Powered IoT Payment Solution",
    slug: "solar-powered-iot-payment-solution",
    period: "2023–2025",
    role: "IoT Research Project",
    organization: "IIT Bhilai",
    summary:
      "Developed solar-powered IoT devices for reliable digital payments in off-grid environments.",
    problem:
      "Remote regions require resilient, low-power digital payment systems with synchronized record keeping.",
    approach: [
      "Designed low-power field-deployable IoT devices.",
      "Integrated MongoDB and Firebase for synchronized transaction storage.",
      "Focused on reliability and resilience under constrained operating conditions.",
    ],
    stack: ["IoT", "MongoDB", "Firebase", "Embedded Systems"],
    outcomes: [
      "Improved reliability in low-resource settings.",
      "Strengthened fault-tolerant transaction workflows.",
    ],
    featured: true,
  },
  {
    title: "Pokemon Explorer App",
    slug: "pokemon-explorer-app",
    period: "Application Project",
    role: "Android Developer",
    organization: "Personal Project",
    summary:
      "Offline-capable Android data explorer built with modern architecture patterns.",
    problem:
      "Create a responsive and structured mobile data browsing experience.",
    approach: [
      "Integrated PokeAPI.",
      "Built with Kotlin and Jetpack Compose.",
      "Added modern Android architecture components.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android"],
    outcomes: ["Demonstrated modern Android app architecture."],
  },
  {
    title: "Secure Note Application",
    slug: "secure-note-application",
    period: "Application Project",
    role: "Android Developer",
    organization: "Personal Project",
    summary:
      "Secure synchronized note-taking app with real-time data support.",
    problem:
      "Users need synchronized note access with a secure and smooth experience.",
    approach: [
      "Integrated Firebase.",
      "Built for real-time synchronization.",
      "Supported usage at 500+ user scale.",
    ],
    stack: ["Android", "Firebase"],
    outcomes: ["Supported real-time secure note workflows."],
  },
  {
    title: "Thermal Printer Desktop Application",
    slug: "thermal-printer-desktop-application",
    period: "Desktop Project",
    role: "Desktop Developer",
    organization: "Personal Project",
    summary:
      "Desktop application for receipt generation and thermal printer workflows.",
    problem:
      "Businesses need reliable local printing support for ESC/POS-based printers.",
    approach: [
      "Built receipt-generation workflows.",
      "Added ESC/POS support.",
      "Developed JavaFX desktop interface.",
    ],
    stack: ["JavaFX", "Java", "ESC/POS"],
    outcomes: ["Delivered practical desktop printing workflow support."],
  },
];