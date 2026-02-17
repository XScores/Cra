import { Card } from './ui/card';
import { ArrowRight, TrendingUp } from 'lucide-react';

const benefits = [
  {
    name: 'Canada Child Benefit',
    amount: '$560.00',
    period: 'Monthly',
    nextPayment: 'Oct 20, 2025',
    status: 'active',
  },
  {
    name: 'GST/HST Credit',
    amount: '$145.00',
    period: 'Quarterly',
    nextPayment: 'Jan 5, 2026',
    status: 'active',
  },
];

export function BenefitsOverview() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#000000] m-0">My Benefits</h2>
        <button className="text-[#006341] text-[14px] flex items-center gap-1">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-4 border-gray-200 hover:border-[#006341] transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-[#000000] mb-1">{benefit.name}</h3>
                <p className="text-[#717182] text-[12px] m-0">{benefit.period} Payment</p>
              </div>
              <div className="text-right">
                <p className="text-[#006341] m-0">{benefit.amount}</p>
                <span className="text-[#717182] text-[12px]">{benefit.period}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <span className="text-[#717182] text-[12px]">Next Payment</span>
              <span className="text-[#000000] text-[14px]">{benefit.nextPayment}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
