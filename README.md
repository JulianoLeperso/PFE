# PFE

## Sujet :

### Pré-étude des Dossiers Judiciaires utilisant l'Intelligence Artificielle pour l'Identification des Vices de Procédures 


Comment développer un système de pré-étude des dossiers judiciaires pour identifier rapidement les vices de procédures et les affaires pouvant être jugées plus rapidement, afin d'améliorer l'efficacité des tribunaux et de réduire la charge de travail des institutions judiciaires ?

Les tribunaux et institutions judiciaires sont souvent submergés par une charge de travail énorme, avec des milliers de dossiers à traiter quotidiennement. Cela peut entraîner des retards considérables dans le traitement des affaires, aggravés par des vices de procédure, des questions juridiques complexes ou l'absence de preuves solides. En conséquence, le système judiciaire peut devenir inefficace, augmentant ainsi les délais pour rendre justice. L'introduction de l'intelligence artificielle (IA) dans le processus de gestion des cas peut aider à effectuer une pré-étude des dossiers, identifiant rapidement les vices de procédure et classifiant les affaires selon leur complexité. Cela permettrait de prioriser les dossiers qui peuvent être traités plus rapidement, améliorant ainsi l'efficacité des tribunaux.

## Équipe :

- Chirine BETTAYEB (Big Data)
- Marie GRACIANI (IOT)
- Anuujin ENKHMUNKH (IOT)
- Dorine BATTISTUTA (IOT)
- Ines GOULAMHOUSSEN (Big Data)
- Clement GASNET (Cloud)





# Plan:PDF Processing Web Application with Machine Learning

## Overview

This project is a web-based application designed to allow users to upload PDF files, process them through machine learning scripts, and view the results. The project is built around microservices, API-based architecture, and AWS services for scalability and flexibility.

The main features of the application include:
- User signup and login.
- Video tutorial on the homepage explaining the PDF upload process.
- Upload PDFs and link them to the user's account.
- Process uploaded PDFs using Python-based machine learning scripts.
- Display processed results alongside the original PDFs.
- List of previously uploaded PDFs, with the ability to view processed results in a pop-up window.

---

## Proposed Architecture

### 1. **Frontend**

The frontend is responsible for user interactions, video display, file uploads, and showing the processing results.

- **Service**: AWS Amplify (or S3 + CloudFront for hosting)
    - **AWS Amplify** will host the frontend, built with **React/Next.js**, providing easy integration with other AWS services such as **API Gateway** and **Cognito**.
    - Alternatively, you can use **S3 + CloudFront** for hosting the static files (HTML, CSS, JS) with CloudFront caching.

- **Authentication**: AWS Cognito
    - **Amazon Cognito** will manage user signup, login, and session management.
    - Cognito ensures secure authentication and links each PDF upload to the corresponding user.

### 2. **Backend (Microservices via APIs)**

The backend is divided into microservices that handle different functionalities: user management, file uploads, data processing, and results retrieval.

- **Service**: AWS Lambda (Serverless Architecture)
    - **AWS Lambda** will handle the business logic, including:
        1. User authentication and management via Cognito.
        2. File upload handling from the frontend.
        3. Triggering the Python machine learning scripts for processing PDFs.
        4. Managing database interactions to store and retrieve PDF metadata and results.

- **API Gateway**:
    - **Amazon API Gateway** will expose REST endpoints for the frontend to interact with the backend.
        - `/login`: Handles user login requests.
        - `/upload`: Handles PDF file uploads.
        - `/process`: Triggers the processing of the uploaded PDFs.
        - `/results`: Fetches all the PDFs uploaded by the user and their processing results.

### 3. **File Storage**

Uploaded PDFs and the processing results (images and text) will be stored.

- **Service**: Amazon S3
    - **S3** will be used to store:
        - The uploaded PDFs.
        - The processed outputs (images and text).
    - **IAM Roles** will ensure that users can only access their own files.

### 4. **Python Processing (Machine Learning)**

The Python scripts that transform the uploaded PDFs (likely machine learning) will require compute resources.

