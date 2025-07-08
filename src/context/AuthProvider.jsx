import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const GoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedInfo) => {
    return updateProfile(auth.currentUser, {
      displayName: updatedInfo.name,
      photoURL: updatedInfo.photoUrl,
    });
  };
  const logOut = () => {
    return signOut(auth);
  };

  const { data: role, isLoading:isRoleLoading } = useQuery({
    enabled: !isLoadingUser && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/role/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setIsLoadingUser(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    isLoadingUser,
    GoogleSignIn,
    registerWithEmail,
    updateUserProfile,
    logInWithEmail,
    logOut,
    role,
    isRoleLoading
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
