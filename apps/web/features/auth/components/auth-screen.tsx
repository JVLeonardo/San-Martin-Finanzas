"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent, type ReactNode } from "react";

import { AuthShell } from "@/components/layout";
import {
  Button,
  FormMessage,
  Input,
  OTPInput,
  PasswordInput,
  TextLink,
} from "@/components/ui";

export type AuthScreenKind =
  | "login"
  | "register"
  | "forgot-password"
  | "verification"
  | "new-password"
  | "password-updated";

interface AuthScreenProps {
  screen: AuthScreenKind;
}

interface AuthCopy {
  brandDescription: ReactNode;
  brandTitle: ReactNode;
  description: string;
  title: string;
}

const screenCopy: Record<Exclude<AuthScreenKind, "password-updated">, AuthCopy> = {
  login: {
    brandDescription: "Ingresa para continuar tu proceso en San Martín Finanzas.",
    brandTitle: <>Tu cuenta,<br />siempre a tu alcance</>,
    description: "Continúa con tus datos de acceso.",
    title: "Ingresa a tu cuenta",
  },
  register: {
    brandDescription: "Crea tu cuenta para continuar cuando estés listo.",
    brandTitle: <>Empieza<br />paso a paso</>,
    description: "Completa tus datos para comenzar.",
    title: "Crea tu cuenta",
  },
  "forgot-password": {
    brandDescription: "Te ayudamos a restablecer tu contraseña de forma segura.",
    brandTitle: <>Recupera<br />tu acceso</>,
    description: "Ingresa el correo asociado a tu cuenta para continuar.",
    title: "Recupera tu acceso",
  },
  verification: {
    brandDescription: "Confirma tu identidad con el código que enviamos a tu correo.",
    brandTitle: <>Verifica<br />tu correo</>,
    description: "Ingresa el código de verificación para continuar.",
    title: "Verifica tu correo",
  },
  "new-password": {
    brandDescription: "Elige una contraseña segura para recuperar el acceso a tu cuenta.",
    brandTitle: <>Tu nueva<br />contraseña</>,
    description: "Elige una nueva contraseña para recuperar el acceso a tu cuenta.",
    title: "Crea una nueva contraseña",
  },
};

function AuthFormHeader({ copy }: { copy: AuthCopy }) {
  return (
    <header className="flex flex-col gap-xs">
      <h1 className="font-display text-heading-2 font-semibold text-balance">
        {copy.title}
      </h1>
      <p className="text-body-md text-foreground-muted">{copy.description}</p>
    </header>
  );
}

function FormButton({
  children,
  loading = false,
}: {
  children: ReactNode;
  loading?: boolean;
}) {
  return (
    <Button className="w-full py-xs lg:py-sm" loading={loading} size="L" type="submit">
      {children}
    </Button>
  );
}

function LoginForm({ copy }: { copy: AuthCopy }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      <AuthFormHeader copy={copy} />
      <div className="flex flex-col gap-md">
        <Input
          autoComplete="email"
          id="login-email"
          label="Correo electrónico"
          name="email"
          placeholder="nombre@correo.com"
          required
          type="email"
        />
        <PasswordInput
          autoComplete="current-password"
          id="login-password"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <TextLink emphasis="secondary" href="/recuperar-acceso" size="M">
          ¿Olvidaste tu contraseña?
        </TextLink>
      </div>
      <FormButton>Ingresar</FormButton>
      {submitted ? (
        <FormMessage tone="helper">
          Esta demostración aún no inicia una sesión.
        </FormMessage>
      ) : null}
      <p className="flex flex-wrap justify-center gap-xs text-body-sm text-foreground-muted lg:justify-start">
        <span>¿Aún no tienes una cuenta?</span>
        <TextLink href="/registro" size="S">Comenzar</TextLink>
      </p>
    </form>
  );
}

function RegisterForm({ copy }: { copy: AuthCopy }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") ?? "");
    const confirmation = String(formData.get("password-confirmation") ?? "");

    if (password !== confirmation) {
      setPasswordsMatch(false);
      return;
    }

    startTransition(() => router.push("/verificar"));
  }

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      <AuthFormHeader copy={copy} />
      <div className="flex flex-col gap-md">
        <div className="grid gap-md lg:grid-cols-2">
          <Input id="register-first-name" label="Nombres" name="firstName" placeholder="Ingresa tus nombres" required />
          <Input id="register-last-name" label="Apellidos" name="lastName" placeholder="Ingresa tus apellidos" required />
        </div>
        <Input
          autoComplete="email"
          id="register-email"
          label="Correo electrónico"
          name="email"
          placeholder="nombre@correo.com"
          required
          type="email"
        />
        <PasswordInput
          autoComplete="new-password"
          id="register-password"
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <PasswordInput
          autoComplete="new-password"
          helperText={passwordsMatch ? "Usa una contraseña segura." : "Las contraseñas deben coincidir."}
          id="register-password-confirmation"
          label="Confirma tu contraseña"
          name="password-confirmation"
          placeholder="Ingresa tu contraseña"
          required
          status={passwordsMatch ? "default" : "error"}
        />
      </div>
      <FormButton loading={isPending}>Crear cuenta</FormButton>
      <p className="flex flex-wrap justify-center gap-xs text-body-sm text-foreground-muted lg:justify-start">
        <span>¿Ya tienes una cuenta?</span>
        <TextLink href="/ingresar" size="S">Ingresar</TextLink>
      </p>
    </form>
  );
}

