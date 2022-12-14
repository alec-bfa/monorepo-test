import { ReactElement } from "react";
import {
    Control,
    DeepMap,
    FieldError,
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";
import { ThemeConfig } from "react-select";

export interface SelectOption {
    readonly label: string;
    readonly value: string;
}
export const customTheme: ThemeConfig = (theme) => ({
    ...theme,
    borderRadius: 4,
    colors: {
        ...theme.colors,
        primary: "#80b3a5",
        primary25: "rgb(1 102 74 / 25%)",
    },
});

export type SelectFieldProps<TFormValues extends FieldValues> = {
    register: UseFormRegister<TFormValues>;
    control: Control<TFormValues, any>;
    errors?: FieldErrors<TFormValues>;
    name: Path<TFormValues>;
    friendlyName?: string;
    label?: string;
    helpText?: string;
    required?: boolean;
    initialOptions: SelectOption[];
};

export type BasicFieldProps<TFormValues extends FieldValues> = {
    register: UseFormRegister<TFormValues>;
    errors?: FieldErrors<TFormValues>;
    name: Path<TFormValues>;
    friendlyName?: string;
    label?: string;
    helpText?: string;
};
