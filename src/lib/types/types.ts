export interface CaseStyle {
    colorClass: string;
    colSpanClass: string;
    rowSpanClass: string;
}

export interface CalendarState {
    numbers: number[];
    styles: Record<number, CaseStyle>;
}