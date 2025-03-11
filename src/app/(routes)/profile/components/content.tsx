import { ReactNode } from "react";
import { DashboardMainItems_admin, DashboardMainItems_user } from "./dashboard";
import Dashboard from "@/app/(routes)/profile/components/admin/dashboard";

export const AdminContents: Record<DashboardMainItems_admin, ReactNode> = {
  dashboard: <Dashboard />,
  add_collection: <p>add_collection</p>,
  add_blog: <p>add_blog</p>,
  m_collections: <p>m_collections</p>,
  m_blogs: <p>m_blogs</p>,
  add_teacher: <p>add_teacher</p>,
  m_teachers: <p>m_teachers</p>,
  m_users: <p>m_users</p>,
  m_transactions: "<p>m_transactions</p>",
  m_notifs: <p>m_notifs</p>,
};

export const UserMainContents: Record<DashboardMainItems_user, ReactNode> = {
  dashboard: <Dashboard />,
  content: <p>content</p>,
  m_courses: <p>m_courses</p>,
  m_comments: <p>m_comments</p>,
  settings: <p>settings</p>,
  m_transactions: <p>m_transactions</p>,
  m_notifs: <p>m_notifs</p>,
};
