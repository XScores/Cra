import { FileText, CreditCard, Mail, Gift } from 'lucide-react';
import mapleLeafIcon from 'figma:asset/d387a6886c2891c54c4538a4bad19f2879f80d44.png';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface QuickAction {
  icon: any;
  label: string;
  id: string;
  type: 'lucide' | 'image';
  imageSrc?: string;
}

interface QuickActionsProps {
  onFileTaxes?: () => void;
  onMakePayment?: () => void;
  onViewMail?: () => void;
  onRegisteredPlans?: () => void;
  onBenefitsAndCredits?: () => void;
  onCustomize?: () => void;
  hasUnreadMail?: boolean;
  unreadMailCount?: number;
  customActions?: QuickAction[];
  numberOfRows?: number;
  onSwapActions?: (sourceIndex: number, targetIndex: number) => void;
}

const quickActions = [
  { icon: Mail, label: 'Inbox', id: 'mail', type: 'lucide' as const },
  { icon: Gift, label: 'Benefits & credits', id: 'benefits-credits', type: 'lucide' as const },
  { icon: null, label: 'Registered plans', id: 'registered-plans', type: 'image' as const, imageSrc: mapleLeafIcon },
  { icon: CreditCard, label: 'Make a payment', id: 'make-payment', type: 'lucide' as const },
];

const DraggableQuickAction = ({ 
  action, 
  index, 
  hasUnreadMail, 
  unreadMailCount, 
  onSwap, 
  onClick 
}: { 
  action: QuickAction; 
  index: number; 
  hasUnreadMail?: boolean; 
  unreadMailCount?: number; 
  onSwap?: (sourceIndex: number, targetIndex: number) => void;
  onClick: (e: React.MouseEvent) => void;
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'quickAction',
    item: { action, index },
    canDrag: () => !!onSwap, // Only allow dragging if onSwap is provided
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'quickAction',
    canDrop: () => !!onSwap, // Only allow dropping if onSwap is provided
    drop: (item: { action: QuickAction; index: number }) => {
      if (onSwap && item.index !== index) {
        onSwap(item.index, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <button
      ref={(node) => onSwap ? drag(drop(node)) : null}
      onClick={onClick}
      className={`aspect-square flex flex-col items-center justify-center gap-1.5 p-3 transition-all text-[#007AFF] rounded-[10px] bg-white border-0 hover:opacity-70 active:opacity-50 ${
        isDragging ? 'opacity-50' : ''
      } ${
        isOver ? 'ring-2 ring-[#007AFF]' : ''
      } ${
        onSwap ? 'cursor-move' : ''
      }`}
    >
      <div className="flex-shrink-0">
        {action.type === 'lucide' && action.icon ? (
          <action.icon className="h-7 w-7" strokeWidth={2} />
        ) : action.type === 'image' && action.imageSrc ? (
          <img src={action.imageSrc} alt="" style={{ height: '30.8px', width: 'auto' }} />
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-0">
        <span className="text-[11px] text-center leading-tight break-words hyphens-auto text-black">{action.label}</span>
        {action.id === 'mail' && hasUnreadMail && (
          <span className="text-[10px] text-center text-[#ff3b30] font-bold leading-tight">{unreadMailCount} Unread</span>
        )}
      </div>
    </button>
  );
};

export function QuickActions({ onFileTaxes, onMakePayment, onViewMail, onRegisteredPlans, onBenefitsAndCredits, onCustomize, hasUnreadMail = false, unreadMailCount = 1, customActions, numberOfRows = 1, onSwapActions }: QuickActionsProps) {
  // Use customActions if provided and has items, otherwise use default quickActions
  const actions = (customActions && customActions.length > 0) ? customActions : quickActions;

  const handleClick = (actionId: string, e: React.MouseEvent) => {
    if (actionId === 'file-taxes' && onFileTaxes) {
      e.preventDefault();
      onFileTaxes();
    }
    if (actionId === 'make-payment' && onMakePayment) {
      e.preventDefault();
      onMakePayment();
    }
    if (actionId === 'mail' && onViewMail) {
      e.preventDefault();
      onViewMail();
    }
    if (actionId === 'registered-plans' && onRegisteredPlans) {
      e.preventDefault();
      onRegisteredPlans();
    }
    if (actionId === 'benefits-credits' && onBenefitsAndCredits) {
      e.preventDefault();
      onBenefitsAndCredits();
    }
  };

  // Create array with original indices preserved
  const validActionsWithIndices = actions
    .map((action, originalIndex) => ({ action, originalIndex }))
    .filter(({ action }) => action && action.label && action.label.trim() !== '');

  // Always wrap with DndProvider since DraggableQuickAction always uses drag hooks
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-[#f2f2f7] px-4 pb-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[22px] font-semibold text-black m-0">My most requested</h2>
          <button onClick={onCustomize} className="text-[#007AFF] text-[15px] bg-transparent border-0 p-0 hover:opacity-70 active:opacity-50 transition-opacity">
            Customize
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {validActionsWithIndices.map(({ action, originalIndex }) => (
            <DraggableQuickAction
              key={originalIndex}
              action={action}
              index={originalIndex}
              hasUnreadMail={action.id === 'mail' ? hasUnreadMail : false}
              unreadMailCount={unreadMailCount}
              onSwap={onSwapActions}
              onClick={(e) => handleClick(action.id, e)}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}