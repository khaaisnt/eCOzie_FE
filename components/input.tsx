"use client";

import {
  useId,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type SharedProps = {
  label: string;
  id?: string;
  className?: string;
};

type TextInputProps = SharedProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className"> & {
    as?: "input";
  };

type TextareaProps = SharedProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className"> & {
    as: "textarea";
  };

type InputProps = TextInputProps | TextareaProps;

const fieldClassName =
  "w-full rounded-xl border border-[#d1ddd6] bg-white px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-[#77837c] focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/15";

export default function Input(props: InputProps) {
  const generatedId = useId();

  if (props.as === "textarea") {
    const { as, id, label, className, ...textareaProps } = props;

    return (
      <div data-variant={as} className="flex w-full flex-col gap-1">
        <label htmlFor={id ?? generatedId} className="text-base text-foreground">
          {label}
        </label>
        <textarea
          {...textareaProps}
          id={id ?? generatedId}
          className={`${fieldClassName} min-h-32 resize-y ${className ?? ""}`}
        />
      </div>
    );
  }

  const { as, id, label, className, type = "text", ...inputProps } = props;

  return (
    <div data-variant={as ?? "input"} className="flex w-full flex-col gap-1">
      <label htmlFor={id ?? generatedId} className="text-base text-foreground">
        {label}
      </label>
      <input
        {...inputProps}
        id={id ?? generatedId}
        type={type}
        className={`${fieldClassName} ${className ?? ""}`}
      />
    </div>
  );
}