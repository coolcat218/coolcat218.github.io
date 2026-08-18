---
title: AI-Powered Medical Diagnosis
order: 1
category: AI / Retrieval
summary: >-
  Addressing medical conditions with AI-powered diagnoses given symptoms, using academic
  research reports and FDA Adverse Event Reporting System data to augment real-time data
  with academic knowledge.
image: medical-diagnosis-kg.png
imageAlt: >-
  A force-directed knowledge graph in blue: drug nodes linked to the adverse reactions
  reported alongside them, and on to the reported outcomes. Entities are drawn from the
  project's own FAERS extract; the layout is illustrative.
repo: https://github.com/coolcat218/Medical-Diagnosis/tree/main
tools: ['Python', 'FAERS', 'Academic literature']
---

The system takes a set of presenting symptoms and returns candidate conditions, grounding
each suggestion in two very different kinds of evidence: peer-reviewed academic research,
and the FDA's Adverse Event Reporting System.

The FDA's Adverse Event Reports reflect rapid updating of events and cover a wider surface
area of patients and medical symptoms compared to the slow, measured process of
peer-reviewed academic research. Reading them together lets a real-time signal be checked
against established knowledge before it is offered as a diagnosis.
