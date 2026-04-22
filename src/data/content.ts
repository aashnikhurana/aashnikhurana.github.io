// Mirrors CONTENT.md — update both when facts change.

export const identity = {
  name: 'Aashni Khurana, MS',
  role: 'Research Scientist',
  affiliation: 'Department of Anesthesiology, UC San Diego Health',
  pi: 'Dr. Hemal Patel',
  location: 'San Diego, CA',
  openToRelocation: true,
}

export const contact = {
  email: 'khurana.aashni1101@gmail.com',
  phone: '+1 (214) 681-7913',
  linkedin: 'https://linkedin.com/in/aashni-khurana',
  github: 'https://github.com/aashnikhurana',
  orcid: null as string | null,    // [TODO: Add if you have one]
  scholar: null as string | null,  // [TODO: Add Google Scholar link]
}

export const hero = {
  nameTag: 'AASHNI KHURANA, MS',
  headline: [
    'Scientist. Method developer. Tool builder.',
    'At the intersection of analytical chemistry and AI.',
  ],
  roleLine: 'Research Scientist · UC San Diego · Analytical & Bioanalytical Chemistry',
}

export const about = {
  shortBio: `Aashni Khurana is a scientist working at the intersection of analytical chemistry, bioanalytical method development, and emerging AI tools for scientific workflows. She holds an MS in Chemistry from Sam Houston State University and currently conducts research at UC San Diego Health's Department of Anesthesiology, developing bioanalytical assays for nanoparticle therapeutics in iPSC-derived motor neuron models.`,
  longBio: [
    `Aashni is an analytical and bioanalytical scientist with 4+ years of combined experience spanning cGMP pharmaceutical operations and academic research. Her work focuses on HPLC and LC-MS/MS method development, protein-binding characterization, and bioanalytical support for drug discovery and safety programs.`,
    `At UC San Diego Health, she develops assays for quantitative therapeutic characterization in iPSC-derived human motor neuron models — work that connects bench-level chemistry to translational neurobiology. Her master's thesis at Sam Houston State University characterized dimethyl disulfide (DMDS) protein binding for the federally funded DMTS cyanide antidote program, developing and validating HPLC methodology for a volatile analyte with significant surface-partitioning behavior.`,
    `Prior to graduate school, Aashni was an Associate Scientist I in Analytical Development at Anant Pharmaceuticals, executing cGMP QC release and stability testing across hundreds of drug substance and product batches. She has trained more than ten junior researchers in HPLC/LC-MS/MS workflows and GLP documentation, and taught 100+ undergraduates per semester across General Chemistry, Biochemistry, and Instrumental Analytical Chemistry labs.`,
    `She is increasingly interested in the application of AI and computational tools to accelerate analytical chemistry workflows — from method development to data interpretation to small-scale scientific tooling.`,
  ],
  quote: null as string | null, // [TODO: One line that captures your philosophy]
  timeline: [
    { year: '2026–',      label: 'Research Scientist, UC San Diego Health' },
    { year: '2023–2025',  label: 'Lab Manager & Research Assistant, Sam Houston State University' },
    { year: '2025',       label: 'MS Chemistry, Sam Houston State University' },
    { year: '2024',       label: 'Chemical Imagination & Innovation study abroad, Hungary' },
    { year: '2023',       label: 'Intern Biochemist, Birla Institute of Scientific Research (India)' },
    { year: '2022–2023',  label: 'Associate Scientist I, Anant Pharmaceuticals (India)' },
    { year: '2022',       label: 'BS Chemistry (Honors), Panjab University (India)' },
  ],
  cvPath: '/resume/AashniKhurana_Resume.pdf',
}

