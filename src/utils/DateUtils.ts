export function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month} ${year}`;
}

export function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export function formatToDMy(dateStr?: string) {
  if (!dateStr) return "n/a";

  const parts = dateStr.split("T")[0].split("-");
  const [year, month, day] = parts;

  return `${day}-${month}-${year.slice(2)}`;
}

export function getYearsSince(establishedAt: string): number {
  const establishedYear = parseFloat(establishedAt);
  const currentYear = new Date().getFullYear();
  return currentYear - establishedYear;
}
