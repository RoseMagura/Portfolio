import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const headers: { [name: string]: string[] } =
    { 'a': ['1', '2', '3'], 'b': ['4', '5', '6'], 'c': ['7', '8', '9'] };

const numHeaders = Object.keys(headers).length;
const cellList: string[][] = [];
for (let i = 0; i < numHeaders; i++) {
    const subList: string[] = [];
    Object.values(headers).map(valList => subList.push(valList[i]));
    cellList.push(subList);
}

const Skills = () => {
    return (
        <div>
            <Table>
                <TableHead>
                    Skills
                </TableHead>
                <TableBody>
                    <TableRow>
                        {Object.keys(headers).map(header => 
                            <TableCell key={header}>{header}</TableCell>)}
                    </TableRow>
                    {cellList.map(row => 
                        <TableRow key={row[0]}>
                            {row.map(cell => <TableCell>{cell}</TableCell>)}
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}
export default Skills;
