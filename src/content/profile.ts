/** Locale-independent profile data. Translated copy lives in ./en.ts and ./pt.ts. */
export const profile = {
  name: "Luis Eduardo",
  shortName: "Luis Eduardo",
  email: "dudu_luis@hotmail.com.br",
  githubUser: "merino626",
  github: "https://github.com/merino626",
  linkedin: "https://www.linkedin.com/in/luis-e-009539140",
  resumeUrl: "/resume/luis-eduardo-cv.pdf",
  /** Optional headshot inside /public — the About section only shows it once the file exists. */
  photo: "/profile/luis-eduardo.jpg",
  /** Change to the final production domain before deploying. */
  siteUrl: "https://merinodev.tech",
  /** Repositories highlighted in the GitHub section, in display order. */
  featuredRepos: ["storage-waiter", "entrelinhas-blog", "song-generator", "live-preview", "study-tracker", "lottery-analyzer"],
} as const;
