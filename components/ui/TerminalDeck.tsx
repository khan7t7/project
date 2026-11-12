"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy, Play, Terminal } from "lucide-react"
import { useState } from "react"

interface CodeSnippet {
  id: string
  name: string
  lang: string
  badge: string
  code: string
  explanation: string
}

const snippets: CodeSnippet[] = [
  {
    id: "frappe",
    name: "erpnext_hooks.py",
    lang: "Python / Frappe",
    badge: "Core Architecture",
    explanation: "Enterprise-grade Frappe hook extending ERPNext retail POS and automated stock reconciliation.",
    code: `# Frappe Framework DocType Hook (Upgrade-Safe)
import frappe
from frappe.model.document import Document

class RetailPOSReconciliation(Document):
    """Event hook executed post POS invoice submission"""
    @frappe.whitelist()
    def on_submit(self):
        # Trigger real-time inventory ledger sync across stores
        stock_entry = frappe.get_doc({
            "doctype": "Stock Entry",
            "purpose": "Material Transfer",
            "from_warehouse": self.retail_store_warehouse,
            "to_warehouse": "Main Distribution Center - PK",
            "items": [{"item_code": i.item_code, "qty": i.qty} 
                      for i in self.items]
        })
        stock_entry.insert(ignore_permissions=False)
        stock_entry.submit()
        
        # Publish real-time event to n8n microservice bus
        frappe.publish_realtime(
            event="pos_ledger_updated",
            message={"invoice": self.name, "status": "SYNCED"}
        )`
  },
  {
    id: "oracle",
    name: "oracle_cutover.sql",
    lang: "PL/SQL / Oracle EBS",
    badge: "10M+ Migration",
    explanation: "High-throughput extraction pipeline migrating Oracle EBS 10g/11g ledger records with zero cutover downtime.",
    code: `-- Zero-Downtime Migration Pipeline: Oracle EBS -> ERPNext
CREATE OR REPLACE PROCEDURE sp_extract_gl_batches (
    p_cutoff_timestamp IN TIMESTAMP,
    p_batch_size       IN NUMBER DEFAULT 50000
) AS
    CURSOR c_gl_je IS
        SELECT jh.je_header_id,
               jh.period_name,
               jl.code_combination_id,
               jl.entered_dr,
               jl.entered_cr,
               gcc.segment1 AS company_code,
               gcc.segment2 AS cost_center
        FROM   gl_je_headers jh
        JOIN   gl_je_lines jl ON jh.je_header_id = jl.je_header_id
        JOIN   gl_code_combinations gcc ON jl.code_combination_id = gcc.code_combination_id
        WHERE  jh.last_update_date >= p_cutoff_timestamp;
BEGIN
    -- High-speed bulk stream with 99.9% data integrity verification
    FOR r_batch IN c_gl_je LOOP
        STAGE_TO_ERPNEXT_QUEUE(r_batch.je_header_id, r_batch.company_code);
    END LOOP;
    COMMIT;
END sp_extract_gl_batches;`
  },
  {
    id: "n8n",
    name: "n8n_ai_pipeline.json",
    lang: "Workflow / LLM Agent",
    badge: "Autonomous AI",
    explanation: "n8n autonomous agent pipeline categorizing unstructured supplier invoices into structured DocTypes.",
    code: `// n8n Intelligent LLM Automation Node Graph
{
  "nodes": [
    {
      "name": "Incoming Invoice Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": { "path": "v1/inbound-invoice", "method": "POST" }
    },
    {
      "name": "RAG LLM Extraction Agent",
      "type": "n8n-nodes-langchain.agent",
      "parameters": {
        "model": "gpt-4o-mini",
        "systemPrompt": "Extract vendor tax ID, line items, and ledger mapping. Validate against ERPNext DocType schema."
      }
    },
    {
      "name": "ERPNext REST Gateway",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://erp.enterprise.internal/api/resource/Purchase Invoice",
        "authentication": "tokenAuth",
        "sendBody": true
      }
    }
  ]
}`
  },
  {
    id: "telemetry",
    name: "system_status.sh",
    lang: "Bash / Telemetry",
    badge: "Production Live",
    explanation: "Live enterprise infrastructure telemetry and production SLA monitoring metrics.",
    code: `[MUSTAFA-SYSTEM-MONITOR] Initializing Telemetry Daemon...

[✔] ERPNext Multi-Tenant Node:   ACTIVE (v15.2.0-prod)
[✔] Oracle EBS 11g Connector:     MIGRATION COMPLETED (10,480,210 rows)
[✔] Cutover Downtime:             0.00 seconds (Zero-Downtime Window)
[✔] n8n Automation Engine:        28 Active Workflows / 4 AI RAG Nodes
[✔] Power BI Analytics Stream:    SYNCHRONIZED (Sub-second refresh)
[✔] Production SLA:               99.98% (Lahore | Muscat | Remote)

System state: OPTIMAL. All microservices online.`
  }
]

export function TerminalDeck() {
  const [activeTab, setActiveTab] = useState<string>("frappe")
  const [copied, setCopied] = useState<boolean>(false)
  const [simulatedRunning, setSimulatedRunning] = useState<boolean>(false)

  const currentSnippet = snippets.find(s => s.id === activeTab) || snippets[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRun = () => {
    setSimulatedRunning(true)
    setTimeout(() => {
      setSimulatedRunning(false)
      setActiveTab("telemetry")
    }, 800)
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#07090e]/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
      
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0d111a]/90 border-b border-white/[0.08] gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <div className="flex items-center ml-3 text-xs font-mono text-cyan-400/80 gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">mustafa@enterprise-core</span>
            <span className="text-muted-foreground">:~</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center space-x-1 overflow-x-auto py-1">
          {snippets.map((snip) => (
            <button
              key={snip.id}
              onClick={() => setActiveTab(snip.id)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === snip.id
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
              }`}
            >
              <span>{snip.name}</span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleRun}
            disabled={simulatedRunning}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-md transition-all active:scale-95 disabled:opacity-50"
            title="Execute Telemetry Simulation"
          >
            <Play className={`w-3 h-3 fill-emerald-400 text-emerald-400 ${simulatedRunning ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">{simulatedRunning ? "Executing..." : "Execute"}</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-md transition-all active:scale-95"
            title="Copy Code"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="hidden sm:inline text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Snippet Context Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-cyan-950/20 border-b border-cyan-500/10 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="font-mono text-cyan-400 font-semibold">{currentSnippet.lang}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 truncate max-w-xs sm:max-w-md">{currentSnippet.explanation}</span>
        </div>
        <span className="hidden md:inline-flex px-2 py-0.5 text-[10px] font-mono rounded uppercase tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
          {currentSnippet.badge}
        </span>
      </div>

      {/* Terminal Code Viewer */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto text-slate-200 leading-relaxed max-h-72 sm:max-h-80 select-text scrollbar-thin">
        <AnimatePresence mode="wait">
          <motion.pre
            key={currentSnippet.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="text-cyan-100/90 whitespace-pre"
          >
            <code>{currentSnippet.code}</code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Terminal Bottom Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090b12] border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE RUNTIME
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-slate-400">UTF-8 • UNIX LF</span>
        </div>
        <div className="text-cyan-400/70 font-mono">
          ERPNext v15 • Oracle EBS • n8n • Python 3.11
        </div>
      </div>
    </div>
  )
}
