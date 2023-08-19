import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/features/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        dispatch(
          login({
            displayName,
            email,
            phoneNumber,
            photoURL,
            firebase_uid: uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <div className="app bg-background_color text-text_color min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
