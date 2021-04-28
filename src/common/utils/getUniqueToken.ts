import uniqueId from 'lodash/uniqueId';

function getUniqueToken(description: string): string {
  return uniqueId(description);
}

export default getUniqueToken;
