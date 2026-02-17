import { Card } from './ui/card';
import { FileText, DollarSign, Mail, CheckCircle2 } from 'lucide-react';

const activities = [
  {
    icon: CheckCircle2,
    title: 'Tax Return Processed',
    description: '2024 tax return has been assessed',
    date: 'Oct 8, 2026',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: DollarSign,
    title: 'Refund Deposited',
    description: 'Direct deposit of $2,450.00',
    date: 'Oct 5, 2025',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Mail,
    title: 'New Notice Available',
    description: 'Notice of Assessment for 2025',
    date: 'Oct 3, 2026',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

export function RecentActivity() {
  return (
    <div className="px-4 py-4">
      <h2 className="mb-4 text-[#000000]">Recent Activity</h2>
      <Card className="p-4 border-gray-200">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3">
              <div className={`${activity.iconBg} ${activity.iconColor} p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0`}>
                <activity.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#000000] mb-1">{activity.title}</h4>
                <p className="text-[#717182] text-[14px] m-0 mb-1">{activity.description}</p>
                <span className="text-[#717182] text-[12px]">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}