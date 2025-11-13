# 🚀 Guia de Sincronização - Para Contribuidores

**Para:** Contribuidores  
**Quando:** Depois de fazer `git pull` e atualizar com as mudanças do dia 13/11/2025

---

## 📋 O Que Mudou Hoje?

Novos arquivos e features adicionadas:
- ✨ **Foto de Perfil** - Upload de foto via câmera/galeria
- 💾 **Persistência de Foto** - Foto salva localmente (AsyncStorage)
- 📄 **Documentação** - STATUS_PROJETO.md e GUIA_SETUP_USUARIOS.md
- 🎯 **Perfil como Tab Padrão** - Ao fazer login, começa em Perfil

**Importante:** `BudgetGeneratorWEB/` NÃO está no repositório (ignorado no .gitignore)

---

## ✅ Passos Pós-Pull (5 minutos)

### 1️⃣ Sincronizar Código

```bash
git pull origin main
```

**Esperado:** Ver mensagens de arquivos modificados/criados

### 2️⃣ Instalar Novas Dependências

```bash
npm install
```

**Por quê:** Adicionamos `expo-image-picker` para foto

**Esperado:** Mensagem de sucesso, nenhum erro

### 3️⃣ Limpar Cache Expo

```bash
npm start -- --clear
```

ou pressione `c` no terminal Expo se já estiver rodando

**Por quê:** Garante que o cache antigo não interfere

### 4️⃣ Recarregar no Celular/Emulador

**No Expo Go (celular):**
- Escanear novo QR code

**No Emulador:**
- Pressione `r` para reload completo
- Se não funcionar: feche e abra de novo

---

## 🔍 Validar Sincronização

Seu app deve estar **100% igual** ao novo:

- [ ] Login funciona
- [ ] Perfil é a primeira tab (não Orçamentos)
- [ ] Botão "Editar" aparece no Perfil
- [ ] Modal de edição tem campos: Email, Senha, Foto
- [ ] Consegue selecionar foto (Câmera/Galeria)
- [ ] Foto aparece após selecionar
- [ ] Logout e Login de novo
- [ ] Foto ainda está lá (persistência funcionando!)

---

## ⚠️ Troubleshooting Pós-Sincronização

### ❌ "Module not found: expo-image-picker"

```bash
npm install expo-image-picker
```

Depois reinicie Expo.

### ❌ "App mostra apenas 'Home' no centro"

Você puxou código antigo! Faça:
```bash
git pull origin main
```

Certifique-se que `AppStack.tsx` tem a importação correta.

### ❌ "Network request failed" ao fazer login

**Solução:**
1. Pergunte para Heitor qual é o IP da máquina dele (onde backend está rodando)
2. Atualize seu `.env` com o IP correto:
   ```dotenv
   API_BASE_URL=http://IP_DO_HEITOR:3000/api
   ```
3. Reinicie Expo

**Como descobrir o IP:**
- Pergunte ao Heitor: "Qual é seu IP da rede local?"
- Ou ele pode mandar o resultado de: `ipconfig | findstr IPv4` (Windows)

### ❌ "Permission denied" ao tentar selecionar foto

- Permita acesso à câmera/galeria quando a app pedir
- Vá em Settings do seu celular/emulador
- Procure pelas permissões do app Expo Go

### ❌ Foto desaparece após logout/login

Isso **não deve acontecer!** Teste:
1. Faça login
2. Adicione uma foto
3. Clique em "Sair"
4. Faça login de novo
5. A foto deve estar lá

Se não estiver:
- Verificar se tem espaço na memória
- Reiniciar app completamente
- Se persiste, avise ao Heitor (pode ser bug)

---

## 📖 Entender o Código Novo

Leia estes arquivos para entender as mudanças:

1. **`src/screens/Home/HomeScreen.tsx`** - Adicionado foto upload e persistência
   - Função `loadSavedPhoto()` - Carrega foto ao abrir app
   - Função `savePhotoToStorage()` - Salva foto no AsyncStorage
   - Função `deleteOldPhoto()` - Remove foto antiga quando nova é adicionada

2. **`src/navigation/AppStack.tsx`** - Agora importa HomeScreen real

3. **`STATUS_PROJETO.md`** - Veja o progresso e o que falta fazer

---

## 🤝 Se Algo Não Funcionar

1. Tente os passos novamente (especialmente `npm install`)
2. Limpe cache: `npm start -- --clear`
3. Feche app completamente e reabra
4. Se ainda não funcionar, pergunte ao Heitor!

---

## 🎯 Próximos Passos Para Desenvolver

Agora que está sincronizado, você pode:

1. **Testar Foto** - Confirme que funciona como esperado
2. **Explorar o Código** - Entenda como AsyncStorage salva a foto
3. **Criar Uma Nova Feature** - Baseado no que viu
4. **Fazer Seu Próprio Commit** - Melhore algo e compartilhe

**Sugestão:** Leia `STATUS_PROJETO.md` para ver o que precisa ser feito depois!

---

## 📞 Dúvidas Frequentes

**P: Preciso do BudgetGeneratorWEB no meu repo?**  
R: Não! Está ignorado no `.gitignore`. Você só precisa do frontend (React Native).

**P: Onde está o backend?**  
R: Rodando na máquina do Heitor em `http://[IP_DELE]:3000/api`

**P: Como adiciono uma nova feature?**  
R: Faça as mudanças → Teste → `git add .` → `git commit -m "..."` → `git push`

**P: Posso usar branches?**  
R: Sim! Use `git checkout -b minha-feature` → trabalhe → `git push origin minha-feature` → crie Pull Request

---

Boa sincronização! 🚀
