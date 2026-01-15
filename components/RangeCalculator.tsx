
import React, { useState, useMemo } from 'react';

const RangeCalculator: React.FC = () => {
  const [cd, setCd] = useState(0.24);
  const baseRange = 400; // Miles at Cd 0.28
  const baseCd = 0.28;

  const estimatedRange = useMemo(() => {
    // Simplified formula: Range is inversely proportional to drag above 50mph
    // 60% of consumption is drag at highway speeds
    const dragRatio = baseCd / cd;
    const rangeIncrease = (dragRatio - 1) * 0.6; 
    return Math.round(baseRange * (1 + rangeIncrease));
  }, [cd]);

  return (
    <div className="bg-slate-900/60 border border-slate-700 p-6 rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Range Synergy Matrix</h4>
        <span className="text-[10px] font-mono text-cyan-400">WIDGET ID: R-CALC-01</span>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono text-slate-500 uppercase">Input Drag Coefficient (Cd)</label>
        <div className="flex items-center gap-4">
          <input 
            type="range" 
            min="0.15" 
            max="0.40" 
            step="0.01" 
            value={cd}
            onChange={(e) => setCd(parseFloat(e.target.value))}
            className="flex-1 accent-cyan-500"
          />
          <span className="w-12 text-center font-mono text-cyan-400 font-bold">{cd.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="bg-slate-950 p-3 rounded border border-slate-800">
          <p className="text-[9px] text-slate-500 uppercase font-mono">Est. Range (Hwy)</p>
          <p className="text-2xl font-black text-cyan-400">{estimatedRange} mi</p>
        </div>
        <div className="bg-slate-950 p-3 rounded border border-slate-800">
          <p className="text-[9px] text-slate-500 uppercase font-mono">Efficiency Gain</p>
          <p className="text-2xl font-black text-green-400">+{Math.round(((estimatedRange / baseRange) - 1) * 100)}%</p>
        </div>
      </div>
      
      <p className="text-[9px] text-slate-600 font-mono text-center">
        *Calculated based on 70mph cruise speed and 82kWh battery capacity.
      </p>
    </div>
  );
};

export default RangeCalculator;
