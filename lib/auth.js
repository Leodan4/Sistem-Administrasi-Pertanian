import { jwtVerify, SignJWT } from "jose";


export const getJwtSecretKey = () => {
  const secret = "secretcode";

  if (!secret || secret.length == 0) {
    throw new Error("The Environtment varianble JWT SCREET KEY is not set");
  }
  return secret;
};

export const verifyAuth = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload;
  } catch (err) {
    throw new Error("Your token has expired");
  }
};
