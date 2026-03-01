import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { eventsData, type EventTheme } from "@/data/events";

// Assets
import HeroBg from "@/assets/hero-bg.png";
import SvlcBoardTeamImg from "@/assets/svlc-board-team.jpg";
import MonthlyEventAudienceImg from "@/assets/monthly-event-audience-1.png";
import GoogleLogoImg from "@/assets/google.svg";
import MetaLogoImg from "@/assets/meta.svg";
import LinkedInLogoImg from "@/assets/linkedin.svg";
import AppleLogoImg from "@/assets/apple.svg";
import AmazonLogoImg from "@/assets/amazon.svg";
import NvidiaLogoImg from "@/assets/nvidia.svg";
import OpenAILogoImg from "@/assets/openai.svg";
import AirbnbLogoImg from "@/assets/airbnb.svg";
import AdobeLogoImg from "@/assets/adobe.svg";
import UberLogoImg from "@/assets/uber.svg";
import NetflixLogoImg from "@/assets/netflix.svg";
import CiscoLogoImg from "@/assets/cisco.svg";
import MicrosoftLogoImg from "@/assets/microsoft.svg";
import StripeLogoImg from "@/assets/stripe.svg";
import CoinbaseLogoImg from "@/assets/coinbase.svg";
import NotionLogoImg from "@/assets/notion.svg";
import CursorLogoImg from "@/assets/cursor.svg";
import TikTokLogoImg from "@/assets/tiktok.svg";
import FigmaLogoImg from "@/assets/figma.svg";
import SpotifyLogoImg from "@/assets/spotify.svg";
import ZoomLogoImg from "@/assets/zoom.svg";
import SalesforceLogoImg from "@/assets/salesforce.svg";
import OracleLogoImg from "@/assets/oracle.svg";
import DatabricksLogoImg from "@/assets/databricks.svg";
import IntelLogoImg from "@/assets/intel.svg";
import PayPalLogoImg from "@/assets/paypal.svg";
import TeslaLogoImg from "@/assets/Tesla.svg";
import AnthropicLogoImg from "@/assets/Anthropic.svg";
import PlaudLogoImg from "@/assets/Plaud.png";
import PinterestLogoImg from "@/assets/Pinterest.svg";
import SelenaYuanAvatar from "@/assets/selenayuan.jpeg";
import CarolynBaoAvatar from "@/assets/carolynbao.jpeg";
import LilyRuoAvatar from "@/assets/lilizhang.jpeg";
import AlecWangAvatar from "@/assets/alecwang.jpeg";
import LeoLiangAvatar from "@/assets/leoliang.jpeg";
import YisuJinAvatar from "@/assets/yisujin.jpeg";
import VincentWuAvatar from "@/assets/vincentwu.png";
import NanGuoAvatar from "@/assets/nanguo.jpeg";
import LeonLiuAvatar from "@/assets/leonliu.jpeg";
import YingyingHuangAvatar from "@/assets/yingyinghuang.jpeg";
import YudyDengAvatar from "@/assets/yudydeng.jpeg";
import KellyXuAvatar from "@/assets/kellyxu.jpeg";
import ZoilLiAvatar from "@/assets/zoilli.jpeg";
import DaweiLiuAvatar from "@/assets/daweiliu.jpeg";
import JingwenXAvatar from "@/assets/jingwenx.png";
import JoannaHuAvatar from "@/assets/joannahu.jpeg";
import LakeDaiAvatar from "@/assets/lakedai.jpeg";
import JoyZhangAvatar from "@/assets/joyzhang.jpeg";
import DavidFengAvatar from "@/assets/davidfeng.jpeg";
import YanZhangAvatar from "@/assets/yanzhang.jpeg";
import BlakeZhuAvatar from "@/assets/blakezhu.jpeg";

