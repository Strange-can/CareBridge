# 🤝 Contributing

## 🛠️ Tech Stack Focus

* **Frontend:** [11ty](https://www.11ty.dev/), [Pico.css](https://www.picocss.com) & [HTMX](https://www.htmx.org)
* **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
* **Database:** SQLite
* **Package Manager:** pnpm (frontend) + pip (backend)

---

## 🚀 Getting Started Locally

### 1. Fork & Clone

* Click the **'Fork'** button on the main repository.
* Clone **your fork** to your local machine:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/CareBridge.git](https://github.com/YOUR_USERNAME/CareBridge.git)
    
    cd CareBridge
    
    git remote add upstream [https://github.com/omar-hossam/CareBridge.git](https://github.com/omar-hossam/CareBridge.git)
    ```

### 2. Install Dependencies

Make sure you have [pnpm](https://pnpm.io/installation) and [python](https://www.python.org) installed.

**Frontend (11ty):**

```bash
pnpm install
```

**Backend (FastAPI):**

```bash
cd backend
pip install -r requirements.txt
```

### 3. Run Development Server

**Frontend (terminal 1):**

```bash
pnpm dev # Runs 11ty on localhost:8080
```

**Backend (terminal 2):**

```bash
cd backend
uvicorn main:app --reload  # Runs on localhost:8000
```

## 🏗️ Development Workflow

### The Feature Workflow (Do this for every task!)

Always work on a branch. Never code directly on `main`.

1. **Sync with the team:**
    ```bash
    git checkout main
    git pull upstream main
    ```

2. **Create your task branch:** 
   
   ```bash
    git checkout -b feature/your-task-name
    ```

3. **Code & Test:** Ensure the app runs without errors and your changes work as expected using `pnpm dev`.

4. **Push to your fork:**
    Use **Conventional Commits** (keep it simple):
    ```bash
    git add .
    git commit -m "feat: implement user donation history"
    git push origin feature/your-task-name
    ```

5. **Submit Your Work:**
    - Go to the original [omar-hossam/CareBridge](https://github.com/omar-hossam/CareBridge) repository on GitHub.
    - Click **"Compare & Pull Request"**.
    - Briefly describe your changes and tag a teammate for a quick review.

## 📐Project Architecture

### 1. Backend & Database

- **FastAPI** handles all dynamic routes and returns HTML fragments
- **SQLite** stores all application data
- All endpoints accept `application/x-www-form-urlencoded` (HTMX default)
- Every endpoint **MUST** returns HTML, not JSON

### 2. Frontend (11ty + Picocss + HTMX)

* **Components:** Reusable UI elements go in `_components/`.
* **Pages:** Main views/screens go in `content/`.
* **Layout:** Main layout is located in `_includes/`.
* **Styling:** We use **Pico.css** for a lightweight, semantic CSS approach. Utilize Pico's built-in variables for consistency.

## 📜 Coding Standards

* **HTMX Attributes:** Keep them inline in HTML, not in JS files
* **No frontend JS complexity** - HTMX handles all interactivity
* **Security:** Never trust user input - validate everything + Always anonymize patient/donor data in the UI.
* **HTML Fragments:** Keep them minimal (no full page structure)
* **Error Handling:** Always catch DB errors and return user-friendly HTML

## 💬 Communication

If you're stuck or want to discuss a new feature, reach out to us on our Discord Group or open an Issue in the repository. Happy coding! 🚀