export const research = {
  currentFocus: {
    title: 'iPSC-derived motor neuron bioanalytics',
    affiliation: 'UC San Diego Health, Department of Anesthesiology',
    pi: 'Dr. Hemal Patel',
    description: `Developing quantitative assays (NanoSight NTA, Bradford quantification, ELISA-format immunoassays) for nanoparticle therapeutic characterization across 20+ experimental conditions in iPSC-derived human motor neuron models. Supporting lead compound selection with molecular docking analysis (AutoDock Vina, PyMOL) for 3 preclinical candidates.`,
  },
  ongoing: `Currently developing bioanalytical methods for quantitative nanoparticle therapeutic characterization in iPSC-derived human motor neurons. More detail to follow as work advances toward publication.`,
  thesis: {
    title: 'Protein Binding Studies of Dimethyl Disulfide with Albumin',
    institution: 'Sam Houston State University',
    year: '2025',
    committee: ['Dr. David E. Thompson (Chair)', 'Dr. Ilona Petrikovics', 'Dr. Donovan C. Haines'],
    pdfLink: null as string | null, // [TODO: Link to thesis PDF if desired]
    abstract: `Cyanide poisoning requires rapid therapeutic intervention, and current antidotes are limited by intravenous administration challenges in emergency settings. Dimethyl trisulfide (DMTS) — a garlic-derived compound — is a promising intramuscular cyanide antidote that undergoes rapid conversion to dimethyl disulfide (DMDS) through sulfur donation, with approximately 50% conversion observed in swine studies. Understanding DMDS protein-binding behavior is essential for predicting pharmacokinetics and therapeutic efficacy, but DMDS volatility (bp 109–110 °C) presents significant analytical challenges for traditional protein binding assays requiring extended equilibration.

This work developed and validated HPLC methodology for DMDS quantification (R² = 0.9974 across 25–700 µg/mL using DMTS as internal standard). Container integrity assessment using acetic acid confirmed excellent seal performance (CV% = 2.1%). Partitioning studies revealed complex DMDS interactions between solution, vapor phase, and container surfaces, with acetonitrile extraction recovering ~85% of surface-associated material. Statistical analysis quantified significant surface partitioning losses (25% over 270 minutes, R² = 0.64, p < 0.001). Emulsion stability analysis using laser light scattering showed concentration-dependent optical signatures (p = 4 × 10⁻²¹). Vapor Transfer equilibrium experiments showed no detectable DMDS–albumin binding under tested conditions; minimal transfer rates (≤0.01 DMDS/DMTS ratios) suggest longer equilibration may be required.

The work establishes a systematic analytical framework, provides validated DMDS quantification methodology, and identifies emulsion stability, surface partitioning, and equilibration kinetics as factors requiring control in protein binding studies of volatile analytes.`,
    keywords: ['DMDS', 'DMTS', 'Protein binding', 'Equilibria analysis', 'Surface partitioning', 'Cyanide poisoning', 'Equilibrium dialysis'],
  },
  conferences: [
    {
      boldAuthors: ['Esterellas Marquina, F. J.', 'Khurana, A.'],
      authorLine: 'Esterellas Marquina, F. J.; Khurana, A.; Gonzalez, K.; Ortiz, S.; Petrikovics, I.; Thompson, D. E.',
      title: 'Spectroscopic Characterization of DMTS–Serum Albumin Binding.',
      venue: 'ACS National Meeting',
      location: 'Washington, DC',
      date: 'August 2025',
      paperId: null as string | null,
      award: null as string | null,
      coFirstNote: null as string | null,
    },
    {
      boldAuthors: ['Khurana, A.'],
      authorLine: 'Khurana, A.; Gonzalez, K.; Petrikovics, I.; Thompson, D. E.',
      title: 'In vitro Investigation of Dimethyl Disulfide, a metabolite of the cyanide antidote candidate Dimethyl Trisulfide.',
      venue: 'ACS Southwest Regional Meeting',
      location: 'Waco, TX',
      date: 'October 2024',
      paperId: '4165425',
      award: null as string | null,
      coFirstNote: null as string | null,
    },
    {
      boldAuthors: ['Khurana, A.'],
      authorLine: 'Khurana, A.; Jordan, K.; Perez, A.; Petrikovics, I.; Thompson, D. E.',
      title: 'Disambiguating the binding equilibria of volatile and nonvolatile compounds to protein.',
      venue: 'ACS National Meeting',
      location: 'Denver, CO',
      date: 'August 2024',
      paperId: '4108246',
      award: null as string | null,
      coFirstNote: null as string | null,
    },
    {
      boldAuthors: ['Esterellas Marquina, F. J.', 'Khurana, A.'],
      authorLine: 'Esterellas Marquina, F. J.*; Khurana, A.*; Villanueva, T.; Vazquez, K.; Rafeedie, N.; Langley, M.; Lopez, R.; Gray, K.; Black, K.; Herath, D.; Jordan, K.; Thompson, D. E.; Petrikovics, I.',
      title: 'Protein Binding Studies for the Cyanide Antidote Candidate Dimethyl Trisulfide.',
      venue: '127th Annual Meeting of the Texas Academy of Science',
      location: 'Odessa, TX',
      date: 'March 2024',
      paperId: null as string | null,
      award: 'First Prize',
      coFirstNote: '* = co-first author',
    },
  ],
  priorExperience: [
    {
      role: 'Lab Manager & Research Assistant',
      institution: 'Sam Houston State University, Department of Chemistry',
      period: 'Aug 2023 – Aug 2025',
      pis: ['Dr. Ilona Petrikovics', 'Dr. David E. Thompson'],
      bullets: [
        'Led HPLC method development, optimization, and validation per ICH Q2(R1) for a federally supported cyanide antidote program.',
        'Characterized protein-binding kinetics across 150+ samples supporting pharmacokinetic modeling.',
        'Optimized RED, PED, PAMPA, and VTE permeability assays; supported HPLC-UV and HPLC-MS method transfer with audit-ready documentation per GDP and ICH standards.',
        'Characterized DMDS–human serum albumin binding kinetics using RED and VTE assays.',
        'Authored 10+ SOPs, method validation reports, and technical documents; maintained IQ/OQ/PQ and LIMS-aligned records.',
        'Conducted root cause analysis on instrument deviations across 5+ analytical platforms; led CAPA investigations to closure.',
        'Summer 2024 (Welch Foundation Scholarship): Vapor equilibrium studies with HPLC-UV-Vis to characterize leaks and equilibration in protein binding apparatus.',
      ],
    },
    {
      role: 'Associate Scientist I',
      institution: 'Anant Pharmaceuticals, Analytical Development, Karnal, India',
      period: 'Jun 2022 – May 2023',
      pis: [] as string[],
      bullets: [
        'Executed cGMP QC release testing on 50+ drug substance and drug product batches per week using HPLC-UV/Vis, GC-FID, and UV-Vis per USP/EP standards.',
        'Maintained 100% on-time batch release and zero critical findings across 2 FDA audit-readiness reviews.',
        'Developed and validated 2 HPLC methods per ICH Q2(R1); generated COAs for 600+ batch tests.',
        'Led OOS/OOT investigations to CAPA closure.',
        'Supported ICH Q1A stability studies and impurity profiling across 8 drug substance programs.',
        'Performed IQ/OQ/PQ for 3 instruments; documented change control per 21 CFR Part 11.',
      ],
    },
    {
      role: 'Intern Biochemist',
      institution: 'Birla Institute of Scientific Research, R&D, Jaipur, India',
      period: 'Jun 2023 – Aug 2023',
      pis: [] as string[],
      bullets: [
        'DNA/RNA extraction, gel electrophoresis, cloning, protein purification, and bioinformatics analysis supporting preclinical drug design projects.',
      ],
    },
  ],
}

