# DevOps Project

## Why This Project?

This project is being built to understand and implement a complete DevOps workflow using a real application.

Instead of learning individual DevOps tools separately, the project focuses on how those tools work together to automate the software development and deployment lifecycle.

The project will gradually evolve from a simple locally running Node.js application into an automated cloud deployment pipeline.

## Project Goal

The final goal is to build a workflow where a code change pushed to GitHub automatically goes through:

```text
Developer
    |
    v
GitHub
    |
    v
Jenkins CI/CD
    |
    v
Automated Testing
    |
    v
Docker Image
    |
    v
AWS ECR
    |
    v
AWS Deployment
    |
    v
Monitoring
```

Infrastructure will also be provisioned using Terraform, and container orchestration will be explored using Kubernetes.

## Technologies

* Node.js
* Git and GitHub
* Jenkins
* Docker
* AWS
* Terraform
* Kubernetes
* Prometheus / Grafana
* Linux
* Bash

## Current Stage

The Node.js application has been created and pushed to GitHub.

Next step: integrate the GitHub repository with Jenkins and create the first CI pipeline.
