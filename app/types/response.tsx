import { Taxes } from "@/app/types/taxes";
export type FormState = {
  status: "success" | "failed" | null;
  data: Taxes | null;
};
