import { Controller, FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import Select, { Props } from "react-select";
import { GroupBase, StylesConfig } from "react-select";
import { useState } from "react";
import { customTheme, SelectOption, SelectFieldProps } from "./common";

const customStyles: StylesConfig<
    SelectOption,
    true,
    GroupBase<SelectOption>
> = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "#80b3a5" : "#ced4da",
        boxShadow: state.isFocused ? "0 0 0 0.25rem rgb(1 102 74 / 25%)" : "",
    }),
};

const MultiSelectField = <T extends FieldValues>({
    register,
    control,
    errors,
    name,
    friendlyName = name,
    label = name,
    required = false,
    helpText,
    initialOptions,
    ...props
}: SelectFieldProps<T> &
    Props<SelectOption, true, GroupBase<SelectOption>>) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);
    const [options, setOptions] = useState(initialOptions || []);

    return (
        <>
            <label htmlFor={name} className="form-label">
                {label}
                {required ? "*" : ""}
            </label>
            <Controller<T, typeof name>
                name={name}
                control={control}
                rules={{ required: required }}
                render={({ field: { ref, onChange, onBlur, value, name } }) => {
                    return (
                        <Select<SelectOption, true, GroupBase<SelectOption>>
                            className={`${
                                hasError ? "form-control is-invalid" : ""
                            }`}
                            ref={(selectRef) => {
                                !!selectRef && ref(selectRef.inputRef);
                            }}
                            placeholder={<div>Please select 1 or more</div>}
                            onBlur={onBlur}
                            isMulti={true}
                            defaultInputValue={""}
                            styles={customStyles}
                            theme={customTheme}
                            id={name}
                            {...props}
                            aria-describedby={
                                helpText ? `${name}HelpBlock` : ""
                            }
                            options={options}
                            value={options.filter((option) =>
                                value
                                    ? (value as string[]).includes(option.value)
                                    : ""
                            )}
                            onChange={(selectedOptions, action) => {
                                onChange(
                                    selectedOptions
                                        ? selectedOptions.map(
                                              (option) => option.value
                                          )
                                        : []
                                );
                            }}
                        />
                    );
                }}
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

export default MultiSelectField;
