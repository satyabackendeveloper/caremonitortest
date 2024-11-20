# CareMonitorTest Project Setup Guide

This guide explains how to set up and run the Node.js project locally.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (npm comes bundled with Node.js)

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

Run the following command to install the required dependencies for the project:

```bash
npm install
```

### 3. Copy the .env.example File

Copy the .env.example file to .env to set up your environment variables:

```bash
cp .env.example .env
```

### 4. Update Database Credentials and Port

Open the .env file and update the following values:

DB_HOST: Database host (e.g., localhost)

DB_USER: Database username

DB_PASSWORD: Database password

DB_NAME: Database name

PORT: The port number your app will run on


### 4. Start the Project

Finally, run the following command to start the project:

```bash
npm run start
```
