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
      className={`rounded-lg ${
        status == "pending" ? "text-black" : "text-white"
      } font-medium px-1 py-[1px] text-[10px]`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default Status;
