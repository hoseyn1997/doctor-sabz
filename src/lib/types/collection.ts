import { Prisma } from "@prisma/client";

export type collectionWithVideo = Prisma.CollectionGetPayload<{
  include: {
    Videos: true;
    Attendees: true;
    Photo: true;
    Teacher:true
  };
}>;
