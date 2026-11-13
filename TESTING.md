# Website test plan

## Execution record

- Target: https://louvansky.github.io/portfolio/
- Status: live browser tests have not been run.
- For every execution, record the date, browser/version, viewport, actual observations, and Pass or Fail.
- Use phone viewport 390 × 844 and laptop viewport 1440 × 900 unless a case specifies otherwise. Also check 320px width for overflow.
- Preserve failures and append retest entries after fixes; do not overwrite failed results.

## Test cases

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Home (index.html): Navigation | Open this page on the live site. Follow Home, About Me, Projects, Skills, and Contact individually, returning to the starting page each time. Also follow the LB home link. | All five destinations and the brand link open the correct pages; the current page is identified. | Not run |
| T2 | Home (index.html): Responsive layout | Open this page at the phone and laptop sizes, then 320px width. Scroll through the entire page. | Readable content, no clipping or horizontal scrolling, and correctly sized photos where present. | Not run |
| T3 | Home (index.html): Keyboard | Reload this page. Use Tab and Shift+Tab through every link and control. Use Enter on each link and Enter/Space on buttons. Activate the skip link. | Visible focus, logical order, no traps, working links and controls; skip link reaches main content. | Not run |
| T4 | Home (index.html): Lighthouse accessibility | Open this page in Chrome DevTools. Run Lighthouse Accessibility at mobile and desktop settings. Record both scores and any issues. | Each score is at least 90; any issues are recorded for correction. | Not run |
| T5 | About Me (about.html): Navigation | Open this page on the live site. Follow Home, About Me, Projects, Skills, and Contact individually, returning to the starting page each time. Also follow the LB home link. | All five destinations and the brand link open the correct pages; the current page is identified. | Not run |
| T6 | About Me (about.html): Responsive layout | Open this page at the phone and laptop sizes, then 320px width. Scroll through the entire page. | Readable content, no clipping or horizontal scrolling, and correctly sized photos where present. | Not run |
| T7 | About Me (about.html): Keyboard | Reload this page. Use Tab and Shift+Tab through every link and control. Use Enter on each link and Enter/Space on buttons. Activate the skip link. | Visible focus, logical order, no traps, working links and controls; skip link reaches main content. | Not run |
| T8 | About Me (about.html): Lighthouse accessibility | Open this page in Chrome DevTools. Run Lighthouse Accessibility at mobile and desktop settings. Record both scores and any issues. | Each score is at least 90; any issues are recorded for correction. | Not run |
| T9 | Projects (projects.html): Navigation | Open this page on the live site. Follow Home, About Me, Projects, Skills, and Contact individually, returning to the starting page each time. Also follow the LB home link. | All five destinations and the brand link open the correct pages; the current page is identified. | Not run |
| T10 | Projects (projects.html): Responsive layout | Open this page at the phone and laptop sizes, then 320px width. Scroll through the entire page. | Readable content, no clipping or horizontal scrolling, and correctly sized photos where present. | Not run |
| T11 | Projects (projects.html): Keyboard | Reload this page. Use Tab and Shift+Tab through every link and control. Use Enter on each link and Enter/Space on buttons. Activate the skip link. | Visible focus, logical order, no traps, working links and controls; skip link reaches main content. | Not run |
| T12 | Projects (projects.html): Lighthouse accessibility | Open this page in Chrome DevTools. Run Lighthouse Accessibility at mobile and desktop settings. Record both scores and any issues. | Each score is at least 90; any issues are recorded for correction. | Not run |
| T13 | Skills (skills.html): Navigation | Open this page on the live site. Follow Home, About Me, Projects, Skills, and Contact individually, returning to the starting page each time. Also follow the LB home link. | All five destinations and the brand link open the correct pages; the current page is identified. | Not run |
| T14 | Skills (skills.html): Responsive layout | Open this page at the phone and laptop sizes, then 320px width. Scroll through the entire page. | Readable content, no clipping or horizontal scrolling, and correctly sized photos where present. | Not run |
| T15 | Skills (skills.html): Keyboard | Reload this page. Use Tab and Shift+Tab through every link and control. Use Enter on each link and Enter/Space on buttons. Activate the skip link. | Visible focus, logical order, no traps, working links and controls; skip link reaches main content. | Not run |
| T16 | Skills (skills.html): Lighthouse accessibility | Open this page in Chrome DevTools. Run Lighthouse Accessibility at mobile and desktop settings. Record both scores and any issues. | Each score is at least 90; any issues are recorded for correction. | Not run |
| T17 | Contact (contact.html): Navigation | Open this page on the live site. Follow Home, About Me, Projects, Skills, and Contact individually, returning to the starting page each time. Also follow the LB home link. | All five destinations and the brand link open the correct pages; the current page is identified. | Not run |
| T18 | Contact (contact.html): Responsive layout | Open this page at the phone and laptop sizes, then 320px width. Scroll through the entire page. | Readable content, no clipping or horizontal scrolling, and correctly sized photos where present. | Not run |
| T19 | Contact (contact.html): Keyboard | Reload this page. Use Tab and Shift+Tab through every link and control. Use Enter on each link and Enter/Space on buttons. Activate the skip link. | Visible focus, logical order, no traps, working links and controls; skip link reaches main content. | Not run |
| T20 | Contact (contact.html): Lighthouse accessibility | Open this page in Chrome DevTools. Run Lighthouse Accessibility at mobile and desktop settings. Record both scores and any issues. | Each score is at least 90; any issues are recorded for correction. | Not run |
| T21 | Mobile menu on all five pages | At phone size, activate Menu with mouse and keyboard. Close it with the button and Escape; reopen and follow a link. Tab while it is closed. | Menu opens/closes, aria-expanded matches visibility, hidden links are not focusable, Escape returns focus to Menu, and navigation works. | Not run |
| T22 | Navigation resize on all five pages | Open the mobile menu, resize to laptop, then back to phone. Repeat starting with menu closed. | Laptop navigation is visible; phone menu resets closed with accurate aria-expanded. | Not run |
| T23 | Theme toggle on all five pages | Toggle Dark mode using click and keyboard. Navigate to each page and reload. Switch back to light. | Both themes are readable, aria-pressed matches the mode, and preference persists when storage is allowed. | Not run |
| T24 | Storage unavailable | Block site storage in browser settings; reload each page and toggle the theme. | Theme toggle still works without an uncaught storage error. | Not run |
| T25 | All seven project images | On Projects, inspect all seven photos and captions at phone/laptop sizes. Activate each photo link. | Photos load without distortion, captions match, and links open the full photo. | Not run |
| T26 | LinkedIn links | Follow every LinkedIn link on Home, About Me, Skills, and Contact. | Each opens Louvansky Benjamin’s supplied LinkedIn profile; no form claims to send a message. | Not run |
| T27 | JavaScript unavailable | Disable JavaScript and reload every page at phone/laptop sizes. Follow all navigation links. | All content and navigation remain available; nonfunctional menu/theme buttons are hidden. | Not run |
| T28 | Console errors | With JavaScript enabled, open DevTools Console on each page, reload, and use both features. | No uncaught JavaScript errors or missing local asset errors. | Not run |
| T29 | Direct local opening | Double-click index.html, navigate through all five pages, open all image links, and use menu/theme controls. | The static site works without a server or build step. | Not run |

