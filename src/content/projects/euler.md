---
title: Investigations of Variations on a Theme of Euler
order: 2
category: Numerical Methods
summary: >-
  Using Euler, backward Euler, Heun's method, and RK4 to solve initial-value problems
  for ordinary differential equations.
image: euler.png
imageAlt: Diagram of a draining cylindrical tank, labelled with height H, fluid level h, change in level delta-h, fluid density rho and outflow velocity v
pdf: /pdf/euler.pdf
tools: ['Euler', 'Backward Euler', "Heun's", 'RK4']
---

Four methods, one family of initial-value problems, and the question of what accuracy
actually costs. Forward Euler is the cheapest and the least forgiving. Backward Euler
trades an implicit solve for stability. Heun's method and RK4 buy accuracy per step with
extra evaluations of the derivative.

The interest is in where each one breaks: stiff problems, long integration windows, and
the point at which a smaller step size stops helping.
