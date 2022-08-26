import styles from "./signUpModal.module.css";
import Modal from "react-bootstrap/Modal";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { InputForms } from "../../objects/inputForms";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { handleSignup, handleLogin, checkAge, checkUsername, checkPasswordValidBool, checkEmailValidBool } from "../../logic/auth";
import { setCookie } from "cookies-next";

// set minimum age
const age = 18;

export const SignUpModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [old, setOld] = useState(false);
  const [original, setOriginal] = useState(null);
  const [disabled, setDisabled] =  useState(null);
  const [validPassword, setValidPassword] = useState(null);
  const [validEmail, setValidEmail] = useState(null);

  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler, shows password as text.
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  const router = useRouter();
  
  
  // handle SignUp
  const signUp = async () => {
    let response = await handleSignup(username, password, dateOfBirth, email);
    console.log(response);
    if (response.hasOwnProperty("id"))
    {
      // log user in
      let token = await handleLogin(username, password);

      // set Cookie
      // set expiry
      const expDate = new Date();
      expDate.setMonth(expDate.getMonth() + 1);
  
      const OPTIONS = {
        expires: expDate
      }

      // set the cookie
      // save res
      setCookie("token", token, OPTIONS);

      // close modal
      props.handleCloseSignUp();

      // refresh
      router.reload(window.location.pathname);
    }
    else
    {
      setOriginal(false);
      setDisabled(false);
      setValidPassword(false);
      setValidEmail(false);
    }

  }
  // check if age added is above threshold
  useEffect(
    () => {
      setOld(checkAge(dateOfBirth, 18));
    },
    [dateOfBirth]
  )

  // check username is original
  useEffect(
    () => {
      setOriginal(checkUsername(username));
    },
    [username]
  )

  // check username is valid
  useEffect(
    () => {
      setValidPassword(checkPasswordValidBool(password));
    },
    [password]
  )

  // check password
  useEffect(
    () => {
      setValidEmail(checkEmailValidBool(email));
    },
    [email]
  )

  // toggle disabled
  useEffect(
    () => {
      if (original && old && validPassword, validEmail)
      {
        setDisabled(false);
      }
      else
      {
        setDisabled(true);
      };
    },
    [old, original, validPassword, validEmail]
  )
  

  return (
    <>
      <Modal show={props.showSignUp} onHide={props.handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForms
            passwordShown={passwordShown}
            togglePassword={togglePassword}
            setUsername={setUsername}
            usernameValid={original}
            setPassword={setPassword}
            passwordValid={validPassword}
            setDateOfBirth={setDateOfBirth}
            ageValid={old}
            setEmail={setEmail}
            emailValid={validEmail}
            signUpForm={true}
          />
          <div className={styles.agreeStatementContainer}>
            <p>
              By clicking Sign Up, you are agreeing to Bubble’s{" "}
              <a href="/404" className={styles.formLink}>
                Terms of service
              </a>{" "}
              and are acknowledging our{" "}
              <a href="/404" className={styles.formLink}>
                Privacy Notice.
              </a>
            </p>
          </div>

          <div className="d-grid gap-2 mt-4 mb-2">
            <ButtonBootstrap
              disabled={disabled}
              primaryWide={true}
              text="Sign Up"
              onClick={() => {
                signUp(),
                  props.handleCloseSignUp();
              }}
              type="submit"
            ></ButtonBootstrap>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

