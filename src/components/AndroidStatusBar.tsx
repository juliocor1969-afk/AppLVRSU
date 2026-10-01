import React, { useState, useEffect } from 'react';
import { Wifi, Signal, BatteryCharging } from 'lucide-react';

interface AndroidStatusBarProps {
  darkText?: boolean;
}

export const AndroidStatusBar: React.FC<AndroidStatusBarProps> = ({ darkText = false }) => {
  const [time, setTime] = useState('08:30');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const textColor = darkText ? 'text-slate-800' : 'text-white';

  return (
    <div className={`h-7 px-5 flex items-center justify-between text-xs font-medium tracking-tight select-none z-50 ${textColor}`}>
      <span className="font-semibold">{time}</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <Wifi className="w-3.5 h-3.5" />
        <Signal className="w-3.5 h-3.5" />
        <div className="flex items-center gap-0.5">
          <span className="text-[10px] font-mono">98%</span>
          <BatteryCharging className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