export default function Home() {
  type PeopleMember = {
    name: string;
    title: string;
    company: string;
    linkedin?: string;
    avatar?: string;
    badgeLabel?: string;
  };

  type PeopleGroup = {
    title: string;
    description: string;
    members: PeopleMember[];
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const peopleGroups: PeopleGroup[] = [
    {
      title: "Board",
      description: "Strategic leaders guiding long-term vision and governance.",
      members: [
        {
          name: "Selena Yuan",
          title: "Head of Global Talent",
          company: "Cytokinetics",
          linkedin: "https://www.linkedin.com/in/selenayuan/",
          avatar: SelenaYuanAvatar,
          badgeLabel: "Co-Chair",
        },
        {
          name: "Carolyn Bao",
          title: "Chief Marketing Officer",
          company: "Edge",
          linkedin: "https://www.linkedin.com/in/carolynbao/",
          avatar: CarolynBaoAvatar,
          badgeLabel: "Co-Chair",
        },
        {
          name: "Alec Wang",
          title: "Founder & President",
          company: "Tana Investment",
          linkedin: "https://www.linkedin.com/in/alecwang/",
          avatar: AlecWangAvatar,
        },
        {
          name: "Leo Liang",
          title: "Founder & CEO",
          company: "CipherOwl",
          linkedin: "https://www.linkedin.com/in/leoliang/",
          avatar: LeoLiangAvatar,
        },
        {
          name: "Leon Liu",
          title: "Principle Engineer",
          company: "Amazon",
          linkedin: "https://www.linkedin.com/in/leon-liu-profile/",
          avatar: LeonLiuAvatar,
        },
        {
          name: "Lily Zhang",
          title: "VP, Head of Engineering",
          company: "Caper AI",
          linkedin: "https://www.linkedin.com/in/lilyruo/",
          avatar: LilyRuoAvatar,
        },
        {
          name: "Nan Guo",
          title: "Chief Technology Officer",
          company: "Asurion",
          linkedin: "https://www.linkedin.com/in/nan-guo-7100101/",
          avatar: NanGuoAvatar,
        },
        {
          name: "Vincent Wu",
          title: "Founder & CEO",
          company: "Ancher",
          linkedin: "https://www.linkedin.com/in/vincent--wu/",
          avatar: VincentWuAvatar,
        },
        {
          name: "Yisu Jin",
          title: "Founder & CEO",
          company: "IntelliPro",
          linkedin: "https://www.linkedin.com/in/yisujin/",
          avatar: YisuJinAvatar,
        },
      ],
    },
    {
      title: "Executive Team",
      description: "Operators running core programs, partnerships, and community.",
      members: [
        {
          name: "Yingying Huang",
          title: "Product Director",
          company: "TikTok",
          linkedin: "https://www.linkedin.com/in/huang-yingying/",
          avatar: YingyingHuangAvatar,
          badgeLabel: "Head",
        },
        {
          name: "Blake Zhu",
          title: "VP of GTM",
          company: "Brix",
          linkedin: "https://www.linkedin.com/in/blakezhu/",
          avatar: BlakeZhuAvatar,
        },
        {
          name: "Dawei Liu",
          title: "Partner",
          company: "Innovative Legal Services",
          linkedin: "https://www.linkedin.com/in/liudawei/",
          avatar: DaweiLiuAvatar,
        },
        {
          name: "Jingwen X.",
          title: "Head of Operations",
          company: "Luffu",
          linkedin: "https://www.linkedin.com/in/jingwen-x-52294416/",
          avatar: JingwenXAvatar,
        },
        {
          name: "Joanna Hu",
          title: "ML Software Engineer",
          company: "Meta",
          linkedin: "https://www.linkedin.com/in/joanna-qiaona-hu/",
          avatar: JoannaHuAvatar,
        },
        {
          name: "Kelly Xu",
          title: "Head of Solution Marketing",
          company: "Glen",
          linkedin: "https://www.linkedin.com/in/to-kellyxu/",
          avatar: KellyXuAvatar,
        },
        {
          name: "Yan Zhang",
          title: "Executive Coach & Team Coach",
          company: "",
          linkedin: "https://www.linkedin.com/in/daweifeng/",
          avatar: YanZhangAvatar,
        },
        {
          name: "Yudy Deng",
          title: "CDO",
          company: "Society of Heart's Delight",
          linkedin: "https://www.linkedin.com/in/yudydeng/",
          avatar: YudyDengAvatar,
        },
        {
          name: "Zoil Li",
          title: "Head of Data & Product Ops",
          company: "ZERO&",
          linkedin: "https://www.linkedin.com/in/zoil-li-2304708/",
          avatar: ZoilLiAvatar,
        },
      ],
    },
    {
      title: "Key Members",
      description: "Founders, investors, and leaders actively shaping the network.",
      members: [
        {
          name: "Lake Dai",
          title: "Founder",
          company: "Sancus Ventures",
          linkedin: "https://www.linkedin.com/in/lakedai/",
          avatar: LakeDaiAvatar,
        },
        {
          name: "Joy Zhang",
          title: "VP of AI",
          company: "Geico",
          linkedin: "https://www.linkedin.com/in/cmujoy/",
          avatar: JoyZhangAvatar,
        },
        {
          name: "David Feng",
          title: "GM of PC Client Segment",
          company: "Intel",
          linkedin: "https://www.linkedin.com/in/daweifeng/",
          avatar: DavidFengAvatar,
        },
      ],
    },
  ];

  const memberLogoCloud = [
    "Adobe",
    "Airbnb",
    "Amazon",
    "Anthropic",
    "Apple",
    "Cisco",
    "Coinbase",
    "Cursor",
    "Databricks",
    "Figma",
    "Google",
    "Intel",
    "LinkedIn",
    "Meta",
    "Microsoft",
    "Netflix",
    "NVIDIA",
    "Notion",
    "OpenAI",
    "Oracle",
    "PayPal",
    "Pinterest",
    "Plaud",
    "Salesforce",
    "Spotify",
    "Stripe",
    "Tesla",
    "TikTok",
    "Uber",
    "Zoom",
  ];

  const memberPillars = [
    "C-Suite Leaders",
    "VPs & Directors",
    "Product & Engineering Heads",
    "Startup Founders & CXOs",
  ];

  const memberLogoImageMap: Record<string, string> = {
    Google: GoogleLogoImg,
    Meta: MetaLogoImg,
    LinkedIn: LinkedInLogoImg,
    Apple: AppleLogoImg,
    Amazon: AmazonLogoImg,
    NVIDIA: NvidiaLogoImg,
    OpenAI: OpenAILogoImg,
    Airbnb: AirbnbLogoImg,
    Adobe: AdobeLogoImg,
    Cisco: CiscoLogoImg,
    Uber: UberLogoImg,
    Netflix: NetflixLogoImg,
    Microsoft: MicrosoftLogoImg,
    Stripe: StripeLogoImg,
    Coinbase: CoinbaseLogoImg,
    Notion: NotionLogoImg,
    Cursor: CursorLogoImg,
    TikTok: TikTokLogoImg,
    Figma: FigmaLogoImg,
    Spotify: SpotifyLogoImg,
    Zoom: ZoomLogoImg,
    Salesforce: SalesforceLogoImg,
    Oracle: OracleLogoImg,
    Databricks: DatabricksLogoImg,
    Intel: IntelLogoImg,
    PayPal: PayPalLogoImg,
    Tesla: TeslaLogoImg,
    Anthropic: AnthropicLogoImg,
    Plaud: PlaudLogoImg,
    Pinterest: PinterestLogoImg,
  };

  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState<"All" | EventTheme>("All");
  const [timeSort, setTimeSort] = useState<"newest" | "oldest">("newest");
  const [visibleEventCount, setVisibleEventCount] = useState(6);
  const [activePhoto, setActivePhoto] = useState<{
    src: string;
    alt: string;
    eventTitle: string;
    layoutId: string;
  } | null>(null);

  const themeTags: EventTheme[] = [
    "Leadership Dev",
    "Career Growth",
    "Entrepreneurship",
    "Tech Deep Dive",
    "Investment",
    "Social Impact",
  ];

  const formatTags = useMemo(
    () => ["All", ...Array.from(new Set(eventsData.map((event) => event.format)))],
    [],
  );

  const visibleEvents = useMemo(() => {
    const byFormat =
      selectedFormat === "All"
        ? eventsData
        : eventsData.filter((event) => event.format === selectedFormat);

    const byFormatAndTheme =
      selectedTheme === "All"
        ? byFormat
        : byFormat.filter((event) => event.themes.includes(selectedTheme));

    return [...byFormatAndTheme].sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return timeSort === "newest" ? bTime - aTime : aTime - bTime;
    });
  }, [selectedFormat, selectedTheme, timeSort]);

  useEffect(() => {
    setVisibleEventCount(6);
  }, [selectedFormat, selectedTheme, timeSort]);

  const eventsToRender = visibleEvents.slice(0, visibleEventCount);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroBg} 
            alt="Silicon Valley Abstract Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide uppercase text-gray-600">The Premier Tech Network</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
            >
              Building the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">leadership.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Connect with Silicon Valley's most innovative minds. SVLC is where technology meets executive excellence.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-9 h-14 text-lg text-white border-transparent bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-700 transition-all shadow-lg shadow-zinc-300/60 hover:shadow-xl hover:shadow-zinc-400/50 hover:-translate-y-1"
              >
                <Link href="/join">
                  <a>Join the Community</a>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-9 h-14 text-lg border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 transition-all hover:-translate-y-1 bg-white/85 backdrop-blur-sm"
              >
                <Link href="/support">
                  <a>Support Us</a>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 text-center">
            {[
              { label: "Tech Leaders", value: "1000+" },
              { label: "Senior Directors/VPs", value: "300+" },
              { label: "Founders", value: "150+" },
              { label: "Public Company Leaders", value: "50+" },
              { label: "Events", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="min-h-[112px] flex flex-col items-center justify-start">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 leading-none">
                  {stat.value}
                </h3>
                <p className="mt-4 max-w-[16ch] text-sm md:text-[0.95rem] font-medium text-gray-500 uppercase tracking-[0.14em] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-balance">
                Connecting Those Who Build the Future. <br/>
                <span className="text-gray-400">Elevating Leadership.</span>
              </h2>
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Who We Are</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Silicon Valley Leadership Community (SVLC) is a high-caliber network of founders, operators, investors, and executives shaping the next era of innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe leadership compounds through trusted relationships and bold collaboration.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SVLC connects emerging talent with seasoned leaders — unlocking opportunities, accelerating growth, and elevating impact.
              </p>

              <div className="mt-10 mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">What We Do</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We convene high-caliber leaders through curated gatherings, private roundtables, and signature summits, creating spaces designed for open dialogue and thoughtful exchange.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We foster meaningful connections across founders, executives, and investors — creating trusted relationships that extend beyond the room and continue to grow over time.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Beyond events, we cultivate mentorship, cross-industry collaboration, and long-term leadership development, supporting leaders at different stages of their journey and encouraging sustained growth within our community.
              </p>
              
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src={SvlcBoardTeamImg} 
                  alt="SVLC Board Team" 
                  className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <p className="mt-4 text-center text-sm font-medium tracking-wide text-gray-500">
                  SVLC 2025 Annual Summit
                </p>
              </div>

              <div>
                <img
                  src={MonthlyEventAudienceImg}
                  alt="SVLC Monthly Event Audience"
                  className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <p className="mt-4 text-center text-sm font-medium tracking-wide text-gray-500">
                  Regular Monthly Event, Jan 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">People</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              The leaders behind SVLC
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-nowrap">
              Meet our board, executive team, and key members who shape the community and drive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {peopleGroups.map((group, index) => (
              (() => {
                const membersToRender =
                  group.title === "Board"
                    ? group.members.filter(
                        (member) => member.name.trim().toLowerCase() !== "board member name"
                      )
                    : group.members;

                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      {group.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {group.description}
                    </p>
                    <ul className="space-y-3">
                      {membersToRender.map((member, memberIndex) => (
                        <li key={`${member.name}-${memberIndex}`} className="rounded-xl bg-gray-50 px-4 py-3 border border-gray-100">
                          <div className="flex items-start gap-3">
                            {member.linkedin ? (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0"
                                aria-label={`${member.name} LinkedIn`}
                              >
                                {member.avatar ? (
                                  <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="h-10 w-10 rounded-full object-cover transition-opacity hover:opacity-85"
                                  />
                                ) : (
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                                    {member.name
                                      .split(" ")
                                      .slice(0, 2)
                                      .map((part) => part[0])
                                      .join("")
                                      .toUpperCase()}
                                  </div>
                                )}
                              </a>
                            ) : member.avatar ? (
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="h-10 w-10 shrink-0 rounded-full object-cover"
                              />
                            ) : (
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
                                {member.name
                                  .split(" ")
                                  .slice(0, 2)
                                  .map((part) => part[0])
                                  .join("")
                                  .toUpperCase()}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {member.linkedin ? (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline-offset-2 hover:text-gray-700 hover:underline"
                                  >
                                    {member.name}
                                  </a>
                                ) : (
                                  member.name
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ml-2 text-xs font-medium text-gray-500 underline-offset-2 hover:text-gray-800 hover:underline"
                                  >
                                    LinkedIn
                                  </a>
                                )}
                                {member.badgeLabel && (
                                  <span className="ml-2 rounded-md border border-amber-200 bg-amber-100 px-1.5 py-0 text-[10px] font-semibold leading-4 text-amber-800">
                                    {member.badgeLabel}
                                  </span>
                                )}
                              </p>
                              <p className="text-xs text-gray-600">
                                {member.title}
                                {member.company ? ` · ${member.company}` : ""}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })()
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Events</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Highlights from our past events
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Explore past SVLC gatherings by date, format, and theme.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {formatTags.map((format) => (
                  <button
                    key={format}
                    onClick={() => setSelectedFormat(format)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                      selectedFormat === format
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {format === "All" ? "All Formats" : format}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 lg:shrink-0">
                <label htmlFor="event-time-sort" className="text-xs font-medium text-gray-600">
                  Time
                </label>
                <select
                  id="event-time-sort"
                  value={timeSort}
                  onChange={(event) => setTimeSort(event.target.value as "newest" | "oldest")}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-gray-700"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                key="all-theme"
                onClick={() => setSelectedTheme("All")}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  selectedTheme === "All"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
                }`}
              >
                All Themes
              </button>
              {themeTags.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    selectedTheme === theme
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {eventsToRender.map((event) => (
              <article key={event.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-600">
                      {event.format}
                    </span>
                    {event.themes.map((theme) => (
                      <span
                        key={`${event.id}-${theme}`}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-600"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-gray-900">{event.title}</h3>

                <div className="grid grid-cols-3 gap-3">
                  {event.photos.map((photo, photoIndex) => (
                    <button
                      key={`${event.id}-${photoIndex}`}
                      onClick={() =>
                        setActivePhoto({
                          src: photo.src,
                          alt: photo.alt,
                          eventTitle: event.title,
                          layoutId: `event-photo-${event.id}-${photoIndex}`,
                        })
                      }
                      className="overflow-hidden rounded-xl border border-gray-200"
                    >
                      <motion.img
                        layoutId={`event-photo-${event.id}-${photoIndex}`}
                        src={photo.src}
                        alt={photo.alt}
                        className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {visibleEventCount < visibleEvents.length && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() =>
                  setVisibleEventCount((prev) =>
                    Math.min(prev + 6, visibleEvents.length)
                  )
                }
              >
                View Other Events
              </Button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 p-4 md:p-8"
            onClick={() => setActivePhoto(null)}
          >
            <div className="flex h-full w-full items-center justify-center">
              <motion.img
                layoutId={activePhoto.layoutId}
                src={activePhoto.src}
                alt={activePhoto.alt}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Members Section */}
      <section id="membership" className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Members</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              A Leadership Network Across the World’s Leading Tech Companies
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Senior operators driving products, teams, and strategy at global scale.
            </p>
          </motion.div>

          <div className="mt-14 rounded-3xl border border-gray-200 bg-white px-5 py-9 md:px-7 md:py-12 shadow-sm">
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
              {memberPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-transparent bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 px-5 py-5 text-center shadow-lg shadow-zinc-300/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-400/50 hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-700"
                >
                  <p className="text-sm md:text-base font-extrabold tracking-tight whitespace-nowrap text-white">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-8 items-center">
              {memberLogoCloud.map((logo) => (
                <div
                  key={logo}
                  className="flex flex-col items-center justify-center gap-2 min-h-[78px]"
                  title={logo}
                >
                  {memberLogoImageMap[logo] ? (
                    <img
                      src={memberLogoImageMap[logo]}
                      alt={`${logo} logo`}
                      className={`w-auto max-w-[110px] object-contain ${
                        logo === "Uber"
                          ? "h-[1.4rem]"
                          : logo === "Meta"
                          ? "h-8"
                          : logo === "Oracle"
                          ? "h-[5.39rem]"
                          : logo === "Stripe"
                          ? "h-[1.76rem]"
                          : logo === "Intel"
                          ? "h-[3.96rem]"
                          : logo === "PayPal"
                          ? "h-[3.3rem]"
                          : logo === "Plaud"
                          ? "h-[3.3rem]"
                          : logo === "Adobe"
                          ? "h-[2.2rem]"
                          : logo === "Anthropic"
                          ? "h-[1.98rem]"
                          : logo === "Zoom"
                          ? "h-[2.64rem]"
                          : logo === "TikTok"
                          ? "h-10"
                          : "h-11"
                      }`}
                    />
                  ) : (
                    <span className="text-[1.2rem] font-semibold tracking-tight text-gray-700 text-center leading-tight">
                      {logo}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
