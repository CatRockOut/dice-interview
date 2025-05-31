export interface GameResult {
    id: string | number;
    threshold: number;
    condition: 'under' | 'over';
    result: number;
    won: boolean;
    timestamp: Date;
}
