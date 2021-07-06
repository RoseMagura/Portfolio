import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const headers: { [name: string]: string[] } =
{
    'FullStack Developer':
        ['Node.js API development', 'SQL and ORM', 'Hosting (AWS and Heroku)'],
    'Front End Developer':
        ['React', 'Angular', 'Sass and CSS'],
    'Mentor':
        ['Communication skills', 'Leadership', 'Attention to detail']
};

export const organizeData = (data: { [name: string]: string[] }) => {
    const numHeaders = Object.keys(data).length;
    const cellList: string[][] = [];
    for (let i = 0; i < numHeaders; i++) {
        const subList: string[] = [];
        Object.values(data).map(valList => subList.push(valList[i]));
        cellList.push(subList);
    }
    return cellList;
}


const createTable = (titles: string[], cells: string[][]) => {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    {titles.map(title =>
                        <TableCell key={title} style={{ fontWeight: 'bold' }}>
                            {title}
                        </TableCell>)}
                </TableRow>
                {cells.map(row =>
                    <TableRow key={row[0]}>
                        {row.map(c => <TableCell key={c}>{c}</TableCell>)}
                    </TableRow>)}
            </TableBody>
        </Table>
    )
}

const Skills = () => {
    const cellList = organizeData(headers);
    return (
        <div>
            <h2>Skills</h2>
            {createTable(Object.keys(headers), cellList)}
        </div>
    )
}
export default Skills;
