# Aashni Khurana — Portfolio Case Studies (All Four, Chronological)

**Format:** Version B (minimal prose, Sahib-style)
**Order:** Oldest → Newest
**Status:** Ready to drop into site content

---
---

# CASE STUDY 1 — Analytical Method Development in cGMP Manufacturing

## Homepage card

**Title:** Analytical Method Development in cGMP Manufacturing
**Subtitle:** *Anant Pharmaceuticals · Karnal, India · 2022–2023*
**Tags:** `cGMP` · `HPLC / GC-FID` · `Method Validation` · `FDA Audit Readiness`
**Card preview:** Ran analytical QC and method validation on 50+ batches per week across eight drug substance programs — including two HPLC methods validated to ICH Q2(R1) and two FDA audit-readiness reviews with zero critical findings.

---

## Full case study page

### Analytical Method Development in cGMP Manufacturing
*Anant Pharmaceuticals · Associate Scientist I, Analytical Development · June 2022 – May 2023*

`cGMP · HPLC · GC-FID · Method Validation · FDA Audit Readiness · ICH Q2(R1)`

My first scientific role was in the Analytical Development group at Anant Pharmaceuticals, an API manufacturing site in Karnal, India. The work was cGMP from day one — batch-release testing for APIs bound for regulated markets, where every assay, instrument, and document has to stand up to FDA or EMA inspection. I learned analytical chemistry the way it is actually practiced in industry: not as isolated experiments but as a continuous pipeline of batches, each one a product that has to ship, each one a decision about whether a drug is fit for human use.

Across ten months, I ran release and in-process testing on 50+ batches per week using HPLC-UV/Vis and GC-FID, generating over 600 Certificates of Analysis that moved product from manufacturing to dispatch. I supported stability and impurity profiling for eight drug substance programs, two of which I validated analytical methods for from scratch — two HPLC methods developed, qualified, and documented per ICH Q2(R1), covering specificity, linearity, accuracy, precision, LOD/LOQ, and robustness. I also led IQ/OQ/PQ qualification on three HPLC and GC systems, bringing new instruments from uncrated to production-ready.

[IMAGE PLACEHOLDER: HPLC instrument / lab setup — if available]

The work I am most proud of from that period was the audit-readiness. I supported two FDA audit-preparation reviews for the site, going through SOPs, logbooks, deviations, and data integrity trails, flagging issues before inspectors would. Both reviews closed with zero critical findings. That outcome is not glamorous — audit-readiness never is — but it is the kind of result that keeps a site operational and patients supplied. It is where I learned that scientific rigor and regulatory rigor are the same thing viewed from different angles.

I left Anant with a clear sense that I wanted to move further upstream — from releasing drugs to helping design the methods that measure them, and eventually to helping design the drugs themselves. That trajectory became the work in my master's thesis and my current research at UCSD.

---

### Metadata (sidebar)

**Employer:** Anant Pharmaceuticals, Karnal, India
**Role:** Associate Scientist I, Analytical Development
**Duration:** June 2022 – May 2023 (11 months)
**Techniques:** HPLC-UV/Vis, GC-FID, IQ/OQ/PQ instrument qualification
**Standards:** cGMP, ICH Q2(R1), FDA inspection readiness
**Deliverables:** 600+ Certificates of Analysis · 2 HPLC methods validated · 3 instruments qualified · 2 FDA audit reviews (zero critical findings) · 8 stability/impurity programs supported

---
---

# CASE STUDY 2 — DMDS–Albumin Protein Binding (Experimental)

## Homepage card

**Title:** DMDS–Albumin Protein Binding
**Subtitle:** *Master's thesis · Sam Houston State University · 2023–2025*
**Tags:** `Assay Design` · `Bioanalytical Methods` · `ADME/DMPK`
**Card preview:** Designed a vapor-phase binding assay for a volatile cyanide-antidote metabolite. Turned DMDS's instability from the thing that breaks the measurement into the thing that makes it work.

