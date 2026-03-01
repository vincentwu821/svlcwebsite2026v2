import HeroBg from "@/assets/hero-bg.png";
import CommunityImg from "@/assets/community.png";
import InnovationImg from "@/assets/innovation.png";
import FocusGroupImg from "@/assets/focus-group-1.png";
import SvlcBoardTeamImg from "@/assets/svlc-board-team.jpg";
import MonthlyEventAudienceImg from "@/assets/monthly-event-audience-1.png";
import Jan292026Event1Img from "@/assets/Jan292026Event1.JPG";
import Jan292026Event2Img from "@/assets/Jan292026Event2.JPG";

export type EventPhoto = {
  src: string;
  alt: string;
};

export type EventTheme =
  | "Leadership Dev"
  | "Career Growth"
  | "Entrepreneurship"
  | "Tech Deep Dive"
  | "Investment"
  | "Social Impact";

export type EventFormat =
  | "Fireside"
  | "Roundtable"
  | "Workshop"
  | "Mentorship"
  | "Networking"
  | "Summit";

export type EventItem = {
  id: string;
  date: string;
  format: EventFormat;
  themes: EventTheme[];
  title: string;
  photos: EventPhoto[];
};

export const eventsData: EventItem[] = [
  {
    id: "e01",
    date: "2026-01-29",
    format: "Fireside",
    themes: ["Leadership Dev", "Career Growth"],
    title: "Everyone Tells a Story Now",
    photos: [
      { src: Jan292026Event1Img, alt: "Everyone Tells a Story Now photo 1" },
      { src: MonthlyEventAudienceImg, alt: "Audience at summit keynote" },
      { src: Jan292026Event2Img, alt: "Everyone Tells a Story Now photo 2" },
    ],
  },
  {
    id: "e02",
    date: "2025-12-12",
    format: "Roundtable",
    themes: ["Tech Deep Dive", "Entrepreneurship"],
    title: "AI Operators Closed-Door Roundtable",
    photos: [
      { src: FocusGroupImg, alt: "Executive roundtable session" },
      { src: InnovationImg, alt: "Technology strategy workshop" },
      { src: CommunityImg, alt: "Founders networking" },
    ],
  },
  {
    id: "e03",
    date: "2025-11-20",
    format: "Fireside",
    themes: ["Entrepreneurship", "Investment"],
    title: "Scaling from 0 to 100M ARR",
    photos: [
      { src: CommunityImg, alt: "Fireside chat stage" },
      { src: SvlcBoardTeamImg, alt: "Speaker and audience Q&A" },
      { src: HeroBg, alt: "Event brand backdrop" },
    ],
  },
  {
    id: "e04",
    date: "2025-10-16",
    format: "Workshop",
    themes: ["Leadership Dev", "Career Growth"],
    title: "Executive Presence for Technical Leaders",
    photos: [
      { src: FocusGroupImg, alt: "Workshop breakout session" },
      { src: MonthlyEventAudienceImg, alt: "Hands-on exercises" },
      { src: InnovationImg, alt: "Leadership workshop slides" },
    ],
  },
  {
    id: "e05",
    date: "2025-09-24",
    format: "Mentorship",
    themes: ["Career Growth", "Leadership Dev"],
    title: "Mentor-Mentee Match Launch Night",
    photos: [
      { src: CommunityImg, alt: "Mentorship kickoff mixer" },
      { src: FocusGroupImg, alt: "Mentorship group discussion" },
      { src: SvlcBoardTeamImg, alt: "Mentor introductions" },
    ],
  },
  {
    id: "e06",
    date: "2025-08-29",
    format: "Networking",
    themes: ["Social Impact", "Leadership Dev"],
    title: "Women in Leadership Connect",
    photos: [
      { src: MonthlyEventAudienceImg, alt: "Leadership networking crowd" },
      { src: CommunityImg, alt: "Peer connections during event" },
      { src: HeroBg, alt: "Evening networking venue" },
    ],
  },
  {
    id: "e07",
    date: "2025-07-18",
    format: "Roundtable",
    themes: ["Investment", "Entrepreneurship"],
    title: "VC x Founder Growth Roundtable",
    photos: [
      { src: SvlcBoardTeamImg, alt: "VC-founder strategy discussion" },
      { src: FocusGroupImg, alt: "Intimate roundtable setting" },
      { src: InnovationImg, alt: "Growth metrics session" },
    ],
  },
  {
    id: "e08",
    date: "2025-06-27",
    format: "Workshop",
    themes: ["Tech Deep Dive", "Leadership Dev"],
    title: "Cross-Functional Leadership Lab",
    photos: [
      { src: InnovationImg, alt: "Cross-functional workshop board" },
      { src: CommunityImg, alt: "Team collaboration moment" },
      { src: MonthlyEventAudienceImg, alt: "Leadership lab participants" },
    ],
  },
  {
    id: "e09",
    date: "2025-05-23",
    format: "Fireside",
    themes: ["Tech Deep Dive", "Career Growth"],
    title: "Building Global Product Teams",
    photos: [
      { src: FocusGroupImg, alt: "Global team fireside session" },
      { src: SvlcBoardTeamImg, alt: "International leadership dialogue" },
      { src: HeroBg, alt: "Modern event stage design" },
    ],
  },
  {
    id: "e10",
    date: "2025-04-11",
    format: "Networking",
    themes: ["Entrepreneurship", "Investment"],
    title: "Founders and Operators Mixer",
    photos: [
      { src: CommunityImg, alt: "Founder-operator meetup" },
      { src: MonthlyEventAudienceImg, alt: "Attendees at evening mixer" },
      { src: InnovationImg, alt: "Networking activity area" },
    ],
  },
  {
    id: "e11",
    date: "2025-03-14",
    format: "Mentorship",
    themes: ["Career Growth", "Social Impact"],
    title: "Career Acceleration Mentor Circles",
    photos: [
      { src: FocusGroupImg, alt: "Mentor circle discussion" },
      { src: CommunityImg, alt: "Mentorship networking" },
      { src: SvlcBoardTeamImg, alt: "Mentor spotlight segment" },
    ],
  },
  {
    id: "e12",
    date: "2025-02-21",
    format: "Roundtable",
    themes: ["Tech Deep Dive", "Leadership Dev"],
    title: "AI Governance Leadership Forum",
    photos: [
      { src: InnovationImg, alt: "AI governance roundtable" },
      { src: FocusGroupImg, alt: "Policy and strategy discussion" },
      { src: HeroBg, alt: "Forum venue branding" },
    ],
  },
  {
    id: "e13",
    date: "2024-12-06",
    format: "Summit",
    themes: ["Leadership Dev", "Social Impact"],
    title: "Annual Innovation & Leadership Summit",
    photos: [
      { src: SvlcBoardTeamImg, alt: "Annual summit keynote" },
      { src: CommunityImg, alt: "Summit networking hall" },
      { src: MonthlyEventAudienceImg, alt: "Packed summit audience" },
    ],
  },
  {
    id: "e14",
    date: "2024-11-08",
    format: "Workshop",
    themes: ["Career Growth", "Leadership Dev"],
    title: "Executive Storytelling Masterclass",
    photos: [
      { src: FocusGroupImg, alt: "Storytelling workshop participants" },
      { src: InnovationImg, alt: "Communication framework workshop" },
      { src: CommunityImg, alt: "Feedback circles in session" },
    ],
  },
  {
    id: "e15",
    date: "2024-10-18",
    format: "Fireside",
    themes: ["Entrepreneurship", "Leadership Dev"],
    title: "Leadership Lessons from Hypergrowth",
    photos: [
      { src: MonthlyEventAudienceImg, alt: "Fireside audience engagement" },
      { src: SvlcBoardTeamImg, alt: "Hypergrowth panel speakers" },
      { src: HeroBg, alt: "Event lighting and stage" },
    ],
  },
  {
    id: "e16",
    date: "2024-09-20",
    format: "Networking",
    themes: ["Social Impact", "Career Growth"],
    title: "SVLC Bay Area Community Night",
    photos: [
      { src: CommunityImg, alt: "Community night meetup" },
      { src: MonthlyEventAudienceImg, alt: "Attendees at social hour" },
      { src: FocusGroupImg, alt: "Small-group networking" },
    ],
  },
  {
    id: "e17",
    date: "2024-08-16",
    format: "Mentorship",
    themes: ["Career Growth", "Leadership Dev"],
    title: "Next-Gen Leaders Mentor Office Hours",
    photos: [
      { src: FocusGroupImg, alt: "Mentor office hour discussion" },
      { src: InnovationImg, alt: "Career planning board" },
      { src: CommunityImg, alt: "Mentorship introductions" },
    ],
  },
  {
    id: "e18",
    date: "2024-07-12",
    format: "Roundtable",
    themes: ["Tech Deep Dive", "Investment"],
    title: "Leadership in AI Infrastructure",
    photos: [
      { src: InnovationImg, alt: "AI infrastructure leadership roundtable" },
      { src: SvlcBoardTeamImg, alt: "Technical leadership panel" },
      { src: MonthlyEventAudienceImg, alt: "Audience questions and answers" },
    ],
  },
  {
    id: "e19",
    date: "2024-06-07",
    format: "Workshop",
    themes: ["Entrepreneurship", "Leadership Dev"],
    title: "Boardroom Readiness for Startup Leaders",
    photos: [
      { src: FocusGroupImg, alt: "Boardroom strategy workshop" },
      { src: CommunityImg, alt: "Startup leader collaboration" },
      { src: HeroBg, alt: "Workshop stage visuals" },
    ],
  },
  {
    id: "e20",
    date: "2024-05-10",
    format: "Networking",
    themes: ["Investment", "Leadership Dev"],
    title: "C-Level Leadership Exchange",
    photos: [
      { src: SvlcBoardTeamImg, alt: "C-level exchange event" },
      { src: MonthlyEventAudienceImg, alt: "Executive networking session" },
      { src: CommunityImg, alt: "Leadership exchange connections" },
    ],
  },
];
