"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createIssue(formData) {
  await prisma.issue.create({
    data: {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      priority: formData.get("priority"),
      assignee: formData.get("assignee"),
    },
  });

  revalidatePath("/issues");
  revalidatePath("/dashboard");

  redirect("/issues");
}

export async function updateIssue(id, formData) {
  await prisma.issue.update({
    where: {
      id: Number(id),
    },
    data: {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      priority: formData.get("priority"),
      assignee: formData.get("assignee"),
    },
  });

  revalidatePath("/issues");
  revalidatePath(`/issues/${id}`);
  revalidatePath("/dashboard");

  redirect(`/issues/${id}`);
}

export async function deleteIssue(id) {
  await prisma.issue.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/issues");
  revalidatePath("/dashboard");

  redirect("/issues");
}

export async function deleteIssueOptimistic(id) {
  await prisma.issue.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/issues");
  revalidatePath("/dashboard");

  return { success: true };
}