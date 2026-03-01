import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoThumbnail from "@/components/events/VideoThumbnail";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { eventsData, type EventFormat, type EventMedia, type EventTheme } from "@/data/events";

export default function EventsPage() {
  const [selectedFormat, setSelectedFormat] = useState<"All" | EventFormat>("All");
  const [selectedTheme, setSelectedTheme] = useState<"All" | EventTheme>("All");
  const [timeSort, setTimeSort] = useState<"newest" | "oldest">("newest");
  const [activePhoto, setActivePhoto] = useState<{
    photos: EventMedia[];
    index: number;
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

  const formatTags = useMemo<("All" | EventFormat)[]>(() => {
    const orderedFormats = [
      "Summit",
      "Fireside",
      "Roundtable",
      "Workshop",
      "Mentorship",
      "Networking",
    ] as const;

    return ["All", ...orderedFormats.filter((format) => eventsData.some((event) => event.formats.includes(format)))];
  }, []);

  const visibleEvents = useMemo(() => {
    const byFormat =
      selectedFormat === "All"
        ? eventsData
        : eventsData.filter((event) => event.formats.includes(selectedFormat));

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

  const previewPhotoLimit = 5;

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
                    {event.formats.map((format) => (
                      <span
                        key={`${event.id}-${format}`}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold tracking-wide text-gray-600"
                      >
                        {format}
                      </span>
                    ))}
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

                <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {event.photos.slice(0, previewPhotoLimit).map((photo, photoIndex) => {
                    const hiddenCount = event.photos.length - previewPhotoLimit;
                    const showMoreOverlay =
                      hiddenCount > 0 && photoIndex === previewPhotoLimit - 1;

                    return (
                      <button
                        key={`${event.id}-${photoIndex}`}
                        onClick={() =>
                          setActivePhoto({
                            photos: event.photos,
                            index: photoIndex,
                            eventTitle: event.title,
                          })
                        }
                        className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl border border-gray-200"
                      >
                        {photo.type === "video" ? (
                          <VideoThumbnail
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        ) : (
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        )}
                        {photo.type === "video" && (
                          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white">
                              <Play className="h-4 w-4 fill-current" />
                            </span>
                          </span>
                        )}
                        {showMoreOverlay && (
                          <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-base font-semibold text-white">
                            +{hiddenCount}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 pl-1">
                  {event.detailsUrl ? (
                    <a
                      href={event.detailsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-gray-600 underline-offset-2 hover:text-gray-900 hover:underline"
                    >
                      View Event Details ↗
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-gray-400">
                      View Event Details ↗
                    </span>
                  )}
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
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActivePhoto((current) =>
                    current
                      ? {
                          ...current,
                          index:
                            current.index === 0
                              ? current.photos.length - 1
                              : current.index - 1,
                        }
                      : current,
                  )
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {activePhoto.photos[activePhoto.index].type === "video" ? (
                <video
                  src={activePhoto.photos[activePhoto.index].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[85vh] w-full rounded-md object-contain"
                />
              ) : (
                <img
                  src={activePhoto.photos[activePhoto.index].src}
                  alt={activePhoto.photos[activePhoto.index].alt}
                  className="max-h-[85vh] w-full rounded-md object-contain"
                />
              )}
              <button
                type="button"
                onClick={() =>
                  setActivePhoto((current) =>
                    current
                      ? {
                          ...current,
                          index:
                            current.index === current.photos.length - 1
                              ? 0
                              : current.index + 1,
                        }
                      : current,
                  )
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
          {activePhoto && (
            <p className="pb-2 text-center text-sm text-white/80">
              {activePhoto.index + 1} / {activePhoto.photos.length}
            </p>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
