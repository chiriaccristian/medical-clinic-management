# Setting Up GitHub Secrets for Medical Clinic Management System

This document explains how to set up the required GitHub Secrets for deploying the Medical Clinic Management System application.

## Required Secrets

You need to set up the following secrets in your GitHub repository:

### Firebase Client Configuration (Public Variables)
- `FIREBASE_API_KEY`: Your Firebase API key
- `FIREBASE_PROJECT_ID`: Your Firebase project ID
- `FIREBASE_APP_ID`: Your Firebase application ID
- `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID

### Firebase Admin Configuration (Private Variables)
- `FIREBASE_CLIENT_EMAIL`: The service account email from Firebase
- `FIREBASE_PRIVATE_KEY`: The private key for Firebase Admin SDK

## How to Add Secrets to GitHub Repository

1. Navigate to your GitHub repository
2. Click on **Settings** in the repository menu
3. In the left sidebar, click on **Secrets and variables** and then **Actions**
4. Click the **New repository secret** button
5. Add each secret one by one:
   - Enter the name of the secret (e.g., `FIREBASE_API_KEY`)
   - Enter the value of the secret
   - Click **Add secret**
6. Repeat steps 4-5 for all required secrets

## Important Notes

- **NEVER** commit these values directly to your repository or include them in client-side code
- The `FIREBASE_PRIVATE_KEY` should be the entire private key including quotation marks and newlines
- GitHub automatically encrypts secrets and only exposes them to GitHub Actions workflows
- When updating secrets, you need to delete the old one and create a new one with the same name

## Verifying Secrets

Once you've added all required secrets, you can verify they're working by:

1. Going to the **Actions** tab in your repository
2. Running the workflow manually by clicking **Run workflow** on the "Deploy Medical Clinic Management System" workflow
3. Checking the workflow run logs to ensure no errors occur related to missing environment variables

## Troubleshooting Private Key Format

If you encounter issues with the `FIREBASE_PRIVATE_KEY`, ensure:

1. You've copied the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
2. Line breaks are preserved (GitHub Secrets can handle multiline values)
3. The workflow properly handles newlines by using the syntax: `FIREBASE_PRIVATE_KEY: ${{ secrets.FIREBASE_PRIVATE_KEY }}`

For further assistance, refer to [GitHub's documentation on encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).