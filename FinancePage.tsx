import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {  FaBuilding } from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import '../styles/FinancePage.css';
import SearchBar from './SearchBar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const FinancePage: React.FC = () => {
    const lineData = {
        labels: ['24 months', '12 months', '6 months', '3 months', '1 month', 'Custom'],
        datasets: [
            {
                label: 'Fines',
                data: [100, 200, 150, 220, 300, 250],
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'Paid Permits',
                data: [120, 180, 200, 190, 250, 270],
                borderColor: 'black',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const pieData = {
        labels: ['Fines', 'Permits', 'Subscriptions'],
        datasets: [
            {
                data: [30, 50, 20],
                backgroundColor: ['red', 'blue', 'green'],
            },
        ],
    };

    const lineOptions = {
        maintainAspectRatio: false,
        responsive: true,
    };

    const pieOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false, // Disable the default legend
            },
        },
    };

    return (
        <div className="finance-container">
            <div className="finance-header">
                <SearchBar />
            </div>
            <div className="finance-content">
                <div className="line-chart-container">
                    <Line data={lineData} options={lineOptions} />
                </div>
                <div className="summary-container">
                    <div className="summary-header">
                        <div className="summary-header-left">
                            <h3>January 2024</h3>
                            <div className="building-info">
                                <FaBuilding size={20} />
                                <span>Stigsborg Mobilitetshus</span>
                            </div>
                        </div>
                        <div className="summary-header-right">
                            Total revenue: 24,000 DKK
                        </div>
                    </div>
                    <div className="pie-chart-container">
                        <div className="pie-chart">
                            <Pie data={pieData} options={pieOptions} />
                        </div>
                        <div className="legend">
                            <div><span style={{ color: 'red' }}>■</span> Fines</div>
                            <div><span style={{ color: 'blue' }}>■</span> Permits</div>
                            <div><span style={{ color: 'green' }}>■</span> Subscriptions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancePage;
