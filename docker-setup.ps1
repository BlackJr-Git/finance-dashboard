# Script d'initialisation Docker pour l'application finance
Write-Host "🚀 Initialisation de l'environnement Docker pour l'application Finance..." -ForegroundColor Green

# Vérifier si .env existe, sinon le créer à partir de .env.example
if (-not (Test-Path -Path ".env")) {
    Write-Host "📄 Création du fichier .env à partir de .env.example..." -ForegroundColor Yellow
    Copy-Item -Path ".env.example" -Destination ".env"
    Write-Host "⚠️ N'oubliez pas de configurer vos variables d'environnement dans le fichier .env" -ForegroundColor Yellow
}

# Démarrer les containers Docker
Write-Host "🐳 Démarrage des containers Docker..." -ForegroundColor Cyan
docker-compose up -d

# Attendre que PostgreSQL soit prêt
Write-Host "⏳ Attente du démarrage de PostgreSQL..." -ForegroundColor Cyan
Start-Sleep -Seconds 10

# Exécuter les migrations Prisma si nécessaire
Write-Host "🔄 Voulez-vous exécuter les migrations Prisma? (o/n)" -ForegroundColor Yellow
$response = Read-Host
if ($response -eq 'o' -or $response -eq 'O') {
    Write-Host "🔄 Exécution des migrations Prisma..." -ForegroundColor Cyan
    docker-compose exec app npx prisma migrate dev
}

Write-Host "✅ Configuration Docker terminée!" -ForegroundColor Green
Write-Host "📊 Application: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🛢️ PgAdmin: http://localhost:5050" -ForegroundColor Cyan
Write-Host "   Email: admin@finance.app" -ForegroundColor Cyan
Write-Host "   Mot de passe: admin" -ForegroundColor Cyan
Write-Host "   Pour se connecter à la base de données dans PgAdmin, utilisez:" -ForegroundColor Cyan
Write-Host "   • Host: finance-db" -ForegroundColor Cyan
Write-Host "   • Port: 5432" -ForegroundColor Cyan
Write-Host "   • Database: finance_app" -ForegroundColor Cyan
Write-Host "   • Username: postgres" -ForegroundColor Cyan
Write-Host "   • Password: postgres" -ForegroundColor Cyan
