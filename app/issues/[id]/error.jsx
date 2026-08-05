"use client";

import ErrorMessage from "@/components/common/ErrorMessage";

export default function Error({ reset }) {
  return (
    <ErrorMessage message="We couldn't load this issue. Please try again." action={reset} />
  );
}