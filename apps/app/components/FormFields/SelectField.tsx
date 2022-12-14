import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import { BasicFieldProps } from "./common";

const SelectField = <T extends FieldValues>({
    register,
    errors,
    name,
    friendlyName = name,
    label = name,
    required = false,
    helpText,
    children,
    ...props
}: BasicFieldProps<T> &
    DetailedHTMLProps<
        InputHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    >) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);
    return (
        <>
            <label htmlFor={name} className="form-label">
                {label}
                {required ? "*" : ""}
            </label>
            <select
                className={`form-control ${hasError ? "is-invalid" : ""}`}
                id={name}
                {...props}
                {...register(name, { required })}
                aria-describedby={helpText ? `${name}HelpBlock` : ""}
            >
                {children}
            </select>
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

export default SelectField;
