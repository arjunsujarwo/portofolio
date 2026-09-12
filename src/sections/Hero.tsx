import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Play,
  Pause,
  X,
  Mic,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: easePremium,
    },
  },
};

export default function Hero() {
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleAudioToggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio gagal diputar:", error);
    }
  };

  const handleOpenAudio = async () => {
    setIsAudioOpen(true);

    setTimeout(async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio gagal diputar:", error);
      }
    }, 250);
  };

  const handleCloseAudio = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setIsAudioOpen(false);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-24"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 18, 0],
                  y: [0, -12, 0],
                  scale: [1, 1.04, 1],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#87ceeb]/20 blur-3xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -12, 0],
                  y: [0, 10, 0],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-[42%] h-[350px] w-[350px] rounded-full bg-[#eaf7fd] blur-3xl"
        />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#eaf7fd] to-transparent" />

        {/* Minimal ambient dots */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -5, 0],
                  opacity: [0.25, 0.55, 0.25],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#3b82f6]/40"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                  opacity: [0.2, 0.45, 0.2],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[28%] h-2 w-2 rounded-full bg-[#8b6e63]/30"
        />
      </div>

      <div className="container-custom relative flex min-h-[calc(100vh-96px)] items-center">
        <div className="grid w-full items-center gap-12 pb-16 pt-10 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:pb-20 lg:pt-14">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Eyebrow */}
            <motion.div
              variants={reveal}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: easePremium,
              }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 32, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                  ease: easePremium,
                }}
                className="h-px bg-[#3b82f6]"
              />

              <span className="text-xs font-bold tracking-[0.25em] text-[#3b82f6]">
                TURNING IDEAS INTO IMPACT
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={reveal}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: easePremium,
              }}
              className="mb-2 text-lg font-medium text-[#6b7280] md:text-xl"
            >
              Halo, saya
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 38,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.6,
                ease: easePremium,
              }}
              className="max-w-3xl font-heading text-5xl font-semibold leading-[0.98] tracking-tight text-[#10243e] sm:text-6xl md:text-7xl lg:text-[78px]"
            >
              Arjun
              <br />

              <span className="text-[#3b82f6]">Sujarwo</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={reveal}
              transition={{
                duration: 1,
                delay: 0.95,
                ease: easePremium,
              }}
              className="mt-7 max-w-2xl"
            >
              <p className="text-lg font-semibold leading-8 text-[#10243e] md:text-xl">
                IT Project Manager{" "}
                <span className="text-[#8b6e63]">|</span>{" "}
                System Analyst{" "}
                <span className="text-[#8b6e63]">|</span>{" "}
                Software Developer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={reveal}
              transition={{
                duration: 1,
                delay: 1.15,
                ease: easePremium,
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-[#6b7280] md:text-base"
            >
              Mahasiswa Sistem Informasi yang memiliki ketertarikan pada
              pengembangan sistem, analisis kebutuhan, pengelolaan project,
              serta membangun solusi digital yang bermanfaat dan mudah
              digunakan.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.4,
                ease: easePremium,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              {/* Project */}
              <motion.a
                href="#projects"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: easePremium,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
              >
                Lihat Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              {/* Audio */}
              <motion.button
                type="button"
                onClick={handleOpenAudio}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: easePremium,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#8b6e63]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#6f553b] shadow-sm"
              >
                <motion.span
                  animate={
                    isPlaying && !shouldReduceMotion
                      ? {
                          scale: [1, 1.06, 1],
                        }
                      : undefined
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf7fd] text-[#3b82f6]"
                >
                  <Play size={13} fill="currentColor" />
                </motion.span>

                Dengarkan Perkenalan Saya
              </motion.button>
            </motion.div>

            {/* =====================================================
                AUDIO PLAYER
            ====================================================== */}
            {isAudioOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.985,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: easePremium,
                }}
                className="mt-5 max-w-xl"
              >
                <div className="relative overflow-hidden rounded-3xl border border-[#dbe7ef] bg-white p-5 shadow-lg shadow-slate-900/5">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, 15, 0],
                            y: [0, -8, 0],
                          }
                    }
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#eaf7fd] blur-2xl"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#10243e] text-white">
                          <Mic size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3b82f6]">
                            Perkenalan Diri
                          </p>

                          <p className="mt-1 text-xs text-[#6b7280]">
                            Dengarkan suara saya
                          </p>
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        onClick={handleCloseAudio}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: 90,
                              }
                        }
                        transition={{
                          duration: 0.4,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#6b7280] transition hover:bg-slate-100 hover:text-[#10243e]"
                        aria-label="Tutup audio"
                      >
                        <X size={16} />
                      </motion.button>
                    </div>

                    <div className="mt-5 flex items-center gap-4">
                      <motion.button
                        type="button"
                        onClick={handleAudioToggle}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 1.05,
                              }
                        }
                        whileTap={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 0.95,
                              }
                        }
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-white shadow-md shadow-blue-500/20"
                        aria-label={
                          isPlaying ? "Pause audio" : "Play audio"
                        }
                      >
                        {isPlaying ? (
                          <Pause size={17} fill="currentColor" />
                        ) : (
                          <Play size={17} fill="currentColor" />
                        )}
                      </motion.button>

                      {/* Elegant waveform */}
                      <div className="flex-1">
                        <div className="flex h-7 items-center gap-[3px]">
                          {Array.from({ length: 28 }).map((_, index) => (
                            <motion.span
                              key={index}
                              animate={
                                isPlaying && !shouldReduceMotion
                                  ? {
                                      height: [
                                        `${7 + ((index * 3) % 7)}px`,
                                        `${11 + ((index * 5) % 10)}px`,
                                        `${7 + ((index * 2) % 8)}px`,
                                      ],
                                    }
                                  : {
                                      height: "7px",
                                    }
                              }
                              transition={
                                isPlaying && !shouldReduceMotion
                                  ? {
                                      duration: 1.2 + (index % 4) * 0.15,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: index * 0.035,
                                    }
                                  : {
                                      duration: 0.4,
                                    }
                              }
                              className={`w-[3px] rounded-full ${
                                isPlaying
                                  ? index % 3 === 0
                                    ? "bg-[#3b82f6]"
                                    : "bg-[#87ceeb]"
                                  : "bg-slate-200"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="mt-2 flex justify-between">
                          <span className="text-[10px] font-medium text-slate-400">
                            Audio Introduction
                          </span>

                          <span className="text-[10px] font-medium text-slate-400">
                            {isPlaying ? "Playing..." : "Paused"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-[#f8fafc] px-4 py-3">
                      <p className="font-heading text-sm italic leading-6 text-[#6b7280]">
                        "Halo, saya Arjun Sujarwo, mahasiswa Sistem
                        Informasi yang memiliki ketertarikan pada project
                        management, system analysis, dan software
                        development..."
                      </p>
                    </div>
                  </div>

                  <audio
                    ref={audioRef}
                    src="/audio/micon.ogg"
                    onEnded={handleAudioEnded}
                    preload="metadata"
                  />
                </div>
              </motion.div>
            )}

            {/* Scroll indicator */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 2.2,
              }}
              className="mt-12 hidden items-center gap-3 text-[#6b7280] sm:flex"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200"
              >
                <ArrowDown size={15} />
              </motion.div>

              <span className="text-xs font-medium tracking-wide">
                Scroll to explore
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.98,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.5,
              delay: 0.35,
              ease: easePremium,
            }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative min-h-[530px] overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#eaf7fd] shadow-2xl shadow-slate-900/10 md:min-h-[610px]"
            >
              {/* Sky */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#aee2f7] via-[#eaf7fd] to-white" />

              {/* Sun */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [0.7, 0.82, 0.7],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[18%] top-[12%] h-24 w-24 rounded-full bg-white/80 blur-md"
              />

              {/* Decorative line */}
              <motion.div
                initial={{
                  scaleY: 0,
                  transformOrigin: "top",
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 1.3,
                  delay: 1,
                  ease: easePremium,
                }}
                className="absolute left-8 top-10 h-20 w-px bg-white/60"
              />

              {/* Circle */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: easePremium,
                }}
                className="absolute left-10 top-10 h-3 w-3 rounded-full border border-white/80"
              />

              {/* =====================================================
                  MOUNTAINS
              ====================================================== */}
              <div className="absolute bottom-0 left-0 right-0 h-[43%]">
                {/* Back */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 h-[80%] w-full bg-[#9bb8c5]"
                  style={{
                    clipPath:
                      "polygon(0 100%, 0 65%, 10% 48%, 19% 65%, 32% 28%, 44% 60%, 56% 34%, 68% 66%, 79% 42%, 91% 64%, 100% 43%, 100% 100%)",
                  }}
                />

                {/* Middle */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 4, 0],
                        }
                  }
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 h-[62%] w-full bg-[#6f93a3]"
                  style={{
                    clipPath:
                      "polygon(0 100%, 0 67%, 15% 36%, 27% 66%, 41% 45%, 53% 70%, 68% 30%, 81% 64%, 100% 39%, 100% 100%)",
                  }}
                />

                {/* Front */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, -2, 0],
                        }
                  }
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 h-[38%] w-full bg-[#3e6173]"
                  style={{
                    clipPath:
                      "polygon(0 100%, 0 69%, 14% 45%, 28% 72%, 43% 40%, 58% 70%, 74% 38%, 88% 69%, 100% 46%, 100% 100%)",
                  }}
                />
              </div>

              {/* =====================================================
                  PROFILE
              ====================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 55,
                  scale: 0.96,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.65,
                  ease: easePremium,
                }}
                className="absolute bottom-0 left-1/2 z-20 w-[78%] -translate-x-1/2 md:w-[74%]"
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative aspect-[3/4] overflow-hidden rounded-t-[11rem] border-x-[7px] border-t-[7px] border-white/90 bg-[#d9e5ea] shadow-2xl"
                >
                  <img
                    src="/images/profile/image1.png"
                    alt="Arjun Sujarwo"
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10243e]/10 via-transparent to-white/5" />

                  {/* Cinematic light sweep */}
                  <motion.div
                    initial={{
                      x: "-130%",
                    }}
                    animate={{
                      x: "130%",
                    }}
                    transition={{
                      duration: 2.2,
                      delay: 1.6,
                      ease: easePremium,
                    }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-white/10 blur-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* =====================================================
                  STATEMENT
              ====================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.5,
                  ease: easePremium,
                }}
                className="absolute right-5 top-[19%] z-30 max-w-[110px] rotate-[-7deg] text-right md:right-7"
              >
                <motion.p
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-heading text-lg italic leading-[1.05] text-[#10243e] md:text-xl"
                >
                  Build
                  <br />
                  Analyze
                  <br />
                  Create
                  <br />
                  <span className="text-[#3b82f6]">Impact</span>
                </motion.p>
              </motion.div>

              {/* =====================================================
                  LOCATION
              ====================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.7,
                  ease: easePremium,
                }}
                className="absolute bottom-5 left-5 z-30 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md md:bottom-6 md:left-6"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#3b82f6]" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#3b82f6]">
                    Based in
                  </p>
                </div>

                <p className="mt-1 text-xs font-semibold text-[#10243e]">
                  Depok, Indonesia
                </p>
              </motion.div>

              {/* Floating label */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.35,
                  ease: easePremium,
                }}
                className="absolute left-6 top-8 z-30 hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md sm:block"
              >
                <p className="text-[9px] font-semibold tracking-[0.16em] text-[#10243e]">
                  SYSTEMS • PEOPLE • TECHNOLOGY
                </p>
              </motion.div>

              {/* Accent */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [0.55, 0.85, 0.55],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-28 right-7 z-30 h-3 w-3 rounded-full bg-[#3b82f6] shadow-lg shadow-blue-500/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}