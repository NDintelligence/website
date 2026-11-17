# MiS website (v1.4, aligned with Company Profile v1.2)

Static website: upload the whole folder to any web host (public_html / www). The home page is `index.html`.

## Pages
- index.html – Home
- services.html – Services (five advisory packages, control solutions, market partner)
- projects.html – MiS references (MSSP Lopburi, Birla Carbon Thailand)
- about.html – About, team, team experience, contact
- news.html – News list · post.html – single news post

## Add or edit news
1. Put the photo in `images/` (JPG, about 1600 px wide).
2. Open `js/news-data.js` and add a new block at the top of the list (copy an existing one and edit it). Category is "Company" or "Market".
3. Upload the two changed files to the host. The home page shows the three newest posts automatically.

## Change text or photos
Edit the .html files directly. The header and footer are repeated in every .html file, so change them in all six. Photos are in `images/`; keep the same file name to replace a photo everywhere. Colours and layout are in `css/style.css`.

## Contact form
The form opens the visitor's email app addressed to info@mi-energies.com. To receive messages directly from the website, connect the form to a form service or the host's mail script.