export const teaching = {
  philosophy: null as string | null, // [TODO: 2–3 sentences on how you teach]
  courses: [
    {
      name: 'General Chemistry I Laboratory',
      semesters: 'Fall 2023, Spring 2024',
      topics: 'Stoichiometry, titration, chemical reactions, lab safety, data analysis.',
    },
    {
      name: 'Inorganic and Environmental Chemistry Laboratory',
      semesters: 'Fall 2023, Spring 2024',
      topics: 'Separation techniques, calorimetry, lab safety, data analysis.',
    },
    {
      name: 'Biochemistry Laboratory',
      semesters: 'Fall 2024 – Spring 2025',
      topics: 'Amino acid identification, fingerprint development, gel chromatography, riboflavin assay design.',
    },
    {
      name: 'Instrumental Analytical Chemistry Laboratory',
      semesters: 'Fall 2024 – Spring 2025',
      topics: 'Hands-on training on JASCO V750 UV-Vis Spectrophotometer, Hitachi F4500 Fluorescence Spectrophotometer, Varian Flame AA Spectrometer, and GC-FID.',
    },
  ],
  scale: 'Instructed 100+ undergraduates per semester across General Chemistry, Biochemistry, and Instrumental Analytical Chemistry labs at SHSU.',
  mentoring: [
    {
      title: 'ACS Project SEED (Summer 2024, volunteer)',
      description: 'Mentored 2 high school students in hands-on laboratory experience, focusing on lab techniques and data analysis.',
    },
    {
      title: 'Junior researcher mentorship (2023–2025)',
      description: 'Trained and mentored 10+ junior researchers on HPLC, LC-MS/MS, Chromeleon 7 CDS, and GLP documentation.',
    },
    {
      title: 'QC intern onboarding (Anant Pharmaceuticals, 2022–2023)',
      description: 'Onboarded QC intern on cGMP workflows, HPLC operation, and batch records.',
    },
  ],
}

