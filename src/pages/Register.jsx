import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Checkbox from "@components/ui/Checkbox";
import useForm from "@hooks/useForm";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: false,
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
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      if (!values.terms) {
        errors.terms = "You must agree to the terms";
      }
      return errors;
    },
    onSubmit: (values) => {
      toast.success("Registration successful!");
      console.log("Register values:", values);
    },
  });

  return (
    <section className="mx-auto px-0 dark:bg-gray-900">
      <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
        <div className="tabletmd:w-6/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden">
          <img
            alt="Register illustration"
            className="h-[680px] w-full tabletmd:object-none object-cover"
            src="/right-column.png"
          />
        </div>

        <div className="tabletmd:w-6/12 mobilelandscape:w-7/12 mobilelg:w-9/12 w-full bg-white dark:bg-gray-800 tabletmd:px-8 px-4">
          <div className="mobilesm:p-6 p-0 w-full">
            <Link to="/">
              <img
                alt="FastTrack Logo"
                className="mb-10 logo-warm-filter"
                src="/fasttrack-logo.svg"
              />
            </Link>

            <h1 className="text-2xl mobilemd:text-3xl font-bold text-ftvblack dark:text-white tabletmd:text-4xl mb-3">
              Welcome to{" "}
              <span className="text-[#db9523] dark:text-ftvprimary-300">
                FastTrack
              </span>
            </h1>
            <p className="text-base font-normal text-[#3B4752] dark:text-gray-300 mb-4">
              Create an account to get started.
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
                  className="absolute inset-x-[85%] inset-y-10 text-[#6D7B88] dark:text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                  ></i>
                </span>
              </div>

              <div className="flex items-start">
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={values.terms}
                  onChange={handleChange}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-ftvblack-400 dark:text-gray-300"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-ftvprimary dark:text-ftvprimary-300 hover:underline"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-ftvprimary dark:text-ftvprimary-300 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                  {errors.terms && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.terms}
                    </p>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign up
              </Button>

              <p className="text-sm font-normal text-[#3B4752] dark:text-gray-300 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-ftvblack dark:text-ftvprimary-300 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
