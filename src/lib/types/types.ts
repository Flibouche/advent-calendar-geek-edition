export interface CalendarCaseProps {
    number: number;
    style: CaseStyle;
    onClick: () => void;
    isClicked: boolean;
}

export interface CaseStyle {
    colorClass: string;
    colSpanClass: string;
    rowSpanClass: string;
}

export interface CalendarState {
    numbers: number[];
    styles: Record<number, CaseStyle>;
}

export interface CalendarCaseWindowProps {
    number: number;
    onClose: () => void;
}