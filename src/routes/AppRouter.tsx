import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import InspectionPage from "../pages/InspectionPage";
import FormulaPage from "../pages/FormulaPage";
import ReportPage from "../pages/ReportPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inspection" element={<InspectionPage />} />
          <Route path="/formula" element={<FormulaPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}