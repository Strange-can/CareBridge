# Our Stack Cheat Sheet

## Frontend (11ty)

- `{{ variable }}` = output data
- `{% if x %}` = conditional
- Frontmatter = `--- title: My Page ---`

## HTMX

- `hx-get="/url"` = get data from the api
- `hx-post="/url"` = send POST
- `hx-target="#id"` = where to put response
- `hx-swap="innerHTML"` = how to insert

## Backend (FastAPI)

```python
@app.post("/action")
def action(data: str = Form(...)):
    return "<div>HTML response</div>"
```

**Always return HTML code not JSON!**

**You're ready. Go build something great.** 🚀
