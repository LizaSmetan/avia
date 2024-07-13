import React, { ReactNode } from 'react';
import './MainLayout.scss';
import Logo from '../assets/Logo.svg';

type Props = {
    children?: ReactNode;
};
const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout__logo">
                <a href={process.env.PUBLIC_URL}>
                    <img src={Logo} alt="logo" />
                </a>
            </div>
            <div className="layout__content">{children}</div>
        </div>
    );
};

export default MainLayout;
