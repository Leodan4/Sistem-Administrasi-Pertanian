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
    console.log("Token yang diterima:", token);
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    console.log("Payload terverifikasi:", verified.payload);
    return verified.payload;
  } catch (err) {
    console.error("Verifikasi token gagal:", err.message);
    throw new Error("Your token has expired");
  }
};


