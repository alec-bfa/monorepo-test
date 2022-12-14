import PhoneInput, {
    DefaultInputComponentProps,
    isValidPhoneNumber,
} from "react-phone-number-input";
import { Controller, FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import { BasicFieldProps } from "./common";
import "react-phone-number-input/style.css";

const PhoneField = <T extends FieldValues>({
    register,
    control,
    errors,
    name,
    friendlyName = name,
    label,
    required = false,
    helpText,
    ...props
}: BasicFieldProps<T> & DefaultInputComponentProps) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);
    return (
        <>
            {label && (
                <label htmlFor={name} className="form-label">
                    {label}
                    {required ? "*" : ""}
                </label>
            )}
            <Controller<T, typeof name>
                name={name}
                control={control}
                rules={{
                    validate: (value) =>
                        !!value && isValidPhoneNumber(value as string),
                    required,
                }}
                render={({ field: { onChange, value } }) => (
                    <PhoneInput
                        {...props}
                        className={`form-control ${
                            hasError ? "is-invalid" : ""
                        }`}
                        aria-describedby={helpText ? `${name}HelpBlock` : ""}
                        value={value ? (value as string) : ""}
                        onChange={onChange}
                        defaultCountry="AU"
                        id={name}
                    />
                )}
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

export default PhoneField;
