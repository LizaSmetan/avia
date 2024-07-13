import React, { useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Filter from './components/Filter/Filter';
import Sort from './components/Sort/Sort';
import Tickets from './components/Tickets/Tickets';
import './App.scss';
import { calcBodyWidth } from './utils/calcBodyWidth';

const App: React.FC = () => {
    useEffect(() => {
        window.addEventListener('resize', calcBodyWidth);
        return () => {
            window.removeEventListener('resize', calcBodyWidth);
        };
    }, []);
    return (
        <MainLayout>
            <div className="main">
                <div className="main__filter">
                    <Filter />
                </div>
                <div className="main__content">
                    <Sort />
                    <Tickets />
                </div>
            </div>
        </MainLayout>
    );
};

export default App;
