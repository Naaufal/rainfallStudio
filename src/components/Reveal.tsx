"use client";

import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
