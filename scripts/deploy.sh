#!/bin/bash

# WordPress Deployment Script
# Usage: ./scripts/deploy.sh [staging|production]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
STAGING_PATH="public_html/website_fb8b7ed8/staging/2563"
PRODUCTION_PATH="public_html/website_fb8b7ed8"
BACKUP_DIR="backups"

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if environment is provided
if [ $# -eq 0 ]; then
    log_error "Please specify environment: staging or production"
    echo "Usage: $0 [staging|production]"
    exit 1
fi

ENVIRONMENT=$1

# Validate environment
if [ "$ENVIRONMENT" != "staging" ] && [ "$ENVIRONMENT" != "production" ]; then
    log_error "Invalid environment. Use 'staging' or 'production'"
    exit 1
fi

# Set deployment path
if [ "$ENVIRONMENT" = "staging" ]; then
    DEPLOY_PATH=$STAGING_PATH
    SITE_URL="https://checkout.capitalchain.co/staging/2563"
else
    DEPLOY_PATH=$PRODUCTION_PATH
    SITE_URL="https://checkout.capitalchain.co/"
fi

log_info "Starting deployment to $ENVIRONMENT environment..."
log_info "Deploy path: $DEPLOY_PATH"
log_info "Site URL: $SITE_URL"

# Check if we're in the right directory
if [ ! -d "plugins/advanced-checkout" ]; then
    log_error "Please run this script from the WordPress project root directory"
    exit 1
fi

# Create backup
log_info "Creating backup..."
BACKUP_NAME="${ENVIRONMENT}_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
mkdir -p $BACKUP_DIR

if [ -d "$DEPLOY_PATH/wp-content/plugins/advanced-checkout" ]; then
    tar -czf "$BACKUP_DIR/$BACKUP_NAME" -C "$DEPLOY_PATH" wp-content/plugins/advanced-checkout wp-content/themes/
    log_info "Backup created: $BACKUP_NAME"
else
    log_warn "No existing files to backup"
fi

# Deploy files
log_info "Deploying files..."

# Update advanced checkout plugin
log_info "Updating advanced checkout plugin..."
rm -rf "$DEPLOY_PATH/wp-content/plugins/advanced-checkout"
mkdir -p "$DEPLOY_PATH/wp-content/plugins/advanced-checkout"
cp -r plugins/advanced-checkout/* "$DEPLOY_PATH/wp-content/plugins/advanced-checkout/"

# Update themes if they exist
if [ -d "themes" ]; then
    log_info "Updating themes..."
    cp -r themes/* "$DEPLOY_PATH/wp-content/themes/"
fi

# Set proper permissions
log_info "Setting permissions..."
chmod -R 755 "$DEPLOY_PATH/wp-content/plugins/advanced-checkout"
chmod -R 755 "$DEPLOY_PATH/wp-content/themes/"
chown -R www-data:www-data "$DEPLOY_PATH/wp-content/plugins/advanced-checkout"
chown -R www-data:www-data "$DEPLOY_PATH/wp-content/themes/"

# Clear WordPress cache
log_info "Clearing WordPress cache..."
if command -v wp &> /dev/null; then
    wp cache flush --path="$DEPLOY_PATH"
else
    log_warn "WP-CLI not found, skipping cache flush"
fi

# Test deployment
log_info "Testing deployment..."
if curl -f -s "$SITE_URL" > /dev/null; then
    log_info "✅ Deployment successful! Site is accessible at $SITE_URL"
else
    log_error "❌ Deployment failed! Site is not accessible at $SITE_URL"
    exit 1
fi

log_info "🎉 Deployment to $ENVIRONMENT completed successfully!"

# Show backup information
if [ -f "$BACKUP_DIR/$BACKUP_NAME" ]; then
    log_info "Backup saved: $BACKUP_DIR/$BACKUP_NAME"
    log_info "To rollback, run: tar -xzf $BACKUP_DIR/$BACKUP_NAME -C $DEPLOY_PATH"
fi
