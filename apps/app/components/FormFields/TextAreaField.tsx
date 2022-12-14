import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import { BasicFieldProps } from "./common";

const TextAreaField = <T extends FieldValues>({
    register,
    errors,
    name,
    friendlyName = name,
    label = name,
    required = false,
    helpText,
    maxLength,
    ...props
}: BasicFieldProps<T> &
    DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);

    return (
        <>
            <label htmlFor={name} className="form-label">
                {label}
                {required ? "*" : ""}
            </label>
            <textarea
                className={`form-control ${hasError ? "is-invalid" : ""}`}
                id={name}
                {...props}
                {...register(name, { required })}
                aria-describedby={helpText ? `${name}HelpBlock` : ""}
                maxLength={maxLength}
            />
            {helpText && (
                <div
                    id={`${name}HelpBlock`}
                    className="form-text"
                    dangerouslySetInnerHTML={{ __html: helpText }}
                ></div>
            )}
            {hasError && errorMessages.message && (
                <div className="invalid-feedback">{errorMessages.message}</div>
            )}
            {hasError && errorMessages.type === "required" && (
                <div className="invalid-feedback">
                    {friendlyName} is required.
                </div>
            )}
        </>
    );
};

export default TextAreaField;
