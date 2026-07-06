import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CircleDollarSign, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AudienceFilter = "all" | "youth" | "brothers" | "sisters" | "family";
type CostFilter = "all" | "free" | "paid";

interface ProgramsProps {
  limit?: Number;
  shuffle?: Boolean;
  showFilters?: Boolean;
}

export function Programs({ limit, shuffle, showFilters }: ProgramsProps) {
  const [audienceFilter, setAudienceFilter] = useState<AudienceFilter>("all");
  const [costFilter, setCostFilter] = useState<CostFilter>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close the filter dropdown when clicking outside of it
  useEffect(() => {
    if (!filtersOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setFiltersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filtersOpen]);

  const activeFilterCount =
    (audienceFilter !== "all" ? 1 : 0) + (costFilter !== "all" ? 1 : 0);

  let programs = [
    {
      title: "Youth Qur'an Class (Ages 6-16)",
      audience: "youth",
      description:
        "Join our Reading, Hifdh & Tajweed class for children ages 6-16. Taught by qualified male and female instructors.",
      schedule: "Mondays to Thursdays",
      time: "5:00 PM - 7:00 PM",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
      cost: "$75/month",
      link: "http://bit.ly/youth-tajweed",
    },
    {
      title: "Tajweed & Hifdh Class (Brothers)",
      audience: "brothers",
      description:
        "📖 Strengthen your recitation, improve your Tajweed, and deepen your connection with the Qur'an in a focused brothers-only class led by Abu Rasheed, Ijazah in Hafs 'an 'Asim with Sanad to the Messenger (PBUH).",
      schedule: "Sunday – Wednesday",
      time: "8:00 PM – 10:00 PM",
      image:
        "https://motionarray.imgix.net/motion-array-1512327-E08oh0yQoX-high_0011.jpg",
      cost: "Free",
      link: "https://bit.ly/alezz-brothers-hifdh",
    },
    {
      title: "Tajweed & Hifdh Class (Sisters)",
      audience: "sisters",
      description:
        "Do you listen to Quran reciters and wish you were able to recite the Quran like them? Then you're in the right place! With this program, you'll learn Tajweed and start your Hifth with a teacher of 20+ years of experience and has a sanad.",
      schedule: "Sundays to Thursdays",
      time: "11:00 AM - 3:00 PM",
      image:
        "https://motionarray.imgix.net/motion-array-1512327-E08oh0yQoX-high_0011.jpg",
      cost: "See registration form",
      link: "https://api.leadconnectorhq.com/widget/form/nong0q79d2TaF51IBkCZ",
    },
    {
      title: "Sahaba Stories",
      audience: "family",
      // Hidden for now — schedule not confirmed. Set to true (or remove) to show again.
      enabled: false,
      description:
        "🌟 They were the best generation — the Companions of the Prophet ﷺ. They stood by him in hardship and ease, spread his message across the world, and embodied faith, sacrifice, and sincerity like no others. Their lives are living lessons of courage, devotion, and love for Allah and His Messenger ﷺ.\n\n📖 Join us for Sahaba Stories — a weekly journey through the Seerah as seen through the eyes of the Prophet's ﷺ Companions.\n\n🎙️ With Ustad Abu Rasheed",
      schedule: "Every Monday",
      time: "7:30 PM after Isha Salah",
      image:
        "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cost: "Free",
    },
    {
      title: "Beginner's Boxing Classes (Brothers 14+)",
      audience: "brothers",
      description:
        "A structured boxing program for youth that teaches discipline and self-defense in a safe environment. First two classes are complimentary.",
      schedule: "Every Thursday",
      time: "7:00 PM - 9:00 PM",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      cost: "$50/month",
      link: "https://api.leadconnectorhq.com/widget/form/U0lkqUnMQLvXeKGojEm4",
    },
    {
      title: "Pearls of the Quran – A Sisters' Tafsir Circle",
      audience: "sisters",
      description:
        "Join us weekly for a beautiful evening of sisterhood, reflection, and learning as we connect over the noble verses of the Qur'an with a warm drink in hand.",
      schedule: "Every Monday",
      time: "7:00 PM - 8:00 PM",
      image:
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      cost: "Free",
    },
    {
      title: "Brothers Ilm & Chill",
      audience: "brothers",
      description:
        "Masjid Al-Ezz invites all high school & university students to come out for our weekly ILM & CHILL session!\n\n📖 This week's topic: 'A Muslim's Vision' – a short and powerful khatira after Maghrib to get us thinking about our direction and goals as Muslims.\n\n🎉 After the talk, stick around for some fun activities, chill vibes, brotherhood and some delicious pizza 🍕",
      schedule: "Every Saturday",
      time: "After Isha",
      image:
        "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=800",
      cost: "Free",
      link: "https://tinyurl.com/YouthSNL",
    },
    {
      title: "Family Tafsir Night",
      audience: "family",
      description:
        "Weekly family tafsir night featuring halaqas for youth and adults, children's activities. Tea and dinner will be provided.",
      schedule: "Every Friday",
      time: "After Isha",
      image:
        "https://images.pexels.com/photos/31607773/pexels-photo-31607773.jpeg",
      cost: "Free",
      link: "https://api.leadconnectorhq.com/widget/form/pJEMzHOodaksWH2uKr4I",
    },
    {
      title: "Weekly Grappling Classes",
      audience: "brothers",
      description:
        "Get ready, brothers! Weekly grappling classes are starting Saturday, January 17 (please note the start date has changed), in partnership with Strike MMA and led by a professional coach.\n\nThese classes are open to brothers and will help you develop grappling skills, improve fitness, and build confidence in a supportive environment.",
      schedule: "Every Saturday, starting January 17",
      time: "1:00 PM – 2:00 PM",
      image: "/grappling-class.png",
      cost: "$95/month",
      link: "https://bit.ly/alezz-weekly-grappling",
    },
  ];

  // Hide programs flagged as not currently running (their data is retained)
  programs = programs.filter((program) => program.enabled !== false);

  // Apply audience/cost filters (controls are rendered on the Programs page)
  if (showFilters) {
    programs = programs.filter((program) => {
      const audienceMatch =
        audienceFilter === "all" || program.audience === audienceFilter;
      const isFree = program.cost.trim().toLowerCase() === "free";
      const costMatch =
        costFilter === "all" || (costFilter === "free" ? isFree : !isFree);
      return audienceMatch && costMatch;
    });
  }

  // Define pinned program titles
  const pinnedTitles = [
    "Youth Qur'an Class (Ages 6-16)",
    "Tajweed & Hifdh Class (Brothers)",
    "Tajweed & Hifdh Class (Sisters)",
    "Sahaba Stories",
    "Family Tafsir Night",
    "Weekly Grappling Classes",
  ];

  // Pin specific programs at the top
  const pinnedPrograms = programs.filter((program) =>
    pinnedTitles.includes(program.title),
  );

  // Get the rest of the programs
  const otherPrograms = programs.filter(
    (program) => !pinnedTitles.includes(program.title),
  );

  // Shuffle the other programs if shuffle is enabled
  if (shuffle === true) {
    otherPrograms.sort(() => 0.5 - Math.random());
  }

  // Combine pinned programs first, then the rest
  programs = [...pinnedPrograms, ...otherPrograms];

  // Paginate programs
  programs = typeof limit === "number" ? programs.slice(0, limit) : programs;

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const audienceOptions: { value: AudienceFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "youth", label: "Youth" },
    { value: "brothers", label: "Brothers" },
    { value: "sisters", label: "Sisters" },
    { value: "family", label: "Family" },
  ];
  const costOptions: { value: CostFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "free", label: "Free" },
    { value: "paid", label: "Paid" },
  ];

  const pillClass = (active: boolean) =>
    cn(
      "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
      active
        ? "bg-primary text-white border-primary"
        : "bg-white text-primary border-primary/30 hover:border-primary",
    );

  return (
    <>
      {showFilters && (
        <div className="mb-8 flex justify-end">
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              aria-haspopup="true"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                activeFilterCount > 0 || filtersOpen
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary/30 hover:border-primary",
              )}
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-primary">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {filtersOpen && (
              <div className="absolute right-0 z-20 mt-2 w-72 space-y-4 rounded-xl border border-gray-100 bg-white p-4 text-left shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    Filter Programs
                  </span>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={() => {
                        setAudienceFilter("all");
                        setCostFilter("all");
                      }}
                      className="text-xs text-gray-500 underline hover:text-primary"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Audience
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {audienceOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setAudienceFilter(opt.value)}
                        className={pillClass(audienceFilter === opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Cost
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {costOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setCostFilter(opt.value)}
                        className={pillClass(costFilter === opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {programs.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No programs match the selected filters.
        </div>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs?.map((program, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="overflow-hidden h-full flex flex-col border-transparent shadow-md hover:shadow-xl transition-shadow">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-serif font-bold">
                      {program.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-5 flex-grow">
                  <div className="border-l-4 border-amber-400 pl-3 mb-4">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">WHEN:</span>
                      <span className="text-sm ml-auto">
                        {program.schedule}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">TIME:</span>
                      <span className="text-sm ml-auto">{program.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <CircleDollarSign className="h-4 w-4" />
                      <span className="text-sm">COST:</span>
                      <span className="text-sm ml-auto">{program.cost}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-sm uppercase font-semibold text-gray-500 mb-1">
                      DETAILS
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {program.description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between gap-2 flex-wrap">
                  {program.link && (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-300 transition-colors"
                      aria-label="Instagram"
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-full sm:w-auto">
                        Register for Program
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
