/* =====================================================================
   HARLEM TEMPLE ANNOUNCEMENTS  ·  SETTINGS
   Plays on the sanctuary screen and as a livestream overlay.
   ===================================================================== */

window.ANNOUNCE = {

  corpsName: "Harlem Temple Corps",
  orgLine:   "The Salvation Army · 540 Lenox Avenue",
  logo:      "media/logo.png",
  secondsPerSlide: 12,

  /* ---------- Content ---------- */
  // Slides, the weekly schedule and service times live in content.json on the GitHub "data" branch,
  // so weekly updates don't use Netlify credits. The screen checks it every 10 minutes.
  // Everything below is only a fallback for a screen that has never been online.
  content: {
    feed: "https://raw.githubusercontent.com/pierrenfilsaime-netizen/harlemtemple-announcements/data/content.json"
  },

  /* ---------- Birthdays ---------- */
  // Every Sunday morning the church calendar's "- HBD" events for Wednesday to Tuesday are written to birthdays.json
  // on the data branch. The slide hides itself on weeks with no birthdays.
  birthdays: {
    feed: "https://raw.githubusercontent.com/pierrenfilsaime-netizen/harlemtemple-announcements/data/birthdays.json"
  },

  /* ---------- Fallback content (see content.json on the data branch for the real thing) ---------- */
  services: [
    { name: "Sunday School",    day: "Sun", start: "10:00 AM", end: "11:00 AM", showWithinMinutes: 45, takeoverMinutes: 0 },
    { name: "Holiness Service", day: "Sun", start: "11:00 AM", end: "1:00 PM",  showWithinMinutes: 60, takeoverMinutes: 5,
      takeoverLine: "Welcome to worship. Please take your seats and silence your phones." }
  ],
  specialServices: [],
  week: [],
  slides: [
    { type: "announcement", theme: "cream", kicker: "Welcome",
      title: "Welcome to Harlem Temple",
      body: "We're glad you're here. Worship, community, and care for every neighbor on Lenox Avenue and beyond." },
    { type: "birthdays", duration: 15, body: "\u201cThe Lord bless you and keep you.\u201d Numbers 6:24" }
  ]
};
