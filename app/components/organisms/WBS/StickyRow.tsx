import React from "react"
import { StickyCells, StickyCellsProps } from "./StickyCells"

export type StickyRowProps = {
  labels: StickyCellsProps[]
}
export const StickyRow: React.FC<StickyRowProps> = ({ labels }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {labels.map(({ label, cellLength }) => {
        return (
          <div
            key={`StickyRow_${label}`}
            style={{
              display: "flex",
            }}
          >
            <StickyCells label={label} cellLength={cellLength} />
          </div>
        )
      })}
    </div>
  )
}