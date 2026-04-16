Project: JudePorfolio

To run locally from repository root (Windows PowerShell):

```
# open the inner index.html
Start-Process .\JudePorfolio\index.html
# or use the helper
.\open-index.ps1
# or change directory then open
cd JudePorfolio
start index.html
```

Netlify deployment:
- `netlify.toml` sets `publish = "JudePorfolio"` so you can connect this repo to Netlify and it will publish the `JudePorfolio` folder.
- Alternatively, when creating a new site on Netlify set the "Publish directory" to `JudePorfolio`.
Notes:
- I renamed the resume file to `resume/Estrada_Jude_Michael_A_CV.pdf` and updated the download link in `JudePorfolio/index.html`.

GitHub + Netlify continuous deploy
- Initialize a local repo, create a GitHub repo, and push:

```powershell
git init
git add .
git commit -m "Initial commit - portfolio site"
# Create a repo on GitHub via the website OR with GitHub CLI (example):
# gh repo create <your-username>/jude-portfolio --public --source=. --remote=origin --push
git remote add origin https://github.com/<your-username>/jude-portfolio.git
git branch -M main
git push -u origin main
```

- On Netlify:
	- Click "New site from Git" → choose Git provider → pick the repository you pushed.
	- Set "Build command" empty and "Publish directory" to `.` (repository root). `netlify.toml` already sets `publish = "."`.

Why move site to repo root?
- Netlify will publish the project root directly; keeping files at root simplifies local commands like `start index.html` and deployment settings.
