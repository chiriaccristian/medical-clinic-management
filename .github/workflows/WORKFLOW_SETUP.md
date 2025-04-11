# Setting Up GitHub Actions Workflow

This document explains how to set up the GitHub Actions workflow for deploying the Medical Clinic Management System.

## Converting the Example Workflow

The `deploy.yml.example` file is an example workflow file that needs to be converted to an actual workflow. Follow these steps:

1. First, ensure you've set up all the required GitHub Secrets as described in the `GITHUB_SECRETS_SETUP.md` file
2. In your repository, go to the `.github/workflows` directory
3. Create a new file named `deploy.yml` with the content from `deploy.yml.example`
4. Modify the deployment section based on your preferred hosting provider (Vercel, Netlify, etc.)

## Important Notes About GitHub Actions Syntax

The example workflow file uses GitHub Actions expressions such as `${{ secrets.FIREBASE_API_KEY }}`. These expressions are part of the GitHub Actions syntax and will be processed by GitHub Actions during workflow execution.

## Deployment Configuration

The example workflow includes a placeholder for the deployment step. You'll need to configure this based on your hosting provider. Here are examples for common providers:

### Vercel

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v20
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    vercel-args: '--prod'
```

### Netlify

```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v1.2
  with:
    publish-dir: './out'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Firebase Hosting

```yaml
- name: Deploy to Firebase
  uses: FirebaseExtended/action-hosting-deploy@v0
  with:
    repoToken: ${{ secrets.GITHUB_TOKEN }}
    firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
    channelId: live
    projectId: ${{ secrets.FIREBASE_PROJECT_ID }}
```

## Testing the Workflow

Once you've set up the workflow:

1. Commit the changes to the repository
2. Go to the "Actions" tab in your GitHub repository
3. Click on the "Deploy Medical Clinic Management System" workflow
4. Click "Run workflow" and select the branch to run on
5. Monitor the workflow logs for any errors or issues

## Troubleshooting

If your workflow encounters issues:

1. Check that all required secrets are properly set up
2. Ensure that your deployment provider is correctly configured
3. Review the workflow logs for specific error messages
4. Make sure your build process completes successfully before attempting deployment

For further assistance, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions).