import { Taxes } from "@/app/types/taxes";
export type FormState = {
  status: "success" | null;
  data: Taxes | null;
};
