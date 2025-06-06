import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-20 lg:mt-24 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
