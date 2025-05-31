import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import {GameResult} from '@/types';
import {formatTime} from '@/utils/gameUtils';
import {COLORS} from '@/constants/gameConstants';

const styles = {
    headTableCell: {
        fontWeight: '500',
        lineHeight: '171.429%'
    }
};

function GameHistory({history}: { history: GameResult[] }) {
    if (history.length === 0) {
        return (
            <Typography variant="body1" sx={{textAlign: 'center'}}>
                Game history is empty. Play your first game!
            </Typography>
        );
    }
    
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography sx={{}}>Time</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={styles.headTableCell}>Guess</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={styles.headTableCell}>Result</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map((game) => (
                        <TableRow key={game.id}>
                            <TableCell>{formatTime(game.timestamp)}</TableCell>
                            <TableCell>
                                {game.condition.charAt(0).toUpperCase() + game.condition.slice(1)} {game.threshold}
                            </TableCell>
                            <TableCell sx={{color: game.won ? COLORS.WIN_TEXT : COLORS.LOSE}}>
                                {game.result}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default GameHistory;
