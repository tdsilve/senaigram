/*The main goal is to use a merge of clsx and twMerge 
to efficiently merge Tailwind CSS classes in JS 
without style conflict.
Inspired by shadcn/ui. */

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
