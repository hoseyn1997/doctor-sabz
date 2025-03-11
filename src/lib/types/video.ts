import { Prisma } from "@prisma/client";

export type videoWithCollection = Prisma.VideoGetPayload<{
  include: {
    Collection: {
      include: {
        Photo: {
          include: {
            Photo: true;
          };
        };
      };
    };
  };
}>;
