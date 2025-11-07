import { useForm } from "react-hook-form";
import ContactMeInput from "./ContactMeInput";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}
export default function ContactMeForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleSubmitForm() {
    if (ref.current) {
      setIsSubmitting(true);
      toast.promise(
        emailjs
          .sendForm(
            "service_3hntpo5",
            "template_p5lf7z8",
            ref.current,
            "dFT4fUkPFG8hO_s1v",
          )
          .finally(() => {
            setIsSubmitting(false);
          }),
        {
          loading: "Loading",
          success: "Message sent successfully",
          error:
            "Error when sending the message, please try again or contact me directly ahmedmamdoh.cs@gmail.com",
        },
      );
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  return (
    <form ref={ref} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="flex flex-col items-center justify-center gap-y-14">
        <ContactMeInput
          isTextArea={false}
          type="text"
          placeholder="ENTER YOUR NAME*"
          {...register("name", { required: "Name is required" })}
        />
        <ContactMeInput
          isTextArea={false}
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
        />

        <ContactMeInput
          isTextArea={true}
          placeholder="ENTER YOUR MESSAGE*"
          {...register("message", { required: "Message is required" })}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8 pt-6 pb-16">
        <p className="text-lg text-red-500">
          {errors?.name?.message ||
            errors.email?.message ||
            errors.message?.message}
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer border-x-4 px-16 py-3 font-family-secondary text-lg font-bold transition-all duration-300 hover:px-8"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
