import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { customFetch } from "../utils/customFetch";
import { useContext, createContext } from "react";
import { checkDefaultTheme } from "../App";
import Wrapper from "../assets/wrappers/Dashboard";

interface IUser {
  id: string;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

interface IDashboard {
  user: IUser;
  logout: () => void;
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
}

const DashboardContext = createContext<IDashboard>({
  user: { id: "", email: "", password: "", lastName: "", firstName: "" },
  logout: () => {},
  showSidebar: false,
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
});

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(checkDefaultTheme());

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("dark-theme", newDarkTheme);
  };

  const logout = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    alert("logout successfully");
  };

  useEffect(() => {
    async function getUser() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const res = await customFetch.post("/user/get-current-user", {
            token,
          });
          setUser(res.data);
        }
      } catch (error) {
        return error;
      }
    }
    getUser();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        user,
        logout,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
