/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listRooms = /* GraphQL */ `
  query ListRooms($limit: Int, $userId: String!) {
    listRooms(limit: $limit, userId: $userId) {
      items {
        id
        name
        messages {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMessagesForRoom = /* GraphQL */ `
  query ListMessagesForRoom($roomId: ID!, $sortDirection: ModelSortDirection) {
    listMessagesForRoom(roomId: $roomId, sortDirection: $sortDirection) {
      items {
        id
        content {
          text
          imageId
        }
        owner
        createdAt
        updatedAt
        roomId
      }
      nextToken
    }
  }
`;
