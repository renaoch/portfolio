"use client";
import React from "react";
import {
  TextRevealCard
} from "../ui/text-reveal-card";

export function TextRevealCardName() {
  return (
    <div className="flex items-center  justify-center rounded-2xl">
      <TextRevealCard
        text="Developer"
        revealText="Renao"
      >
       
      </TextRevealCard>
    </div>
  );
}