export const projects = [
  { name: null as string | null, description: null as string | null, repo: null as string | null, status: 'in-progress' as const },
  { name: null as string | null, description: null as string | null, repo: null as string | null, status: 'in-progress' as const },
  { name: null as string | null, description: null as string | null, repo: null as string | null, status: 'in-progress' as const },
]

export const skills = {
  instruments: 'HPLC-UV/Vis (including RP-HPLC), UPLC, LC-MS/MS (Triple Quad), GC-FID, GC-MS, ICP-MS, ICP-AES, XRD, XRF, NanoSight NS300 (NTA), DLS/Zetasizer, Capillary Electrophoresis (MCE, CE-SDS, icIEF, cIEF), UV-Vis, NMR (¹H-NMR), FTIR, AAS (Varian Flame AA), SDS-PAGE, JASCO V750 UV-Vis, Hitachi F4500 Fluorescence Spectrophotometer.',
  bioanalytical: 'Protein binding assays (RED, VTE, PAMPA, PED), ELISA/LBA, Bradford assay, in vitro ADME, plasma protein binding (PPB), PK sample analysis, biomarker quantification, immunoassay development, SEC, CEX/IEX, affinity chromatography, iPSC cell culture, animal cell culture, aseptic technique, sterile filtration, DNA/RNA extraction, mitochondrial extraction, enzyme kinetics, calorimetry, gravimetry.',
  regulatory: 'cGMP, GLP, GxP, ICH Q2(R1), ICH Q1A, 21 CFR Part 11/211, USP/EP compendial, OOS/OOT investigation, CAPA, deviation reports, change control, ALCOA, IQ/OQ/PQ qualification, CQA, data integrity, ELN, LIMS, ISO 17025.',
  software: 'Chromeleon 7 CDS, Waters Empower, OpenLab CDS, Unicorn/ÄKTA, LIMS, GraphPad Prism, AutoDock Vina, PyMOL, UCSF Chimera, VMD, NAMD, ImageJ, Python (intermediate), R (beginner), LaTeX, Linux, MS Office.',
}

export const awards = [
  { title: 'First Prize', event: '127th Annual Meeting of the Texas Academy of Science', year: '2024', note: 'co-first author, poster' },
  { title: 'Robert A. Welch Foundation Scholarship', event: 'College of Science and Engineering Technology, SHSU', year: 'Summer & Fall 2024', note: '' },
  { title: 'COSET Graduate School Scholarship', event: '', year: 'Fall 2023, Spring 2024', note: '' },
  { title: 'COSET Study Abroad Scholarship', event: '', year: 'Summer 2024', note: '' },
  { title: 'Bearkat Abroad Scholarship', event: '', year: 'Summer 2024', note: '' },
  { title: 'Graduate Student Funding', event: 'SHSU', year: 'Fall 2023, Fall 2024', note: '' },
]

export const studyAbroad = {
  title: 'Chemical Imagination and Innovation',
  location: 'Hungary',
  date: 'May 2024',
  sites: [
    { name: 'Biological Research Centre, Hungarian Academy of Sciences, Szeged', focus: 'Biophysical chemistry, drug transport, Vitamin C research.' },
    { name: 'University of Szeged, Institute of Pharmaceutical Technology & Regulatory Affairs', focus: 'Pharmaceutical chemistry, formulation of medicinal products, hands-on lab experience.' },
    { name: 'Extreme Light Infrastructure (ELI) Facility, Szeged', focus: 'Guided tour of the laser center; laser chemistry.' },
    { name: 'University of Pécs, Department of Chemistry', focus: 'Chemistry of emerging diseases, mining extraction, nuclear diseases.' },
    { name: 'Eger University Research Institute for Viticulture and Enology', focus: 'Viticulture, fermentation processes, biochemistry of natural microfluidics.' },
    { name: 'Pannonhalma Abbey', focus: 'Chemical ecology and historical contributions to science education.' },
  ],
}

export const service = [
  { role: 'Event Coordinator', org: 'International Students Organization, Sam Houston State University', period: 'Fall 2023 – Spring 2024' },
  { role: 'Joint Secretary', org: 'Rotaract Club of Samaritans, Chandigarh, India', period: '2022–2023' },
  { role: 'International Services Director', org: 'Rotaract Club of Samaritans, Chandigarh, India', period: '2021–2022' },
  { role: 'Cadet (Certificate A, B, and C holder)', org: 'National Cadet Corps, PHHPC Directorate, Ministry of Defense, Government of India', period: 'Fall 2016 – Spring 2022' },
]
