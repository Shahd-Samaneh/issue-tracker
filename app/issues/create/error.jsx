"use client";

import ErrorMessage from "@/components/common/ErrorMessage";

export default function Error({ reset }) {
  return (
    <ErrorMessage message="We couldn't load the create issue page. Please try again." action={reset} />
  );
}