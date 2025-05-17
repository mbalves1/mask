# m-mask-lib

Biblioteca leve de máscaras para inputs HTML. Suporte nativo para CPF, moeda brasileira (pt-BR) e máscaras customizadas com `#`.

Ideal para projetos com Vue, React, ou JavaScript puro.

---

## ✨ Funcionalidades

- 📞 Máscara para telefone: `#####-####`
- 🧾 CPF: `mask="cpf"` → `999.999.999-99`
- 💰 Moeda:
  - `mask="pt-br"` → `R$ 1.234,56`
  - `mask="usd"` → `$1,234.56`
  - `mask="eur"` → `1.234,56 €`
  - `mask="cny"` → `￥1,234.56`
  - `mask="mxn"` → `$1,234.56 MXN`
- 🛠️ Máscaras personalizadas com `#` para números (exemplo: `###.###.###-##` para CPF manual, `#####-####` para CEP)
- ✂️ Permite apagar caractere por caractere sem travar o campo, especialmente no CPF
- 🔄 Atualização dinâmica conforme o usuário digita

---

## 🚀 Instalação

```bash
npm install m-mask-lib
