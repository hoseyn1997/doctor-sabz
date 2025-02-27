import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const getUserById = async (id) => {
  try {
    return await prisma.user.findUnique({
      where: {
        Id: id,
      },
    });
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const createUser = async (data) => {
  try {
    return await prisma.user.create({
      data,
    });
  } catch (error) {
    throw new Error("Error creating user");
  }
};

export async function setCountingDown(phoneNumber, code, counting) {
  const user = await prisma.user.update({
    where: { PhoneNumber: phoneNumber },
    data: {
      IsCountingDown: counting,
      PhoneConfirmationCode: code,
    },
  });
  return user;
}

export async function generate_token(phoneNumber, user) {
  if (!user) {
    const user = await prisma.user.findUnique({
      where: {
        PhoneNumber: phoneNumber,
      },
    });
  }
  const token = jwt.sign({ userId: user.Id }, JWT_SECRET, { expiresIn: "2h" });
  return token;
}

export async function verify_code(phoneNumber, code) {
  // console.log("stage1-the userInput code is:", code);

  const user = await prisma.user.findUnique({
    where: {
      PhoneNumber: phoneNumber,
    },
  });

  // console.log("stage2-the user actuall code is:", user.PhoneConfirmationCode);

  if (user.IsCountingDown) {
    const is_code_currect = user.PhoneConfirmationCode === code;

    // console.log("stage3-isCodeCurrect:", is_code_currect);

    try {
      // console.log("stage4-i am trying to update the user info");

      await prisma.user.update({
        where: {
          PhoneNumber: phoneNumber,
        },
        data: {
          PhoneConfirmationCode: is_code_currect
            ? ""
            : user.PhoneConfirmationCode,
          IsCountingDown: is_code_currect ? false : true,
          PhoneNumberConfirmed: is_code_currect,
        },
      });
      const generated_token = await generate_token(phoneNumber, user);
      return new Confirmation_Response(
        {
          code: code,
          token: is_code_currect ? generated_token : "",
        },
        is_code_currect,
        {
          message: is_code_currect ? null : "کد اشتباه است",
        }
      );
    } catch (error) {
      // console.log("stage5-i have an error in updating user field");

      return new Confirmation_Response(
        { is_code_currect: false, code: code },
        false,
        {
          message: "عملیات ناموفق. لطفا دوباره تلاش کنید.ش",
        }
      );
    }
  } else {
    // console.log("stage6-the users time is over");

    return new Confirmation_Response(
      { is_code_currect: false, code: code },
      false,
      {
        message: "عملیات ناموفق. لطفا دوباره تلاش کنید.",
      }
    );
  }
}

class Confirmation_Response {
  constructor(data, isconfirmed, error) {
    (this.data = data), (this.isconfirmed = isconfirmed), (this.error = error);
  }
}
