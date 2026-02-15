import { useState } from "react";
import { validateRegister } from "../validations/register.validation";
import { registerUser } from "../services/auth.service";

export function useRegister(router) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const submit = async (form) => {
    const validationErrors = validateRegister(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const data = await registerUser(form);
    setLoading(false);

    if (data.message?.toLowerCase().includes("email")) {
      setErrors({ email: data.message });
      return;
    }

    router.push("/login?registered=true");
  };

  return { submit, loading, errors };
}
