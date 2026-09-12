# 404 Not Lost

An AI-powered campus lost & found platform, built for the SheCodes Hackathon.

Our idea is — if you lose something on campus, report it. If someone finds something, they report it too. The app then uses image matching to suggest possible matches between the two, instead of everyone manually scrolling through a list.

## Features

- Report a lost item (category, description, location, date/time, photo)
- Report a found item
- AI compares lost and found reports and gives a match score
- View match results and browse all reports

## Tech Stack

Frontend: React (Vite), Tailwind CSS, React Router

Backend: Flask, SQLite

AI/Matching: PyTorch (pretrained ResNet-50) for image feature extraction, cosine similarity for comparing images, combined with category, location, time, and description matching for a final score.

## Running it locally

Frontend:
```
npm install
npm run dev
```

Backend:
```
cd backend
pip install flask flask-cors torch torchvision pillow scipy pandas
python app.py
```

Both need to be running at the same time for the app to fully work.

## Team

Harshita, Suramya, Naina, Pari, Avantika, Suhani

## Note

Built during a hackathon under a tight timeline, so a few things (like login and a full dashboard) are still on the to-do list.