No contact form is included, so form input validation cases are not applicable.

## Result log

| Test ID | Date | URL | Browser/version | Viewport | Pass/Fail | Actual observation / retest reference |
| --- | --- | --- | --- | --- | --- | --- |

No live-browser executions recorded yet.

## Deployment verification — October 22, 2026

Target: https://louvansky.github.io/portfolio/

Method: Python HTTP requests and byte-for-byte comparison against repository
files. Browser/version and viewport: not applicable (HTTP checks only).

| Check | Actual result |
| --- | --- |
| Home, About Me, Projects, Skills, Contact | Pass: all five returned HTTP 200 and matched local files. |
| Shared CSS and JavaScript | Pass: both returned HTTP 200 and matched local files. |
| All seven project photos | Pass: all returned HTTP 200 and matched local files. |
| Local navigation and fragment targets | Pass: every local destination exists and each fragment points to an existing ID. |
| Page structure | Pass: each page has one h1, unique IDs, the same five navigation destinations, and one current-page indicator. |
| Image sizes | Pass: every photo is below 500,000 bytes. |

These checks verify publication and source structure. They do not establish
browser interaction, visual layout, keyboard behavior, rendered image appearance,
console behavior, external LinkedIn availability, or Lighthouse scores. T1–T29
remain Not run until their browser steps are executed. No browser automation tool
or Lighthouse runner is available in this session.

