import { useState } from "react";

const legalDefinitions = {
  "auto-renewal": "Automatically renews unless canceled. Can be hard to stop.",
  "no refunds": "No money back. Final sale terms.",
  "binding arbitration": "Disputes settled privately, not in court.",
  "limited liability": "Limits damages if something goes wrong.",
  "as is": "No guarantees on what you’re agreeing to."
};

const redFlags = Object.keys(legalDefinitions);

export default function ContractSearchPage() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Contrak</h1>
      <p>Upload a contract, and we’ll flag risky terms you might want to read.</p>

      <div style={{ marginTop: 20 }}>
        <strong>Flagged Terms:</strong>
        <ul>
          {redFlags.map((term) => (
            <li key={term}>
              <button
                onClick={() => setSelectedTerm(term)}
                style={{
                  margin: 5,
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "1px solid #555",
                  cursor: "pointer",
                  background: "#fff"
                }}
              >
                {term}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedTerm && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        >
          <h3>📘 Definition: {selectedTerm}</h3>
          <p>{legalDefinitions[selectedTerm]}</p>
          <button
            onClick={() => setSelectedTerm(null)}
            style={{
              marginTop: 10,
              padding: "5px 10px",
              backgroundColor: "#eee",
              border: "1px solid #aaa",
              cursor: "pointer"
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}