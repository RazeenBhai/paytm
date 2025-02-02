import { atom } from "recoil";

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "",
});
export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
});
export const firstNameAtom = atom({
  key: "firstNameAtom",
  default: "",
});
export const lastNameAtom = atom({
  key: "lastNameAtom",
  default: "",
});


export const sendAmountAtom = atom({
  key: "sendAmountAtom",
  default: 0,
})

export const sendUserAtom = atom({
  key: "sendUser",
  default: "",
})