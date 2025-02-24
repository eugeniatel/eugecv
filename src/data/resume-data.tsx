import { LinkedInIcon } from "@/components/icons";

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
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://www.web3citizen.xyz/research/eigenlayer",
  contact: {
    email: "eugeniatellechea@proton.me",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eugenia-tellechea",
        icon: LinkedInIcon,
      },
      {
        name: "Web3 Citizen",
        url: "https://www.web3citizen.xyz/research/eigenlayer",
        icon: LinkedInIcon,
      },
      {
        name: "Paragraph",
        url: "https://paragraph.xyz/@web3citizenxyz",
        icon: LinkedInIcon,
      },
      {
        name: "Aleph Hackathon",
        url: "https://aleph.crecimiento.build/hackathon",
        icon: LinkedInIcon,
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
          company: "Seeds",
          title: "Marketing Analyst",
          start: "Aug 2022",
          end: "Dec 2022",
          description: (
            <>
              Managed digital presence to increase brand awareness for an HR startup. Assisted in event organization and conducted research mapping brand opportunities. Oversaw social media channels, achieving a 50% growth in organic reach, and collaborated with designers, video creators, and photographers for comprehensive event coverage.
            </>
          ),
        },
        {
          company: "Ministry of Culture of the City of Buenos Aires",
          title: "Social Media Manager & Community Manager",
          start: "Apr 2021",
          end: "Aug 2022",
          description: (
            <>
              Led creation and publishing of reports on crypto narratives across Ethereum—including DAOs, Grants, Restaking, and EigenLayer. Conducted in-depth research to ensure content accuracy, created and led two ecosystem-focused newsletters (EigenLayer News and OP Bulletin), and contributed to a governance platform for ArbitrumDAO and Scroll DAO.
            </>
          ),
        },
        {
          company: "Web3 Citizen",
          title: "Core Contributor",
          start: "Sep 2023",
          end: "Present",
          description: (
            <>
              Organized Buenos Aires’ Pop Up City Hackathon, handling communication and collaborating with operations to ensure a successful event.
            </>
          ),
        },
        {
          company: "Aleph",
          title: "Hackathon Team",
          start: "Dec 2024",
          end: "",
          description: (
            <>
              Participated as part of a hackathon team, contributing to innovative solutions and collaborative problem-solving.
            </>
          ),
        },
        {
          company: "Other Activities",
          title: "Additional Engagements",
          start: "",
          end: "",
          description: (
            <>
              Devcon Scholar 2024 for Devcon SEA. Participated in the Translatathon 2024.
            </>
          ),
        },
      ],
      skills: [
        "Digital Marketing",
        "Social Media Management",
        "Content Creation",
        "Community Engagement",
        "Event Organization",
        "Research & Analysis",
        "Newsletter Management",
      ],
      projects: [],
    } as const;