const parseEnv = () => {
  const prefix = 'RSS_';
  const env = process.env;
  const keys = Object.keys(env);
  const filteredKeys = keys.filter(key => key.startsWith(prefix));
  filteredKeys.forEach(key => console.log(`${key}=${env[key]}`));
};

parseEnv();
