# Weekly Sunday program update

Every Sunday morning the Sunday program (a Word file emailed with "Sunday Program" in the subject) is used to update the screen. These are the rules, set by Captain Neek.

## Where updates go: the `data` branch, never `main`

Captain Neek wants as few Netlify credits used as possible. Netlify only publishes `main`, so:

- **All content changes** (slides, weekly schedule, service times, new flyers) go in **`content.json` on the `data` branch**, with any new images in `media/` on that branch. Screens pick it up within about 10 minutes. This costs no Netlify credits.
- `content.json` uses the same fields as the slide and schedule examples in `config.js` (`slides`, `week`, `services`, `specialServices`). Media paths are relative to it (`"media/flyer.jpg"`). Keep it valid JSON.
- **Push to `main` only for design or code changes** to `index.html` or `config.js`, and only when Captain Neek asks for one. Group several into one push.

## What to take from the program

1. **Order of service, this Sunday only** (`start` and `end` = that Sunday's date, `theme: "navy"`):
   - "This Morning's Message" slide: title = the sermon title as printed, `rows` for Speaker and Scripture (the Scripture Reading reference).
2. **Upcoming Events** list:
   - Something happening that day ("this afternoon", "today") → an announcement with `start` and `end` = that Sunday, kicker "This Afternoon" / "Today".
   - A dated event → an announcement with `date` (shows the date tile) and `end` = the event date, kicker "Save the Date".
   - If an existing slide or flyer already covers the event, update that slide instead of adding a new one (for example the Harvest flyer, the Christmas Toy Distribution flyer, the Valentine Gala & Tea flyer which the program calls the "Annual Tea Party").
   - Items that disappear from the program: remove their announcement slide, unless it is a flyer slide or still has a future date.
3. **Notes like Officer's Visitation**: an announcement using the program's own wording.
4. **Weekly Schedule** → the `week` list in `content.json`, in the program's order and wording.
   - Always keep, even if the program leaves them out: **Holiness Service** (Sun 11:00 AM), **Harlem Haven for Seniors** (Wed 10:00 AM to 1:00 PM), **Prayer Meeting** (Wed 7:30 PM to 8:00 PM), **Harlem G.A.I.N.S. Afterschool** (Mon to Fri 2:00 PM to 6:00 PM).
   - Leave out items marked "To be announced".
   - Seasonal notes ("Fall through Spring") and "By appointment only" / "In person & Zoom" go in `note`.
   - Keep the "Sunday at Harlem Temple" slide's rows in step with the Sunday times.

## Style

- Mirror the program's wording. Don't invent descriptions, quotes, times or places that aren't in the program.
- No em dashes.
- Scripture text only if quoted exactly from a named translation (NIV preferred).
- Never show birthdays here: they come from the church calendar on the `data` branch.

## Publishing

- One commit to the `data` branch per week. If nothing changed, don't push.
- Before pushing, check the page with the new `content.json` (serve a copy locally and point `content.feed` at it): no script errors, and the weekly schedule fits on screen.
