import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        🔥 {t('heatmap.title', 'U.S. Heatmap — Real-Time DMs')}
      </h2>
      <div className="heatmap-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map(region => (
          <div
            key={region.name}
            className={`region-box p-4 rounded-lg border-2 transition-all duration-300 text-center ${
              getHeatColor(region.dms) === 'hot' 
                ? 'bg-red-600/20 border-red-500 shadow-lg shadow-red-500/25' 
                : getHeatColor(region.dms) === 'heating-up'
                ? 'bg-orange-500/20 border-orange-500 shadow-lg shadow-orange-500/25'
                : getHeatColor(region.dms) === 'getting-cold'
                ? 'bg-yellow-500/20 border-yellow-500 shadow-lg shadow-yellow-500/25'
                : 'bg-blue-500/20 border-blue-500 shadow-lg shadow-blue-500/25'
            }`}
          >
            <strong className="block text-lg font-semibold text-white mb-2">
              {region.name}
            </strong>
            <p className="text-sm text-gray-300">
              {region.dms} {t('heatmap.dms', 'DMs')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatMap;