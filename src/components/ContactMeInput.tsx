import { type UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  isTextArea: false;
  type: "text" | "email" | "tel" | "password" | "number" | "date" | "time";
  placeholder: string;
} & UseFormRegisterReturn;

type TextAreaProps = {
  isTextArea: true;
  placeholder: string;
} & UseFormRegisterReturn;

type ContactMeInputProps = InputProps | TextAreaProps;

export default function ContactMeInput(props: ContactMeInputProps) {
  const inputClasses =
    "xl:w-4/12 bg-transparent lg:w-6/12 w-9/12 border-b-4 border-l-4 border-black p-3.5 font-family-secondary text-lg font-bold ring-0 placeholder:text-[#8B8B8B] focus:outline-none";

  const { isTextArea, placeholder, ...rest } = props;
  if (isTextArea) {
    return (
      <textarea
        className={`${inputClasses} `}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
  const { type } = props;
  return (
    <input
      type={type}
      className={`${inputClasses}`}
      placeholder={placeholder}
      {...rest}
    />
  );
}
