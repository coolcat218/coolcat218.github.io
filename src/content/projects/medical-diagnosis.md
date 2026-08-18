---
title: AI-Powered Medical Diagnosis
order: 1
category: AI / Retrieval
summary: >-
  Addressing medical conditions with AI-powered diagnoses given symptoms, using academic
  research reports and FDA Adverse Event Reporting System data to augment real-time data
  with academic knowledge.
image: medical-diagnosis.jpg
imageAlt: A force-directed knowledge graph of linked medical concepts, drawn in blue on white
repo: https://github.com/coolcat218/Medical-Diagnosis/tree/main
tools: ['Python', 'FAERS', 'Academic literature']
---

The system takes a set of presenting symptoms and returns candidate conditions, grounding
each suggestion in two very different kinds of evidence: peer-reviewed academic research,
and the FDA's Adverse Event Reporting System.

Academic literature is careful but slow. Adverse event reports are fast, messy, and
enormous. Reading them together lets a real-time signal be checked against established
knowledge before it is offered as a diagnosis, rather than after.
