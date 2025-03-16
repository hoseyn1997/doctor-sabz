import { ReactNode } from "react";
import { DashboardMainItems_admin, DashboardMainItems_user } from "./dashboard";
import Dashboard from "@/app/(routes)/profile/components/admin/dashboard";
import AddCollection from "./admin/add_collection";
import AddTeacher from "./admin/add_teacher";
import ManageTeachers from "./admin/manage_teachers";
import ManageCollections from "./admin/manage_collections";
import Soon from "./soon";

export const AdminContents: Record<DashboardMainItems_admin, ReactNode> = {
  dashboard: <Dashboard />,
  add_collection: <AddCollection />,
  add_blog: <Soon />,
  m_collections: <ManageCollections />,
  m_blogs: <Soon />,
  add_teacher: <AddTeacher />,
  m_teachers: <ManageTeachers />,
  m_users: <Soon />,
  m_transactions: <Soon />,
  m_notifs: <Soon />,
};

export const UserMainContents: Record<DashboardMainItems_user, ReactNode> = {
  dashboard: <Dashboard />,
  content: <Soon />,
  m_courses: <Soon />,
  m_comments: <Soon />,
  settings: <Soon />,
  m_transactions: <Soon />,
  m_notifs: <Soon />,
};
