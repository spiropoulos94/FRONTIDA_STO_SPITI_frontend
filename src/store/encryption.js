import CryptoJS from "crypto-js";

let passphrase = import.meta.env.VITE_CRYPTO_SECRET;

export const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

export const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
