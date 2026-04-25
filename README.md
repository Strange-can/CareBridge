# CareBridge 💚

> *Healthcare for everyone — regardless of ability to pay*

![Cover Image](cover.png)

---

## 🎯 What Is CareBridge?

A **donation platform** connecting patients in need, verified hospitals, and donors worldwide.

**How it works:**

1. Hospital treats patient for **free** 🆓
2. Hospital uploads bill (medicine names + cost + hospital stamp) — **no patient photos or names**
3. Donation request goes public 🌐
4. Donor pays hospital directly 💲
5. Patient gets healthy ✅

**No money? No problem. No privacy violation? Guaranteed.**

---

## 📚 Documentation

For **detailed scenarios** (patient direct, hospital flow, donor verification), see:  
👉 [docs/How-It-Works.md](docs/How-It-Works.md)

---

## 🧱 Tech Stack

| Layer | Technology |
| :--- | :--- |
| Frontend | 11ty + Pico.css + HTMX |
| Backend | FastAPI (Python) + SQLite |
| Deployment | Netlify (frontend) + Render (backend) |

> Lightweight, fast, and works on low-end devices.

---

## What Changed

| Old | New |
| :--- | :--- |
| Flask | FastAPI |
| Preact/Vanilla HTML | 11ty |
| Single repo structure | Split `frontend/` + `backend/` |
| `make.py` | `pnpm dev` commands |

Ready to ship 🚀

---

## 💻 Run Locally

We use **pnpm** for the frontend and **pip** for the backend.

**Frontend:**
```bash
cd frontend
pnpm install
pnpm dev
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**Voilà! ⚡**

---

## 📁 Project Structure

```bash
CareBridge/
├── frontend/
│   ├── _components/
│   ├── content/
│   ├── css/
│   ├── _data/
│   ├── fonts/
│   ├── icons/
│   ├── _includes/
│   ├── js/
│   ├── node_modules/
│   ├── package.json
│   └── pnpm-lock.yaml
├── backend/
│ ├── main.py
│ ├── database.db 
│ └── requirements.txt
├── docs/
│ ├── How-It-Works.md
│ └── CONTRIBUTING.md
└── README.md
```

---

## 🤝 Contributing

We're hackathon-mode 🚀 — all help welcome!

See 👉 [Contributing](docs/CONTRIBUTING.md) for more details  

---

## 🌐 Related

- [UNSDG 3 — Good Health & Well-being](https://www.un.org/sustainabledevelopment/health/)

---

## 📄 License

MIT — Build. Help. Ship.

---

**Built with ❤️ for** [GNEC Hackathon 2026 Spring](https://gnec-hackathon-2026-spring.devpost.com/) **— and for everyone who needs healthcare but can't afford it.**
