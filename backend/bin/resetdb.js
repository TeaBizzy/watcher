// other dependencies
const fs = require('fs');
const db = require('../db/connection');

// Loads the schema files from db/schema
const runSchemaFiles = async () => {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn})`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  try {
    console.log(`-> Resetting DB...`);
    await runSchemaFiles();
    await runSeedFiles();
    process.exit();
  } catch (err) {
    console.error(`Failed due to error: ${err}`);
    process.exit();
  }
};

runResetDB();
