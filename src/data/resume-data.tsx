import { LinkedInIcon } from "@/components/icons";
import { TwitterIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Eugenia Tellechea",
  initials: "ET",
  location: "Buenos Aires, Argentina",
  about:
    "Specialized in communication and research. Passionate about culture, decentralization and Ethereum.",
  summary: (
    <>
      Researcher with hands‐on experience in managing digital presence and content writing.
    </>
  ),
  avatarUrl: "/images/pfplinkedin.jpeg",
  contact: {
    email: "eugeniatellechea@proton.me",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eugenia-tellechea",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://x.com/eugenia_0x",
        icon: TwitterIcon,
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
      company: "Web3 Citizen",
      title: "Core Contributor",
      start: "Sep 2023",
      end: "Present",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Led the creation and publishing of reports on crypto narratives across Ethereum: DAOs, Grants,{" "}
              <a
                href="https://www.web3citizen.xyz/research/eigenlayer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Restaking and EigenLayer
              </a>.
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
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
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
    },
    {
      company: "Aleph",
      title: "Hackathon Team",
      start: "Dec 2024",
      end: "Dec 2024",
      description: (
        <ul className="list-disc list-inside">
          <li>
            Organized Buenos Aires’{" "}
              <a
                href="https://aleph.crecimiento.build/hackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                Pop Up City Hackathon
              </a>, handling communication and collaborating with operations.
          </li>
        </ul>
      ),
    },
    {
      company: "Seeds",
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
    },
    {
      company: "Ministry of Culture of the City of Buenos Aires",
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
    },
    {
      company: "Other Activities",
      title: "",
      start: "",
      end: "",
      description: (
        <ul className="list-disc list-inside">
          <li>Devcon Scholar 2024 for Devcon SEA.</li>
          <li>Participated in the Translatathon 2024.</li>
        </ul>
      ),
    },
  ],
  skills: [
    "Social Media Management",
    "Research & Analysis",
    "Newsletter Management",
  ],
} as const;

