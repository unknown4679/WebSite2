import { useTranslation } from 'react-i18next';
import { useDemoStats } from '../context/DemoStatsContext';
import './brandDashboard.css';

const BrandDashboard = () => {
  const { t } = useTranslation();
  const { brandStats } = useDemoStats();

  if (!brandStats || brandStats.length === 0) {
    return (
      <div className="brand-dashboard">
        <p>{t('brandDashboard.loading', 'Loading real-time stats...')}</p>
      </div>
    );
  }

  const sorted = [...brandStats].sort((a, b) => b.conversions - a.conversions);

  return (
    <div className="brand-dashboard">
      <h1 className="title-glow">
        {t('brandDashboard.title', 'BRAND DASHBOARD')}
      </h1>
      <div className="brand-grid">
        {sorted.map((brand, i) => (
          <div className="brand-card" key={brand.name}>
            <div className="brand-header">
              <h2>{brand.name}</h2>
              <span className="rank">#{i + 1}</span>
            </div>
            <p>
              <span className="label">{t('brandDashboard.roi', 'ROI')}:</span>
              <span className="green">+{brand.roi?.toFixed(1)}%</span>
            </p>
            <p>
              <span className="label">{t('brandDashboard.conversions', 'Conversions')}:</span>
              <span>{brand.conversions?.toLocaleString()}</span>
            </p>
            <p>
              <span className="label">{t('brandDashboard.dmsReplied', 'DMs Replied')}:</span>
              <span>{brand.dms?.toLocaleString()}</span>
            </p>
            <p>
              <span className="label">{t('brandDashboard.trend', 'Trend')}:</span>
              <span className="trend">{brand.trend > 0 ? '+' : ''}{brand.trend.toFixed(1)}%</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDashboard;