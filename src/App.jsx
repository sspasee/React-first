import Header from "./components/Header/Header"
import IntroSection from './components/data/intro'
import ExplainSection from "./components/explainSection"
import Section from "./components/Section"
import TabsSection from "./components/TabsSection"
import { useState } from "react"
import FeedbackSection from "./components/data/FeedBack"
import EffectSection from "./components/EffectsSection"

export default function App() {
  const [tab , setTab] = useState('effect')


// посмотри на Button jsx и TabsSection jsx там все понятно 
  return (
    <>
      <Header />
      <main>
      <IntroSection />
      <TabsSection active={tab} onChange={(current) => setTab(current)} />
      {tab === 'main' && (
        <>
      <ExplainSection />
      <Section />
      </>
      )}

      {tab === 'feedback' && <FeedbackSection /> }
      {tab === 'effect' && <EffectSection />}
      </main>
     </>
)}

