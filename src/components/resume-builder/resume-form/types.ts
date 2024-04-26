import { ResumeFormData } from "../types";

export interface FieldValueProps<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<ResumeFormData>>;
  id: keyof ResumeFormData;
}
