## Directory Structure

```
app/              - Next.js App Router directory
|-- api/         - API routes
|   |-- auth/    - Authentication endpoints
|   |-- patients/ - Patient management endpoints
|   |-- appointments/ - Appointment management endpoints
|   |-- medical-records/ - Medical records endpoints
|-- auth/        - Authentication pages
|-- dashboard/   - Admin and user dashboards
|-- appointments/ - Appointment management pages
|-- patients/    - Patient management pages
|-- medical-records/ - Medical records pages
```

## Key Files

```
lib/firebase.ts        - Firebase client configuration
lib/firebase-admin.ts  - Firebase admin initialization
context/AuthContext.tsx - Authentication context for React
```

## Deployment

### Pre-requisites

- Firebase account (for authentication and database)
- Vercel account (for hosting)

## Folder Structure Details

- `app/` - Next.js App Router components
- `lib/` - Utility functions and services
- `components/` - Reusable React components
- `context/` - React context providers
- `hooks/` - Custom React hooks
- `server/` - Express proxy server
