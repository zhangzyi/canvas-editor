export interface IRange {
  startIndex: number;
  endIndex: number;
  isCrossRowCol?: boolean;
  tableId?: string;
  startTdIndex?: number;
  endTdIndex?: number;
  startTrIndex?: number;
  endTrIndex?: number;
}

export type RangeRowMap = Map<number, Set<number>>
