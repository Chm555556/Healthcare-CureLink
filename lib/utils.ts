// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// // Utility function to combine Tailwind CSS classes
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// // Utility function to deep clone objects
// export const parseStringify = (value: unknown) =>
//   JSON.parse(JSON.stringify(value));

// // Utility function to convert a file to a URL
// export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// // FORMAT DATE TIME
// export const formatDateTime = (
//   dateString: Date | string,
//   timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
// ) => {
//   const options: Intl.DateTimeFormatOptions = {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
//     timeZone,
//   };

//   const formattedDateTime = new Date(dateString).toLocaleString(
//     "en-US",
//     options
//   );

//   return {
//     dateTime: formattedDateTime,
//     dateDay: new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "short",
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       timeZone,
//     }),
//     dateOnly: new Date(dateString).toLocaleDateString("en-US", {
//       month: "short",
//       year: "numeric",
//       day: "numeric",
//       timeZone,
//     }),
//     timeOnly: new Date(dateString).toLocaleTimeString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//       timeZone,
//     }),
//   };
// };

// // Functions for encrypting and decrypting a key
// export function encryptKey(passkey: string) {
//   return btoa(passkey);
// }

// export function decryptKey(passkey: string) {
//   return atob(passkey);
// }

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to deep clone objects safely
export const parseStringify = (value: unknown) => {
  if (value === undefined || value === null) {
    console.error("Received undefined or null value, cannot stringify");
    return null; // or you could return {} if you prefer an empty object
  }

  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    console.error("Error stringifying and parsing value:", error);
    return null; // Return null or handle error appropriately
  }
};

// Utility function to convert a file to a URL
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (
  dateString: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  };

  const formattedDateTime = new Date(dateString).toLocaleString(
    "en-US",
    options
  );

  return {
    dateTime: formattedDateTime,
    dateDay: new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone,
    }),
    dateOnly: new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      day: "numeric",
      timeZone,
    }),
    timeOnly: new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone,
    }),
  };
};

// Functions for encrypting and decrypting a key
export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}
