# WordPress CI/CD Setup Guide

## 1. GitHub Environment Setup

### Create Environments
1. Go to your GitHub repository
2. Click **Settings** → **Environments**
3. Click **New environment**

#### Staging Environment
- **Name**: `staging`
- **Protection rules**: None (auto-deploy)
- Click **Configure environment**

#### Production Environment
- **Name**: `production`
- **Protection rules**: 
  - ✅ **Required reviewers** (add your team members)
  - ✅ **Wait timer** (optional: 5 minutes)
  - ✅ **Deployment branches** (only main branch)
- Click **Configure environment**

## 2. GitHub Secrets Setup

### Go to Repository Secrets
1. Click **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**

### Required Secrets

#### WordPress Server Access
```
Name: WORDPRESS_HOST
Value: your-server-ip-or-domain.com
```

```
Name: WORDPRESS_USERNAME
Value: your-ssh-username
```

```
Name: WORDPRESS_SSH_KEY
Value: -----BEGIN OPENSSH PRIVATE KEY-----
your-private-ssh-key-content-here
-----END OPENSSH PRIVATE KEY-----
```

```
Name: WORDPRESS_PORT
Value: 22
```

#### Optional Secrets
```
Name: SLACK_WEBHOOK_URL
Value: https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
```

## 3. SSH Key Setup

### Generate SSH Key (if you don't have one)
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### Add Public Key to Server
1. Copy your public key:
```bash
cat ~/.ssh/id_rsa.pub
```

2. Add to server's authorized_keys:
```bash
# On your server
echo "your-public-key" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

### Add Private Key to GitHub Secrets
1. Copy your private key:
```bash
cat ~/.ssh/id_rsa
```

2. Add to GitHub secret `WORDPRESS_SSH_KEY`

## 4. Server Requirements

### WordPress Server Setup
Make sure your server has:
- SSH access enabled
- `tar` command available
- `chown` and `chmod` commands
- `wp-cli` installed (optional, for cache clearing)

### Directory Permissions
```bash
# Set proper ownership
sudo chown -R www-data:www-data /path/to/wordpress/wp-content/plugins/
sudo chown -R www-data:www-data /path/to/wordpress/wp-content/themes/

# Set proper permissions
sudo chmod -R 755 /path/to/wordpress/wp-content/plugins/
sudo chmod -R 755 /path/to/wordpress/wp-content/themes/
```

## 5. Test the Pipeline

### Test Staging Deployment
1. Create a test branch:
```bash
git checkout -b test-deployment
```

2. Make a small change to a WordPress file
3. Commit and push:
```bash
git add .
git commit -m "Test staging deployment"
git push origin test-deployment
```

4. Create a Pull Request to `main`
5. Merge to `main` to trigger staging deployment

### Test Production Deployment
1. After staging deployment succeeds
2. Go to **Actions** tab
3. Find the "WordPress Deployment Pipeline" workflow
4. Click on the production deployment job
5. Click **Review deployments**
6. Approve the deployment

## 6. Environment Variables Reference

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `WORDPRESS_HOST` | Server IP or domain | `123.456.789.0` or `checkout.capitalchain.co` |
| `WORDPRESS_USERNAME` | SSH username | `root` or `ubuntu` |
| `WORDPRESS_SSH_KEY` | Private SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `WORDPRESS_PORT` | SSH port | `22` (default) |
| `SLACK_WEBHOOK_URL` | Slack notifications | `https://hooks.slack.com/...` |

## 7. Troubleshooting

### Common Issues

#### SSH Connection Failed
- Check if SSH key is correct
- Verify server IP and port
- Test SSH connection manually:
```bash
ssh -i ~/.ssh/id_rsa username@your-server-ip
```

#### Permission Denied
- Check file ownership on server
- Ensure user has write permissions
- Run: `sudo chown -R username:username /path/to/wordpress/`

#### Health Check Failed
- Verify WordPress site is accessible
- Check if there are any PHP errors
- Look at server error logs

### Manual Rollback
If you need to rollback manually:
1. Go to **Actions** tab
2. Find "rollback" workflow
3. Click **Run workflow**
4. Select branch and run

## 8. Security Best Practices

- Use SSH keys instead of passwords
- Limit SSH access to specific IPs
- Regularly rotate SSH keys
- Monitor deployment logs
- Keep backups of working versions
- Test in staging before production

## 9. Next Steps

After setup:
1. Test the pipeline with a small change
2. Set up monitoring and alerts
3. Configure backup retention policy
4. Train team on approval process
5. Document any custom configurations
