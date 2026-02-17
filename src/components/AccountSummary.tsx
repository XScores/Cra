import { Card } from './ui/card';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function AccountSummary() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="px-4 py-4">
      <Card className="p-4 bg-gradient-to-br from-[#006341] to-[#00704A] border-0 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-white/80 text-[14px] m-0 mb-1">Account Balance</p>
            <h2 className="text-white m-0">
              {showBalance ? '$0.00' : '••••••'}
            </h2>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-white/80 hover:text-white p-2"
          >
            {showBalance ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
          <div>
            <p className="text-white/80 text-[12px] m-0 mb-1">Year to Date</p>
            <p className="text-white m-0 text-right">$2,450.00</p>
          </div>
          <div>
            <p className="text-white/80 text-[12px] m-0 mb-1">Tax Year</p>
            <p className="text-white m-0 text-right">2025</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
