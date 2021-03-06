# SD_Notesfree





## Frontend 

## Map

```
├── src 
      └──  components
      |     └── Header
      |           ├── Footer.jsx
      |           └── Header.jsx
      ├── pages
      |     ├── app.jsx
      │     └── index.jsx
      ├── styles
      │    ├── app.css
      │    └── globals.css
      └── service
           └── api.js


```
1. Everything except files in`frontend/src/service` should be a .jsx file
2. If you're not in the /frontend subdirectory, `cd frontend`
3. Run `npm install` to download the required packages after every pull and when installing new packages.
4. Run `npm run dev` and view on [http://localhost:3000/](http://localhost:3000/)

### Pages

- Pages correspond to the webpage that a user sees. Read more on Next.js website for this

### Components

- If some part of the UI is reused by multiple pages or multiple times within one page, it should be a component.
- Visit [Fintech Website](https://github.com/NUS-Fintech-Society/SD_Fintech_Website/tree/master/components) or watch some tutorial if you're unsure of how to write and structure the components.

### Style

- css is painful sometimes :)
- Whenever possible, use Material UI components or some other UI library and standerdise it instead of manually writing your own styles.


### Services

- We will build all our Oauth services and apis here. 

## Backend 
  
### Python Workflow

Add all dependencies to requirements.txt file at the root of backend
Read more here : https://note.nkmk.me/en/python-pip-install-requirements/

###  Postman Workflow

Create a collection called "Notesfree" and clearly name every endpoint appropriately
Export at the end of merge for other memeber to pull

## Git Workflow
Please DO NOT WORK on the main branch directly!

Follow branch naming convention of  "@name/what-you-are-doing" like "leah/fix-api"

- git command to create a new branch:
  - git checkout -b leah/fix-api (-b creates a new branch)

- git command to move to branch one already created:
  - git checkout leah/fix-api 

- Once you are done with your work:
  1. Pull the code from main and then merge it with your branch
  2. ALWAYS PULL BEFORE you push(to get new changes) and fix merge conflicts.
  3. Push your changes ONLY to your branch.
  4. Open a Pull Request (PR) to main branch (code must compile) and tag me if I'm not already tagged.
