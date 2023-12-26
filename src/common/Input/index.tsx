import { FC } from "react"
import { Controller, useFormContext } from "react-hook-form"
import TextField from '@mui/material/TextField';
import React from "react";


export type InputType = {
  name: string;
  placeholder?: string;
//   fieldText?: string;
//   helperText?: string;
  rules?: any;
  disabled?: boolean;
}

const Input: FC<InputType> = ({ name, placeholder, rules, disabled, ...rest }) => {
    // const { control, formState: { errors } } = useFormContext()
     const { control} = useFormContext()


    // const error = get(errors, `${name}.message`, "")

    return (
        <div className="input-container">
            {/* <div className="input-labels">
                {fieldText ? <div>{fieldText}{{ ...rules }.required && <span className="required">*</span>}{':'}</div> : <div></div>}
                <span>{helperText}</span>
            </div> */}
            <Controller
                name={name}
                 control={control}
                rules={{ ...rules }}
                render={({ field }) => {
                    return (
                        <TextField
                            // variant="filled"
                            placeholder={placeholder}
                            // error={Boolean(error)}
                            {...field}
                            {...rest}
                        />
                    )
                }}
            />
            {/* {
                isString(error) && (
                    <span className="dsm-inputbox-error-msg inline-error-msg">{error}</span>
                )
            } */}
        </div >
    )
}

export default Input;