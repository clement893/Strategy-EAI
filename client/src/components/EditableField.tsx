import { useState } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Pencil, Check, X } from 'lucide-react';

interface EditableFieldProps {
  path: string;
  value: string | number;
  type?: 'text' | 'number' | 'textarea';
  className?: string;
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

export default function EditableField({
  path,
  value,
  type = 'text',
  className = '',
  as: Component = 'span'
}: EditableFieldProps) {
  const { isEditMode, updateContent } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    const finalValue = type === 'number' ? Number(editValue) : editValue;
    updateContent(path, finalValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (!isEditMode) {
    return <Component className={className}>{value}</Component>;
  }

  if (isEditing) {
    return (
      <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded border border-blue-500/50">
        {type === 'textarea' ? (
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="bg-transparent border-none outline-none text-white resize-none"
            rows={3}
            autoFocus
          />
        ) : (
          <input
            type={type}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full"
            autoFocus
          />
        )}
        <button
          onClick={handleSave}
          className="p-1 hover:bg-green-500/20 rounded transition-colors"
          title="Sauvegarder"
        >
          <Check className="w-4 h-4 text-green-400" />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 hover:bg-red-500/20 rounded transition-colors"
          title="Annuler"
        >
          <X className="w-4 h-4 text-red-400" />
        </button>
      </div>
    );
  }

  return (
    <Component
      className={`${className} ${isEditMode ? 'cursor-pointer hover:bg-white/10 px-2 py-1 rounded border border-dashed border-white/30 inline-flex items-center gap-2 group' : ''}`}
      onClick={() => setIsEditing(true)}
    >
      {value}
      {isEditMode && (
        <Pencil className="w-3 h-3 text-white/40 group-hover:text-white/70 transition-colors" />
      )}
    </Component>
  );
}
