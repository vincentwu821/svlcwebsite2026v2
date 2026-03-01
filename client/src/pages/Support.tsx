import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Megaphone, Newspaper, Presentation, Users } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type SupportFormData = {
  companyName: string;
  contactName: string;
  title: string;
  email: string;
  website: string;
  channels: string[];
  budgetRange: string;
  timeline: string;
  objective: string;
  notes: string;
};

const channelOptions = [
  "Event Sponsorship",
  "Display Placement",
  "Newsletter Sponsorship",
  "Roundtable Co-hosting",
];

const initialFormData: SupportFormData = {
  companyName: "",
  contactName: "",
  title: "",
  email: "",
  website: "",
  channels: [],
  budgetRange: "",
  timeline: "",
  objective: "",
  notes: "",
};

export default function SupportPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SupportFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedChannelsText = useMemo(
    () => (formData.channels.length ? formData.channels.join(", ") : "No channels selected"),
    [formData.channels],
  );

  const toggleChannel = (channel: string) => {
    setFormData((prev) => {
      const selected = prev.channels.includes(channel);
      return {
        ...prev,
        channels: selected
          ? prev.channels.filter((item) => item !== channel)
          : [...prev.channels, channel],
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.channels.length === 0) {
      toast({
        title: "Select at least one channel",
        description: "Choose at least one sponsorship format so we can route your request.",
      });
      return;
    }

    const endpoint =
      (import.meta.env.VITE_SHEET_WEBHOOK_URL as string | undefined) ||
      (import.meta.env.VITE_SUPPORT_SHEET_WEBHOOK_URL as string | undefined);
    if (!endpoint) {
      toast({
        title: "Sheet endpoint not configured",
        description:
          "Missing VITE_SHEET_WEBHOOK_URL (or VITE_SUPPORT_SHEET_WEBHOOK_URL) in environment variables.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitted(false);

      const payload = {
        formType: "Support",
        source: "SVLC Website",
        companyName: formData.companyName,
        website: formData.website,
        contactName: formData.contactName,
        title: formData.title,
        email: formData.email,
        channels: formData.channels.join(", "),
        budgetRange: formData.budgetRange,
        timeline: formData.timeline,
        objective: formData.objective,
        notes: formData.notes,
        submittedAt: new Date().toISOString(),
      };

      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setFormData(initialFormData);
      toast({
        title: "Support request received",
        description: "The SVLC team will contact you with next steps.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#f6fbff_0%,#f2f5fb_45%,#ffffff_100%)] text-gray-900">
      <Navbar />

      <main className="container mx-auto px-6 pt-28 pb-20">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </Link>

        <section className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-700 to-indigo-900 p-8 text-white shadow-2xl shadow-blue-300/20 md:p-10">
            <p className="inline-flex rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
              Sponsor With SVLC
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
              Reach Silicon Valley decision makers with precision.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-sky-100/95">
              SVLC offers access to a high-quality network of founders, executives, operators, and investors.
              Through events, display placements, and newsletters, sponsors can efficiently reach the most relevant
              decision makers in the Silicon Valley tech ecosystem.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-sky-100" />
                <div>
                  <p className="font-medium">High-intent audience access</p>
                  <p className="text-sm text-sky-100/85">Direct visibility among senior technical and business leaders.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                <Presentation className="mt-0.5 h-5 w-5 shrink-0 text-sky-100" />
                <div>
                  <p className="font-medium">Flexible sponsorship formats</p>
                  <p className="text-sm text-sky-100/85">Event sponsorship, stage presence, co-branded sessions, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-sky-100" />
                <div>
                  <p className="font-medium">Sustained top-of-mind reach</p>
                  <p className="text-sm text-sky-100/85">Newsletter and display channels to reinforce your message over time.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
                <Megaphone className="mt-0.5 h-5 w-5 shrink-0 text-sky-100" />
                <div>
                  <p className="font-medium">Efficient path to action</p>
                  <p className="text-sm text-sky-100/85">Campaigns designed for introductions, qualified meetings, and conversion.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/40 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Start a Sponsorship Conversation</h2>
            <p className="mt-2 text-sm text-gray-600">
              Share your goals and contact details. We will follow up with recommended sponsorship formats.
            </p>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company name</Label>
                  <Input
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, companyName: event.target.value }))
                    }
                    placeholder="Company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, website: event.target.value }))
                    }
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact name</Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, contactName: event.target.value }))
                    }
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, title: event.target.value }))
                    }
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label>Preferred channels</Label>
                <div className="flex flex-wrap gap-2">
                  {channelOptions.map((channel) => (
                    <button
                      key={channel}
                      type="button"
                      onClick={() => toggleChannel(channel)}
                      className={cn(
                        "rounded-full border px-3.5 py-2 text-sm font-medium transition",
                        formData.channels.includes(channel)
                          ? "border-sky-700 bg-sky-700 text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400",
                      )}
                    >
                      {channel}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{selectedChannelsText}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Estimated budget range</Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, budgetRange: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10k</SelectItem>
                      <SelectItem value="10k-25k">$10k-$25k</SelectItem>
                      <SelectItem value="25k-50k">$25k-$50k</SelectItem>
                      <SelectItem value="50k-plus">$50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred launch timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, timeline: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-2-months">1-2 months</SelectItem>
                      <SelectItem value="this-quarter">This quarter</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objective">Primary objective</Label>
                <Textarea
                  id="objective"
                  required
                  value={formData.objective}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, objective: event.target.value }))
                  }
                  placeholder="What result do you want to achieve through SVLC sponsorship?"
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, notes: event.target.value }))
                  }
                  placeholder="Optional context"
                  className="min-h-20"
                />
              </div>

              <div className="flex flex-col gap-3 pt-1">
                <Button type="submit" size="lg" className="h-12 rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Sponsorship Interest"}
                </Button>
                {submitted && (
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Received. Our team will reach out shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
