import { jwtVerify } from "jose";

// type DecodedToken = {
//   userId: string;
//   username: string;
//   iat: number;
//   exp: number;
// };

// Function to verify the token  => return the decoded token or null
export async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
