/* =====================================================================
   HARLEM TEMPLE ANNOUNCEMENTS  ·  SETTINGS
   Plays on the sanctuary screen and as a livestream overlay.
   ===================================================================== */

window.ANNOUNCE = {

  corpsName: "Harlem Temple Corps",
  orgLine:   "The Salvation Army · 540 Lenox Avenue",
  logo:      "media/logo.png",
  secondsPerSlide: 12,

  /* ---------- Service countdown ---------- */
  // A small countdown appears in the corner as a service gets close (showWithinMinutes).
  // In the last few minutes (takeoverMinutes) it fills the whole screen. 0 = never take over.
  // While a service is on (start to end) the corner countdown hides itself.
  services: [
    { name: "Sunday School",    day: "Sun", start: "10:00 AM", end: "11:00 AM", showWithinMinutes: 45, takeoverMinutes: 0 },
    { name: "Holiness Service", day: "Sun", start: "11:00 AM", end: "1:00 PM",  showWithinMinutes: 60, takeoverMinutes: 5,
      takeoverLine: "Welcome to worship. Please take your seats and silence your phones." }
  ],
  // Extra one-time services (special services, holidays). Same fields, with date instead of day.
  // { name: "Christmas Eve Service", date: "2026-12-24", start: "7:00 PM", end: "8:30 PM", showWithinMinutes: 60, takeoverMinutes: 5 }
  specialServices: [],

  /* ---------- Birthdays ---------- */
  // Every Sunday morning the church calendar's "- HBD" events for Wednesday to Tuesday are written to this file
  // (the "data" branch on GitHub, so it doesn't use Netlify credits). The slide hides itself on weeks with no birthdays.
  birthdays: {
    feed: "https://raw.githubusercontent.com/pierrenfilsaime-netizen/harlemtemple-announcements/data/birthdays.json"
  },

  /* ---------- This Week at Harlem Temple (the "week" slide) ---------- */
  week: [
    { days: "Sun",                name: "Sunday School",            start: "10:00 AM", end: "11:00 AM" },
    { days: "Sun",                name: "Holiness Service",         start: "11:00 AM" },
    { days: "Sun",                name: "Beginners Band",           start: "1:25 PM" },
    { days: "Mon, Tue, Thu, Fri", name: "Food Pantry",              start: "9:30 AM",  end: "11:30 AM" },
    { days: "Weekdays",           name: "Soup Kitchen",             start: "11:00 AM", end: "12:30 PM" },
    { days: "Weekdays",           name: "Harlem G.A.I.N.S. Afterschool", start: "2:00 PM", end: "6:00 PM" },
    { days: "Wed",                name: "Harlem Haven for Seniors", start: "10:00 AM", end: "1:00 PM" },
    { days: "Wed",                name: "Bible Study",              start: "6:30 PM",  end: "7:30 PM" },
    { days: "Wed",                name: "Prayer Meeting",           start: "7:30 PM",  end: "8:00 PM" },
    { days: "Fri",                name: "Youth Music and Arts",     start: "6:00 PM",  end: "8:30 PM" }
  ],

  /* ---------- Slides ---------- */
  // Types:
  //   "announcement": kicker, title, body, date ("2026-11-15"), time, place, theme ("cream" | "navy" | "red"), media (photo behind)
  //   "flyer":        media. Add title / body / date / time / place to show the details beside the flyer.
  //   "week":         the weekly schedule above
  //   "birthdays":    this week's birthdays from the church calendar
  //   "scripture":    text, cite
  //   "video":        media (mp4), plays muted, moves on when it ends
  // Any slide: duration (seconds), start / end ("2026-11-01") to show and hide on their own.
  slides: [
    { type: "announcement", theme: "cream", kicker: "Welcome",
      title: "Welcome to Harlem Temple",
      body: "We're glad you're here. Worship, community, and care for every neighbor on Lenox Avenue and beyond." },

    { type: "announcement", theme: "navy", kicker: "Every Sunday",
      title: "Sunday at Harlem Temple",
      rows: [
        { when: "10:00 AM", what: "Sunday School" },
        { when: "11:00 AM", what: "Holiness Service" }
      ],
      body: "Can't be here in person? Worship with us live on YouTube and Facebook." },

    { type: "birthdays", duration: 15, body: "\u201cThe Lord bless you and keep you.\u201d Numbers 6:24" },

    { type: "week", duration: 15 },

    { type: "flyer", media: "media/harvest-celebration-2026.jpg", end: "2026-11-15", duration: 15,
      kicker: "Annual Harvest Celebration", title: "Still We Sow",
      date: "2026-11-15", time: "3:00 PM",
      body: "Guest speakers Lt. Colonels David & Margaret Davis." },

    { type: "flyer", media: "media/christmas-toy-distribution.jpg", end: "2026-12-19", duration: 15 },
    { type: "flyer", media: "media/music-arts-26-27.jpg", duration: 15 },
    { type: "flyer", media: "media/womens-ministry.jpg", duration: 15 },
    { type: "flyer", media: "media/mens-ministry.jpg", duration: 15 },

    { type: "flyer", media: "media/valentine-gala-tea-2027.jpg", start: "2027-01-04", end: "2027-02-13", duration: 15,
      kicker: "Save the Date", title: "Valentine Gala & Tea",
      date: "2027-02-13", time: "5:00 PM",
      body: "$30 per person, $50 per couple. Dress to impress." },

    { type: "scripture",
      text: "I rejoiced with those who said to me, \u201cLet us go to the house of the Lord.\u201d",
      cite: "Psalm 122:1 (NIV)" }
  ]
};
