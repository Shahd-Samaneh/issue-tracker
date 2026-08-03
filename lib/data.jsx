import {
  ClipboardList,
  CircleAlert,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Issues",
    value: 24,
    icon: ClipboardList,
  },
  {
    title: "Open",
    value: 8,
    icon: CircleAlert,
  },
  {
    title: "In Progress",
    value: 10,
    icon: Clock3,
  },
  {
    title: "Closed",
    value: 6,
    icon: CheckCircle2,
  },
];

export const issueStatusData = [
  {
    name: "Open",
    value: 8,
  },
  {
    name: "In Progress",
    value: 10,
  },
  {
    name: "Closed",
    value: 6,
  },
];

export const weeklyIssues = [
  { day: "Mon", issues: 2 },
  { day: "Tue", issues: 4 },
  { day: "Wed", issues: 3 },
  { day: "Thu", issues: 7 },
  { day: "Fri", issues: 5 },
  { day: "Sat", issues: 2 },
  { day: "Sun", issues: 1 },
];

export const recentIssues = [
  {
    id: 1,
    title: "Login authentication bug",
    status: "Open",
    priority: "High",
    assignee: "Shahd",
  },
  {
    id: 2,
    title: "Dashboard UI improvements",
    status: "In_Progress",
    priority: "Medium",
    assignee: "Ahmad",
  },
  {
    id: 3,
    title: "Fix API response",
    status: "Closed",
    priority: "Low",
    assignee: "Sara",
  },
  {
    id: 4,
    title: "Responsive sidebar",
    status: "Open",
    priority: "High",
    assignee: "Omar",
  },
];

export const issues = [
  {
    id: 1,
    title: "Login authentication bug",
    status: "Open",
    priority: "High",
    assignee: "Shahd",
  },
  {
    id: 2,
    title: "Dashboard UI improvements",
    status: "In_Progress",
    priority: "Medium",
    assignee: "Ahmad",
  },
  {
    id: 3,
    title: "Fix API response",
    status: "Closed",
    priority: "Low",
    assignee: "Sara",
  },
  {
    id: 4,
    title: "Responsive sidebar",
    status: "Open",
    priority: "High",
    assignee: "Omar",
  },
];