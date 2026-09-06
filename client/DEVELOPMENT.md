# Development and security checks

Use Node.js 24.15 or later in the Node 24 line (Node 26 is also supported).

Run `npm ci`, then `npm start` to open the Vite development server on port 3000.
`npm test` runs UI regression tests once; `npm run test:watch` watches for changes.
`npm run build` generates the deployable site in `build/`, as before.
`npm run preview` serves that build for local verification.

The frontend uses Vite and Vitest in place of Create React App. JSX source files
use `.jsx`. The HTML entry point is `index.html` at the project root; other static
assets remain in `public/`. Build settings live in `vite.config.mjs`.
Vite's explicit `es2020` target replaces CRA's Browserslist-driven transpilation;
test any required legacy browser support before deploying. CRA-specific `eject`,
`PUBLIC_URL`, `REACT_APP_*`, and Jest CLI options are not supported. Use Vite's
`base` setting for subpath hosting and `import.meta.env.VITE_*` for future public
environment variables. No application environment-variable migration was needed.

The API remains at the repository root: `npm ci`, then `npm start`.

Dependency PRs run the build, tests, and npm audit in GitHub Actions. Dependabot
checks weekly and groups compatible routine updates and security updates. Security
updates are generated when patches are available, independently of the weekly
routine-update schedule. PRs require review and are not automatically merged.
