import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./index";

import { ReactNode } from "react";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  options?: any[];
  description?: string;
  control: Control<T>;
  required?: boolean;
}

interface ChildrenProps<T extends FieldValues> extends Props<T> {
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

const CustomFormField = <T extends FieldValues>(
  props: Readonly<ChildrenProps<T>>
) => {
  const { name, label, description, control, children, required } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label}
              {required && <span className=" text-red-400">*</span>}
            </FormLabel>
          )}
          <FormControl>{children(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
