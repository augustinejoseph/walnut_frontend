import React, { useState } from "react";
import PageContainer from "./components/layout/PageContainer";
import WeeklyCallsChart from "./components/charts/WeeklyCallsChart";
import CallsByAgentBar from "./components/charts/CallsByAgentBar";
import CallVolumeArea from "./components/charts/CallVolumeArea";
import QualityDonut from "./components/charts/QualityDonut";
import ScatterResponseVsAHT from "./components/charts/ScatterResponseVsAHT";
import EmailModal from "./components/ui/EmailModal";
import EditDataModal from "./components/ui/EditDataModal";
import {
  generateWeeklyCalls,
  getAHTSample,
  getCallsByAgent,
  getCallVolume,
  getQualityBreakdown,
  getResponseVsAHT,
} from "./utils/chartUtils";
import { getUserChartData, saveUserChartData } from "./api/chartApi";
const App: React.FC = () => {
  const [weeklyData, setWeeklyData] = useState(() => generateWeeklyCalls(false));
  const [agentData] = useState(() => getCallsByAgent());
  const [callVolume] = useState(() => getCallVolume());
  const [quality] = useState(() => getQualityBreakdown());
  const [scatter] = useState(() => getResponseVsAHT());
  const [ahtData] = useState(() => getAHTSample());

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [previousValues, setPreviousValues] = useState<any>(null);

  async function handleEmailSubmit(enteredEmail: string) {
    setEmail(enteredEmail);
    const prev = await getUserChartData(enteredEmail);
    if (prev) {
      const confirm = window.confirm(
        "We found your previously saved data. Do you want to overwrite it?"
      );
      if (!confirm) return;
      setPreviousValues(prev);
    }
    setShowEmailModal(false);
    setShowEditModal(true);
  }

  async function handleSave(values: any) {
    if (!email) return;
    await saveUserChartData(email, values);
    setWeeklyData(values);
    setShowEditModal(false);
    alert("✅ Custom values saved successfully!");
  }

  return (
    <PageContainer>
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 tracking-tight">
            Voice Agent Analytics Data
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Interactive dashboards with live data editing.
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
            Edit Custom Values
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
            <h2 className="font-semibold mb-4 text-gray-200">Weekly Calls (Handled vs Missed)</h2>
            <WeeklyCallsChart data={weeklyData} />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-200">Calls by Agent</h3>
              <CallsByAgentBar data={agentData} />
            </section>
            <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl">
              <h3 className="font-medium mb-3 text-gray-200">Average Handling Time</h3>
              <div className="h-48">
                <WeeklyCallsChart data={ahtData as any} />
              </div>
            </section>
          </div>
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl">
            <h3 className="font-medium mb-3 text-gray-200">Response Time vs AHT</h3>
            <ScatterResponseVsAHT data={scatter} />
          </section>
        </div>
        <aside className="space-y-8">
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl">
            <h3 className="font-semibold mb-3 text-gray-200">Call Volume (by time)</h3>
            <CallVolumeArea data={callVolume} />
          </section>
          <section className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/70 rounded-3xl">
            <h3 className="font-semibold mb-3 text-gray-200">Quality Breakdown</h3>
            <QualityDonut data={quality} />
          </section>
        </aside>
      </div>

      {showEmailModal && (
        <EmailModal
          onSubmit={handleEmailSubmit}
        />
      )}
      {showEditModal && (
        <EditDataModal
          onSave={handleSave}
          onCancel={() => setShowEditModal(false)}
          previous={previousValues}
        />
      )}
    </PageContainer>
  );
};

export default App;
