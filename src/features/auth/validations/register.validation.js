export function validateRegister(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Nama wajib diisi";
  }

  if (!form.email.trim()) {
    errors.email = "Email wajib diisi";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Format email tidak valid";
  }

  if (!form.password) {
    errors.password = "Password wajib diisi";
  } else if (form.password.length < 8) {
    errors.password = "Password minimal 8 karakter";
  }

  return errors;
}
