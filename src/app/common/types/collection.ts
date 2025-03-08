import { Collection, Photo, Prisma, Video } from "@prisma/client";

export type collectionWithVideo = Prisma.CollectionGetPayload<{
  include: {
    Videos: true;
    Attendees: true;
    Photo: true;
  };
}>;
