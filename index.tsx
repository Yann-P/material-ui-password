

import { IconButton, InputAdornment, TextField, TextFieldProps } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import React from "react";

export function PasswordField (props: TextFieldProps) {
    const [show, setShow] = React.useState(false);
    return (
      <TextField
        {...props}
        type={show ? "text" : "password"}
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={"Toggle password visibility"}
                onClick={() => setShow(!show)}
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };