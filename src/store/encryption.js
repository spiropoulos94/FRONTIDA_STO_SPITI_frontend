import CryptoJS from "crypto-js";

let secret = import.meta.env.VITE_CRYPTO_SECRET;

export const encrypt = (text) => {
  console.log({ secret });

  const passphrase = secret;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

export const decrypt = (ciphertext) => {
  console.log({ secret });

  const passphrase = secret;
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
