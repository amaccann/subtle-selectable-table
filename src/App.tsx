import { useEffect, useState } from 'react'
import './App.css'
import { FileData, FileStatus } from './api/data'
import Checkbox from './components/Checkbox';
import TableRow from './components/TableRow';
import Box from './components/Box';
import Button from './components/Button';

function App() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const areAllSelected: boolean = selected.length === files.length;
  const isIndeterminate: boolean = Boolean(selected.length && selected.length < files.length);
  const pendingAvailable: FileData[] = files.filter((f) => f.status === FileStatus.Scheduled && selected.includes(f.name));
  const noDownloadsAvailable = selected.length === pendingAvailable.length;

  useEffect(() => {
    (async () => {
      /**
       * Just did this to "fake" a render ticket of loading the data
       * Realistically this would be coming from an API, and would have
       * a "loading" state. Had intended to use Netlify Functions to 
       * make a quick little fetch request....
       */
      const {default: data} = await import('./api/data');
      setFiles(data);
    })();
  }, []);

  const onChangeSelectAll = () => {
    if (!areAllSelected) {
      setSelected(files.map(file => file.name));
    } else {
      setSelected([]);
    }
  };

  const onClickDownload = () => {
    const filesToDownload = files.filter(
      ({name, status}) => selected.includes(name) && status === FileStatus.Available,
    );

    const message = filesToDownload
      .reduce(
        (arr, file) => arr + `${file.device}\n  · (${file.path}) \n`,
        'Downloading the following:\n'
      );
    alert(message);
  };

  const onToggleFile = (fileName: string) => {
    if (selected.includes(fileName)) {
      setSelected((s) => s.filter((name) => name !== fileName));
    } else {
      setSelected((s) => s.concat(fileName));
    }
  };

  return (
    <>
      <Box className="table-actions" gap={32}>
        <Box gap={8}>
          <Checkbox
            checked={areAllSelected}
            id="select-all"
            indeterminate={isIndeterminate}
            label="Select all"
            onChange={onChangeSelectAll}
          />
          <label title="Selected total" htmlFor="select-all">{!selected.length ? 'None selected' : `Selected ${selected.length}`}</label>
        </Box>
        
        <Button
          disabled={!selected.length || noDownloadsAvailable}
          label="Download selected"
          onClick={onClickDownload}>
          Download selected
        </Button>
      </Box>
      {pendingAvailable.length ? (
        <div className="pending-alert">
          ({pendingAvailable.map(({name}) => name).join(',')}
          <span>&nbsp;not yet available for download</span>)
        </div>
      ) : null}
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file: FileData) => {
            return (
              <TableRow
                file={file}
                key={file.name}
                onToggle={onToggleFile}
                selected={selected}
              />

            );
          })}
        </tbody>
      </table>
      
    </>
  )
}

export default App
