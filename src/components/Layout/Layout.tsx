import React from "react";

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}
export default Layout;