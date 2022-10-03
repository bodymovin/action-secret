const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`PASO 1`);
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello 2 ${nameToGreet}!`);
  const printSecret = process.env.SECRET_TEST + '_TEST';
  const length = process.env.SECRET_TEST.length;
  const charAt = process.env.SECRET_TEST.charAt(1);
  console.log(process.env.SECRET_TEST);
  console.log(printSecret);
  console.log('length', length);
  console.log('charAtt', charAt);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
  console.log('FAILEDD');
}