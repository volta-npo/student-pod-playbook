export const domain = {
  "kind": "pod-board",
  "title": "Student Pod Playbook",
  "purpose": "A purpose-built pod board interface for a repeatable 3-4 student delivery model from kickoff to handoff.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Pod delivery tracker",
  "metricLabels": [
    "Pod Health",
    "Handoff Readiness",
    "Role Balance"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Volta Cyprus Chapter",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "projects delivered through complete pod lifecycle",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "3-4 student roster set",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Pod charter",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "3-4 student roster set",
    "Roles assigned",
    "Kickoff script completed",
    "Tasks have owners",
    "Weekly update logged",
    "Blockers resolved",
    "Mentor signoff captured",
    "Handoff memo exported"
  ],
  "artifacts": [
    "Pod charter",
    "Weekly status report",
    "Retro"
  ],
  "checks": [
    "3-4 students per pod",
    "Every task needs owner/due date",
    "Mentor signoff before handoff"
  ],
  "sampleClient": "Volta Cyprus Chapter"
};
