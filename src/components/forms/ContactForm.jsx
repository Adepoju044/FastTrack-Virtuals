import { toast } from "react-toastify";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import useForm from "@hooks/useForm";

const ContactForm = () => {
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }

      if (!values.message) {
        errors.message = "Message is required";
      } else if (values.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
      }

      return errors;
    },
    onSubmit: (values) => {
      toast.success("Thank you! We'll get back to you soon.");
      console.log("Contact form values:", values);
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Your Name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="john@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        label="Phone Number (Optional)"
        type="tel"
        name="phone"
        placeholder="+1 (555) 000-0000"
        value={values.phone}
        onChange={handleChange}
      />

      <div>
        <label className="block mb-2 text-sm font-medium text-ftvblack dark:text-gray-200">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          className="bg-[#F9FAFB] dark:bg-gray-700 border-0 text-ftvblack dark:text-white text-sm rounded-lg focus:ring-ftvsecondary dark:focus:ring-ftvprimary-300 block w-full p-2.5 outline-none placeholder-gray-400 dark:placeholder-gray-500 ring-1 ring-gray-200 dark:ring-gray-600"
          placeholder="Tell us about your needs..."
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full uppercase">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
