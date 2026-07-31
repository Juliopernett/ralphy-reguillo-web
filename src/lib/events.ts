import { csvToObjects } from "@/lib/csv";
import { artist } from "@/data/artist";
import type { EventItem } from "@/types/artist";

const MONTHS_ES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

const STATUS_MAP: Record<string, EventItem["status"]> = {
  confirmado: "confirmado",
  agotado: "agotado",
  proximamente: "proximamente",
  "próximamente": "proximamente",
};

function parseSpanishDate(raw: string): Date | null {
  // Accepts DD/MM/YYYY or YYYY-MM-DD
  const slash = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slash) {
    const [, d, m, y] = slash;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  const iso = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) {
    const [, y, m, d] = iso;
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  return null;
}

function formatDisplayDate(date: Date): string {
  return `${String(date.getDate()).padStart(2, "0")} ${MONTHS_ES[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Fetches upcoming presentations from a published Google Sheet (CSV export).
 * Sheet columns expected (case-insensitive): Fecha, Ciudad, Lugar, Evento, Estado.
 * Falls back to the example events in artist.ts if the sheet isn't configured
 * or fails to load, so the section never breaks or renders empty.
 */
export async function getEvents(): Promise<EventItem[]> {
  const sheetUrl = process.env.GOOGLE_SHEET_EVENTS_URL;
  if (!sheetUrl) return artist.events;

  try {
    const res = await fetch(sheetUrl, { next: { revalidate: 1800 } });
    if (!res.ok) return artist.events;

    const text = await res.text();
    const rows = csvToObjects(text);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const events: EventItem[] = rows
      .map((row, i) => {
        const date = parseSpanishDate(row["fecha"] ?? "");
        if (!date) return null;
        const status = STATUS_MAP[(row["estado"] ?? "").toLowerCase()] ?? "proximamente";
        const item: EventItem = {
          id: `sheet-${i}`,
          date: date.toISOString().slice(0, 10),
          displayDate: formatDisplayDate(date),
          city: row["ciudad"] ?? "",
          venue: row["lugar"] || "Por confirmar",
          eventName: row["evento"] || "Presentación",
          status,
        };
        return { item, date };
      })
      .filter((x): x is { item: EventItem; date: Date } => x !== null && x.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((x) => x.item);

    return events.length > 0 ? events : artist.events;
  } catch {
    return artist.events;
  }
}
