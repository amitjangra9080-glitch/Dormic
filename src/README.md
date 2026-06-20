# Dormic source structure

The live app still opens from the root HTML files, such as `index.html`, `whisper.html`, `more.html`, and `profile.html`.

This `src` folder is the organized home for shared code going forward:

- `firebase/` keeps Firebase setup and future database helpers.
- `styles/` keeps shared app styling used across pages.
- `scripts/` is for shared browser logic.
- `components/` is for repeated UI patterns before they are copied into pages.
- `pages/` documents page-level modules as the app is gradually cleaned up.
- `assets/` is for app-owned images, icons, and future 3D/map assets.

Do not move a public page here unless its URL is also preserved, because the live app currently depends on root-level HTML routes.
