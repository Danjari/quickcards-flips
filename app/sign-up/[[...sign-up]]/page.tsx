import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex  justify-center ">
      <div className="mt-20">
        <SignUp />
      </div>
    </div>
  );
}