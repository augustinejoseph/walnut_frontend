import React, { useState } from "react";

interface Props {
  onSave: (values: { day: string; handled: number; missed: number }[]) => void;
  onCancel: () => void;
  previous?: { day: string; handled: number; missed: number }[];
}

const EditDataModal: React.FC<Props> = ({ onSave, onCancel, previous }) => {
  const [data, setData] = useState(previous || [
    { day: "Mon", handled: 120, missed: 8 },
    { day: "Tue", handled: 130, missed: 10 },
    { day: "Wed", handled: 140, missed: 12 },
  ]);

  const handleChange = (index: number, key: string, value: string) => {
    const updated = [...data];
    (updated as any)[index][key] = key === "day" ? value : Number(value);
    setData(updated);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-slate-900 p-6 rounded-2xl w-[420px]">
        <h2 className="text-xl font-semibold mb-4">Edit Weekly Data</h2>
        <div className="space-y-3">
          {data.map((row, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                className="bg-slate-800 px-2 py-1 rounded w-1/3 text-sm"
                value={row.day}
                onChange={(e) => handleChange(i, "day", e.target.value)}
              />
              <input
                className="bg-slate-800 px-2 py-1 rounded w-1/3 text-sm"
                value={row.handled}
                type="number"
                onChange={(e) => handleChange(i, "handled", e.target.value)}
              />
              <input
                className="bg-slate-800 px-2 py-1 rounded w-1/3 text-sm"
                value={row.missed}
                type="number"
                onChange={(e) => handleChange(i, "missed", e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onCancel} className="px-4 py-2 bg-slate-700 rounded-lg">
            Cancel
          </button>
          <button
            onClick={() => onSave(data)}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDataModal;
