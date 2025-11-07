---
link: "[[1743802452-programming|Programming]]
aliases:
  - "Python from Zero for Backend"
tags:
  - Quests
  - active
accepted: "[[2025-11-05]]"
deadline: "[[2025-11-06]]"
XP: 0
---
# Quest: Python from Zero for Backend
## Objective
This is an express project in which I want to learn to use python for Backend so I can land a position in IBM, I have Knowledge in python so it won't be so difficult, in the course I will be learning [[1762395152-fastapi|FastAPI]] and more things.

## Tasks
- [ ] Complete the [course](https://www.youtube.com/watch?v=_y9qQZXE24A). (XP +30)
- [ ] Use what I learned to create a simple [[1752081958-api|API]] project. (XP +10)
- [ ] Do the coding assesment for the backend developer position in IBM. (XP +10)
- [ ] Do a more advance project and maybe integrate it with a frontend. (XP +30)

## Notes
- To start the local server use: `uvicorn <file_name>:<server_name> --reload` 
- To stop the local server use: `Ctrl + c`

- Swagger documentation: http://127.0.0.1:8000/docs
- Redocly documentation: http://127.0.0.1:8000/redoc

```python {base file}
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return "¡Hola Mundo!"

```


## Forged Relics
```dataview
list
from "04-Forge" and [[]]
```
## Knowledge and Tomes
```dataview
list
from "02-Library" and [[]]
```
## Sources
[FastAPI](https://fastapi.tiangolo.com/)

