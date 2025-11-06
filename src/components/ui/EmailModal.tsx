import React, { useState } from "react";

interface Props {
  onSubmit: (email: string) => void;
}

const EmailModal: React.FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-gray-900 p-6 rounded-xl border border-white/10 shadow-lg w-96">
        <h2 className="text-xl text-white mb-4">Enter your email</h2>
        <input
          type="email"
          className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <button
          onClick={() => onSubmit(email)}
          className="mt-4 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
