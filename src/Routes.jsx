import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import Navigation from "components/ui/Navigation";
import DevelopmentOperationsOverviewDashboard from "pages/development-operations-overview-dashboard";
import RepositoryHealthMonitoringDashboard from "pages/repository-health-monitoring-dashboard";
import PullRequestAnalyticsDashboard from "pages/pull-request-analytics-dashboard";
import TeamProductivityAnalyticsDashboard from "pages/team-productivity-analytics-dashboard";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          <Navigation />
          <main className="pt-32 md:pt-28">
            <RouterRoutes>
              <Route path="/" element={<DevelopmentOperationsOverviewDashboard />} />
              <Route path="/development-operations-overview-dashboard" element={<DevelopmentOperationsOverviewDashboard />} />
              <Route path="/repository-health-monitoring-dashboard" element={<RepositoryHealthMonitoringDashboard />} />
              <Route path="/pull-request-analytics-dashboard" element={<PullRequestAnalyticsDashboard />} />
              <Route path="/team-productivity-analytics-dashboard" element={<TeamProductivityAnalyticsDashboard />} />
              <Route path="*" element={<NotFound />} />
            </RouterRoutes>
          </main>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;