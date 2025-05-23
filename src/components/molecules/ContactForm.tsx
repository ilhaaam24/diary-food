import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { Button } from "../atoms/Button";

// Inline Textarea component (moved from atoms/Textarea)
const ElegantTextarea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }
> = ({ error, className = "", ...props }) => (
  <div className="w-full relative">
    <textarea
      className={`w-full px-2 py-2 border border-gray-200 bg-white text-gray-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--custom-orange)] min-h-[120px] resize-y shadow-sm transition-all duration-200 ${
        error ? "border-red-500" : ""
      } ${className}`}
      {...props}
    />
    {error && (
      <p className="mt-1 text-sm text-red-500 absolute left-0 -bottom-6">
        {error}
      </p>
    )}
  </div>
);

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name) newErrors.name = "Full name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.subject) newErrors.subject = "Subject is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setForm(initialState);
      setSubmitted(false);
      alert("Your message has been sent! We will contact you soon.");
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-sm p-8 w-full flex flex-col col-span-3 gap-6 border border-gray-100"
    >
      <div>
        <h2 className="text-gray-900 text-lg font-semibold mb-1">
          Leave A Message
        </h2>
        <p className="text-gray-500 text-sm ">
          If you have any questions, feedback, or suggestions, please fill out
          the form below and our team will get back to you soon.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 text-sm">
        <div>
          <Label htmlFor="name" required>
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            className="bg-white rounded-sm shadow-sm"
          />
        </div>
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your active email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            className="bg-white rounded-sm shadow-sm"
          />
        </div>
        <div>
          <Label htmlFor="subject" required>
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Message subject"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
            className="bg-white rounded-sm shadow-sm"
          />
        </div>
        <div>
          <Label htmlFor="message" required>
            Message
          </Label>
          <ElegantTextarea
            id="message"
            name="message"
            placeholder="Write your message or question here..."
            value={form.message}
            onChange={handleChange}
            error={errors.message}
          />
        </div>
        <Button
          type="submit"
          disabled={submitted}
          className="w-fit mt-2 py-3 px-5 text-xs font-semibold rounded-sm shadow-md bg-[var(--custom-orange)] hover:scale-[1.01] hover:shadow-md transition-all duration-200 text-white"
        >
          {submitted ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
