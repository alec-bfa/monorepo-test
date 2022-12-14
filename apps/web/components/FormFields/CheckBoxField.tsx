import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import { BasicFieldProps } from "./common";

const CheckBoxField = <T extends FieldValues>({
    register,
    errors,
    name,
    friendlyName = name,
    label,
    required = false,
    helpText,
    ...props
}: BasicFieldProps<T> &
    DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);

    return (
        <>
            {helpText && (
                <p
                    id={`${name}HelpBlock`}
                    dangerouslySetInnerHTML={{ __html: helpText }}
                ></p>
            )}
            <div className="form-check">
                <input
                    type="checkbox"
                    className={`form-check-input ${
                        hasError ? "is-invalid" : ""
                    }`}
                    id={name}
                    aria-describedby={helpText ? `${name}HelpBlock` : ""}
                    {...props}
                    {...register(name, { required })}
                />
                <label htmlFor={name} className="form-check-label">
                    {label}
                    {required ? "*" : ""}
                </label>
            </div>
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

export default CheckBoxField;
