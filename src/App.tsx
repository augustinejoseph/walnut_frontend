
// import React, { useState } from "react";
// import PageContainer from "./components/layout/PageContainer";
// import WeeklyCallsChart from "./components/charts/WeeklyCallsChart";
// import CallsByAgentBar from "./components/charts/CallsByAgentBar";
// import CallVolumeArea from "./components/charts/CallVolumeArea";
// import QualityDonut from "./components/charts/QualityDonut";
// import ScatterResponseVsAHT from "./components/charts/ScatterResponseVsAHT";
// import EmailModal from "./components/ui/EmailModal";
// import {
//   generateWeeklyCalls,
//   getAHTSample,
//   getCallsByAgent,
//   getCallVolume,
//   getQualityBreakdown,
//   getResponseVsAHT,
// } from "./utils/chartUtils";

// const App: React.FC = () => {
//   const [weeklyData, setWeeklyData] = useState(() =>
//     generateWeeklyCalls(false)
//   );
//   const [ahtData] = useState(() => getAHTSample());
//   const [agentData] = useState(() => getCallsByAgent());
//   const [callVolume] = useState(() => getCallVolume());
//   const [quality] = useState(() => getQualityBreakdown());
//   const [scatter] = useState(() => getResponseVsAHT());

//   const [showEmailModal, setShowEmailModal] = useState(false);

//   return (
//     <PageContainer>
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Voice Agent Analytics</h1>
//           <p className="text-sm text-gray-300 mt-1">
//             Interactive multi-chart analytics demo (sample data)
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={() => setWeeklyData(generateWeeklyCalls(true))}
//             className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20"
//           >
//             Randomize
//           </button>
//           <button
//             onClick={() => setShowEmailModal(true)}
//             className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"
//           >
//             Save Custom Values
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-6">
//           <div className="p-4 bg-slate-800/40 rounded-2xl">
//             <h2 className="font-semibold mb-3">
//               Weekly Calls (handled vs missed)
//             </h2>
//             <WeeklyCallsChart data={weeklyData} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-4 bg-slate-800/40 rounded-2xl">
//               <h3 className="font-medium mb-2">Calls by Agent</h3>
//               <CallsByAgentBar data={agentData} />
//             </div>

//             <div className="p-4 bg-slate-800/40 rounded-2xl">
//               <h3 className="font-medium mb-2">Avg Handling Time</h3>
//               {/* reuse existing AHT small chart */}
//               <div className="h-40">
//                 {/* small line chart */}
//                 <WeeklyCallsChart data={ahtData as any} />
//               </div>
//             </div>
//           </div>

//           <div className="p-4 bg-slate-800/40 rounded-2xl">
//             <h3 className="font-medium mb-2">Response Time vs AHT</h3>
//             <ScatterResponseVsAHT data={scatter} />
//           </div>
//         </div>

//         <aside className="space-y-6">
//           <div className="p-4 bg-slate-800/40 rounded-2xl">
//             <h3 className="font-semibold mb-2">Call Volume (by time)</h3>
//             <CallVolumeArea data={callVolume} />
//           </div>

//           <div className="p-4 bg-slate-800/40 rounded-2xl">
//             <h3 className="font-semibold mb-2">Quality Breakdown</h3>
//             <QualityDonut data={quality} />
//           </div>

//           <div className="p-4 bg-slate-800/40 rounded-2xl text-sm text-gray-300">
//             <strong>Notes:</strong>
//             <ul className="list-disc pl-5 mt-2">
//               <li>
//                 All data is sample / imaginary — use the Save button to link to
//                 Supabase (if configured).
//               </li>
//               <li>
//                 Randomize will perturb the weekly dataset for quick
//                 experimentation.
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>

//       {showEmailModal && (
//         <EmailModal onSubmit={() => setShowEmailModal(false)} />
//       )}
//     </PageContainer>
//   );
// };

// export default App;


import React, { useState } from "react";
import PageContainer from "./components/layout/PageContainer";
import WeeklyCallsChart from "./components/charts/WeeklyCallsChart";
import CallsByAgentBar from "./components/charts/CallsByAgentBar";
import CallVolumeArea from "./components/charts/CallVolumeArea";
import QualityDonut from "./components/charts/QualityDonut";
import ScatterResponseVsAHT from "./components/charts/ScatterResponseVsAHT";
import EmailModal from "./components/ui/EmailModal";
import {
  generateWeeklyCalls,
  getAHTSample,
  getCallsByAgent,
  getCallVolume,
  getQualityBreakdown,
  getResponseVsAHT,
} from "./utils/chartUtils";

const App: React.FC = () => {
  const [weeklyData, setWeeklyData] = useState(() => generateWeeklyCalls(false));
  const [ahtData] = useState(() => getAHTSample());
  const [agentData] = useState(() => getCallsByAgent());
  const [callVolume] = useState(() => getCallVolume());
  const [quality] = useState(() => getQualityBreakdown());
  const [scatter] = useState(() => getResponseVsAHT());

  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <PageContainer>
      {/* --- Header --- */}
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 tracking-tight">
            Voice Agent Analytics Data
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Interactive dashboards powered by Recharts — modern, smooth, and data-driven.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setWeeklyData(generateWeeklyCalls(true))}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-gray-100 hover:from-slate-600 hover:to-slate-700 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all duration-300"
          >
            Randomize
          </button>
          <button
            onClick={() => setShowEmailModal(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-400 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300"
          >
            Save Custom Values
          </button>
        </div>
      </header>

      {/* --- Charts Layout --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left & Middle sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Weekly Calls */}
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-shadow duration-500">
            <h2 className="font-semibold mb-4 text-gray-200">Weekly Calls (Handled vs Missed)</h2>
            <WeeklyCallsChart data={weeklyData} />
          </section>

          {/* Dual grid - Agents + AHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-medium mb-3 text-gray-200">Calls by Agent</h3>
              <CallsByAgentBar data={agentData} />
            </section>

            <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-medium mb-3 text-gray-200">Average Handling Time</h3>
              <div className="h-48">
                <WeeklyCallsChart data={ahtData as any} />
              </div>
            </section>
          </div>

          {/* Scatter Chart */}
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-medium mb-3 text-gray-200">Response Time vs AHT</h3>
            <ScatterResponseVsAHT data={scatter} />
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-semibold mb-3 text-gray-200">Call Volume (by time)</h3>
            <CallVolumeArea data={callVolume} />
          </section>

          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-semibold mb-3 text-gray-200">Quality Breakdown</h3>
            <QualityDonut data={quality} />
          </section>

          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all text-sm text-gray-400">
            <h4 className="text-gray-300 font-semibold mb-2">Notes</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Data shown is generated dynamically for demonstration purposes.</li>
              <li>Saving data requires a connected Supabase instance.</li>
              <li>Each chart is fully responsive and optimized for all screens.</li>
            </ul>
          </section>
        </aside>
      </div>

      {showEmailModal && <EmailModal onSubmit={() => setShowEmailModal(false)} />}
    </PageContainer>
  );
};

export default App;