---

## Full case study page

### DMDS–Albumin Protein Binding
*Master's thesis · Sam Houston State University · 2023–2025*

`Assay Design · Bioanalytical Methods · ADME/DMPK`

Dimethyl trisulfide (DMTS) is a garlic-derived compound being developed as an intramuscular cyanide antidote — a field-deployable alternative to the IV antidotes emergency medicine currently relies on. In swine studies, about half of DMTS converts to dimethyl disulfide (DMDS) by donating sulfur to cyanide, so understanding how DMDS behaves in blood is essential for predicting the antidote's overall pharmacokinetics. My thesis characterized DMDS's binding to human serum albumin, the primary transport protein.

The challenge is that DMDS is volatile — it boils at 110 °C and doesn't want to stay in solution long enough for standard protein binding assays to work. Rather than force it into a method it doesn't fit, I designed a two-chamber assay that uses the volatility as the mechanism of equilibration: Vapor Transfer Equilibrium (VTE). One chamber holds the formulated drug, the other holds protein. They share a headspace but no liquid contact. DMDS equilibrates through the vapor phase while non-volatile surfactant and protein stay put.

[IMAGE: 01_vte_apparatus.jpg — VTE chamber diagram]

Running VTE alongside Rapid Equilibrium Dialysis (RED), I triangulated DMDS's behavior from two complementary angles. Both pointed to weak binding between DMDS and albumin — but the more interesting finding came from the methodology itself. When VTE results looked flat, I suspected the assay before the biology and traced the signal to surface partitioning, where DMDS was silently adsorbing onto container walls. Statistical analysis quantified losses at 25% over 270 minutes (p < 0.001); acetonitrile extraction recovered ~85% of the "lost" material. A parallel laser light scattering study found the formulation itself was destabilizing, with systematic scattering decline over seven days suggesting micellar restructuring.

[IMAGE: 04_laser_scattering_clean.jpg — green laser setup]

The work produced a validated HPLC method for DMDS quantification (25–700 μg/mL, R² = 0.9974), a diagnostic framework for recognizing surface partitioning and emulsion artifacts in volatile-analyte assays, and VTE itself as a transferable method for any future volatile drug candidate. The co-first-author poster on this work received First Prize at the 127th Texas Academy of Science Annual Meeting, and the broader DMTS program now builds on these methods.

---

### Metadata (sidebar)

**Thesis:** *Protein Binding Studies of Dimethyl Disulfide with Albumin*
**Committee:** Dr. David E. Thompson (Chair), Dr. Ilona Petrikovics, Dr. Donovan C. Haines
**Funding:** Robert A. Welch Foundation, COSET Graduate Scholarship
**PDF:** [link to thesis PDF]

**Presentations:**
- ACS National Meeting, Washington DC — Aug 2025
- ACS National Meeting, Denver CO — Aug 2024
- ACS Southwest Regional Meeting, Waco TX — Oct 2024
- Texas Academy of Science, 127th Annual Meeting, Odessa TX — Mar 2024 — **First Prize** (co-first author)

---
---

# CASE STUDY 3 — Computational Protein Binding of DMTS and DMDS

## Homepage card

**Title:** Computational Protein Binding of DMTS and DMDS
**Subtitle:** *Master's thesis · Sam Houston State University · 2023–2025*
**Tags:** `Molecular Docking` · `AutoDock Vina` · `PyMOL` · `In Silico`
**Card preview:** In-silico companion to the wet-lab binding study — blind-docked DMTS and DMDS against bovine serum albumin to map candidate binding sites and corroborate weak-affinity findings observed experimentally.

---

## Full case study page

### Computational Protein Binding of DMTS and DMDS
*Master's thesis · Sam Houston State University · 2023–2025*

`Molecular Docking · AutoDock Vina · PyMOL · In Silico · Cyanide Antidote Program`

