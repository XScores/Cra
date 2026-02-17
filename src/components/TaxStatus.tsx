import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export function TaxStatus() {
  return (
    <div className="px-4 py-4">
      <h2 className="mb-4 text-[#000000]">Tax Filing Status</h2>
      <Card className="p-4 border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-[#000000] mb-1">2024 Tax Return</h3>
            <p className="text-[#717182] text-[14px] m-0">Submitted: March 15, 2026</p>
          </div>
          <Badge className="bg-green-100 text-green-700 border-0 hover:bg-green-100">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Processed
          </Badge>
        </div>
        <div className="bg-[#F2F2F2] rounded-lg p-3 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#717182] text-[14px]">Assessed Amount</span>
            <span className="text-[#000000] text-right">$2,450.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#717182] text-[14px]">Refund Status</span>
            <span className="text-green-600">Deposited</span>
          </div>
        </div>
        <button className="w-full bg-[#006341] hover:bg-[#00704A] active:bg-[#005235] text-white py-3 rounded-lg transition-colors">
          View Tax Details
        </button>
      </Card>
    </div>
  );
}