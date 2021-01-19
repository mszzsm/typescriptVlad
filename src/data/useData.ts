import { useState } from "react";

// FIXME: Add user type to all the places where `any` was used
type User = {}

const readUserData = () => {
  const localStorageContent = localStorage.getItem("data")
  //
  const userData = (localStorageContent && JSON.parse(localStorageContent)) ?? [];

  if (!Array.isArray(userData)) {
    return []
  }
  return userData
}

export const useData = () => {
  const [userData, setUserData] = useState(readUserData())

  const removeUserById = (userId: string) => {
    const filtered = userData.filter((user: any) => {
      return user.id !== userId;
    });
    setUserData(filtered)
    localStorage.setItem("data", JSON.stringify(filtered));
  }

  const addUser = (user: User) => {

  }

  return {userData, removeUserById, addUser}
}