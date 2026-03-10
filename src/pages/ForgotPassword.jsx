import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import useForm from "@hooks/useForm";

const ForgotPassword = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }
      return errors;
    },
    onSubmit: (values) => {
      toast.success("Password reset link sent to your email!");
      console.log("Forgot password values:", values);
    },
  });

  return (
    <section className="mx-auto px-0 dark:bg-gray-900">
      <div className="flex items-center justify-center min-h-[680px] mobilelandscape:flex-nowrap flex-wrap">
        <div className="tabletmd:w-6/12 mobilelandscape:w-5/12 mobilelandscape:inline-flex hidden">
          <img
            alt="Forgot password illustration"
            className="h-[680px] w-full tabletmd:object-none object-cover"
            src="/right-column.png"
          />
        </div>

        <div className="tabletmd:w-6/12 mobilelandscape:w-7/12 mobilelg:w-9/12 w-full bg-white dark:bg-gray-800 tabletmd:px-8 px-4">
          <div className="mobilesm:p-6 p-0 w-full">
            <img
              alt="FastTrack Logo"
              className="mb-10"
              src="/fasttrack-logo.svg"
            />

            <h1 className="text-2xl mobilemd:text-3xl font-bold text-ftvblack dark:text-white tabletmd:text-4xl mb-3">
              Forgot Your{" "}
              <span className="text-[#6360F1] dark:text-ftvprimary-300">
                Password
              </span>
              ?
            </h1>
            <p className="text-base font-normal text-[#3B4752] dark:text-gray-300 mb-4">
              Enter your email address to reset your password
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

              <div className="flex items-start">
                <div className="ml-3 text-sm">
                  <span className="dark:text-gray-300">
                    I changed my mind,{" "}
                  </span>
                  <Link
                    to="/login"
                    className="text-ftvblack dark:text-ftvprimary-300 underline font-medium"
                  >
                    take me back
                  </Link>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Proceed
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
