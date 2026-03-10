import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox";
import useForm from "@hooks/useForm";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      toast.success("Login successful!");
      console.log("Login values:", values);
    },
  });

  return (
    <section className="mx-auto px-0">
      <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
        <div className="tabletmd:w-6/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden">
          <img
            alt="Login illustration"
            className="h-[680px] w-full tabletmd:object-none object-cover"
            src="/right-column.png"
          />
        </div>

        <div className="tabletmd:w-6/12 mobilelandscape:w-7/12 mobilelg:w-9/12 w-full bg-white tabletmd:px-8 px-4">
          <div className="mobilesm:p-6 p-0 w-full">
            <Link to="/">
              <img
                alt="FastTrack Logo"
                className="mb-10 logo-warm-filter"
                src="/fasttrack-logo.svg"
              />
            </Link>

            <h1 className="text-2xl mobilemd:text-3xl font-bold text-ftvblack tabletmd:text-4xl mb-3">
              Welcome to <span className="text-[#db9523]">FastTrack</span>
            </h1>
            <p className="text-base font-normal text-[#3B4752] mb-4">
              You need to be signed in to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
              <Input
                label="Your email"
                type="email"
                name="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <span
                  className="absolute inset-x-[85%] inset-y-10 text-[#6D7B88] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                  ></i>
                </span>
              </div>

              <div className="flex items-start">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={values.remember}
                  onChange={handleChange}
                />
                <div className="ml-3 text-sm flex justify-between w-full">
                  <label
                    htmlFor="remember"
                    className="font-light text-ftvblack-400"
                  >
                    keep me signed in
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-ftvblack underline font-medium"
                  >
                    Forgot Password
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>

              <p className="text-sm font-normal text-[#3B4752] text-center">
                Haven't joined yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-ftvblack hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
