export const DataEncryptionConfig = {
  key: process.env.DATA_ENCRYPTION_KEY,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.DATA_ENCRYPTION_IV,
};
