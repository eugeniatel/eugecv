import { LinkedInIcon } from "@/components/icons";
import { TelegramIcon } from "@/components/icons";
import { XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Eugenia Tellechea",
  initials: "ET",
  location: "Buenos Aires, Argentina",
  about: (
    <>
      Specialized in communication and research.
      <br />
      <span className="text-xs">To reach out, please use the TG link below.</span>
    </>
  ),
  summary: (
    <>
      Researcher with experience in managing digital presence and content writing.
    </>
  ),
  avatarUrl: "/images/pfp.png",
  personalWebsiteUrl: "https://eugeniatel.com",
  contact: {
    email: "eugeniatellechea@proton.me",
    tel: "",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eugenia-tellechea/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/eugenia_0x",
        icon: XIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/eugeniatel",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Torcuato Di Tella",
      degree: "MSc. Management and Analytics",
      start: "Mar 2023",
      end: "Present",
    },
    {
      school: "University of Torcuato Di Tella",
      degree: "BSc. Social Science (Minor in Communication and Journalism)",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "GraphOps",
      link: "https://graphops.xyz",
      title: "Operations Manager",
      start: "Sep 2025",
      end: "Present",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Making the gears work at{" "}
            <a
              href="https://graphops.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-foreground visited:text-foreground"
            >
              GraphOps
            </a>, where we build the data layer, serving and transforming blockchain data to protocols. GraphOps is also a Core Developer of{" "}
            <a
              href="https://thegraph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-foreground visited:text-foreground"
            >
              The Graph
            </a>.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Summerstone",
      link: "https://summerstone.xyz",
      title: "Ecosystem & Community Lead",
      start: "May 2025",
      end: "Present",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Leading ecosystem and community at{" "}
            <a
              href="https://summerstone.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-foreground visited:text-foreground"
            >
              Summerstone
            </a>, a market operations studio building on the Liquity ecosystem and DeFi space.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Web3 Citizen",
      link: "https://web3citizen.xyz",
      title: "Core Contributor",
      start: "Sep 2023",
      end: "Jul 2025",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Led the creation and publishing of reports on crypto narratives across Ethereum: DAOs, Grants,{" "}
              <a
                href="https://www.web3citizen.xyz/research/eigenlayer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-foreground visited:text-foreground"
              >
                Restaking and EigenLayer
              </a>, and the early Based Rollups ecosystem.
          </li>
          <li>
            Conducted research on related topics to ensure accuracy.
          </li>
          <li>
            Created and led two ecosystem-focused newsletters (
              <a
                href="https://paragraph.xyz/@web3citizenxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-foreground visited:text-foreground"
              >
                EigenLayer News and OP Bulletin
              </a>
              ).
          </li>
          <li>
            Contributed to our governance platform focused on ArbitrumDAO and Scroll DAO.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Aleph",
      link: "https://aleph.crecimiento.build/",
      title: "Hackathon Team",
      start: "Dec 2024",
      end: "Dec 2024",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Organized Buenos Aires’ Pop Up City Hackathon, handling communication and collaborating with operations.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Seeds",
      link: "https://www.weareseeders.com/",
      title: "Marketing Analyst",
      start: "Aug 2022",
      end: "Dec 2022",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Managed digital presence to increase brand awareness for an HR startup.
          </li>
          <li>
            Assisted in event organization and conducted research mapping brand opportunities.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Ministry of Culture of the City of Buenos Aires",
      link: "https://buenosaires.gob.ar/ministerio-de-cultura",
      title: "Social Media Manager & Community Manager",
      start: "Apr 2021",
      end: "Aug 2022",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Managed social media channels focusing on increasing brand awareness, resulting in 50% growth in organic reach.
          </li>
          <li>
            Collaborated with designers, video creators, and photographers for comprehensive event coverage.
          </li>
          <li>
            Created materials to enable the distribution of project and reports to communicate our impact.
          </li>
        </ul>
      ),
      badges: [],
    },
    {
      company: "Other Activities",
      link: "",
      title: "",
      start: "",
      end: "",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Wrote the{" "}
            <a
              href="https://geodework.com/blog/argentina-ethereum-ecosystem-overview"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-foreground visited:text-foreground"
            >
              Argentinian Ecosystem Edition
            </a>{" "}
            for{" "}
            <a
              href="https://geodework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground hover:text-foreground visited:text-foreground"
            >
              Geodework
            </a>
            's newsletter.
          </li>
          <li>Devcon Scholar 2024 for Devcon SEA.</li>
          <li>Participated in the Translatathon 2024.</li>
        </ul>
      ),
      badges: [],
    },
  ],
  skills: [
    "Social Media Management",
    "Research & Analysis",
    "Written content",
  ],
} as const;

