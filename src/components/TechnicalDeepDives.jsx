import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Shield, Database, Cpu, GitBranch, AlertTriangle, CheckCircle2, Layers, Zap } from 'lucide-react';

const deepDives = [
  {
    id: 'attacksim-deep',
    project: 'AttackSim',
    type: 'Cyber Security · Monte Carlo Simulation',
    tagline: 'Graph-theoretic multi-stage attack simulation at enterprise scale.',
    sections: [
      {
        icon: AlertTriangle,
        label: 'Problem',
        content: 'Static threat models fail to capture lateral movement, privilege escalation chains, and conditional attack probabilities across real enterprise topologies.'
      },
      {
        icon: Layers,
        label: 'Architecture',
        content: 'Directed graph engine (Python + NetworkX) models network nodes as vertices with exploitability weights. FastAPI serves simulation workloads; Next.js dashboard renders attack path trees.'
      },
      {
        icon: Zap,
        label: 'Technical Decision',
        content: 'Chose Monte Carlo probabilistic sampling over deterministic BFS to model uncertainty in real-world attack conditions. 10M+ simulation runs surface statistically significant risk vectors invisible to deterministic approaches.'
      },
      {
        icon: Shield,
        label: 'Security Architecture',
        content: 'MITRE ATT&CK TTPs encoded as weighted graph edges. RBAC controls restrict scenario configuration. Audit logs capture all simulation parameters for reproducibility.'
      },
      {
        icon: CheckCircle2,
        label: 'Outcome',
        content: '94% accuracy improvement in infrastructure risk evaluation over baseline tools. Identifies non-obvious attack paths through multi-hop privilege escalation chains.'
      },
    ],
    metrics: [
      { label: 'Simulation Scale', value: '10M+ nodes' },
      { label: 'Risk Accuracy', value: '94%' },
      { label: 'Stack', value: 'Python · FastAPI · Next.js · Graph Algorithms' },
    ],
    accentColor: 'from-rose-500/10 via-red-500/5 to-transparent',
    borderAccent: 'border-rose-500/20',
    iconColor: 'text-rose-400',
  },
  {
    id: 'docverify-deep',
    project: 'DocVerify',
    type: 'Blockchain · Cryptographic Verification',
    tagline: 'Decentralized document trust anchoring with sub-2s verification latency.',
    sections: [
      {
        icon: AlertTriangle,
        label: 'Problem',
        content: 'Centralized document verification systems are single points of trust failure — vulnerable to internal corruption, database tampering, and authority impersonation attacks.'
      },
      {
        icon: Layers,
        label: 'Architecture',
        content: 'SHA-256 document fingerprints anchored to Ethereum smart contracts. IPFS stores encrypted document metadata. Redis cache layer serves repeat verification requests. Async Node.js pipeline handles concurrent validation at scale.'
      },
      {
        icon: Zap,
        label: 'Technical Decision',
        content: 'Ethereum for immutability guarantees over private blockchains — ensuring third-party verifiability without trusting the platform operator. IPFS chosen for content-addressable, censorship-resistant metadata storage.'
      },
      {
        icon: Shield,
        label: 'Security Architecture',
        content: 'No document content ever touches the server — only cryptographic hashes. Smart contract logic is immutable post-deployment. PostgreSQL audit trail logs all verification events with timestamps and requester identity.'
      },
      {
        icon: CheckCircle2,
        label: 'Outcome',
        content: 'Sub-2-second end-to-end verification. Cryptographic proof eliminates reliance on any centralized authority. Fully auditable verification history via immutable on-chain records.'
      },
    ],
    metrics: [
      { label: 'Verification Latency', value: '< 2s' },
      { label: 'Storage Model', value: 'Decentralized (IPFS)' },
      { label: 'Stack', value: 'Ethereum · IPFS · Node.js · PostgreSQL · Redis' },
    ],
    accentColor: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    borderAccent: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    id: 'resilai-deep',
    project: 'ResilAI',
    type: 'Distributed Systems · AI-Driven Recovery',
    tagline: 'Autonomous infrastructure resilience testing with 120ms decision latency.',
    sections: [
      {
        icon: AlertTriangle,
        label: 'Problem',
        content: 'Distributed systems often fail non-deterministically under cascading fault conditions. Manual runbooks are too slow — post-incident recovery cost is 10–100x higher than proactive resilience engineering.'
      },
      {
        icon: Layers,
        label: 'Architecture',
        content: 'Python simulation engine injects controlled failure scenarios (node crashes, network partitions, resource exhaustion) into a digital twin of the target infrastructure. LLM-backed decision engine analyzes cascade patterns and generates recovery strategies.'
      },
      {
        icon: Zap,
        label: 'Technical Decision',
        content: 'Hybrid decision engine: deterministic rule engine handles well-known failure modes at <5ms. LLM layer (Hugging Face inference) handles novel failure combinations — accepting the 120ms latency tradeoff for higher accuracy on unknown scenarios.'
      },
      {
        icon: Shield,
        label: 'Fault Tolerance Design',
        content: 'Circuit breaker patterns isolate failure injection from the control plane. The simulation environment is fully sandboxed — no production systems are ever targeted. All recovery plans are validated in simulation before output.'
      },
      {
        icon: CheckCircle2,
        label: 'Outcome',
        content: '500+ distinct recovery scenarios modeled. 120ms average decision latency. Identifies single points of failure invisible to static architecture review, including rare multi-component cascades.'
      },
    ],
    metrics: [
      { label: 'Decision Latency', value: '120ms' },
      { label: 'Recovery Scenarios', value: '500+' },
      { label: 'Stack', value: 'Python · Hugging Face · LLMs · Simulation Engine' },
    ],
    accentColor: 'from-violet-500/10 via-purple-500/5 to-transparent',
    borderAccent: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
];

function TechnicalDeepDives() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="deep-dives" className="py-32 md:py-40 px-6 relative bg-transparent section-ambient">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-6 relative"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-pure opacity-10 blur-[120px] rounded-full -z-10" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-content relative z-10" style={{ letterSpacing: '-0.02em' }}>
              Technical Deep Dives
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="h-1 bg-gradient-pure mx-auto rounded-full mb-8"
          />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-content/70 font-light leading-relaxed">
            Engineering rationale, architecture decisions, and security design behind the most complex systems I've built.
          </p>
        </motion.div>

        {/* Deep Dive Cards */}
        <div className="space-y-12 mt-20">
          {deepDives.map((dive, idx) => (
            <motion.article
              key={dive.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                theme === 'dark'
                  ? `bg-gradient-to-br from-[#0d1529] to-[#0b1120] border-white/[0.07] hover:border-white/[0.11] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)]`
                  : `bg-white/85 border-indigo-500/[0.08] hover:border-indigo-500/[0.16] hover:shadow-[0_16px_40px_-12px_rgba(99,102,241,0.10)]`
              }`}
            >
              {/* Top accent gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${dive.accentColor} opacity-80`} />

              <div className="p-8 md:p-10">

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-8 border-b border-content/[0.07]">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3 border ${
                      theme === 'dark'
                        ? `bg-white/[0.05] text-white/60 ${dive.borderAccent}`
                        : `bg-indigo-500/[0.05] text-indigo-700 ${dive.borderAccent}`
                    }`}>
                      {dive.type}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-content" style={{ letterSpacing: '-0.015em' }}>
                      {dive.project}
                    </h3>
                    <p className={`mt-1.5 text-sm md:text-base font-light ${theme === 'dark' ? 'text-content/60' : 'text-content/65'}`}>
                      {dive.tagline}
                    </p>
                  </div>

                  {/* Metrics Chips */}
                  <div className="flex flex-wrap sm:flex-col gap-2 sm:items-end flex-shrink-0">
                    {dive.metrics.map((m, i) => (
                      <div key={i} className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        theme === 'dark'
                          ? 'bg-white/[0.04] border-white/[0.06] text-content/70'
                          : 'bg-indigo-500/[0.04] border-indigo-500/[0.10] text-content/70'
                      }`}>
                        <span className="text-content/40 uppercase tracking-wider text-[10px] mr-1.5">{m.label}:</span>
                        <span className="font-semibold text-content/90">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {dive.sections.map((section, sIdx) => {
                    const Icon = section.icon;
                    // The Outcome card spans full width on the last row when there are 5 items
                    const isOutcome = section.label === 'Outcome';
                    return (
                      <div
                        key={sIdx}
                        className={`flex flex-col gap-3 p-5 rounded-xl border transition-colors duration-300 ${
                          isOutcome ? 'md:col-span-2 lg:col-span-1' : ''
                        } ${
                          theme === 'dark'
                            ? 'bg-white/[0.025] border-white/[0.05] hover:border-white/[0.09]'
                            : 'bg-indigo-500/[0.025] border-indigo-500/[0.07] hover:border-indigo-500/[0.13]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={14} className={dive.iconColor} strokeWidth={1.5} />
                          <span className={`text-[11px] font-bold tracking-widest uppercase ${dive.iconColor}`}>
                            {section.label}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-content/75 font-light">
                          {section.content}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechnicalDeepDives;
