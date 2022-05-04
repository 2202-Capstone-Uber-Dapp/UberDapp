'use strict';

const {
  db,
  models: { User },
} = require('../server/db');


const users = [
  {
    username: "mark",
    password: "mark_pw",
    email: "mark@gmail.com",
  },
  {
    username: "brian",
    email: "brian@gmail.com",
    password: "brian_pw",
  },
  {
    username: "frank",
    email: "frank@gmail.com",
    password: "frank_pw",
  },
  {
    username: "john",
    email: "john@gmail.com",
    password: "john_pw",
  },
  {
    username: "erik",
    email: "erik@gmail.com",
    password: "erik_pw",
  },
];




async function seed() {
  await db.sync({ forced: true });
  
  await Promise.all(
    users.map((user) => {
      return User.create(user);
    })
  );

  console.log('db synced!');
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
