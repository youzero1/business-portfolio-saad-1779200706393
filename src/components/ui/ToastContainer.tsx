import { X } from 'lucide-react';
import clsx from 'clsx';
import type { Toast } from '@/types';

type ToastContainerProps = {
  toasts: Toast[];
  onRemove: (id: string) => void;
};

export default function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={clsx(
            'flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium min-w-[280px] border',
            t.type === 'success' && 'bg-emerald-900/90 border-emerald-500/40 text-emerald-100',
            t.type === 'error' && 'bg-red-900/90 border-red-500/40 text-red-100',
            t.type === 'info' && 'bg-blue-900/90 border-blue-500/40 text-blue-100'
          )}
        >
          <span className="flex-1">{t.message}</span>
          <button onClick={() => onRemove(t.id)} className="opacity-70 hover:opacity-100 transition-opacity">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
