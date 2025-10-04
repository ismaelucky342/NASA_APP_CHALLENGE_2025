import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50">
      <main className="min-h-screen">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
