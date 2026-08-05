"use client";

import { startTransition, useOptimistic } from "react";
import IssueTable from "@/components/common/IssueTable";
import { deleteIssueOptimistic } from "@/lib/actions";

export default function IssueList({ title, subtitle, issues, showHeader = true, showActions = true, }) {
  const [optimisticIssues, removeOptimisticIssue] = useOptimistic(
    issues,
    (state, deletedId) =>
      state.filter((issue) => issue.id !== deletedId)
  );

  async function handleDelete(id) {
    startTransition(() => {
      removeOptimisticIssue(id);
    });

    try {
      await deleteIssueOptimistic(id);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <IssueTable title={title} subtitle={subtitle} issues={optimisticIssues} showHeader={showHeader} showActions={showActions} onDelete={handleDelete}
    />
  );
}