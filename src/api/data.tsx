export enum FileStatus {
  Available = 'available',
  Scheduled = 'scheduled',
}

export interface FileData {
  name: string;
  device: string;
  path: string;
  status: FileStatus;
}

const data: FileData[] = [
  {name: 'smss.exe', device: 'Mario', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: FileStatus.Scheduled},
  {name: 'netsh.exe', device: 'Luigi', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: FileStatus.Available},
  {name: 'uxtheme.dll', device: 'Peach', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: FileStatus.Available},
  {name: 'aries.sys', device: 'Daisy', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\aries.sys', status: FileStatus.Scheduled},
  {name: 'cryptbase.dll', device: 'Yoshi', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: FileStatus.Scheduled},
  {name: '7za.exe', device: 'Toad', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: FileStatus.Scheduled}
]

export default data;