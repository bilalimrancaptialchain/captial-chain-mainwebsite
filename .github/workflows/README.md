# WordPress CI/CD Pipeline

## Overview
This pipeline automatically deploys WordPress changes to staging and production environments with approval gates.

## Environments

### Staging
- **URL**: https://checkout.capitalchain.co/staging/2563
- **Path**: `public_html/website_fb8b7ed8/staging/2563`
- **Trigger**: Push to `staging` or `main` branch
- **Approval**: Not required

### Production
- **URL**: https://checkout.capitalchain.co/
- **Path**: `public_html/website_fb8b7ed8`
- **Trigger**: Push to `main` branch only
- **Approval**: **REQUIRED** (GitHub environment protection)

## Required Secrets

Add these secrets to your GitHub repository settings:

### WordPress Server Access
- `WORDPRESS_HOST` - Server IP address or domain
- `WORDPRESS_USERNAME` - SSH username
- `WORDPRESS_SSH_KEY` - Private SSH key for server access
- `WORDPRESS_PORT` - SSH port (default: 22)

### Optional
- `SLACK_WEBHOOK_URL` - For deployment notifications

## Workflow Steps

### 1. Test Phase
- Validates PHP syntax
- Checks WordPress coding standards
- Runs on every push and PR

### 2. Staging Deployment
- Automatically deploys to staging
- Creates backup before deployment
- Tests deployment with health check
- Runs on `staging` and `main` branch pushes

### 3. Production Deployment
- **Requires manual approval** via GitHub environment
- Creates production backup
- Deploys to production
- Runs health checks
- Sends notifications

### 4. Rollback (Manual)
- Can be triggered manually via GitHub Actions
- Lists available backups
- Restores from latest backup

## Setup Instructions

### 1. Configure GitHub Environment Protection
1. Go to Repository Settings → Environments
2. Create `production` environment
3. Enable "Required reviewers" (add your team members)
4. Enable "Wait timer" (optional, e.g., 5 minutes)

### 2. Add Repository Secrets
1. Go to Repository Settings → Secrets and variables → Actions
2. Add all required secrets listed above

### 3. Test the Pipeline
1. Create a feature branch
2. Make changes to WordPress files
3. Create a pull request to `main`
4. Merge to `main` to trigger production deployment

## File Monitoring

The pipeline only runs when these paths change:
- `plugins/advanced-checkout/**`
- `themes/**`

## Backup Strategy

- **Staging**: Creates timestamped backups before each deployment
- **Production**: Creates timestamped backups before each deployment
- **Retention**: Backups are kept on the server (consider cleanup policy)

## Security Features

- SSH key-based authentication
- Environment protection for production
- Backup before each deployment
- Health checks after deployment
- Rollback capability

## Troubleshooting

### Common Issues
1. **SSH Connection Failed**: Check SSH key and host credentials
2. **Permission Denied**: Ensure proper file permissions on server
3. **Health Check Failed**: Check if WordPress site is accessible
4. **Backup Failed**: Ensure sufficient disk space on server

### Manual Rollback
If automatic rollback is needed:
1. Go to Actions tab
2. Find the "rollback" workflow
3. Click "Run workflow"
4. Select the branch and run

## Monitoring

- Check GitHub Actions tab for deployment status
- Monitor server logs for any issues
- Set up Slack notifications for deployment status
