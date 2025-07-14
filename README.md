# 💸 Finlyzer — Finance Visualizer Web App

**Finlyzer** = *Finance* + *Visualizer* — A smart personal finance manager that helps you track expenses, set budgets, receive monthly reports, and get alerts when your spending exceeds safe limits — all through a modern, secure, and AI-powered interface.

---

## 🚀 Tech Stack

| Area         | Tech Used                                                                 |
|--------------|---------------------------------------------------------------------------|
| Frontend     | **React.js**, **Next.js 15**, **Tailwind CSS**, **Shadcn UI**             |
| Backend      | **Node.js**, **Express.js**, **Prisma ORM**                               |
| Database     | **Supabase** (PostgreSQL)                                                 |
| Auth         | **Clerk**                                                                 |
| Emails       | **Resend**, **Inngest Cloud** (for scheduling and email automation)       |
| AI Features  | **Gemini 1.5 Flash** (AI-powered receipt scanner and auto-fill)           |
| Security     | **Arcjet** (bot protection, rate-limiting, email validation)              |
| Workflows    | **Inngest Cloud** (serverless event workflows, cron jobs, queues)         |
| Utilities    | **Random User API** (for profile images)                                  |

---

## ✨ Features

### 📊 Dashboard
- Visualize all your transactions and expenses in a clean and intuitive UI.
- Get a categorized breakdown of your spending patterns.

### 📅 Recurring Transaction Detection
- Automatically detects and tracks recurring expenses like subscriptions, bills, etc.

### 🧠 AI Receipt Scanner
- Upload a receipt image and auto-extract expense details using **Gemini 1.5 Flash**.
- Automatically populates data into your transaction records.

### ⏱️ Event-Driven Workflows with Inngest Cloud
- **Inngest Cloud** powers all scheduled and background workflows:
  - Monthly report generation
  - Budget alert emails
  - Recurring transaction processing
  - Cron jobs (e.g., run tasks every 1st of the month)
- Easily scalable and serverless — no manual task scheduling required.

### 📬 Monthly Email Reports
- Get a personalized monthly report of your finances via email using **Resend** + **Inngest Cloud**.

### 🔔 Budget Alerts
- Set a monthly budget and receive an email alert if your spending exceeds **85%** of the limit.

### 🛡️ Security First
- **Arcjet** protects your app with:
  - Bot detection
  - Rate limiting
  - Email validation
  - Request abuse prevention

### 👤 Authentication
- User sign-up/sign-in using **Clerk**, with support for modern auth flows.

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/finlyzer.git
   cd finlyzer
2. Install dependencies
   ```bash
   npm install

3. Configure environment variables
    ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_key
   DATABASE_URL=your_supabase_prisma_connection_url
   RESEND_API_KEY=your_resend_api_key
   ARCJET_SECRET=your_arcjet_secret
   INNGEST_EVENT_KEY=your_inngest_event_key
    GEMINI_API_KEY=your_GEMINI_API_KEY
  
4. Push Prisma schema
   ```bash
    npx prisma generate
    npx prisma db push

5. Run the app locally
    ```bash
   npm run dev
👨‍💻 Author- 
Harikesh Tripathi
```bash
📧 harikesht845@gmail.com
🐙 GitHub: @hari659tri
 



