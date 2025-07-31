import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BrandStats {
  name: string;
  roi: number;
  conversions: number;
  dms: number;
  trend: number;
}

interface DemoStatsContextType {
  brandStats: BrandStats[];
}

const DemoStatsContext = createContext<DemoStatsContextType | undefined>(undefined);

const initialBrandStats: BrandStats[] = [
  { name: 'Nike', roi: 145.2, conversions: 2847, dms: 15632, trend: 12.3 },
  { name: 'Apple', roi: 203.7, conversions: 4521, dms: 28974, trend: 18.7 },
  { name: 'Tesla', roi: 167.9, conversions: 3256, dms: 19845, trend: 15.2 },
  { name: 'Amazon', roi: 189.4, conversions: 5632, dms: 34521, trend: 22.1 },
  { name: 'Microsoft', roi: 156.8, conversions: 2973, dms: 18456, trend: 9.8 },
  { name: 'Google', roi: 198.3, conversions: 4187, dms: 25793, trend: 16.4 },
  { name: 'Meta', roi: 134.6, conversions: 2145, dms: 13287, trend: 7.9 },
  { name: 'Netflix', roi: 142.1, conversions: 1876, dms: 11943, trend: 5.6 },
];

export const DemoStatsProvider = ({ children }: { children: ReactNode }) => {
  const [brandStats, setBrandStats] = useState<BrandStats[]>(initialBrandStats);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBrandStats(prevStats => 
        prevStats.map(brand => ({
          ...brand,
          roi: Math.max(50, brand.roi + (Math.random() * 10 - 5)), // +/-5% fluctuation, minimum 50%
          conversions: Math.max(100, Math.floor(brand.conversions + (Math.random() * 200 - 100))), // +/-100 fluctuation
          dms: Math.max(1000, Math.floor(brand.dms + (Math.random() * 1000 - 500))), // +/-500 fluctuation
          trend: Math.max(-20, Math.min(30, brand.trend + (Math.random() * 4 - 2))), // +/-2% trend change, capped between -20% and 30%
        }))
      );
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DemoStatsContext.Provider value={{ brandStats }}>
      {children}
    </DemoStatsContext.Provider>
  );
};

export const useDemoStats = () => {
  const context = useContext(DemoStatsContext);
  if (context === undefined) {
    throw new Error('useDemoStats must be used within a DemoStatsProvider');
  }
  return context;
};

export { DemoStatsContext };