import React from 'react';
// useDispatch;
import { useSelector } from 'react-redux';
// AppDispatch;
import { RootState } from './store/store';
// import { increment, decrement, incrementByAmount } from './store/actions';
import MainLayout from './layout/MainLayout';
import Filter from './components/Filter/Filter';
import './App.scss';
import Sort from './components/Sort/Sort';
import Tickets from './components/Tickets/Tickets';

const App: React.FC = () => {
    const count = useSelector((state: RootState) => state);
    // const dispatch: AppDispatch = useDispatch();

    console.log(count);
    return (
        <MainLayout>
            <div className="main">
                <div className="main__filter">
                    <Filter />
                </div>
                <div className="main__content">
                    <Sort />
                    <Tickets />
                    {/* <header className="App-header">
                        <button onClick={() => dispatch(increment())}>
                            Increment
                        </button>
                        <button onClick={() => dispatch(decrement())}>
                            Decrement
                        </button>
                        <button onClick={() => dispatch(incrementByAmount(2))}>
                            Increment by 2
                        </button>
                    </header> */}
                </div>
            </div>
        </MainLayout>
    );
};

export default App;
