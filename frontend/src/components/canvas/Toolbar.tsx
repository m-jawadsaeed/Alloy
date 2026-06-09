interface Props {
  color: string;

  strokeWidth: number;

  onColorChange: (color: string) => void;

  onStrokeChange: (value: number) => void;

  onUndo: () => void;

  onRedo: () => void;

  onClear: () => void;
}

export default function Toolbar({
  color,
  strokeWidth,
  onColorChange,
  onStrokeChange,
  onUndo,
  onRedo,
  onClear,
}: Props) {
  return (
    <div className="flex gap-4 rounded-xl border p-4">
      <input
        type="color"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
      />

      <input
        type="range"
        min="1"
        max="20"
        value={strokeWidth}
        onChange={(e) => onStrokeChange(Number(e.target.value))}
      />

      <button onClick={onUndo}>Undo</button>

      <button onClick={onRedo}>Redo</button>

      <button onClick={onClear}>Clear</button>
    </div>
  );
}
