import {Box, Card, CardContent, Typography} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import {COLORS} from '@/constants/gameConstants';
import {GameResult} from '@/types';

const styles = {
    cardContent: {
        display: 'flex',
        alignItems: 'flex-start',
        p: '6px 16px',
        '&:last-child': {pb: '6px'},
        color: '#fff'
    },
    svgBox: {
        display: 'flex',
        alignItems: 'center',
        m: '8px 12px 7px 0',
        width: '22px',
        height: '22px'
    },
    titlesContainer: {
        p: '8px 0'
    },
    resultTitle: {
        fontWeight: '500',
        lineHeight: '150%',
        mb: '4px'
    },
    lostSecondTitle: {
        fontWeight: '500',
        lineHeight: '143%'
    }
};

function ResultCard({result}: { result: GameResult }) {
    return (
        <Card sx={{bgcolor: result.won ? COLORS.WIN : COLORS.LOSE}}>
            <CardContent sx={styles.cardContent}>
                <Box sx={styles.svgBox}>
                    {result.won ? <CheckCircleOutlineIcon/> : <ErrorOutlineIcon/>}
                </Box>
                
                <Box sx={styles.titlesContainer}>
                    <Typography variant="body1" sx={styles.resultTitle}>
                        {result.won ? 'You won!' : 'You lost!'}
                    </Typography>
                    
                    {!result.won && (
                        <Typography variant="body2" sx={styles.lostSecondTitle}>
                            Number was {result.condition === 'under' ? 'higher' : 'lower'}
                        </Typography>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

export default ResultCard;
