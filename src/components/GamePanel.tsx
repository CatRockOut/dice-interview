import {
    Alert,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Slider,
    Typography,
} from '@mui/material';
import {COLORS, GAME_CONSTANTS} from '@/constants/gameConstants';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 320,
        width: '100%',
        margin: '0 auto',
    },
    displayBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        bgcolor: COLORS.BACKGROUND_LIGHT,
        borderRadius: 1,
        mb: 3,
    },
    bigText: {
        fontSize: '6rem',
        fontWeight: 300,
        letterSpacing: '-1.5px',
        lineHeight: '116.7%',
    },
    sliderLabels: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2px 0 14px',
    },
    alert: {
        mb: 3,
        bgcolor: COLORS.LOSE,
        color: '#fff',
    },
    mainButton: {
        py: '8px',
    },
};

type GamePanelProps = {
    threshold: number;
    setThreshold: (value: number) => void;
    condition: 'under' | 'over';
    setCondition: (value: 'under' | 'over') => void;
    error: string;
    onPlay: () => void;
};

function GamePanel(props: GamePanelProps) {
    const {
        threshold,
        setThreshold,
        condition,
        setCondition,
        error,
        onPlay,
    } = props;
    
    return (
        <Box component="form" sx={styles.form}>
            <Box sx={styles.displayBox}>
                <Typography variant="body1" sx={styles.bigText}>
                    {threshold}
                </Typography>
            </Box>
            
            <FormControl component="fieldset" sx={{mb: 3, alignItems: 'center'}}>
                <RadioGroup
                    row
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as 'under' | 'over')}
                >
                    <FormControlLabel
                        sx={{m: 0}}
                        labelPlacement="start"
                        value="under"
                        control={<Radio/>}
                        label="Under"
                    />
                    <FormControlLabel
                        sx={{m: 0}}
                        labelPlacement="start"
                        value="over"
                        control={<Radio/>}
                        label="Over"
                    />
                </RadioGroup>
            </FormControl>
            
            <Slider
                size="small"
                marks
                valueLabelDisplay="on"
                step={GAME_CONSTANTS.SLIDER_STEP}
                min={GAME_CONSTANTS.MIN_THRESHOLD}
                max={GAME_CONSTANTS.MAX_THRESHOLD}
                value={threshold}
                onChange={(_event, newValue) => setThreshold(newValue as number)}
            />
            
            <Box sx={styles.sliderLabels}>
                <Typography variant="caption" color="text.secondary">
                    {GAME_CONSTANTS.MIN_THRESHOLD}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {GAME_CONSTANTS.MAX_THRESHOLD}
                </Typography>
            </Box>
            
            {error && (
                <Alert variant="filled" severity="error" sx={styles.alert}>
                    {error}
                </Alert>
            )}
            
            <Button
                sx={styles.mainButton}
                variant="contained"
                size="large"
                fullWidth
                onClick={onPlay}
            >
                Play
            </Button>
        </Box>
    );
}

export default GamePanel;
