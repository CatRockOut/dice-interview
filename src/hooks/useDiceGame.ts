'use client';

import {useState} from 'react';

import {GameResult} from '@/types';
import {GAME_CONSTANTS} from '@/constants/gameConstants';
import {
    checkWinCondition,
    generateRandomNumber,
    validateThreshold
} from '@/utils/gameUtils';

export function useDiceGame() {
    const [threshold, setThreshold] = useState<number>(20);
    const [condition, setCondition] = useState<'under' | 'over'>('under');
    const [gameHistory, setGameHistory] = useState<GameResult[]>([]);
    const [lastResult, setLastResult] = useState<GameResult | null>(null);
    const [error, setError] = useState<string>('');
    
    const playGame = () => {
        setError('');
        
        if (!threshold) {
            setError('Please select a number');
            return;
        }
        if (!validateThreshold(threshold)) {
            setError(`The number must be between ${GAME_CONSTANTS.MIN_THRESHOLD} and ${GAME_CONSTANTS.MAX_THRESHOLD}`);
            return;
        }
        
        const diceResult = generateRandomNumber();
        const isWon = checkWinCondition(diceResult, threshold, condition);
        
        const gameResult: GameResult = {
            id: crypto.randomUUID(),
            threshold,
            condition,
            result: diceResult,
            won: isWon,
            timestamp: new Date(),
        };
        
        setLastResult(gameResult);
        setGameHistory((prev) => (
            [gameResult, ...prev].slice(0, GAME_CONSTANTS.MAX_HISTORY_SIZE)
        ));
    };
    
    return {
        threshold,
        setThreshold,
        condition,
        setCondition,
        gameHistory,
        lastResult,
        error,
        playGame,
    };
}
