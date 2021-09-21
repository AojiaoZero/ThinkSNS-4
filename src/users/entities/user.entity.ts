import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

export type UserInclude = {};

type UserInterface = Prisma.UserGetPayload<{ include: UserInclude }>;

@ObjectType()
export class User implements UserInterface {
  @Field(() => ID, { description: "The user's ID" })
  id: string;

  @Field(() => String, { nullable: true, description: "The user's name" })
  name: string;

  @Field(() => String, { nullable: true, description: "The user's email" })
  email: string;

  @Field(() => String, {
    nullable: true,
    description: "The User's phone number",
  })
  phone: string;

  @Field(() => GraphQLISODateTime, { description: "The user's registered at." })
  registeredAt: Date;
}
