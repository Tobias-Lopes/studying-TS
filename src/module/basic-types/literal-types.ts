//let logType: string = 'info';
//logType = 'warn';

//let logType: 'info';
//logType = 'warn';

type LogType = 'info' | 'warn' | 'error';

export function logger(type: LogType, message: string) {
  switch (type) {
    case 'info':
      console.log(`Info: ${message}`);
      break;

    case 'warn':
      console.warn(`Warn: ${message}`);
      break;

    case 'error':
      console.error(`Error: ${message}`);
      break;
  }
}

logger('error', 'Log com alguma informação');
