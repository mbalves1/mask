class InputMask {
  constructor() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.bindEvents();
    }
  }

  bindEvents() {
    document.addEventListener('input', e => this.handleInput(e));
    document.addEventListener('keydown', e => this.handleKeyDown(e));
  }

  handleInput(e) {
    const el = e.target;
    const mask = el.getAttribute('mask');
    if (!mask) return;

    const lower = mask.toLowerCase();
    let formatted;

    const currencyMap = {
      'pt-br': { code: 'BRL', locale: 'pt-BR' },
      usd: { code: 'USD', locale: 'en-US' },
      eur: { code: 'EUR', locale: 'de-DE' }, // pode ajustar para 'fr-FR' ou outro se quiser
      cny: { code: 'CNY', locale: 'zh-CN' },
      mxn: { code: 'MXN', locale: 'es-MX' },
    };

    if (currencyMap[lower]) {
      const { code, locale } = currencyMap[lower];
      formatted = this.formatCurrency(el.value, code, locale);
    } else if (lower === 'cpf') {
      formatted = this.formatCPF(el.value);
    } else {
      formatted = this.applyMask(el.value, mask);
    }

    el.value = formatted;
  }

  handleKeyDown(e) {
    const el = e.target;
    const mask = (el.getAttribute('mask') || '').toLowerCase();

    if (e.key === 'Backspace' && mask === 'cpf') {
      e.preventDefault();

      let raw = el.value.replace(/\D/g, '').slice(0, -1);
      el.value = this.formatCPF(raw);
    }
  }

  applyMask(value, mask) {
    const nums = value.replace(/\D/g, '');
    let out = '';
    let idx = 0;

    for (const ch of mask) {
      if (ch === '#') {
        if (idx < nums.length) {
          out += nums[idx++];
        } else {
          break;
        }
      } else {
        out += ch;
      }
    }

    return out;
  }

  formatCurrency(value, currency, locale = 'en-US') {
    const nums = value.replace(/[^0-9]/g, '');
    if (!nums) return '';
    const n = parseInt(nums, 10);
    if (isNaN(n)) return '';

    return (n / 100).toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    });
  }

  formatCPF(value) {
    const nums = value.replace(/\D/g, '').slice(0, 11);
    let out = '';

    for (let i = 0; i < nums.length; i++) {
      out += nums[i];
      if (i === 2 || i === 5) out += '.';
      else if (i === 8) out += '-';
    }

    return out;
  }
}

export default new InputMask();
