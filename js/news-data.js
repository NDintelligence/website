/*
  MiS NEWS – edit this file to add or update news.
  Add the newest post at the TOP of the list. Each post needs:
    id        short unique name, lowercase with hyphens (used in the link: post.html?id=...)
    date      "YYYY-MM-DD" (used for sorting)
    dateLabel text shown to readers, e.g. "16 November 2026"
    category  "Company" or "Market"
    title, summary
    image     file in the images/ folder (upload the photo there first)
    body      list of paragraphs
    source    optional: { label: "...", url: "https://..." } for market news
*/
window.MIS_NEWS = [
  {
    id: "mssp-integrated-scada-completed",
    date: "2026-11-02",
    dateLabel: "Q4 2026",
    category: "Company",
    title: "Integrated SCADA completed at the MSSP solar-plus-storage plant, Thailand",
    summary: "MiS has completed the Integrated SCADA for a 40 MWac solar and 60 MWh storage plant in Thailand.",
    image: "images/p01-mssp-overview.jpg",
    body: [
      "MiS has completed its scope at the MSSP plant in Thailand. The plant combines 40 MWac of solar PV with 60 MWh of battery energy storage, a 33/115 kV substation with a 50 MVA transformer, and a 115 kV line of about 2 km.",
      "MiS supplied the Integrated SCADA: one system that monitors and controls all plant data from the PV plant, the BESS and the 115 kV substation equipment, with connection to EGAT's SCADA infrastructure.",
      "The plant sells power to the neighbouring industrial estate under a direct power purchase agreement (D-PPA)."
    ]
  },
  {
    id: "bctr-rayong-certification-completed",
    date: "2026-11-01",
    dateLabel: "Q4 2026",
    category: "Company",
    title: "Electrical review and statutory certification completed at Birla Carbon Thailand, Rayong",
    summary: "Drawing review, site inspection and statutory certification for the BCTR Greenfield Project.",
    image: "images/p09-bctr-inspection.jpg",
    body: [
      "MiS has completed its work on the Birla Carbon Thailand (BCTR) Greenfield Project in Rayong. The scope covered the review and certification of electrical drawings, technical documents, single-line diagrams and equipment specifications, followed by on-site physical inspections and safety checks.",
      "Certification forms were submitted to the Department of Labour Protection and Welfare (DLPW) and the Department of Industrial Works (DIW).",
      "Lot 1 covered 43 equipment items across the core electrical backbone of the plant: the 115 kV substation, TG building, MCC building, control room and laboratory, and water treatment plant. The following lots covered the remaining buildings and areas, inspected area by area."
    ]
  },
  {
    id: "vietnam-revised-pdp8-storage-target",
    date: "2026-10-15",
    dateLabel: "Market note",
    category: "Market",
    title: "Vietnam's revised PDP8: what the storage target means for project owners",
    summary: "The revised Power Development Plan VIII sets a target of 10,000–16,300 MW of battery storage by 2030.",
    image: "images/v01-mu-cang-chai-2.jpg",
    body: [
      "Vietnam's revised Power Development Plan VIII (Decision 768/QD-TTg, 15 April 2025) expands solar, wind and LNG capacity through 2030–2035 and sets a target of 10,000–16,300 MW of battery energy storage by 2030.",
      "For owners and investors, storage changes the control and compliance scope of a project: the energy management system, the power plant controller and the SCADA connection to the system operator all need to be designed for it from the start.",
      "Pricing and procurement mechanisms for storage are still developing. We follow them closely and are glad to share what we see with project owners and equipment manufacturers."
    ]
  }
];
