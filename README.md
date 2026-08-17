# 🚀 **Startup Web Application**  

Welcome to the **Resume Scan AI** – Web application for scanning programmers' resumes using advanced AI algorithms. The application is focused on modern trends of resumes writing and helps to improve the quality of resumes and company responses.  

## 📚 **Overview**.  
This project is designed with a focus on **convenience**, **speed** and **ease of use**. It serves as a foundation for a growing startup, providing flexibility for future enhancements, integrations, and commercial purposes. 

## 🛠️ **Tech Stack**  
- **Frontend:** HTML + CSS + JS  
- **Backend:** Node.js + Express   
- **AI:** Gemini

## 🌟 **Key Features**  
- **⚡ High performance:** Optimized scripts, styles and overall application response.  
- **🔗 Scalability:** Flexible architecture designed for future expansion of features and addition of new functionality.
- **🔗 Modernity:** State-of-the-art AI tools are incorporated into the work to unmistakably identify all aspects of the resume.

## ⚙️ **How It Works**  
1. Upload a resume in **PDF** format.  
2. Choose a **company type** and a **seniority level**.  
3. The server extracts text from the file and sends it to **Gemini**.  
4. The model returns a structured JSON review.  
5. The app renders a feedback page with a score, strengths, weaknesses, a radar chart, and a summary.

## 📦 **What You Get**  
- **Overall rating** from 1 to 10  
- **5 strengths** and **5 weaknesses** focused on technical skills and clarity  
- **Radar scores** from 1 to 5: relevance of position, measurable achievements, topical hard skills, professional literacy, career logicality, information integrity  
- A short **written summary** with constructive next steps  
- Feedback is tailored to the selected company type and seniority

## 🚀 **Getting Started**  
Clone the repository and create your local env file:

```bash
git clone <repo-url>
cd resume-scan-ai
cp .env.example .env
```

Add your Gemini API key to `.env`. Then start the app in one of the two ways below.

### 💻 **Terminal**  
Install dependencies and run the server:

```bash
npm install
npm run dev
```

Or without nodemon:

```bash
npm start
```

Open `http://localhost:3000` in the browser.

### 🐳 **Docker**  
Fill in `.env` first. Secrets stay on disk and are injected when the container starts — they are not copied into the image.

From the terminal:

```bash
docker compose up --build
```

You can also start it from the **Docker Desktop** app: open the project folder that contains `docker-compose.yml`, then click **Start** on the Compose stack. Desktop reads `.env` from that folder and passes `PORT`, `GEMINI_API_URL`, and `GEMINI_API_KEY` into the process. Do not use **Images → Run** for this — that path does not load `.env`.

If you change `.env`, Start / `docker compose up` again. No image rebuild is needed for a new key.

Open `http://localhost:3000` after it is running.

## 🔐 **Environment Variables**  
| Variable | Description |
| --- | --- |
| `PORT` | Port used by the Express server |
| `GEMINI_API_URL` | Gemini `generateContent` endpoint, including the model |
| `GEMINI_API_KEY` | Your Gemini API key. Never commit this value |

Copy `.env.example` and fill in your own key. `.env` is ignored by Git.

## 📁 **Project Structure**  
```
app.js                         Express entry point
controllers/promptController.js  PDF upload, Gemini request, feedback render
routes/                        Application routes
views/                         EJS pages and layout partials
public/                        Static CSS, JS, and images
.env.example                   Environment variable template
Dockerfile                     Production image
docker-compose.yml             Ports and env_file for Docker Desktop
.dockerignore                  Files excluded from the image
```

There is no database and no user accounts. Each request is processed in memory and discarded after the response.

## ☕ **Buy Me a Coffee**  
The footer contains a **Buy Me a Coffee** link used by the original project. If you reuse this code, replace it with your own page or remove it.