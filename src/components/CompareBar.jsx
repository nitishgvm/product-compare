interface Props {
  count: number;
  onClear: () => void;
}

export default function CompareBar({ count, onClear }: Props) {
  if (count < 2) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white
p-4 flex justify-between animate-slideUp">
      <span>{count} products selected</span>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}
