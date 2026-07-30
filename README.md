# ⚡ NEXABANK / EPAM ASSIGNMENT 1
> **Audit-Grade Core Banking OS & Retail Customer Portal**

![NexaBank Banner](https://img.shields.io/badge/NexaBank-EPAM__Assignment__1-e8ff00?style=for-the-badge&labelColor=0a0a0a&color=e8ff00)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

NexaBank is a feature-complete, highly interactive digital retail banking portal built with **Next.js 16 (App Router)**, **React Context & useReducer**, and a high-contrast **Neo-Brutalist Swiss Grid design system**.

---

## 📸 Interface Previews

### 1. Authentication Portal (`/login`)
> **Secure hardcoded credentials gate featuring 1-click auto-fill demo access.**

```text
+-----------------------------------------------------------------------+
|  NEXABANK // CORE BANKING PORTAL                                      |
|  +-----------------------------------------------------------------+  |
|  | 🔑 DEMO LOGIN CREDENTIALS                                       |  |
|  | Email:    alex@nexabank.com                                     |  |
|  | Password: nexa1234                                            |  |
|  +-----------------------------------------------------------------+  |
|  Email Address:    [ alex@nexabank.com                           ] |  |
|  Security Password: [ •••••••••                                   ] |  |
|  [ AUTHENTICATE & ACCESS DASHBOARD ->                             ] |  |
+-----------------------------------------------------------------------+
```

### 2. Main Account Dashboard (`/dashboard`)
> **Real-time balance breakdown, quick payment actions, cashflow graphs, and debit card preview.**

```text
+-----------------------------------------------------------------------+
| OVERVIEW | ACCOUNT BALANCE: £14,850.45 [UK LIVE]                      |
+-----------------------------------------------------------------------+
| [ + Deposit ] [ - Withdraw ] [ 🚪 Logout ]                            |
|                                                                       |
| +-------------------------------------------------------------------+ |
| | PRIMARY BALANCE: £14,850.45          [ Current ] [ Savings ]    | |
| | Account: 8824-9102-4410              Sort Code: 40-11-20         | |
| +-------------------------------------------------------------------+ |
|                                                                       |
| [ 💸 Send Money ] [ 💳 Manage Cards ] [ 🧾 Transactions ] [ 📈 Stats ] |
|                                                                       |
| +-------------------------------------+ +---------------------------+ |
| | CASHFLOW (Income vs Expense)        | | NEXA BLACK DEBIT CARD     | |
| | Jul: Income £4,570 | Expense £2,125| | •••• •••• •••• 8842       | |
| +-------------------------------------+ +---------------------------+ |
+-----------------------------------------------------------------------+
```

### 3. Audit Transaction Ledger (`/transactions`)
> **Live search, category filtering, amount sorting, and 1-click CSV download.**

```text
+-----------------------------------------------------------------------+
| AUDIT LEDGER (10 ENTRIES)                                [ 📥 CSV ]   |
| Search: [ Whole Foods... ] | Type: [ All ] | Category: [ Groceries ]  |
+-----------------------------------------------------------------------+
| TRANSACTION           | CATEGORY   | DATE        | STATUS |    AMOUNT |
+-----------------------+------------+-------------+--------+-----------+
| Global Tech Salary    | Salary     | 28 Jul 2026 | COMPL  | +£4,250.00|
| Whole Foods Market    | Groceries  | 27 Jul 2026 | COMPL  |   -£142.85|
| British Gas Utility   | Utilities  | 26 Jul 2026 | COMPL  |    -£88.50|
| Sarah Jenkins         | Transfer   | 25 Jul 2026 | COMPL  |   -£250.00|
+-----------------------------------------------------------------------+
```

---

## 🔑 Demo Credentials

Access the protected dashboard using these credentials on the `/login` route:

| Field | Value |
| :--- | :--- |
| **Login URL** | `http://localhost:3000/login` |
| **Email** | `alex@nexabank.com` |
| **Password** | `nexa1234` |

---

## 🚀 Key Features & Capabilities

- 💰 **Account Balance & Cash Engine**: Instant deposit and cash withdrawal actions with real-time balance calculations.
- ⚡ **UK Faster Payments (`/transfers`)**: Peer-to-peer transfers featuring beneficiary quick-select pills, account validation, and two-step confirmation modals.
- 🧾 **Audit Transaction Ledger (`/transactions`)**: Search by merchant/title, filter by credit/debit or category, sort by date/amount, and export to `.csv`.
- 💳 **Card Security Rules (`/cards`)**: Live virtual card preview, instant card freezing overlay, and toggles for online, international, and contactless payments.
- 💾 **SSR-Safe LocalStorage**: Persists balance updates, transactions, and card toggles across browser refreshes with a 1-click **Reset Demo Data** option.
- ♿ **Strict W3C Compliance**: Idempotent inputs via React `useId()`, semantic table structures (`<tr>` in `<tbody>`), and modals rendered via React `createPortal(..., document.body)`.

---

## 🏗️ Architecture & Project Structure

```text
EPAM_ASSIGNMENT_1/
├── src/
│   ├── app/
│   │   ├── (dashboard)/            # Protected route group
│   │   │   ├── dashboard/page.js   # Main overview dashboard
│   │   │   ├── transactions/page.js# Audit ledger search & CSV export
│   │   │   ├── transfers/page.js   # UK Faster Payments form
│   │   │   ├── cards/page.js       # Card freeze & rule controls
│   │   │   ├── analytics/page.js   # Cashflow & expense distribution
│   │   │   └── settings/page.js    # Profile settings & demo reset
│   │   ├── globals.css             # Tailwind v4 styles & hard shadows
│   │   ├── layout.js               # Root layout & Google Fonts
│   │   ├── loading.js              # Global loading fallback
│   │   ├── login/page.js           # Authentication portal
│   │   ├── not-found.js            # Custom 404 page
│   │   └── page.js                 # Redirects / -> /dashboard
│   ├── components/
│   │   ├── cards/                  # BankCard, CardControls, CardSecuritySettings
│   │   ├── dashboard/              # BalanceCard, QuickActions, SpendingOverview
│   │   ├── layout/                 # AppSidebar, DashboardHeader, DashboardShell
│   │   ├── transactions/           # TransactionList, TransactionRow, TransactionSearch
│   │   ├── transfers/              # TransferForm, BeneficiarySelector, Modals
│   │   └── ui/                     # Button, Card, Input, Modal, Badge, Toggle, Toast
│   ├── context/                    # BankingContext & Reducer exporters
│   ├── data/                       # Customer, Accounts, Transactions, Beneficiaries mock datasets
│   ├── features/banking/           # BankingProvider, Reducer, Actions, useBanking hook
│   ├── hooks/                      # useLocalStorage, useMediaQuery, useModal
│   └── lib/                        # Formatters (GBP), Validators, Helpers, Constants
├── jsconfig.json                   # Path aliases (@/* -> ./src/*)
├── package.json                    # Project dependencies
└── README.md                       # Project documentation
```

---

## 💻 Installation & Setup

1. **Clone or Open Repository**:
   ```bash
   cd /Users/ajiteshvishwakarma/Downloads/EPAM_ASSIGNMENT_1
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Verification**:
   ```bash
   npm run lint
   npm run build
   ```

---

## 🎨 Design System Specifications

- **Background**: Warm Paper (`#f4f1ea`)
- **Borders & Shadows**: 3px/4px Solid Black Ink (`#0a0a0a`) with 0-blur hard offset shadows (`.shadow-hard-lg`)
- **Accent Highlight**: Electric Acid Yellow (`#e8ff00`)
- **Typography**: Google Fonts **Archivo** (Display Headlines) + **JetBrains Mono** (Tabular Numerals `.tnum` & Labels)

---

## 📄 License & Academic Note
Built as an educational assignment project (**EPAM Assignment 1**). All bank names, customer profiles, and transactional data are entirely fictional.
