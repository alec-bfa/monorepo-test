import { Controller, FieldError, FieldValues } from "react-hook-form";
import get from "lodash.get";
import CreatableSelect, { CreatableProps } from "react-select/creatable";
import { GroupBase, SingleValue, StylesConfig } from "react-select";
import { useState } from "react";
import { customTheme, SelectOption, SelectFieldProps } from "./common";

const customStyles: StylesConfig<
    SelectOption,
    false,
    GroupBase<SelectOption>
> = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "#80b3a5" : "#ced4da",
        boxShadow: state.isFocused ? "0 0 0 0.25rem rgb(1 102 74 / 25%)" : "",
    }),
};
const CreatableSelectField = <T extends FieldValues>({
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
    CreatableProps<SelectOption, false, GroupBase<SelectOption>>) => {
    const errorMessages = get(errors, name) as FieldError;
    const hasError = !!(errors && errorMessages);
    const [options, setOptions] = useState(initialOptions);

    const updateOptions = (selectedOption: SingleValue<SelectOption>) => {
        if (!selectedOption) {
            setOptions(initialOptions);
        } else {
            setOptions(
                initialOptions
                    .concat([selectedOption])
                    .filter(
                        (value, index, self) => self.indexOf(value) === index
                    )
            );
        }
    };
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
                        <CreatableSelect<
                            SelectOption,
                            false,
                            GroupBase<SelectOption>
                        >
                            className={`${
                                hasError ? "form-control is-invalid" : ""
                            }`}
                            ref={(selectRef) => {
                                !!selectRef && ref(selectRef.inputRef);
                            }}
                            placeholder={
                                <div>Type to create your own option</div>
                            }
                            onBlur={onBlur}
                            isMulti={false}
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
                            onChange={(selectedOption) => {
                                updateOptions(selectedOption);
                                onChange(selectedOption?.value);
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

export default CreatableSelectField;
