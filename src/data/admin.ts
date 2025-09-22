import fs from "fs";
import path from "path";
import crypto from "crypto";

export type AdminRecord = {
  username: string;
  passwordHash: string; // salted hash
  salt: string;
};

const dataDir = path.join(process.cwd(), "data");
const adminPath = path.join(dataDir, "admin.json");

const ensureFile = () => {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  if (!fs.existsSync(adminPath)) {
    const username = process.env.ADMIN_USER || "admin";
    const password = process.env.ADMIN_PASS || "password";
    const salt = crypto.randomBytes(16).toString("hex");
    const passwordHash = hashPassword(password, salt);
    const rec: AdminRecord = { username, passwordHash, salt };
    fs.writeFileSync(adminPath, JSON.stringify(rec, null, 2), "utf8");
  }
};

export const hashPassword = (password: string, salt: string) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
};

export const getAdmin = (): AdminRecord => {
  ensureFile();
  const raw = fs.readFileSync(adminPath, "utf8");
  return JSON.parse(raw) as AdminRecord;
};

export const verifyAdmin = (username: string, password: string): boolean => {
  const rec = getAdmin();
  if (rec.username !== username) return false;
  const hashed = hashPassword(password, rec.salt);
  return hashed === rec.passwordHash;
};

export const updatePassword = (newPassword: string) => {
  const rec = getAdmin();
  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = hashPassword(newPassword, salt);
  const updated: AdminRecord = { ...rec, passwordHash, salt };
  fs.writeFileSync(adminPath, JSON.stringify(updated, null, 2), "utf8");
};
