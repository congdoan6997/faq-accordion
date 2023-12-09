import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const data = [
  {
    header: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor is a 100% free coding challenge website that challenges you to build and test websites using HTML, CSS and JavaScript."
  },
  {
    header: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor is a 100% free coding challenge website that challenges you to build and test websites using HTML, CSS and JavaScript."
  },
  {
    header: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor is a 100% free coding challenge website that challenges you to build and test websites using HTML, CSS and JavaScript."
  },
  {
    header: "What is Frontend Mentor, and how will it help me?",
    content:
      "Frontend Mentor is a 100% free coding challenge website that challenges you to build and test websites using HTML, CSS and JavaScript."
  }
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
