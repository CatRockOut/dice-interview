import {GAME_CONSTANTS} from '@/constants/gameConstants';

export const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 100) + 1;
};

export const checkWinCondition = (result: number, threshold: number, condition: 'under' | 'over'): boolean => {
    return condition === 'over' ? result > threshold : result < threshold;
};

export const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

export const validateThreshold = (value: number): boolean => {
    return value >= GAME_CONSTANTS.MIN_THRESHOLD && value <= GAME_CONSTANTS.MAX_THRESHOLD;
};
