import { AppButton } from "../../components/forms/app-button";
import { Divider } from "../../components/forms/Divider";
import { GoogleAuthBtn } from "../../components/forms/GoogleAuthBtn";
import { Input } from "../../components/forms/Input";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <h1 className="text-[#202430] text-center text-[32px] font-semibold !leading-[160%]">
        Welcome back,dude
      </h1>
      <GoogleAuthBtn title="Login with Google" />
      <Divider name="login with email" />
      <Input id="email" label="Email Address" />
      <Input id="password" label="Password" />
      <div className="inline-flex items-center gap-4">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label
          htmlFor="checkbox"
          className="text-neutrals-80 text-base font-normal !leading-[160%]"
        >
          Remember me
        </label>
      </div>
      <AppButton type="submit" name="Login" />
      {/* Already have account */}
      <div className="flex justify-start items-center gap-2">
        <span className="text-neutrals-80 text-base font-normal !leading-[160%]">
          Don&apos;t have an account?
        </span>
        <Link
          to="/sign-up"
          className="text-primary text-base font-semibold !leading-[160%]"
        >
          Sign up
        </Link>
      </div>
    </>
  );
}
