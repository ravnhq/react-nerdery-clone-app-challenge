import { faker } from "@faker-js/faker";
import fs from "fs";
import { User } from "../modules/shared/types/types";
// type typeUser = "user" | "host";

// interface user {
//   id: string;
//   name: string;
//   password: string;
//   picture: string;
//   reviews: number;
//   email: string;
//   country: number;
//   type: typeUser;
//   birthday: Date;
//   career: string;
//   estudy: string;
//   hobby: string;
//   resume: string;
// }

const createRandomUser = (): User => {
  return {
    id: faker.string.uuid(),
    wishlists: [],
    name: faker.person.fullName(),
    password: faker.internet.password(),
    picture: faker.image.avatar(),
    reviews: faker.number.int(),
    email: faker.internet.email(),
    country: faker.location.country(),
    type: faker.helpers.arrayElement(["user", "host"]),
    birthday: faker.date.past(),
    career: faker.person.jobTitle(),
    study: faker.person.jobType(),
    hobby: faker.lorem.words(),
    resume: faker.lorem.paragraph(),
  };
};
const createNUsers = (numUsers: number) => {
  return Array.from({ length: numUsers }, createRandomUser);
};
const COUNT = 4;

const users = createNUsers(COUNT);

fs.writeFileSync(
  "src/API/local/userSnapshot.json",
  JSON.stringify(users, null, "\t")
);
