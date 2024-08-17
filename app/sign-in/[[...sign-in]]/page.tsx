import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex text-center justify-center h-screen">
      <div className="mt-20">
        <SignIn />
      </div>
    </div>
  );
}