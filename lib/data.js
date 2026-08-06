import { prisma } from "./prisma";
import { ClipboardList, CircleAlert, Clock3, CheckCircle2,} from "lucide-react";


export async function getIssues() {
  return await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getIssueById(id) {
  return await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });
}

export async function getRecentIssues() {
  return await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
}

export async function getDashboardStats() {
  const issues = await getIssues();

  return [
    {
      title: "Total Issues",
      value: issues.length,
      icon: ClipboardList,
    },
    {
      title: "Open",
      value: issues.filter((issue) => issue.status === "Open").length,
      icon: CircleAlert,
    },
    {
      title: "In Progress",
      value: issues.filter(
        (issue) => issue.status === "In_Progress"
      ).length,
      icon: Clock3,
    },
    {
      title: "Closed",
      value: issues.filter(
        (issue) => issue.status === "Closed"
      ).length,
      icon: CheckCircle2,
    },
  ];
}

export async function getIssueStatusData() {
  const issues = await getIssues();

  return [
    {
      name: "Open",
      value: issues.filter((issue) => issue.status === "Open").length,
    },
    {
      name: "In Progress",
      value: issues.filter((issue) => issue.status === "In_Progress").length,
    },
    {
      name: "Closed",
      value: issues.filter((issue) => issue.status === "Closed").length,
    },
  ];
}

export async function getWeeklyIssues() {
  const issues = await getIssues();

  const days = [
    { day: "Sun", issues: 0 },
    { day: "Mon", issues: 0 },
    { day: "Tue", issues: 0 },
    { day: "Wed", issues: 0 },
    { day: "Thu", issues: 0 },
    { day: "Fri", issues: 0 },
    { day: "Sat", issues: 0 },
  ];

  issues.forEach((issue) => {
    const day = new Date(issue.createdAt).getDay();
    days[day].issues++;
  });

  return days;
}