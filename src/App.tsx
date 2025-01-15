import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import { TTCGRMProvider } from "@astrouxds/mock-data";
import { Dashboard } from "@/components/dashboard/dashboard";
import { GlobalStatusBar } from "@/components/globalStatusBar/global-status-bar";
import "./App.css";

function App() {
  const options = {
    alertsPercentage: 50 as const,
    initial: 10,
    interval: 1,
    limit: 50,
  };

  return (
    <>
      <TTCGRMProvider options={options}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <>
                  <GlobalStatusBar />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TTCGRMProvider>
    </>
  );
}

export default App;
