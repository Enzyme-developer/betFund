"use client";
import React from "react";
import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import Image from "next/image";
import Link from "next/link";
import Verification from "./Verification";
import useFormStore from "../store/formStore";
import SignupStepOne from "./SignupStepOne";
import CreateAccount from "./CreateAccount";

function Signup() {
  const { step } = useFormStore();

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <Image
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>

              {step === 1 && (
                <div>
                  <SignupStepOne />
                </div>
              )}
              {step === 2 && (
                <div>
                  <Verification />
                </div>
              )}
              {step === 3 && (
                <div>
                  <CreateAccount />
                </div>
              )}
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-primary dark:text-purple-400 hover:underline"
                  href="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Signup;
