import { faker } from "@faker-js/faker";
import fs from "fs";
import { Place } from "../modules/shared/types/types";
//import { place } from "../home/card/type";

// interface Place{
//   list: Wishlist | null;
//   ownerId: string;
//   placeId: string;
//   type: Place;
//   image: string;
//   iconUser: string;
//   city: string;
//   country: string;
//   description: string;
//   priceDay: number;
//   wished: boolean;
//   rating: number;
//}

const createRandomPlace = (): Place => {
  return {
    ownerId: faker.string.uuid(),
    id: faker.string.uuid(),
    image: faker.image.url(),
    iconUser: faker.image.url(),
    type: faker.helpers.arrayElement([
      "cabins",
      "department",
      "caves",
      "mini",
      "dome",
      "farm",
    ]),
    country: faker.location.country(),
    city: faker.location.city(),
    rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
    description: faker.lorem.sentence(),
    priceDay: faker.number.int({ min: 30, max: 100 }),
    wished: faker.datatype.boolean(),
  };
};

const createNPlaces = (numPlaces: number) => {
  return Array.from({ length: numPlaces }, createRandomPlace);
};

const COUNT = 100;

const places = createNPlaces(COUNT);

fs.writeFileSync(
  "src/API/local/places.json",
  JSON.stringify(places, null, "\t")
);
