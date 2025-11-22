AI Email Assistant

A small Node.js/Express project that integrates OpenAI to assist with composing or processing email content and includes an email service for sending messages. The repository contains a simple API structure under `src/` that separates configuration, controllers, routes and services.

**Project Structure**
- `server.js`: Application entry point (starts the server).
- `package.json`: Project metadata and dependencies.
- `src/`
  - `app.js`: Express application setup (middleware, route mounting).
  - `config/`
    - `openai.config.js`: OpenAI client/configuration helper.
  - `controllers/`
    - `ai.controllers.js`: Request handlers for AI-related operations (receives HTTP requests, calls services, returns responses).
  - `routes/`
    - `ai.routes.js`: Route definitions for AI endpoints (connects URL paths to controller functions).
  - `services/`
    - `ai.services.js`: Business logic and wrappers around the OpenAI API (prompts, calls, formatting results).
    - `email.service.js`: Email sending logic (SMTP or mail provider integration).

**What each file is responsible for**
- `src/app.js`: Bootstraps the Express app, attaches middleware (JSON parsing, CORS, logging, etc.) and mounts routes exported from `src/routes/ai.routes.js`.
- `src/config/openai.config.js`: Central place to configure and export an OpenAI client instance or configuration values used by `ai.services.js`.
- `src/controllers/ai.controllers.js`: Receives HTTP requests (for example: generating an email body, rewriting text, or sending mail), validates input, calls `ai.services.js` and `email.service.js` as needed, and sends HTTP responses.
- `src/routes/ai.routes.js`: Declares the HTTP endpoints and maps them to the corresponding controller methods. Check this file for the exact path names and HTTP verbs used by the API.
- `src/services/ai.services.js`: Encapsulates calls to the OpenAI API (prompt construction, API call handling, and response normalization).
- `src/services/email.service.js`: Encapsulates sending emails — likely using `nodemailer` or another SMTP/provider library. Look here to see how email sending is configured and which environment variables are required.

**Environment / Setup**
- Requirements: Node.js (v14+ recommended) and npm.
- Typical environment variables the project will need (check the code in `src/config/openai.config.js` and `src/services/email.service.js` for exact names):
  - `OPENAI_API_KEY`: OpenAI API key.
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: SMTP provider credentials (if using SMTP).
  - `EMAIL_FROM`: Default "from" address for outgoing emails.

**Install & Run**
- Install dependencies:

```powershell
cd "c:\Users\LENOVO\Desktop\ai-email assistant project"; npm install
```

- Start the server (if `package.json` has a `start` script) or run directly with Node:

```powershell
npm start
# or
node server.js
```

**API Notes**
- For exact endpoints and payloads, open `src/routes/ai.routes.js` and `src/controllers/ai.controllers.js`.
- Typical endpoints in this kind of project often include routes to generate or rewrite email content and a route to send email. Example endpoints (verify exact paths in code):
  - `POST /api/ai/generate` — generate or rewrite email content using OpenAI
  - `POST /api/ai/send` — send an email using the configured email service

**Development / Testing Tips**
- Add environment variables locally using a `.env` file (and add `.env` to `.gitignore`).
- To test the OpenAI integration safely, limit the number of requests and log request/response payloads for debugging only (avoid committing keys).
- If `nodemailer` (or similar) is used, consider using a test SMTP service like Mailtrap for development.

**Next Steps (suggested)**
- Verify exact environment variable names by inspecting `src/config/openai.config.js` and `src/services/email.service.js`.
- Add example requests (curl or Postman collection) showing how to call the AI endpoints.
- Add a simple README section with example environment values (with placeholders) to make onboarding easier.

If you want, I can:
- Extract exact endpoint paths and example request/response bodies from `src/routes/ai.routes.js` and `src/controllers/ai.controllers.js` and add them to this `README.md`.
- Add a `.env.example` file with the precise environment variable names used in the code.

Generated from the repository structure found under `src/`.