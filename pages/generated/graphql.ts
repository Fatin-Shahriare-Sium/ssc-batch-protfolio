import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CreateStudentMutationResponses = {
  __typename?: 'CreateStudentMutationResponses';
  gmail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Details = {
  __typename?: 'Details';
  text?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent?: Maybe<CreateStudentMutationResponses>;
  updateProfile?: Maybe<UpdateProfileMutationResponses>;
  updateProfilePic?: Maybe<UpdateProfilePicResponses>;
};


export type MutationCreateStudentArgs = {
  gmail: Scalars['String'];
  name: Scalars['String'];
  uid?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfileArgs = {
  birthDate?: InputMaybe<Scalars['String']>;
  birthplace?: InputMaybe<Scalars['String']>;
  currentlocation?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  fathername?: InputMaybe<Scalars['String']>;
  gmail?: InputMaybe<Scalars['String']>;
  hobby?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['Int']>;
  rollNumber?: InputMaybe<Scalars['String']>;
  studiedAt?: InputMaybe<Scalars['String']>;
  studingAt?: InputMaybe<Scalars['String']>;
  tiktok?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['String']>;
  workingAs?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfilePicArgs = {
  alt?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allStudentsData?: Maybe<Array<Maybe<StudentDataResponses>>>;
  details?: Maybe<Details>;
  profileData?: Maybe<UpdateProfileMutationResponses>;
};


export type QueryProfileDataArgs = {
  userUid: Scalars['String'];
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  facebook?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type StudentDataResponses = {
  __typename?: 'StudentDataResponses';
  gmail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type UpdateProfileMutationResponses = {
  __typename?: 'UpdateProfileMutationResponses';
  birthDate?: Maybe<Scalars['String']>;
  birthplace?: Maybe<Scalars['String']>;
  currentlocation?: Maybe<Scalars['String']>;
  fathername?: Maybe<Scalars['String']>;
  gmail?: Maybe<Scalars['String']>;
  hobby?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  profileImg?: Maybe<Scalars['String']>;
  rollNumber?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLinks>;
  studiedAt?: Maybe<Scalars['String']>;
  studingAt?: Maybe<Scalars['String']>;
  workingAs?: Maybe<Scalars['String']>;
};

export type UpdateProfilePicResponses = {
  __typename?: 'updateProfilePicResponses';
  msg?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', allStudentsData?: Array<{ __typename?: 'StudentDataResponses', profileImg?: string | null | undefined, gmail?: string | null | undefined, uid?: string | null | undefined } | null | undefined> | null | undefined };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "CreateStudentMutationResponses",
        "fields": [
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "msg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Details",
        "fields": [
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createStudent",
            "type": {
              "kind": "OBJECT",
              "name": "CreateStudentMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "gmail",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateProfile",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateProfileMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "birthDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "birthplace",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "currentlocation",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "facebook",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "fathername",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "gmail",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "hobby",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "phoneNumber",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "rollNumber",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "studiedAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "studingAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "tiktok",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "twitter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "workingAs",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "youtube",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateProfilePic",
            "type": {
              "kind": "OBJECT",
              "name": "updateProfilePicResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "alt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "src",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "allStudentsData",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "StudentDataResponses",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "OBJECT",
              "name": "Details",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "profileData",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateProfileMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SocialLinks",
        "fields": [
          {
            "name": "facebook",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "tiktok",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "youtube",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StudentDataResponses",
        "fields": [
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profileImg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateProfileMutationResponses",
        "fields": [
          {
            "name": "birthDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "birthplace",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currentlocation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fathername",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hobby",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profileImg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rollNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "socialLinks",
            "type": {
              "kind": "OBJECT",
              "name": "SocialLinks",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "studiedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "studingAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workingAs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "updateProfilePicResponses",
        "fields": [
          {
            "name": "msg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const Document = gql`
    {
  allStudentsData {
    profileImg
    gmail
    uid
  }
}
    `;

export function useQuery(options: Omit<Urql.UseQueryArgs<QueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Query>({ query: Document, ...options });
};