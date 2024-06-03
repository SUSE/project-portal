## 📝 Adding new project/product

### Opening an Issue
To add your project, create an issue at https://github.com/SUSE/project-portal/issues/new/choose with the template provided.

### Opening a PR
To add new content to the list of projects/products, please follow the instructions below:
- Duplicate one of the items array under `/db/projects.ts` and fill it with your information.
- Create a new PR with your changes, one of the repository owners will review it before merging.


## 💠 Getting Started

For development, please run the following commands:

```bash
# This will create an env file with all the things needed for local development (rewrites paths, etc.)
cp .template.env .env.development.local
```

\*Requires [Node](https://nodejs.org/en/) installed.

```bash
npm install
# then:
npm run dev
# or
yarn dev
```

Project configuration can be found under `/db/project-info.ts`. You'll need to fill it with your information and the changes would be reflected (live reload) at http://localhost:3000

---

## Build for production

You can serve the applications a Server-Side render with `npm start`. This will build the Production Ready application.

If you want to generate static files to serve as Static Site on Github Pages for example you should run `npm run static`. This will generate an `/out` folder with all the static files.
