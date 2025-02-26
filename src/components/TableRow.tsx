import { FileData, FileStatus } from '../api/data';
import { DotVariants } from '../constants';
import toSentenceCase from '../utils/toSentenceCase';
import Box from './Box';
import Checkbox from './Checkbox';
import Dot from './Dot';

import './TableRow.css';

const TableRow = ({
  file,
  onToggle,
  selected
}: {
  file: FileData,
  onToggle: (fileName: string) => void,
  selected: string[],
}) => {
  const canDownload: boolean = file.status === 'available';
  const isSelected: boolean = selected.includes(file.name);

  return (
    <tr
      className="table-row"
      data-can-download={canDownload}
      data-selected={isSelected}
      key={file.name}
      onClick={() => onToggle(file.name)}
    >
        <td>
          <Checkbox
            checked={selected.includes(file.name)}
            label={file.name}
            onChange={() => onToggle(file.name)}
          />
        </td>
        <td>
          {file.name}
        </td>
        <td>
          {file.device}
        </td>
        <td>
          {file.path}
        </td>
        <td>
          <Box alignItems="center">
            {file.status === FileStatus.Available
              ? <Dot variant={DotVariants.Success} />
              : null}
            <span style={{marginLeft: 4}}>{toSentenceCase(file.status)}</span>
          </Box>
        </td>
    </tr>
  );
};

export default TableRow;