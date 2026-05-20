/* =====================================================
   CONTACT.JS — Form validation & async submission
   ===================================================== */

const FORMSPREE_ID = 'xdkgbyqn'; // Replace with your Formspree form ID

function validatePhone(val) {
  return /^1[3-9]\d{9}$/.test(val.trim());
}

function setError(input, msg) {
  const group = input.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  input.classList.add('error');
  const errEl = group.querySelector('.error-msg');
  if (errEl) errEl.textContent = msg;
}

function clearError(input) {
  const group = input.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
  input.classList.remove('error');
}

function validateForm(form) {
  let valid = true;
  const name = form.querySelector('#f-name');
  const phone = form.querySelector('#f-phone');
  const hotel = form.querySelector('#f-hotel');
  const platform = form.querySelector('#f-platform');
  const message = form.querySelector('#f-message');

  // Name
  if (!name.value.trim() || name.value.trim().length < 2) {
    setError(name, '请输入真实姓名（至少2个字）');
    valid = false;
  } else clearError(name);

  // Phone
  if (!validatePhone(phone.value)) {
    setError(phone, '请输入正确的手机号码');
    valid = false;
  } else clearError(phone);

  // Hotel
  if (!hotel.value.trim() || hotel.value.trim().length < 2) {
    setError(hotel, '请输入酒店/民宿名称');
    valid = false;
  } else clearError(hotel);

  // Platform
  if (!platform.value) {
    setError(platform, '请选择主做平台');
    valid = false;
  } else clearError(platform);

  // Message
  if (!message.value.trim() || message.value.trim().length < 10) {
    setError(message, '请简要描述您的需求（至少10字）');
    valid = false;
  } else clearError(message);

  return valid;
}

async function submitForm(form) {
  const btn = form.querySelector('.form-submit-btn');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = '提交中…';

  const data = new FormData(form);

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      showSuccess(form);
    } else {
      const json = await res.json().catch(() => ({}));
      const msg = json.errors?.[0]?.message || '提交失败，请稍后重试';
      alert(msg);
      btn.disabled = false;
      btn.textContent = originalText;
    }
  } catch (err) {
    console.error('Form submission error:', err);
    alert('网络错误，请检查网络连接后重试');
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function showSuccess(form) {
  const wrapper = form.closest('.form-wrapper') || form.parentElement;
  const successEl = wrapper?.querySelector('.form-success');
  if (successEl) {
    form.style.display = 'none';
    successEl.classList.add('visible');
  }
  form.reset();
}

function initCopyWechat() {
  const btn = document.getElementById('copy-wechat');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const id = btn.dataset.wechat || 'yituops2024';
    try {
      await navigator.clipboard.writeText(id);
      const orig = btn.innerHTML;
      btn.textContent = '✓ 已复制微信号！';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    } catch {
      prompt('请复制以下微信号：', id);
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Real-time validation on blur
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value.trim()) clearError(input);
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateForm(form)) return;
    await submitForm(form);
  });

  initCopyWechat();
}

document.addEventListener('DOMContentLoaded', initContactForm);
