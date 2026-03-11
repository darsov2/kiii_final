const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const ref = req.body.ref;
  const environment = req.body.environment;

  let scriptPath;

  if (ref === 'refs/heads/main' || environment === 'production') {
    scriptPath = './deploy-prod.sh';
  } else if (ref === 'refs/heads/develop' || environment === 'development') {
    scriptPath = './deploy-dev.sh';
  } else {
    console.warn(`Unknown ref/environment: ref=${ref}, env=${environment}`);
    return res.status(400).json({ error: 'Unknown deployment target' });
  }

  console.log(`Dispatching deployment: script=${scriptPath}, ref=${ref}`);

  exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Deployment error: ${error.message}`);
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: error.message });
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
    res.status(200).json({ status: 'deployed', script: scriptPath });
  });
});

app.listen(3001, () => {
  console.log('Webhook server listening on port 3001');
});
