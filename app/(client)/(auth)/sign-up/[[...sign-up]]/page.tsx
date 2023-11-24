import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: " bg-blue hover:bg-slate-400 text-sm normal-case",
        },
      }}
    />
  );
}