- **Service**: AWS Lambda with Layers or AWS EC2
    - **AWS Lambda** can run Python scripts for lightweight processing tasks.
    - For more intensive machine learning tasks, **AWS EC2** instances with auto-scaling and GPU support can be used for performance.

### 5. **Database**

The database will store metadata about users, uploaded PDFs, and the results.

- **Service**: Amazon DynamoDB (or Amazon RDS for relational data)
    - **Amazon DynamoDB** (NoSQL) will store the metadata, such as:
        - Users (linked with Cognito).
        - Uploaded file metadata (file names, S3 paths).
        - Processing results (status, output links, details).
    - **Amazon RDS** is an alternative if you prefer a SQL-based database like PostgreSQL or MySQL.

### 6. **User Interface**

The user interface includes:
- A **homepage** with a video demonstrating how the system works.
- **Login/Signup** functionality managed by Cognito.
- An **upload page** for users to upload their PDF files.
- A **results page** listing all uploaded PDFs, with the option to view the original PDF and its processed results in an overlay.

---

## High-Level Architecture Diagram

### Frontend (AWS Amplify):
- **React/Next.js** app.
- User login/signup and session management via **AWS Cognito**.
- REST API calls to the backend via **API Gateway**.

### Backend (AWS Lambda + API Gateway):
- Lambda functions handle:
    - User authentication and PDF file uploads.
    - Invoking Python scripts for machine learning processing.
    - Fetching and linking the processing results to the correct user.

### File Storage (Amazon S3):
- Uploaded PDFs and processed results are stored in **Amazon S3**.
- Access control is managed by **IAM Roles**.

### Machine Learning (AWS Lambda/EC2):
- Python scripts for PDF processing are run on **Lambda** or **EC2**, with results stored back in **S3**.

### Database (DynamoDB/RDS):
- Stores metadata linking users, PDFs, and results, as well as the processing status.

---

## Key Steps for Implementation on AWS

### 1. Frontend Setup:
- Build the frontend with **React/Next.js**.
- Deploy the frontend using **AWS Amplify** or **S3 + CloudFront**.
- Integrate **AWS Cognito** for user authentication.

### 2. Backend Setup:
- Create **AWS Lambda** functions to handle:
    - User authentication.
    - PDF uploads.
    - Processing requests (invoking Python scripts).
- Use **Amazon API Gateway** to expose REST endpoints.

### 3. File Storage:
- Create an **S3 bucket** to store uploaded PDFs and their processed results.
- Set up **IAM policies** to ensure users can only access their own files.

### 4. Python Machine Learning Processing:
- Set up **AWS Lambda** (or **EC2** for heavier workloads) to handle Python script execution.
- Use **Lambda Layers** for managing Python dependencies.
- Store the processed output in **S3**.

### 5. Database:
- Set up **DynamoDB** (or **RDS**) to store user-file metadata and processing results.

### 6. Result Viewing:
- Build an interface allowing users to view their uploaded PDFs and the associated results.
- Implement an overlay to display the original PDF and its processed result.

---

## Summary

- **Frontend**: Hosted on **AWS Amplify** or **S3/CloudFront**.
- **Backend**: Built using **AWS Lambda** microservices, exposed via **API Gateway**.
- **File Storage**: Managed with **Amazon S3**.
- **Machine Learning**: Python processing handled by **Lambda** or **EC2**.
- **Database**: **DynamoDB** (or **RDS**) for storing metadata.

---

## AWS Guide

1. **Create an S3 Bucket** for storing PDFs and results.
2. **Set up Cognito User Pools** for managing user sign-ins and registrations.
3. **Create Lambda Functions** for:
    - File upload and processing.
    - Managing user data and linking it to uploaded files.
4. **Configure API Gateway** to expose REST APIs for the frontend.
5. **Set up DynamoDB or RDS** for managing metadata.
6. **Deploy the frontend** on **AWS Amplify** or **S3/CloudFront**.
7. **Test the workflow** to ensure smooth operations from login to file upload, processing, and result display.
