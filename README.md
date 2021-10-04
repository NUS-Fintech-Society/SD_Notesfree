# SD_Notesfree

## Python Workflow

Add all dependencies to requirements.txt file at the root of backend
Read more here : https://note.nkmk.me/en/python-pip-install-requirements/

##  Postman Workflow

Create a collection called "Notesfree" and clearly name every endpoint appropriately
Export at the end of merge for other memeber to pull

## Git Workflow
Please DO NOT WORK on the main branch directly!

Follow branch naming convention of  "name/what-you-are-doing" like "leah/fix-api"

- git command to create a new branch:
  - git checkout -b leah/fix-api (-b creates a new branch)

- git command to move to branch one already created:
  - git checkout leah/fix-api 

- Once you are done with your work and tied up loose ends:
  1. Pull the code from main and then merge it with your branch
  2. ALWAYS PULL BEFORE you push(to get new changes) and fix merge conflicts.
  3. Push your changes ONLY to your branch.
  4. Open a Pull Request (PR) to main branch and tag me if I'm not already tagged.
