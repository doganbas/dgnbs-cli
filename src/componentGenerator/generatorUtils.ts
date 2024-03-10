const getComponentType = (args: string[]) => {
  const paramArg = args.find(nq => nq.startsWith('--'));
  const param = paramArg ? paramArg.replace('--', '') : 'atom';
  switch (param) {
    case 'molecule':
      return 'molecules';
    case 'organism':
      return 'organisms';
    case 'page':
      return 'pages';
    case 'layout':
      return 'layouts';
    case 'provider':
      return 'providers';
    default:
      return 'atoms';
  }
};

const removeOptionsFromArgs = (args: string[], argsWithValues: string[] = []) => {
  const temp: string[] = [];
  if (args.length > 0) {
    args.reduce((previous, current) => {
      if (!current.startsWith('-') && !argsWithValues.includes(previous)) {
        temp.push(current);
      }

      return current;
    }, '');
  }

  return temp;
};

export {getComponentType, removeOptionsFromArgs};
