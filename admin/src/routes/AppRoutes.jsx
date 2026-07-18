import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../features/auth/pages/Login";

import Dashboard from "../pages/dashboard";

import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

import DoctorList from "../features/doctors/pages/DoctorList";
import DoctorCreate from "../features/doctors/pages/DoctorCreate";
import EditDoctor from "../features/doctors/pages/EditDoctor";
import DoctorView from "../features/doctors/pages/DoctorView";

import VideoList from "../features/videos/pages/VideoList";
import VideoCreate from "../features/videos/pages/VideoCreate";
import EditVideo from "../features/videos/pages/EditVideo";
import ViewVideo from "../features/videos/pages/ViewVideo";

import ServiceList from "../features/services/pages/ServiceList";
import ServiceCreate from "../features/services/pages/ServiceCreate";
import EditService from "../features/services/pages/EditService";
import ServiceView from "../features/services/pages/ServiceView";

import AppointmentListPage from "../features/appointment/pages/AppointmentListPage";
import DepartmentListPage from "../features/departments/pages/DepartmentListPage";
import DepartmentFormPage from "../features/departments/pages/DepartmentFormPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctors/create" element={<DoctorCreate />} />
        <Route path="/doctors/:id/edit" element={<EditDoctor />} />
        <Route path="/doctors/:id" element={<DoctorView />} />

        <Route path="/videos" element={<VideoList />} />
        <Route path="/videos/create" element={<VideoCreate />} />
        <Route path="/videos/:id/edit" element={<EditVideo />} />
        <Route path="/videos/:id" element={<ViewVideo />} />

        <Route path="/services" element={<ServiceList />} />
        <Route path="/services/create" element={<ServiceCreate />} />
        <Route path="/services/:id/edit" element={<EditService />} />
        <Route path="/services/:id" element={<ServiceView />} />

        <Route path="/appointments" element={<AppointmentListPage />} />
        <Route path="/departments" element={<DepartmentListPage />} />
        <Route path="/departments/add" element={<DepartmentFormPage />} />

        <Route path="/departments/edit/:id" element={<DepartmentFormPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
