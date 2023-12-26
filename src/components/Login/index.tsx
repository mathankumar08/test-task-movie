import React, { useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import Input from "../../common/Input";
import { Checkbox, FormControlLabel } from "@mui/material";
import ActionButton from "../../common/ActionButton";
import "./styles.css";
import { login } from "../../services/loginService";
import { useUserContext } from "../../context/userContext";

type loginForm = {
  email: string,
  password: string,
}

export const DefaultLogin: loginForm = {
  email: "",
  password: "",
}

function Login() {
  const { setIsAuthenticated } : any= useUserContext()

  const methods = useForm({
    defaultValues: DefaultLogin
  })

  const handleSubmit = async(data: any) => {
    const getlogindetails = await login(data)
    localStorage.setItem("token", getlogindetails)
    setIsAuthenticated(getlogindetails)
  }

  return (
    <FormProvider {...methods}>
      <form className="login-container" onSubmit={methods.handleSubmit(data => handleSubmit(data))}>
        <div className='address-and-contact-form'>
          <h1>Sign In </h1>
          <div className='extra-fields'>
            <Input
              name='email'
              placeholder='Email'
              rules={{
                required: "This field is required"
              }}
            />
            <Input
              name='password'
              placeholder='Password'
              rules={{
                required: "This field is required"
              }}
            />

          </div>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <ActionButton text={"Login"} />
        </div>
      </form>
    </FormProvider>
  );
}

export default Login;
