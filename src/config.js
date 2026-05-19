export const config = {
    "number": 42,
    "slug": "student-pod-playbook",
    "title": "Student Pod Playbook",
    "category": "Student Agency Operations",
    "tagline": "A repeatable 3-4 student delivery model from kickoff to handoff.",
    "persona": "Chapter leads staffing real client projects.",
    "gap": "Students need autonomy, but clients need consistency and accountability.",
    "niche": "Student agency delivery operations.",
    "metric": "projects delivered through complete pod lifecycle",
    "modules": [
        "Pod roles",
        "Kickoff script",
        "Weekly rituals",
        "Handoff ceremony"
    ],
    "theme": {
        "accent": "#f97316",
        "accent2": "#fdba74",
        "emoji": "\ud83c\udf93",
        "metricLabel": "Operating readiness",
        "workflow": [
            "Set roles and artifacts",
            "Run rubric review",
            "Resolve blockers",
            "Export operating packet"
        ],
        "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "pod-roles",
            "label": "Pod roles",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify pod roles with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "kickoff-script",
            "label": "Kickoff script",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify kickoff script with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "weekly-rituals",
            "label": "Weekly rituals",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify weekly rituals with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "handoff-ceremony",
            "label": "Handoff ceremony",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify handoff ceremony with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Student Pod Playbook and capture baseline evidence.",
            "Complete the pod roles workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Volta Cyprus Chapter",
        "chapter": "Cyprus",
        "studentLead": "Volta Student Lead",
        "notes": "Internal chapter operations project for student-led delivery excellence. Student Pod Playbook sample.",
        "evidencePrefix": "Student Pod Playbook",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map