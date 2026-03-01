import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
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

const interestAreas = [
  "Curated gatherings",
  "Private roundtables",
  "Mentorship",
  "Founder-operator network",
  "Investor connections",
  "Speaking opportunities",
];

type JoinFormData = {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  timeline: string;
  interests: string[];
  intention: string;
  additionalNotes: string;
  consent: boolean;
};

const initialFormData: JoinFormData = {
  fullName: "",
  email: "",
  organization: "",
  role: "",
  timeline: "",
  interests: [],
  intention: "",
  additionalNotes: "",
  consent: false,
};

export default function JoinPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<JoinFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.interests.length === 0) {
      toast({
        title: "Select at least one interest",
        description: "This helps us route your application to the right host.",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please confirm you agree to be contacted by SVLC.",
      });
      return;
    }

    const endpoint =
      (import.meta.env.VITE_SHEET_WEBHOOK_URL as string | undefined) ||
      (import.meta.env.VITE_JOIN_SHEET_WEBHOOK_URL as string | undefined);
    if (!endpoint) {
      toast({
        title: "Sheet endpoint not configured",
        description:
          "Missing VITE_SHEET_WEBHOOK_URL (or VITE_JOIN_SHEET_WEBHOOK_URL) in environment variables.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitted(false);

      const payload = {
        formType: "Join",
        source: "SVLC Website",
        fullName: formData.fullName,
        email: formData.email,
        organization: formData.organization,
        role: formData.role,
        timeline: formData.timeline,
        interests: formData.interests.join(", "),
        intention: formData.intention,
        additionalNotes: formData.additionalNotes,
        consent: formData.consent ? "Yes" : "No",
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
        title: "Intent submitted",
        description: "Thanks. The SVLC team will review and follow up.",
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f7fafc_0%,#eef2f7_42%,#f8f9fb_100%)] text-gray-900">
      <header className="border-b border-gray-200/70 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-black">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
            <Sparkles className="h-3.5 w-3.5" />
            Membership Interest
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-gray-200/80 bg-white/85 p-6 shadow-xl shadow-gray-200/40 backdrop-blur md:p-8"
          >
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Tell us how you want to engage with SVLC
            </h1>
            <p className="mt-3 max-w-2xl text-base text-gray-600">
              This short form helps us understand fit, intent, and how to connect
              you with the right leaders and programs.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, fullName: event.target.value }))
                    }
                    className="h-11 border-gray-300 bg-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="h-11 border-gray-300 bg-white"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="organization">Company / Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        organization: event.target.value,
                      }))
                    }
                    className="h-11 border-gray-300 bg-white"
                    placeholder="Optional"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Current role</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, role: value }))
                    }
                  >
                    <SelectTrigger className="h-11 border-gray-300 bg-white">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="founder">Founder</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label>What are you most interested in?</Label>
                <div className="flex flex-wrap gap-2.5">
                  {interestAreas.map((interest) => {
                    const active = formData.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                          active
                            ? "border-black bg-black text-white shadow-lg shadow-gray-300"
                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                        )}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="intention">What outcomes are you hoping to unlock?</Label>
                <Textarea
                  id="intention"
                  value={formData.intention}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, intention: event.target.value }))
                  }
                  className="min-h-24 border-gray-300 bg-white"
                  placeholder="Share your goals in one or two paragraphs."
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Preferred timeline</Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, timeline: value }))
                    }
                  >
                    <SelectTrigger className="h-11 border-gray-300 bg-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="exploring">Exploring for now</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Anything else we should know?</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        additionalNotes: event.target.value,
                      }))
                    }
                    className="min-h-24 border-gray-300 bg-white"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, consent: event.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                  required
                />
                <span>
                  I agree to be contacted by SVLC regarding community membership
                  opportunities and relevant programs.
                </span>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" className="h-12 rounded-full px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Interest"}
                </Button>
                {submitted && (
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Submission received. We will follow up soon.
                  </p>
                )}
              </div>
            </form>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-gray-300/60 bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white shadow-2xl shadow-gray-300/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                Why this form
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">
                We use intent signals to create stronger member matches.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-gray-200">
                <li>Identify high-fit introductions and peer groups.</li>
                <li>Route applicants to the right events and roundtables.</li>
                <li>Prioritize mentorship and collaboration pathways.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                What happens next
              </p>
              <ol className="mt-4 space-y-3 text-sm text-gray-700">
                <li>1. Our team reviews your intent profile.</li>
                <li>2. You receive a follow-up with relevant opportunities.</li>
                <li>3. We invite you into programs aligned with your goals.</li>
              </ol>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  );
}
