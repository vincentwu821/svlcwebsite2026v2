import HeroBg from "@/assets/hero-bg.png";
import CommunityImg from "@/assets/community.png";
import InnovationImg from "@/assets/innovation.png";
import FocusGroupImg from "@/assets/focus-group-1.png";
import SvlcBoardTeamImg from "@/assets/svlc-board-team.jpg";
import MonthlyEventAudienceImg from "@/assets/monthly-event-audience-1.png";
import Jan292026Event1Img from "@/assets/jan292026event1.jpg";
import Jan292026Event2Img from "@/assets/jan292026event2.jpg";
import Jan292026Event3Img from "@/assets/jan292026event3.jpg";
import Jan292026Event0Img from "@/assets/event_jan292026_0.jpg";
import Jan292026Event4Img from "@/assets/event_jan292026_4.jpg";
import Jan292026Event5Img from "@/assets/event_jan292026_5.jpg";
import Jan292026Event6Img from "@/assets/event_jan292026_6.jpg";
import Feb172026Event1Img from "@/assets/event_feb172026_1.jpg";
import Feb172026Event2Img from "@/assets/event_feb172026_2.jpg";
import Feb172026EventVideo1 from "@/assets/event_video_feb172026_1.mp4";
import Nov152025Event1Img from "@/assets/event_nov152025_1.JPG";
import Nov152025Event2Img from "@/assets/event_nov152025_2.JPG";
import Nov152025Event3Img from "@/assets/event_nov152025_3.JPG";
import Nov152025Event4Img from "@/assets/event_nov152025_4.JPG";
import Nov152025Event5Img from "@/assets/event_nov152025_5.JPG";
import Nov152025Event6Img from "@/assets/event_nov152025_6.JPG";
import Nov152025Event7Img from "@/assets/event_nov152025_7.JPG";
import Nov152025Event8Img from "@/assets/event_nov152025_8.JPG";
import Nov152025Event9Img from "@/assets/event_nov152025_9.JPG";
import Nov152025Event10Img from "@/assets/event_nov152025_10.JPG";
import Nov152025Event11Img from "@/assets/event_nov152025_11.JPG";
import Nov152025Event12Img from "@/assets/event_nov152025_12.JPG";
import Nov152025Event13Img from "@/assets/event_nov152025_13.JPG";
import Nov152025Event14Img from "@/assets/event_nov152025_14.JPG";
import Jun142025Event1Img from "@/assets/event_jun142025_1.JPG";
import Jun142025Event2Img from "@/assets/event_jun142025_2.JPG";
import Jun142025Event3Img from "@/assets/event_jun142025_3.JPG";
import Jun142025Event4Img from "@/assets/event_jun142025_4.JPG";

export type EventMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
  poster?: string;
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
  formats: [EventFormat, ...EventFormat[]];
  themes: [EventTheme, ...EventTheme[]];
  title: string;
  photos: EventMedia[];
  detailsUrl?: string;
};

