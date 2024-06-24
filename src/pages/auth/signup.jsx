import { AppButton } from "../../components/forms/app-button";
import { Divider } from "../../components/forms/Divider";
import { GoogleAuthBtn } from "../../components/forms/GoogleAuthBtn";
import { Input } from "../../components/forms/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <>
      <h1 className="text-[#202430] text-center text-[32px] font-semibold !leading-[160%]">
        Get more opportunities {email} {password} {fullName}
      </h1>
      <GoogleAuthBtn title="Sign Up with Google" />
      <Divider name="sign up with email" />
      <Input id="sign-up-full-name" label="Full Name" onChange={setFullName} />
      <Input id="sign-up-email" label="Email Address" onChange={setEmail} />
      <Input id="sign-up-password" label="Password" onChange={setPassword} />

      <AppButton type="submit" name="Login" />
      {/* Already have account */}
      <div className="flex justify-start items-center gap-2">
        <span className="text-neutrals-80 text-base font-normal !leading-[160%]">
          Already have an account?
        </span>
        <Link
          to="/login"
          className="text-primary text-base font-semibold !leading-[160%]"
        >
          Login
        </Link>
      </div>
    </>
  );
}
