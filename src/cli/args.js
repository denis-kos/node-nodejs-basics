const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsObj = args.reduce((acc, arg, index) => {
    if (arg.startsWith('--')) acc[arg.slice(2)] = args[index + 1];

    return acc;
  }, {});
  const keys = Object.keys(argsObj);
  keys.forEach(key => console.log(`${key} is ${argsObj[key]}`));
};

parseArgs();
