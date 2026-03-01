import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { eventsData, type EventTheme } from "@/data/events";

export default function EventsPage() {
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedTheme, setSelectedTheme] = useState<"All" | EventTheme>("All");
  const [timeSort, setTimeSort] = useState<"newest" | "oldest">("newest");
  const [activePhoto, setActivePhoto] = useState<{
    src: string;
    alt: string;
    eventTitle: string;
  } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="pt-28 pb-20 border-b border-gray-100 bg-gray-50/60">
        <div className="container mx-auto px-6">
          <Link href="/">
            <a className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All SVLC Events</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Browse our full archive of events. Filter by format and theme, then sort by time.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
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
                <label htmlFor="event-time-sort-all" className="text-xs font-medium text-gray-600">
                  Time
                </label>
                <select
                  id="event-time-sort-all"
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
                key="all-themes"
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
            {visibleEvents.map((event) => (
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
                        })
                      }
                      className="overflow-hidden rounded-xl border border-gray-200"
                    >
                      <img
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
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </Button>
        </div>
      </section>

      <Dialog
        open={Boolean(activePhoto)}
        onOpenChange={(open) => {
          if (!open) {
            setActivePhoto(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl border-none bg-black p-2">
          <DialogTitle className="sr-only">
            {activePhoto ? `${activePhoto.eventTitle} photo` : "Event photo"}
          </DialogTitle>
          {activePhoto && (
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="max-h-[85vh] w-full rounded-md object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
