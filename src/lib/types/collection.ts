import { Prisma } from "@prisma/client";

export type collectionWithVideo = Prisma.CollectionGetPayload<{
  include: {
    Videos: {
      include: {
        Photo: {
          include: {
            Photo: true;
          };
        };
      };
    };
    Attendees: true;
    Photo: true;
    Teacher: true;
  };
}>;

export type collectionItems = {
  ShortId: string;
  Title: string;
  Cost: string;
  DisCount: string;
  Description: string;
  IsActive: boolean;
  Category?: string;
  Level?: string;
  Score?: number;
  TeacherId: string;
};