## Animation checks added November 12, 2026

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T30 | Photo animation | On Projects, load the page and hover or keyboard-focus each of the seven photo links. Open each link. | Photos enter gently, lift on hover/focus, and still open normally. | Not run |
| T31 | Background animation and pause | On each page in both themes, observe symbols and wires; activate Pause animations with mouse and keyboard, then Resume animations. | Slow drift and glow stop and resume; button text and aria-pressed match the state. | Not run |
| T32 | Reduced motion | Enable the device/browser reduced-motion preference and reload all five pages. Hover/focus photo links. | No entrance, drift, glow, or zoom animation; content and links remain available. | Not run |
| T33 | Animation layout | View all five pages at 390 × 844 and 1440 × 900 while animations run. | No new horizontal scrolling, obscured controls, or unreadable text. | Not run |

## Link transition check

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T34 | Link and control feedback | On every page in both themes, hover and keyboard-focus each navigation link, text link, brand link, button, and photo link. Follow each link. Repeat with Pause animations and reduced motion enabled. | Highlight and focus feedback remain visible; navigation underline expands, buttons lift gently, and links open normally. Paused/reduced motion removes movement and transitions. No layout shift or overflow. | Not run |

## Control-panel redesign verification — November 12, 2026

Environment: local `file://` pages in Headless Chrome 156.0.0.0 on macOS.
Viewports: 390 × 1000 and 1440 × 1000. Both dark and light themes were checked
on all five pages using Chrome's device-metrics override (20 combinations).

| Check | Actual result |
| --- | --- |
| Page width | Pass: document width stayed within the viewport in all 20 combinations. |
| Photo loading | Pass: all photos decoded successfully after loading offscreen images. |
| Mobile menu | Pass: direct button activation opened the menu; keyboard Escape closed it and returned focus to Menu on all five pages. Full Tab/Enter traversal remains pending. |
| Animation control | Pass: Pause and Resume updated the paused state on all five pages at both sizes. |
| Skip-link focus | Pass: first Tab reached the skip link on all five pages at both sizes. |
| Home appearance | Pass: reviewed phone and desktop screenshots in both themes; heading, photo panel, and controls fit. |
| Source structure | Pass: five-page navigation, one h1 per page, unique IDs, valid local/fragment links, image descriptions, and image sizes below 500 KB. |

An initial 390px screenshot was clipped because Chrome's command-line window had
an actual 500px layout viewport. Device-metrics override confirmed a true 390px
layout fits without overflow. An initial photo check encountered offscreen lazy
images; rerunning after explicitly loading them passed. These are test-harness
corrections, not evidence that interactive browser cases were fully executed.

This record supplements prior results. Full live-site T1–T34, Lighthouse, full
keyboard traversal, reduced-motion behavior, and console auditing remain pending.
Earlier notes about browser tooling being unavailable describe those earlier
sessions; this session used the installed Chrome without installing packages.

## Photo viewer test cases

The photo-viewer behavior supersedes the older expectation that a normal photo
click navigates directly to an image. Without JavaScript, image links still work.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T35 | Photo descriptions | On Home and Projects, open each photo using click and Enter at phone/laptop sizes in both themes. | Large photo, matching title, and a unique factual description appear inside a dialog. | Not run on live site |
| T36 | Photo browsing | On Projects, use Previous/Next and left/right arrow keys, including at the first and last photo. | Viewer cycles through all seven photos with correct titles, descriptions, and count. | Not run on live site |
| T37 | Viewer close and focus | Open each photo; close with Close, Escape, and a click outside the dialog. Tab within the open viewer. | Focus stays inside the open dialog, closing restores focus to the original photo link, background scrolling resumes. | Not run on live site |
| T38 | Photo fallback | Disable JavaScript; open each photo. Re-enable it and use a modified click on a photo. | Original JPEG opens normally through the relative image link. | Not run |

### Local photo-viewer verification — November 12, 2026

Chrome 156.0.0.0, local file URLs, 390 × 1000 and 1440 × 1000:

- Pass: all eight photo entry points opened the dialog with the matching title
  and a nonempty project description; viewer width fit both viewports.
- Pass: Next cycled to the expected photo, including wrapping at the end.
- Pass: Escape closed every dialog and focus returned to the opening photo link.
- Pass: all five pages still fit both viewports in light/dark themes; local images
  loaded, and existing menu, pause/resume, and initial skip-link checks passed.
- Pending: live-site execution, full dialog Tab traversal, Previous/arrow-key
  navigation, backdrop click, modified-click fallback, and visual modal review.

The page-image check initially included the dialog's intentionally empty image
placeholder. The check was corrected to inspect only images with a source; it
then passed. No unloaded page photo was concealed or removed to pass the check.
