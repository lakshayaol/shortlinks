# 🔗 ShortLinks — Instant URL Shortener

ShortLinks is a fast, user-friendly, and privacy-focused URL shortener built with **Next.js** and **Tailwind CSS**. No accounts, no subscriptions—just short and snappy URLs at your fingertips.

---

## 🌟 Features

- 🔐 **No login required** — Just paste and shorten.
- ⚡ **Fast** and lightweight with modern frontend architecture.
- 📱 **Fully responsive** — Looks great on mobile, tablet, and desktop.
- 🎯 **Custom short URLs** — Choose your own suffix.
- 🌿 Clean UI using **Tailwind CSS**.
- 🚀 Built with **Next.js 14 App Router** for performance.

---

## 📁 Project Structure

```
.
├── app/
│   ├── page.js              # Home Page
│   ├── shorten/page.js      # URL Shortener Interface
│   ├── about/page.js        # About Section
│   ├── contact/page.js      # Contact Info
│
├── components/
│   └── Navbar.js            # Responsive Navbar
│
├── public/
│   ├── OfficeVector.jpg     # Home Page Illustration
│   ├── Happy developer.jpg  # About Page Illustration
│   ├── linkedin.svg         # LinkedIn Icon
│   ├── Github.svg           # GitHub Icon
│
├── styles/
│   └── globals.css          # Tailwind CSS Imports
│
├── pages/api/generate.js    # (Sample backend API endpoint)
├── README.md
└── package.json
```

---

## 🛠️ Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Vercel Hosting (Recommended)**
- `fetch` API for simple backend interaction

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/lakshayaol/shortlinks.git
cd shortlinks
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_HOST=http://localhost:3000
```

> You can replace this URL with your deployed domain when hosting the app.

### 4. Run the Development Server

```bash
npm run dev
```

Now, open your browser and visit:  
➡️ **http://localhost:3000**

---

## 🧠 How It Works

1. The user enters a long URL and an optional custom short alias.
2. A `POST` request is made to the `/api/generate` endpoint.
3. The backend maps the long URL to the short one.
4. The newly generated link is returned and displayed for the user to copy or open.

> The backend logic (e.g., saving to database, handling redirects) should be implemented in `/api/generate.js`.

---

## 👨‍💻 Developer

Made with ❤️ by **Lakshay Aol**

- 💼 [LinkedIn](https://www.linkedin.com/in/lakshay-aol/)
- 🛠️ [GitHub](https://github.com/lakshayaol)

---

## 🧾 License

This project is open-source and available under the **[MIT License](LICENSE)**.