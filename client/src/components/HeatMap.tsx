import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './heatmap.css';

interface Region {
  name: string;
  dms: number;
}

const regions: Region[] = [
  { name: 'California', dms: 300 },
  { name: 'Texas', dms: 150 },
  { name: 'New York', dms: 250 },
  { name: 'Florida', dms: 80 },
  { name: 'Illinois', dms: 60 },
  { name: 'Nevada', dms: 40 },
  { name: 'Georgia', dms: 120 },
  { name: 'Ohio', dms: 90 },
  { name: 'Washington', dms: 110 },
  { name: 'Arizona', dms: 70 },
];

const getHeatColor = (dms: number): string => {
  if (dms > 200) return 'hot';
  if (dms > 100) return 'heating-up';
  if (dms > 50) return 'getting-cold';
  return 'cold';
};

const HeatMap = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Region[]>(regions);

  // Simulate real-time stat updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(region => ({
          ...region,
          dms: Math.max(0, Math.floor(region.dms + Math.random() * 20 - 10)) // +/-10 fluctuation, minimum 0
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heatmap-container">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        🔥 {t('heatmap.title', 'U.S. Heatmap — Real-Time DMs')}
      </h2>
      <div className="heatmap-grid">
        {data.map(region => (
          <div
            key={region.name}
            className={`region-box ${getHeatColor(region.dms)}`}
          >
            <strong>
              {region.name}
            </strong>
            <p>
              {region.dms} {t('heatmap.dms', 'DMs')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatMap;