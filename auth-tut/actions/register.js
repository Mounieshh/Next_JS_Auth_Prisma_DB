"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

const register = async (values) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, password, name } = validateFields.data;
  const hashedPass = await bcrypt.hash(password, 10);

  const existEmail = await getUserByEmail(email)
  if (existEmail) {
    return {
      error: "Email already exists",
    };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPass,
    },
  });

  return {
    success: "User Created",
  };
};

export default register;
