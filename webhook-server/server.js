const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const ref = req.body.ref;
    exec('./start-deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error}`);
        return res.sendStatus(500);
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.sendStatus(200);
    });
});

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
