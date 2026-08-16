# NICKOS SERVICES LTD — DevOps Practice Website

A simple static company/training website designed to become an end-to-end DevOps practice project.

## Files

- `index.html` — website structure/content
- `styles.css` — styling and responsive design
- `script.js` — small frontend interactions
- `assets/nsl-logo.png` — NSL logo supplied for the site

## Run locally

You do not need a server for the first step.

### Option 1: Open directly
Double-click `index.html`.

### Option 2: VS Code Live Server
Open the folder in VS Code and run it with Live Server.

### Option 3: Python web server
From the project directory:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Suggested DevOps progression

1. Put the project in Git/GitHub.
2. Add a Dockerfile and containerize it with Nginx.
3. Add a health endpoint / health check.
4. Build and publish the image to Docker Hub or another registry.
5. Deploy it to Kubernetes.
6. Add Service + Ingress + TLS.
7. Use Terraform to provision the infrastructure.
8. Add GitHub Actions for test/build/push/deploy.
9. Add Prometheus metrics and Grafana dashboards.
10. Add security scanning, secrets management and rollback strategy.

## Important

The registration form is currently frontend-only. It intentionally does not send personal information anywhere.

Before public launch, replace the placeholder document links with approved company documents and verify all company/legal/compliance information.
