'use client';

import {Box, Container} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {theme} from '@/theme/theme';
import ResultCard from '@/components/ResultCard';
import GamePanel from '@/components/GamePanel';
import GameHistory from '@/components/GameHistory';
import {useDiceGame} from '@/hooks/useDiceGame';

const styles = {
    mainBox: {
        minHeight: '100vh',
        p: 2
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '648px',
        gap: 2,
        mx: 'auto'
    }
};

function DiceGame() {
    const {
        threshold,
        setThreshold,
        condition,
        setCondition,
        gameHistory,
        lastResult,
        error,
        playGame
    } = useDiceGame();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={styles.mainBox}>
                <Container maxWidth={false} sx={styles.container}>
                    {lastResult && <ResultCard result={lastResult}/>}
                    
                    <GamePanel
                        threshold={threshold}
                        setThreshold={setThreshold}
                        condition={condition}
                        setCondition={setCondition}
                        error={error}
                        onPlay={playGame}
                    />
                    
                    <GameHistory history={gameHistory}/>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default DiceGame;
