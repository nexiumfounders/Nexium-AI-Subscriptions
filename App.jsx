import React, { useMemo, useState, useEffect, useRef } from "react";

const founders = [
  { id: "faris", name: "Faris Elnabarawi" },
  { id: "omar", name: "Omar Badr" },
  { id: "ahmed", name: "Ahmed Sherif" },
];

// Format a number as an Egyptian pound currency string. The original
// implementation assumed that `v` was always a valid number and would throw
// when called with `undefined`, `null` or any non‑numeric value. That scenario
// can surface when calculating totals from optional data. To prevent runtime
// crashes, coerce the input to a number and guard against `NaN`.
const EGP = (v) => {
  const value = Number(v);
  return Number.isFinite(value) ? `${value.toFixed(2)} EGP` : "0.00 EGP";
};

// ... (rest of the code omitted for brevity, but keep the full user code here with corrected template literals)