Wet-lab assays tell you whether a compound binds — but they are slow, volatile-compound binding is especially finicky (see [DMDS–Albumin Protein Binding](#)), and they cannot tell you *where* on the protein surface the interaction is happening. To triangulate the experimental findings with a second, orthogonal line of evidence, I carried out molecular docking studies on both DMTS and DMDS against bovine serum albumin (BSA), the structural analog of human albumin commonly used in early-stage binding work.

I built the docking grids in AutoDock Vina — full-protein blind docking, exhaustiveness level 8, energy range 4 — configured to let the algorithm search the entire BSA surface for thermodynamically favorable binding sites without any priors about where those sites might be. Nine poses per ligand were generated, ranked by predicted binding affinity.

[IMAGE: 05a_albumin_dmts_binding.jpg — top DMTS binding pose on albumin]

Best-scoring poses came in at −2.6 kcal/mol for DMTS and −2.3 kcal/mol for DMDS. These are weak binding energies by small-molecule standards, and importantly, they are consistent with the weak affinity observed in the VTE and RED binding assays. The computational result corroborated the experimental one — two independent methods, one conclusion.

[IMAGE: 06_docking_poses_grid.jpg — multiple pose grid showing candidate binding sites]

The multiple-pose analysis was the part that made the work genuinely useful to the broader program. Both ligands clustered at structurally similar regions of the albumin surface, suggesting that DMTS and DMDS engage the protein through a shared set of interaction geometries rather than distinct mechanisms. For a drug development pipeline where DMTS is the administered molecule and DMDS is the in-vivo metabolite, that shared-binding pattern matters: it means the pharmacokinetic behavior of the parent compound and its active metabolite is likely governed by the same transport mechanism, simplifying the PK modeling that will eventually support IND submission.

I visualized all poses in PyMOL and generated the ribbon-diagram figures used in the thesis and the final ACS conference poster. The computational work was published alongside the experimental work as part of the thesis and presented at ACS Washington DC (August 2025).

---

### Metadata (sidebar)

**Software:** AutoDock Vina, PyMOL, Open Babel
**Structures:** Bovine serum albumin (PDB entries from RCSB)
**Method:** Blind docking, full-protein search grid, 9 poses per ligand
**Binding affinities (best pose):** DMTS −2.6 kcal/mol · DMDS −2.3 kcal/mol
**Companion case study:** *DMDS–Albumin Protein Binding* (experimental)

---
---

# CASE STUDY 4 — iPSC-Derived Motor Neurons as a Model for Meditation-Induced Bloodborne Signaling

## Homepage card

**Title:** iPSC-Derived Motor Neurons as a Model for Meditation-Induced Bloodborne Signaling
**Subtitle:** *UC San Diego Health · Department of Anesthesiology · 2025–Present*
**Tags:** `iPSC` · `Bioanalytical Assay Development` · `Neurotherapeutics`
**Card preview:** Building a human motor neuron model to decode how meditation-induced bloodborne factors reshape neuronal bioenergetics — the next-generation cellular system for a published research program moving from neuroblastoma cell lines to patient-derivable neurons.

---

## Full case study page

### iPSC-Derived Motor Neurons as a Model for Meditation-Induced Bloodborne Signaling
*UC San Diego Health · Department of Anesthesiology · 2025–Present*

`iPSC · Bioanalytical Assay Development · Neurotherapeutics`

Meditation has long been associated with improvements in physical and mental health, but the biological mechanisms linking contemplative practice to physiological change are only now being systematically mapped. Recent work from the Patel lab at UCSD has shown that intensive meditation induces measurable shifts in the blood environment — coordinated changes in circulating proteins, metabolites, and exosomal RNAs — and that plasma collected from experienced meditators exerts direct effects on cultured cells. Zuniga-Hertz et al. (2023) identified SERPINA5, a serine protease inhibitor elevated in meditator plasma, as one bloodborne factor sufficient to limit SARS-CoV-2 pseudovirus entry into human lung epithelial cells. A follow-up pilot study in monozygotic twins (Zuniga-Hertz et al., 2025) mapped coordinated shifts in gene expression, metabolomic pathways, cytokine profiles, and heart rate dynamics across a 7-day meditation retreat. Most recently, Jinich-Diamant et al. (2025) demonstrated that post-intervention plasma induced longer neurite outgrowth in PC12 cells and shifted BE(2)M17 neuroblastoma cells toward enhanced glycolytic metabolism — direct cellular evidence that meditation-induced plasma carries neurotrophic and bioenergetic signals.

Together, these findings suggest that meditation induces the release of bioactive compounds and signaling molecules into the bloodstream. The exact biochemical pathways through which these factors influence human neurons, however, remain unclear. Which signaling cascades are engaged? What is the bioenergetic signature of the neuronal response? And do the effects observed in immortalized neuroblastoma lines translate to the cell types most central to neurological function?

[IMAGE PLACEHOLDER: iPSC microscopy or albumin structure as molecular-characterization visual]

To address these questions, I am building out an iPSC-derived motor neuron platform as the next-generation human neuronal model for this research program. Motor neurons are particularly well-suited to the question: they are among the most electrically active cell types in the human body, and their reliance on high-throughput bioenergetics makes them exceptionally sensitive to shifts in the extracellular environment. I run the full iPSC-to-motor-neuron differentiation protocol — a multi-week process with narrow quality windows — and am developing the bioanalytical pipeline that will characterize how these neurons respond to pre- and post-meditation plasma across orthogonal readouts: NanoSight nanoparticle tracking analysis for exosome and extracellular vesicle characterization, Bradford quantification for protein loading, and ELISA-format immunoassays for target protein abundance.

The pipeline is being built now, with no experimental data yet. Once validated, it will be ready to support the lab's move from neuroblastoma-based assays toward a patient-derivable neuronal system capable of testing pre/post-meditation plasma at scale. The broader aim is to give the lab a platform that can ask the same questions of any bloodborne intervention — not only meditation — and begin resolving which molecular signals in human blood carry biologically meaningful information to human neurons.

---

### Metadata (sidebar)

**Principal Investigator:** Dr. Hemal H. Patel
**Institution:** UC San Diego Health, Department of Anesthesiology
**Focus:** Mind-body interventions, meditation-induced plasma signaling, neuronal bioenergetics
**My methods:** iPSC culture and motor neuron differentiation, NanoSight NS300 NTA, Bradford assay, ELISA-format immunoassay
**Status:** Pipeline development phase

**Key lab publications informing this work:**
- Zuniga-Hertz JP, et al. Meditation-induced bloodborne factors as an adjuvant treatment to COVID-19 disease. *Brain Behav Immun Health.* 2023;32:100675.
- Zuniga-Hertz JP, et al. Multidimensional Analysis of Twin Sets During an Intensive Week-Long Meditation Retreat: A Pilot Study. *Mindfulness.* 2025;16:1634–1655.
- Jinich-Diamant A, et al. Neural and molecular changes during a mind-body reconceptualization, meditation, and open label placebo healing intervention. *Commun Biol.* 2025;8:1525.

---
---

# END OF CASE STUDIES

Four case studies, chronological:
1. Anant Pharmaceuticals (industry cGMP, 2022–2023)
2. DMDS–Albumin experimental (thesis wet-lab, 2023–2025)
3. DMTS/DMDS computational docking (thesis in-silico, 2023–2025)
4. iPSC meditation plasma platform (UCSD current, 2025–present)

Image assignments:
- CS1: optional HPLC / lab photo if Aashni gathers one
- CS2: 01_vte_apparatus.jpg, 04_laser_scattering_clean.jpg
- CS3: 05a_albumin_dmts_binding.jpg, 06_docking_poses_grid.jpg
- CS4: placeholder (iPSC shot if later, or 05b_albumin if repurposed)
