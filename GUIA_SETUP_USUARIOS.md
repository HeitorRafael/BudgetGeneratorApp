# 🚀 Guia de Setup - BudgetGeneratorAPP

Para desenvolvedores que vão clonar o repo e rodar na máquina deles.

---

## 📋 Pré-requisitos

- **Node.js** 16+ ([baixar](https://nodejs.org/))
- **PostgreSQL** 12+ ([baixar](https://www.postgresql.org/))
- **Git**
- VS Code (recomendado)

---

## 1️⃣ Clonar Repositório

```bash
git clone https://github.com/AlexsandroFilho/BudgetGeneratorApp.git
cd BudgetGeneratorApp
```

---

## 2️⃣ Setup Backend (Express + PostgreSQL)

### 📁 Navegar para pasta
```bash
cd BudgetGeneratorWEB
```

### 🗄️ Criar Banco de Dados

Abrir terminal PostgreSQL:
```bash
psql -U postgres
```

Dentro do PostgreSQL:
```sql
CREATE DATABASE budget_generator;
CREATE USER postgres WITH PASSWORD 'senha123';
GRANT ALL PRIVILEGES ON DATABASE budget_generator TO postgres;
\q
```

### ⚙️ Configurar .env

Criar arquivo `BudgetGeneratorWEB/.env`:

```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=budget_generator
DB_USER=postgres
DB_PASSWORD=senha123
JWT_SECRET=sua_chave_secreta_super_segura_aqui_123456
GEMINI_API_KEY=sua_chave_gemini_aqui
NODE_ENV=development
```

### 📦 Instalar Dependências

```bash
npm install
```

### ▶️ Iniciar Servidor

```bash
npm start
```

**Esperado**: `Server running on port 3000`

Testar: `http://localhost:3000/api` deve retornar algo (ou erro 404)

---

## 3️⃣ Setup Frontend (React Native + Expo)

### 📁 Voltar para raiz

```bash
cd ..
```

### 🔍 Descobrir Seu IP

**Windows (PowerShell)**:
```powershell
ipconfig | findstr IPv4
```

Procure por algo como: `192.168.15.17` (anote)

### ⚙️ Configurar .env

Criar arquivo `.env` na raiz:

```dotenv
API_BASE_URL=http://SEU_IP:3000/api
```

**Exemplo** (se seu IP é 192.168.15.17):
```dotenv
API_BASE_URL=http://192.168.15.17:3000/api
```

### 📦 Instalar Dependências

```bash
npm install
```

### ▶️ Iniciar Expo

```bash
npm start
```

**Esperado**: QR code aparece no terminal

---

## 4️⃣ Testar no Celular

### 📲 Opção 1: Expo Go (Recomendado)

1. Instalar app **Expo Go**:
   - iOS: AppStore
   - Android: PlayStore

2. Abrir app
3. Escanear QR code do terminal
4. App abre

### 🤖 Opção 2: Emulador Android

1. Abrir Android Studio
2. Criar/abrir emulador
3. No terminal Expo: Pressionar `a`
4. App abre automaticamente

### 🍎 Opção 3: Emulador iOS (Mac apenas)

1. Xcode instalado
2. No terminal Expo: Pressionar `i`
3. App abre

---

## 🧪 Testar Funcionalidades

### Teste 1: Registrar
- Clique "Registrar"
- Nome: `Seu Nome`
- Email: `seu@email.com`
- Senha: `qualquersenha`
- Enviar
- **Esperado**: Alert de sucesso → HomeScreen

### Teste 2: Logout
- Clique no botão "Sair"
- Confirmar
- **Esperado**: Volta para IntroScreen

### Teste 3: Login
- Clique "Entrar"
- Email: `seu@email.com`
- Senha: `qualquersenha`
- Enviar
- **Esperado**: HomeScreen

### Teste 4: Persistência
- Feche o app completamente
- Abra novamente
- **Esperado**: Direto na HomeScreen (sem login novamente)

### Teste 5: Foto de Perfil
- HomeScreen → Clique "Editar"
- Clique "Galeria"
- Selecione uma foto
- Clique "Salvar"
- **Esperado**: Foto aparece no perfil
- Feche o app
- Abra novamente
- **Esperado**: Foto ainda lá

---

## ⚠️ Troubleshooting

### "Network request failed"
```
1. Verificar se backend está rodando (http://localhost:3000)
2. Verificar IP em .env está correto
3. Se no celular/emulador, firewall pode estar bloqueando
   → Permitir porta 3000 no firewall
4. Tentar novamente
```

### "Cannot find module..."
```bash
npm install
```

### "Database connection refused"
```
1. PostgreSQL está rodando?
   Windows: Services → postgresql → Start
2. Credenciais em .env estão corretas?
3. Banco foi criado?
```

### "Port 3000 already in use"
```powershell
# Encontrar processo
netstat -ano | findstr :3000

# Matar processo (substitua PID)
taskkill /PID 12345 /F
```

### "Photo upload fails"
```
1. Permissão de câmera/galeria foi aceita?
2. Tentar novamente
3. Reiniciar app
```

---

## 📞 Dúvidas?

- Leia `MINHAS_CONTRIBUICOES.md` para entender o que foi feito
- Leia `STATUS_PROJETO.md` para ver o que falta
- Todos os commits têm descrição detalhada no Git

---

## ✅ Checklist Final

Se todos os itens abaixo passam, você conseguiu! ✨

- [ ] Backend rodando em http://localhost:3000
- [ ] Frontend rodando no Expo (QR visível)
- [ ] App abre no celular/emulador
- [ ] Consegue registrar
- [ ] Consegue fazer login
- [ ] Token persiste (logout/login)
- [ ] Consegue adicionar foto
- [ ] Foto persiste (fechar/abrir app)

---

## 🎯 Próximo Passo

Agora que está rodando, você pode:

1. Explorar o código em `src/`
2. Tentar adicionar novas features
3. Criar mais commits
4. Ler `STATUS_PROJETO.md` para saber o que falta

Boa sorte! 🚀
