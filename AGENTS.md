# Portfolio project instructions

## Purpose and scope

Build a public personal portfolio that presents the owner's background, education,
interests, technical skills, and projects. Follow the course assignment and keep
the code simple enough for the owner to review and explain during a three-minute
demo. Work on one small task at a time; do not build unrelated features.

## Pages and content

Use five separate pages with the same navigation and footer:

- `index.html`: Home, with a brief introduction and links to the other pages.
- `about.html`: About Me, including background, education, and interests.
- `projects.html`: At least three real projects, each with a description, image
  or screenshot, and a working project or repository link when applicable.
- `skills.html`: Technical skills and honest descriptions of proficiency.
- `contact.html`: Approved public contact details, such as email and professional
  profile links.

Ask for missing personal information or project details when needed. Do not
invent credentials, experience, projects, contact details, or test results. Final
pages must contain real content with no placeholder text or empty sections. Do
not publish a phone number, home address, or other private information.

## Design direction

Use an electrical control-panel identity with compact spacing, oversized bold
headings, numbered project circuits, equipment labels, and real project photography.

- Default theme: charcoal `#131716` with warm white text `#F3F1E9`, muted sage
  `#B6BDB5`, amber `#FFC54A`, and steel-green panel surfaces.
- Light theme: drafting-paper `#F0EEE4`, dark green text `#19221B`, and copper
  `#855000` accents. Preserve the visitor’s saved theme choice.
- Use a subtle 32px drawing grid, edge conduit, scattered CSS bolts and bulbs,
  terminal-like status dots, and thin panel borders. Keep decoration behind content.
- Home leads with “Wired for what’s next,” the owner’s name and real background,
  a framed project photo, and a circuit directory linking to the three projects.
- Keep all five navigation destinations clear. The logo uses a lightning mark
  and initials with a small nameplate; page introductions use numbered labels.
- Use local system fonts for body/headings and a local monospace stack for labels.
  No external font or image dependencies; reuse the owner’s project photos.
- Amber buttons use dark text. Keep links identifiable and keyboard focus visible.
- Gentle drifting, glow, photo and link transitions are allowed. Respect reduced
  motion and the Pause animations control, including hover and focus transitions.
- Start with a phone layout and expand using media queries; avoid horizontal scroll.

## Implementation rules

- Use plain HTML5, CSS, and JavaScript only. No backend, database, login, framework,
  CSS library, package manager, npm, bundler, or build step.
- Every page must work by opening `index.html` directly and on GitHub Pages.
  Avoid features requiring a server, such as fetching local content files.
- Use relative paths, such as `about.html`, `css/styles.css`, and
  `images/project-name.webp`. Do not use leading-slash paths or local absolute
  filesystem paths; the deployed site lives under `/portfolio/`.
- Put all styles in one shared external stylesheet, `css/styles.css`; no inline
  styles. Put shared JavaScript in `js/script.js`, loaded with `defer`.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`.
  Include exactly one `h1` per page and follow a logical heading order.
- Keep code readable, use descriptive names, and comment only where an explanation
  helps. Avoid unnecessary abstractions and dependencies.
- Keep every image under 500 KB. Use descriptive alternative text for meaningful
  images and empty `alt=""` for purely decorative images.
- Never add credentials, tokens, API keys, or passwords to the repository.

## Interactivity and accessibility

Implement at least two JavaScript features:

1. A responsive navigation menu that opens and closes on mobile. Use a real button,
   an accessible name, `aria-controls`, and an accurate `aria-expanded` state.
   Ensure hidden menu links cannot receive keyboard focus and the navigation
   remains usable if JavaScript is unavailable.
2. A light/dark theme toggle with an accessible label and readable colors in both
   themes. Any preference storage must fail gracefully when unavailable.

If a contact form is requested later, validate both valid and invalid input with
JavaScript, provide accessible feedback, and direct visitors to email. Never
claim that a static form sent a message.

Provide a skip link, visible focus states, meaningful link text, and labels for
form controls. All controls and links must support the keyboard using native
behavior, including Tab and Enter and Space where appropriate. Respect reduced
motion preferences. Aim for a Lighthouse Accessibility score of at least 90 on
every page and fix browser console errors.

## Verification and TESTING.md

After each change, inspect the affected pages locally, at phone and laptop sizes,
and with keyboard navigation. Check relative links, images, and console errors.
Do not install build tools or test packages for this static assignment.

Create `TESTING.md` with at least 12 test cases. Each case must include its ID,
what is tested, steps, expected result, and actual result. Use `Not run` until a
test is executed, then record Pass or Fail with observations. Cover:

- Every navigation link on every page.
- Every page on a phone-sized screen and a laptop.
- Every JavaScript feature, including both theme states and menu open/close.
- Valid and invalid form inputs if a form is added.
- Tab and Enter navigation on every page.
- Lighthouse Accessibility scores on every page.

Run the full test plan against the live GitHub Pages website as well as relevant
local checks. Record the URL, date, browser, and viewport used. Preserve failed
results and add retest results after fixes. Clearly state any checks that could
not be performed; never report unexecuted checks as passing.

## Photo viewer

Project photos and the featured Home photo open in a native dialog showing the
full image, a descriptive title, and factual project context. Support Close, Escape,
focus restoration, and Previous/Next controls on Projects. Preserve image links
as a fallback without JavaScript and allow modified clicks to open the image.

## Git and deployment

- Review the diff after each completed task, verify the change, and make a small
  commit with a clear message describing its purpose. Stage only task-related
  files; preserve unrelated user changes.
- Push completed commits to the configured GitHub remote. Obtain approval if
  required by the environment; report blocked pushes accurately.
- Never force-push, rewrite history, or use destructive resets. Undo a committed
  change with a revert commit when requested.
- Work incrementally over the project timeline. Never fabricate dates or commits
  to simulate work over multiple days.
- Deployment target: GitHub Pages, branch `main`, folder `/` (repository root).
  Check the existing configuration before changing deployment settings.
- Expected live URL: `https://louvansky.github.io/portfolio/`. Verify that it is
  published and working before describing deployment as successful.

## Documentation and completion

Keep `README.md` up to date with the project description, verified live website
URL, local viewing instructions (double-click `index.html`), and acknowledgments
for outside assets or sources.

When asked to prepare the final report, include repository and live links at the
top, a feature overview, actual challenges and solutions, one real Codex mistake
and its correction, and phone/laptop screenshots. Do not fabricate a mistake or
screenshots. Keep the report to one or two pages.

At the end of each task, briefly explain what changed, what was checked, any
remaining limitations, and commit/push status so the owner can review the work.
