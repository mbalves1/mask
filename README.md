# m-mask-lib

Biblioteca leve de máscaras para inputs HTML. Suporte nativo para CPF, moedas (BRL, USD, EUR, CNY, MXN), e máscaras customizadas com `#`.

Ideal para projetos com Vue, React, Nuxt, ou JavaScript puro.

---

## ✨ Funcionalidades

- 📞 Máscara para telefone: `#####-####`
- 🧾 CPF: `mask="cpf"` → `999.999.999-99`
- 💰 Moedas:
  - `mask="pt-br"` → Real brasileiro (R$ 1.234,56)
  - `mask="usd"` → Dólar americano ($1,234.56)
  - `mask="eur"` → Euro (€1.234,56)
  - `mask="cny"` → Yuan (¥1,234.56)
  - `mask="mxn"` → Peso mexicano ($1,234.56)
- 🛠️ Máscaras personalizadas com `#` (exemplo: `###.###.###-##`)

---

## 🚀 Instalação

```bash
npm install m-mask-lib
```

## 🎯 Uso Básico

Importe a biblioteca e adicione o atributo `mask` no input:

```html
<input mask="cpf" />
<input mask="pt-br" />
<input mask="###-####" />
```

A biblioteca automaticamente escuta os eventos e formata o valor.

## 📦 Integração com Nuxt 3

Para evitar erros no SSR, siga os passos abaixo:

1. Crie a pasta `plugins` na raiz do seu projeto (se ainda não existir):

```bash
mkdir plugins
```

2. Dentro da pasta `plugins`, crie o arquivo `m-mask-lib.client.js` com o seguinte conteúdo:

```js
// plugins/m-mask-lib.client.js
import 'm-mask-lib';
```

3. Registre o plugin no seu `nuxt.config.ts` ou `nuxt.config.js`:

```ts
export default defineNuxtConfig({
  plugins: [
    '~/plugins/m-mask-lib.client.js',
  ],
});
```

4. Use normalmente em seus componentes Vue/Nuxt:

```vue
<template>
  <input mask="cpf" v-model="cpf" placeholder="Digite o CPF" />
  <input mask="pt-br" v-model="valor" placeholder="Digite um valor em reais" />
</template>

<script setup>
import { ref } from 'vue';

const cpf = ref('');
const valor = ref('');
</script>
```

## ⚙️ Como funciona internamente

* Detecta o atributo `mask` no input.
* Aplica máscara CPF, moeda ou personalizada.
* Escuta eventos `input` e `keydown` para formatação dinâmica.
* Corrige edição para CPF no backspace.

## 🚩 Avisos

* Roda somente no navegador (`window` e `document` disponíveis).
* Em SSR, sempre importe como plugin cliente para evitar erros.