function ForgotPasswordForm({ copy }: { copy: AuthCopy }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="flex flex-col gap-lg"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(() => router.push("/verificar"));
      }}
    >
      <AuthFormHeader copy={copy} />
      <Input
        autoComplete="email"
        id="recovery-email"
        label="Correo electrónico"
        name="email"
        required
        type="email"
      />
      <FormButton loading={isPending}>Continuar</FormButton>
      <TextLink emphasis="secondary" href="/ingresar" size="M">
        Volver a ingresar
      </TextLink>
    </form>
  );
}

function VerificationForm({ copy }: { copy: AuthCopy }) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.length !== 6) {
      setError(true);
      return;
    }

    startTransition(() => router.push("/nueva-contrasena"));
  }

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      <AuthFormHeader copy={copy} />
      <OTPInput
        error={error}
        helperText={error ? "Completa los seis dígitos para continuar." : "Revisa tu bandeja de entrada."}
        label="Código de verificación"
        name="verification-code"
        onChange={(value) => {
          setCode(value);
          setError(false);
        }}
        value={code}
      />
      <FormButton loading={isPending}>Verificar</FormButton>
      <p className="flex flex-wrap justify-center gap-xs text-body-sm text-foreground-muted lg:justify-start">
        <span>¿No recibiste el código?</span>
        <TextLink disabled href="/verificar" size="S">
          Reenviar código
        </TextLink>
      </p>
    </form>
  );
}

function NewPasswordForm({ copy }: { copy: AuthCopy }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("new-password") ?? "");
    const confirmation = String(formData.get("new-password-confirmation") ?? "");

    if (password !== confirmation) {
      setPasswordsMatch(false);
      return;
    }

    startTransition(() => router.push("/contrasena-actualizada"));
  }

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      <AuthFormHeader copy={copy} />
      <div className="flex flex-col gap-md">
        <PasswordInput
          autoComplete="new-password"
          id="new-password"
          label="Nueva contraseña"
          name="new-password"
          placeholder="Ingresa tu contraseña"
          required
        />
        <PasswordInput
          autoComplete="new-password"
          helperText={passwordsMatch ? "Usa una contraseña segura." : "Las contraseñas deben coincidir."}
          id="new-password-confirmation"
          label="Confirma tu contraseña"
          name="new-password-confirmation"
          placeholder="Ingresa tu contraseña"
          required
          status={passwordsMatch ? "default" : "error"}
        />
      </div>
      <FormButton loading={isPending}>Guardar contraseña</FormButton>
    </form>
  );
}

function PasswordUpdatedScreen() {
  const router = useRouter();

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-xl text-center lg:min-h-0">
      <span aria-hidden="true" className="flex size-4xl items-center justify-center rounded-full bg-brand-soft/10 text-heading-3 font-semibold text-brand-soft">
        ✓
      </span>
      <div className="flex flex-col gap-xs">
        <h1 className="font-display text-heading-2 font-semibold">Contraseña actualizada</h1>
        <p className="max-w-[280px] text-body-md text-foreground-muted">
          Ya puedes ingresar nuevamente con tu nueva contraseña.
        </p>
      </div>
      <Button className="w-full py-xs lg:py-sm" onClick={() => router.push("/ingresar")} size="L">
        Ingresar
      </Button>
    </div>
  );
}

export function AuthScreen({ screen }: AuthScreenProps) {
  if (screen === "password-updated") {
    return (
      <AuthShell
        brandDescription="Tu contraseña ha sido actualizada exitosamente."
        brandTitle={<>Listo,<br />todo en orden</>}
      >
        <PasswordUpdatedScreen />
      </AuthShell>
    );
  }

  const copy = screenCopy[screen];

  return (
    <AuthShell brandDescription={copy.brandDescription} brandTitle={copy.brandTitle}>
      {screen === "login" ? <LoginForm copy={copy} /> : null}
      {screen === "register" ? <RegisterForm copy={copy} /> : null}
      {screen === "forgot-password" ? <ForgotPasswordForm copy={copy} /> : null}
      {screen === "verification" ? <VerificationForm copy={copy} /> : null}
      {screen === "new-password" ? <NewPasswordForm copy={copy} /> : null}
    </AuthShell>
  );
}
