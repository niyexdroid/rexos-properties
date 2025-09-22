# Rexos Properties

A modern real estate website built with Next.js (App Router) and TypeScript for Rexos Properties. It features property listings, detailed property pages with maps, breadcrumbs, a contact form, and a simple admin dashboard backed by JSON files.

## Features

- Responsive landing page with property search and featured listings
- Properties listing with full-width search (desktop) and mobile-friendly design
- Dynamic property detail pages: hero, gallery (hover zoom), description, amenities, embedded Google Map
- Breadcrumbs across pages for easy navigation
- Contact page posting messages to a JSON-backed store
- Contact page with enhanced form (subject, inquiry type, validation, toast feedback)
- Admin login and dashboard to Create/Read/Update/Delete properties and view/delete messages
- Admin Settings tab to change the stored admin password (file-based hashed storage)
- No pricing is displayed per project requirements

## Tech Stack

- Next.js 15 (App Router) with TypeScript
- React 19
- Tailwind CSS 4
- File-based JSON data store for properties and messages

## Project Structure

- `src/app/` – App Router pages and API routes
- `src/components/` – Reusable UI components (e.g., Breadcrumbs, PropertyCard)
- `src/data/properties.ts` – Data helpers for reading/writing `data/properties.json`
- `data/properties.json` – Property records
- `data/messages.json` – Contact messages
- `middleware.ts` – Simple session protection for admin

## Routes

- `/` – Homepage
- `/about` – About page
- `/properties` – Properties listing with search
- `/properties/[slug]` – Property details with gallery and map
- `/contact` – Contact form
- `/admin/login` – Admin login
- `/admin` – Admin dashboard (CRUD for properties, view/delete messages)
- `/admin` Settings tab – Change admin password

## API Endpoints

- `GET /api/auth/[...nextauth]` – Auth.js (NextAuth) route (credentials provider)
- `GET /api/properties` – List properties; `POST` to create (admin)
- `GET /api/properties/[slug]` – Get a single property; `PUT`/`DELETE` (admin)
- `GET /api/messages` – List messages (admin); `POST` to submit a message
- `DELETE /api/messages/[id]` – Delete a message (admin)
- `GET /api/admin/password` – Get admin username (auth required)
- `POST /api/admin/password` – Change admin password (auth required; body: { currentPassword, newPassword })

## Getting Started

1. Install dependencies

   - npm install

2. Create a `.env.local` (or use the example below)

   - ADMIN_USER=admin
   - ADMIN_PASS=password
   - AUTH_SECRET=paste-generated-secret-here

3. Start the dev server
   - npm run dev

Open http://localhost:3000 and explore.

## Build

- Production build: `npm run build`
- Start production server: `npm run start`

## Notes

- Authentication uses Auth.js (NextAuth) with a credentials provider backed by the file-based `data/admin.json`. JWT session strategy chosen for simplicity. For production: (1) migrate to a real database (Postgres), (2) use Argon2id/bcrypt, (3) add rate limiting & audit logging, (4) rotate `AUTH_SECRET` via a secret manager.
- Required env var: `AUTH_SECRET` (generate with `openssl rand -base64 32`). `ADMIN_USER` / `ADMIN_PASS` seed the initial admin record if the JSON file is absent.
- Properties and messages are stored in local JSON files; edit via Admin or directly in `data/` (replace with a database for production scale & concurrency safety).
- Prices are intentionally omitted across the site per requirements.
- Password changes update `data/admin.json` (PBKDF2). Replace with stronger hashing + per-user records in production.
