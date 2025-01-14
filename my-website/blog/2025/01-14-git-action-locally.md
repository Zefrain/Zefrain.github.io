---
title: Run git action locally
tags: [git, action, locally]
---

To run a GitHub Action locally, you can use tools like [Act](https://github.com/nektos/act). `Act` is a popular utility that lets you execute GitHub Actions workflows on your local machine.

### Steps to Run a GitHub Action Locally:

1. **Install Act**
   You can install `Act` using a package manager or by downloading a binary:

   - **Linux/macOS** (via Homebrew):
     ```bash
     brew install act
     ```
   - **Linux/macOS/Windows (via binary):**
     Download from the [Act Releases page](https://github.com/nektos/act/releases).

2. **Verify Installation**
   Ensure `Act` is installed correctly:

   ```bash
   act --version
   ```

3. **Prepare Your Repository**

   - Make sure your repository contains a `.github/workflows/` directory with your GitHub Action workflows.

4. **Provide Secrets (If Needed)**
   If your workflow uses secrets, create a `.secrets` file in the root of your repository:

   ```plaintext
   MY_SECRET=your-secret-value
   ```

   Or pass secrets directly via the command line:

   ```bash
   act --secret MY_SECRET=your-secret-value
   ```

5. **Run the Workflow**
   To run the default workflow (`push` event):

   ```bash
   act
   ```

   To run a specific event:

   ```bash
   act <event_name>
   ```

   For example:

   ```bash
   act pull_request
   ```

6. **Use Custom Runner Images (Optional)**
   By default, `Act` uses a lightweight image. If your workflow requires a specific environment, use a custom image:
   ```bash
   act -P ubuntu-latest=nektos/act-environments-ubuntu:18.04
   ```

### Notes:

- **Dependencies**: Ensure your local environment has all required dependencies installed for the workflow to execute correctly.
- **Docker Requirement**: `Act` uses Docker to emulate GitHub Actions environments. Make sure Docker is installed and running on your system.

This approach helps you test and debug your GitHub Actions workflows locally without pushing changes to the repository.
