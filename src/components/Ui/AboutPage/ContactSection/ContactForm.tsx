"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Send } from "lucide-react";
import Input from "@/src/components/Common/Form/Input";
import Textarea from "@/src/components/Common/Form/Textarea";

interface ContactFormValues {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  industry: string;
  companySize: string;
  automate: string;
  message: string;
}

const INDUSTRIES = [
  "Automotive",
  "Electronics",
  "Food & Beverage",
  "Pharmaceuticals",
  "Textile & Apparel",
  "Packaging",
  "Chemicals",
  "Heavy Manufacturing",
  "Other",
];

const COMPANY_SIZES = ["1-50", "51-200", "201-500", "501-1000", "1000+"];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    // Static marketing site — no backend endpoint yet, so we just
    // acknowledge the submission locally.
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Consultation request:", data);
    toast.success("Thanks — we'll be in touch within one business day.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          text="fullName"
          placeholder="Jane Doe"
          register={register("fullName", { required: "Full name is required" })}
          errors={errors}
        />
        <Input
          label="Company Name"
          text="companyName"
          placeholder="Acme Manufacturing"
          register={register("companyName", { required: "Company name is required" })}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Work Email"
          text="workEmail"
          type="email"
          placeholder="you@company.com"
          register={register("workEmail", { required: "Work email is required" })}
          errors={errors}
        />
        <Input
          label="Phone Number"
          text="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          required={false}
          register={register("phone")}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="industry" className="text-sm font-medium text-gray-700">
            Industry<span className="text-red-500 ml-0.5">*</span>
          </label>
          <select
            id="industry"
            {...register("industry", { required: "Please select an industry" })}
            defaultValue=""
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-white ${
              errors.industry ? "border-red-400" : "border-gray-300"
            }`}
          >
            <option value="" disabled>
              Select an industry
            </option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.industry?.message && (
            <span className="text-xs text-red-500">{errors.industry.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="companySize" className="text-sm font-medium text-gray-700">
            Company Size
          </label>
          <select
            id="companySize"
            {...register("companySize")}
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          >
            <option value="" disabled>
              Select company size
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {s} employees
              </option>
            ))}
          </select>
        </div>
      </div>

      <Textarea
        label="What are you looking to automate?"
        text="automate"
        placeholder="Tell us about your production line, pain points, or goals..."
        rows={3}
        register={register("automate", { required: "This field helps us prepare for the call" })}
        errors={errors}
      />

      <Textarea
        label="Message"
        text="message"
        placeholder="Anything else we should know?"
        rows={3}
        required={false}
        register={register("message")}
        errors={errors}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Request a Consultation"}
        <Send size={16} />
      </button>
    </form>
  );
};

export default ContactForm;
