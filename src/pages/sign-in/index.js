import React from "react";
import { AuthForm, AuthImage } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import swal from "sweetalert";
import { useState } from "react";
import { handleFetchDataFromUrls } from "../../utils";

export const signUpInitialState = {
  email: "",
  password: "",
};

export const signUpSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Must be valid email")
    .max(50, "Email must be 50 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be 6-15 characters long")
    .max(15, "Password must be 6-15 characters long"),
});
const initialState = {
  isLoading: false,
};
const SignIn = () => {
  const [state, setState] = useState(initialState);
  const { isLoading } = state;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: signUpInitialState,
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });
  const onSubmitForm = async (data) => {
    const { email, password } = data;
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await handleFetchDataFromUrls();
    } catch (error) {
      swal({
        type: "danger",
        text: error?.message ?? "Something went wrong!",
        icon: "error",
        timer: 3000,
      });
    } finally {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };
  return (
    <section className=" lg:flex lg:items-center lg:justify-center  ">
      <AuthImage />
      <AuthForm
        {...{
          title: "Welcome back",
          description: "Sign in to your account",
          accountTitle: "Don't have an account?",
          accountLinkText: "Sign Up Now",
          accountLink: "sign-up",
          buttonText: "Sign In",
          register,
          handleSubmit,
          errors,
          onSubmitForm,
          isLoading,
        }}
      />
    </section>
  );
};

export default SignIn;
