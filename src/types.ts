export interface User {
  username: string;
  fullName: string;
}
export interface SignUpsInputs extends User {
  password: string;
  confirmPassword: string;
}

export interface LoginInputs {
  username: string;
  password: string;
}

export interface Chat {
  fullName: string;
  username: string;
  _id: string;
}

export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
