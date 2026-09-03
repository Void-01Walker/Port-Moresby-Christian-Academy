# Missing information — take this list to the school office

Every item below is highlighted yellow on the live site (`<span class="todo">`).
Once you have the real information, edit the file, replace the placeholder text,
and delete `class="todo"` from that element so the highlight disappears.

## Site-wide (appears on every page: header mobile menu + footer)

- [ ] Phone number — currently `+675 7685 5071` (unverified, from a directory listing — confirm this is correct)
- [ ] Office hours — currently placeholder `Mon–Fri, 8am–4pm`
- [ ] Footer social icons — Facebook, Instagram and YouTube icons are in every footer, but confirm whether PMCA actually has Instagram/YouTube accounts. If not, delete those two `<a class="social-icon">` links from the footer in each page. If yes, replace `https://instagram.com` / `https://youtube.com` with the real profile URLs (same treatment as the Facebook link on the Contact page).

## Home (index.html)

- [ ] Enrolment year currently open — placeholder `2027`
- [ ] Preschool age range — placeholder `Ages 3–5`
- [ ] Elementary age range — placeholder `Ages 6–8` (confirm "Elementary" is still the right label given PNG's curriculum changes)
- [ ] Primary age range — placeholder `Ages 9–12`
- [ ] Enrolment fee amount (referenced but not given a figure)

## About (about.html)

- [ ] Principal's welcome message (full paragraph)
- [ ] School history paragraph
- [ ] Grade/subject for each teacher: Mr. James, Mr. John, Mrs. Peter, Ms. Joseph

## Our School (our-school.html)

- [ ] One additional curriculum subject beyond Literacy, Maths, Science, Christian education (or confirm the list is already complete)
- [ ] Daily timetable: gate opening time, assembly time, class blocks, lunch, pick-up time (currently a full set of placeholder times)
- [ ] Uniform description and where to buy it
- [ ] Facilities: classroom/class size details, outdoor play area details, toilet and water access details

## Enrolment (enrolment.html)

- [ ] Enrolment fee amount
- [ ] Whether a previous school report is required for transfers
- [ ] Passport photo requirement (size, quantity)
- [ ] Full fee table: registration fee and term fee for Preschool, Elementary and Primary
- [ ] Term dates: start and end date for Terms 1–4
- [ ] The actual enrolment form PDF needs to be placed at `/src/PMCA-Enrolment-Form.pdf`

## Contact (contact.html)

- [ ] Email address — currently placeholder `info@example.org`
- [ ] Office hours (repeated here)
- [ ] Facebook page URL — currently placeholder `facebook.com`
- [ ] **"Send us a message" form destination** — the form currently posts to `https://formsubmit.co/info@example.org`. Once the real school email is confirmed: (1) replace `info@example.org` in the `action` attribute in `contact.html`, and (2) FormSubmit will email that address a one-time confirmation link the first time someone submits the form — it must be clicked before messages start arriving. See `README.md`.

## Gallery (gallery.html)

- [ ] Photos of the campus, classrooms and grounds for the "School environment" carousel — it currently has the site's one hero photo plus two labelled placeholder slides ("Classroom photo coming soon" / "Campus grounds photo coming soon"); swap those two placeholder slides for real photos when available (see `.carousel-placeholder` in `gallery.html`)

## Not yet on the site at all

- [ ] The real domain name, to replace every `https://example.org/` (Open Graph tags, the JSON-LD block in `index.html`, `robots.txt`, `sitemap.xml`) once the site is hosted — see `README.md`
- [ ] A dedicated Open Graph share image sized 1200×630 — the `og:image` tag currently reuses the site's hero photo (`images/optimized/hero.jpg`), which works but isn't cropped for social sharing
