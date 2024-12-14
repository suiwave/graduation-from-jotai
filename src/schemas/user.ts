import { z } from "zod";

// 全体のユーザー情報を定義するスキーマ
export const userSchema = z.object({
    // 名前
    firstName: z.string().min(1, "名は必須です"),
    // 姓
    lastName: z.string().min(1, "姓は必須です"),
    // 年齢（0以上、120以下）
    age: z.number().min(0, "年齢は正の数でなければなりません").max(120, "年齢は現実的な範囲でなければなりません"),
    // メールアドレス
    email: z.string().email("無効なメールアドレスです"),
    // 電話番号（数字のみ）
    phone: z.string().regex(/^\d+$/, "電話番号は数字でなければなりません"),
    // 住所
    address: z.string().min(1, "住所は必須です"),
    // 市区町村
    city: z.string().min(1, "市区町村は必須です"),
    // 郵便番号（数字のみ）
    postalCode: z.string().regex(/^\d+$/, "郵便番号は数字でなければなりません"),
});

// ユーザーの名前、姓、年齢といった基本的な個人情報を含むスキーマ
export const personalInfoSchema = userSchema.pick({
    firstName: true,
    lastName: true,
    age: true,
});

// 連絡先に関するスキーマ
export const contactSchema = userSchema.pick({
    email: true,
    phone: true,
});

// 住所に関するスキーマ
export const addressSchema = userSchema.pick({
    address: true,
    city: true,
    postalCode: true,
});

export type UserProfile = z.infer<typeof userSchema>;
export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
