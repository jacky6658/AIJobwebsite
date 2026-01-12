
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MARKET_TRENDS } from '../constants';
import { gemini } from '../services/geminiService';

const MarketTrends: React.FC = () => {
  const [insight, setInsight] = useState('載入 AI 趨勢分析中...');

  useEffect(() => {
    const fetchInsight = async () => {
      const summary = await gemini.analyzeJobMarket(MARKET_TRENDS);
      setInsight(summary);
    };
    fetchInsight();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-800">市場趨勢</h3>
        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">更新至 2024 Q4</span>
      </div>

      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MARKET_TRENDS}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <Tooltip 
              contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              cursor={{fill: '#f8fafc'}}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar name="市場需求 (%)" dataKey="demand" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            <Bar name="薪資潛力 (k)" dataKey="salary" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">AI 智慧總結</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed italic">
          "{insight}"
        </p>
      </div>
    </div>
  );
};

export default MarketTrends;
