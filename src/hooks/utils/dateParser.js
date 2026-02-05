import { useMemo } from "preact/hooks";

export function useRelativeDate(dateString) {
  return useMemo(() => {
    if (!dateString) return "";

    const inputDate = new Date(dateString);
    const today = new Date();

    // Normalize to midnight
    const d1 = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate()
    );

    const d2 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const diffDays = Math.round(
      (d1 - d2) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === -1) return "Yesterday";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";

    return d1.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, [dateString]);
}