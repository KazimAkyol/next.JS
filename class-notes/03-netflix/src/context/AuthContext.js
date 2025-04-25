"use client";
import React, { createContext } from "react";
import { auth } from "@/auth/firebase";
import { useRouter } from "next/navigation";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//* auth(firebase) islemlerini yapacagimiz context alani actik:
export const YetkiContext = createContext();

const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  //* yeni bir kullanici olusturmak icin kullanilan firebase metodu

  const createUser = async (email, password, displayName) => {
    try {
      //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu
      await createUserWithEmailAndPassword(auth, email, password);

      toastSuccessNotify("Register basarili");

      router.push("/profile");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const signUpGooglE = () => {
    //* google hesaplarına ulaşmak için firebase metodu
    const provider = new GoogleAuthProvider();

    //* açılır pencere ile giriş yapılması için firebase metodu

    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <YetkiContext.Provider value={{ createUser }}>
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContextProvider;
