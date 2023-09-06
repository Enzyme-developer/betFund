import React from "react";

interface TransactionStatusProps {
  status: "success" | "declined" | "pending";
}

const statusColors: Record<string, string> = {
  success: "green",
  declined: "red",
  pending: "yellow",
};

const Status: React.FC<TransactionStatusProps> = ({ status }) => {
  const statusColor = statusColors[status] || "gray";

  return (
    <span
      style={{ background: statusColor }}
      className={`px-2 py-1 rounded-lg text-white font-bold`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default Status;