export const eventsData: EventItem[] = [
  {
    id: "e00",
    date: "2026-02-17",
    formats: ["Networking"],
    themes: ["Career Growth", "Social Impact"],
    title: "2026 Spring Festival Gathering",
    photos: [
      {
        src: Feb172026EventVideo1,
        alt: "2026 Spring Festival Gathering video 1",
        type: "video",
      },
      { src: Feb172026Event1Img, alt: "2026 Spring Festival Gathering photo 1" },
      { src: Feb172026Event2Img, alt: "2026 Spring Festival Gathering photo 2" },
    ],
  },
  {
    id: "e01",
    date: "2026-01-29",
    formats: ["Fireside"],
    themes: ["Entrepreneurship", "Tech Deep Dive"],
    title: "Everyone Tells A Story Now",
    detailsUrl: "https://luma.com/yv8u0b7h",
    photos: [
      { src: Jan292026Event0Img, alt: "Everyone Tells a Story Now photo 0" },
      { src: Jan292026Event1Img, alt: "Everyone Tells a Story Now photo 1" },
      { src: MonthlyEventAudienceImg, alt: "Audience at summit keynote" },
      { src: Jan292026Event2Img, alt: "Everyone Tells a Story Now photo 2" },
      { src: Jan292026Event3Img, alt: "Everyone Tells a Story Now photo 3" },
      { src: Jan292026Event4Img, alt: "Everyone Tells a Story Now photo 4" },
      { src: Jan292026Event5Img, alt: "Everyone Tells a Story Now photo 5" },
      { src: Jan292026Event6Img, alt: "Everyone Tells a Story Now photo 6" },
    ],
  },
  {
    id: "e03",
    date: "2025-11-15",
    formats: ["Summit", "Roundtable"],
    themes: ["Leadership Dev", "Career Growth"],
    title: "SVLC'25 Annual Summit: Unleash The AI Superpower",
    detailsUrl: "https://luma.com/xcyg55m0",
    photos: [
      { src: Nov152025Event1Img, alt: "SVLC'25 Annual Summit photo 1" },
      { src: Nov152025Event2Img, alt: "SVLC'25 Annual Summit photo 2" },
      { src: Nov152025Event3Img, alt: "SVLC'25 Annual Summit photo 3" },
      { src: Nov152025Event4Img, alt: "SVLC'25 Annual Summit photo 4" },
      { src: Nov152025Event5Img, alt: "SVLC'25 Annual Summit photo 5" },
      { src: Nov152025Event6Img, alt: "SVLC'25 Annual Summit photo 6" },
      { src: Nov152025Event7Img, alt: "SVLC'25 Annual Summit photo 7" },
      { src: Nov152025Event8Img, alt: "SVLC'25 Annual Summit photo 8" },
      { src: Nov152025Event9Img, alt: "SVLC'25 Annual Summit photo 9" },
      { src: Nov152025Event10Img, alt: "SVLC'25 Annual Summit photo 10" },
      { src: Nov152025Event11Img, alt: "SVLC'25 Annual Summit photo 11" },
      { src: Nov152025Event12Img, alt: "SVLC'25 Annual Summit photo 12" },
      { src: Nov152025Event13Img, alt: "SVLC'25 Annual Summit photo 13" },
      { src: Nov152025Event14Img, alt: "SVLC'25 Annual Summit photo 14" },
    ],
  },
  {
    id: "e04",
    date: "2025-06-14",
    formats: ["Workshop", "Networking"],
    themes: ["Entrepreneurship"],
    title: "Founder DNA Huddle",
    detailsUrl: "https://luma.com/9bpkvcf8",
    photos: [
      { src: Jun142025Event1Img, alt: "Founder DNA Huddle photo 1" },
      { src: Jun142025Event2Img, alt: "Founder DNA Huddle photo 2" },
      { src: Jun142025Event3Img, alt: "Founder DNA Huddle photo 3" },
      { src: Jun142025Event4Img, alt: "Founder DNA Huddle photo 4" },
    ],
  },
  {
    id: "e09",
    date: "2025-05-23",
    formats: ["Fireside"],
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
    formats: ["Networking"],
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
    formats: ["Mentorship"],
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
    formats: ["Roundtable"],
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
    formats: ["Summit"],
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
    formats: ["Workshop"],
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
    formats: ["Fireside"],
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
    formats: ["Networking"],
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
    formats: ["Mentorship"],
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
    formats: ["Roundtable"],
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
    formats: ["Workshop"],
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
    formats: ["Networking"],
    themes: ["Investment", "Leadership Dev"],
    title: "C-Level Leadership Exchange",
    photos: [
      { src: SvlcBoardTeamImg, alt: "C-level exchange event" },
      { src: MonthlyEventAudienceImg, alt: "Executive networking session" },
      { src: CommunityImg, alt: "Leadership exchange connections" },
    ],
  },
];
