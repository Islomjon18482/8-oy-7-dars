import Navbar from "../components/Header/Index";
import { ReactNode } from "react";
import './main.css'

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mainLayoutWrapper">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
