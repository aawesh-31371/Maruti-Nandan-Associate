# Maruti Nandan Associates

A responsive construction-company website and lightweight admin panel built with React, Vite, Tailwind CSS, Framer Motion, and Swiper.

## Features

- Public pages for home, about, services, projects, project details, gallery, and contact
- Project search, category/status filters, sorting, and image lightbox
- Contact inquiries stored in the browser
- Protected admin dashboard with project CRUD, gallery management, and inquiry handling
- Responsive navigation, route-level code splitting, page transitions, and custom 404 page

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Admin access

Open `/admin/login` and use the demo credentials:

- Username: `admin`
- Password: `123456`

The current project uses `localStorage`, so projects, inquiries, and the admin session are local to a browser. For a public deployment, replace the storage and demo authentication services with a secured backend and database.
