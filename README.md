# 💰 CareBridge — Donation Platform

> *Healthcare for everyone — online, offline, or in need*

![Cover Image](cover.png)

---

## 🎯 What This Repo Is

The **donation platform** for CareBridge — a full-stack web app connecting **patients in need**, **verified hospitals**, and **donors worldwide**.

Part of a two-part system:
- 📡 **LoRaButton** — physical emergency button (no internet required)
- 💰 **This repo** — donation platform (handles requests, verification, and payments)

---

## ✨ Why This Stack?

We chose **lightweight, no-build, production-ready** tools that work on **low-end devices** in low-income regions:

| Layer | Technology | Why |
| :--- | :--- | :--- |
| **Frontend** | HTMX + Pico.css + helpers.js | No build step. Ships as HTML. Fast on any device. |
| **Backend** | Python + Flask + SQLite | Simple, lightweight, easy to iterate. |
| **Deployment** | Anywhere (Render, Fly.io, PythonAnywhere, VPS) | No special requirements. |

> 🧠 **No React. No Webpack. No Node_modules hell.** Just HTML that feels dynamic.

---

## 🚀 How It Works

### Flow Overview

**Patient → Hospital → Donation Request → Platform → Donor → Payment → Thank You**

### Detailed Steps (For Hospitals)

| Step | Action |
| :--- | :--- |
| 1 | Hospital treats patient for **free** 🆓 |
| 2 | Hospital generates anonymous case ID (e.g., CARE-2025-0042) |
| 3 | Hospital uploads: bill + prescription + hospital verification letter (no patient photos) 🧾 |
| 4 | Hospital adds text description (age, condition, treatment needed — no name or face) |
| 5 | Donation request goes public 🌐 |
| 6 | Donor donates based on verifiable documents, not pity photos 💲 |

**Note:** The platform aligns with **Medical privacy (HIPAA, GDPR, local laws)** and won't break any of it's rules

### 🚨 HELP! Medicine in Need

**Patient posts** → Donor contacts → Patient sends pharmacy bill photo → Donor pays patient → Patient buys medicine.

> **No bill? No payment. Fake bill? Police involved. Donor has full legal right.**

---

## 💻 Run Locally

1. Make sure you have **Python 3.11+** installed
2. Download that code
3. Go to project directory and run: `python make.py init && python make.py setup` that will make you a new virtual environment + installs modules used in the project
4. Then run: `python make.py run`
5. Open your browser and visit the website locally: `http://localhost:5000/` 

Volia! ⚡

---

## 😎 For Developers

You will find everything in `docs/` folder and don't forget to join our [Discord Group](https://discord.gg/cVVq85Nc) and join [GNEC Hackathon Spring 2026](https://gnec-hackathon-2026-spring.devpost.com/) 

Enjoy ☺️
