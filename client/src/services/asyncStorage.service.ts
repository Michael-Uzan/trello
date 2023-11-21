/* eslint-disable @typescript-eslint/no-explicit-any*/
import boards from '../data/boards.json';

export const asincStorageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
  save,
};

function query(entityType: string, delay: number = 0): Promise<any> {
  const storedData: string | null = localStorage.getItem(entityType);
  const entities: any | Array<any> = storedData ? JSON.parse(storedData) : [];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(entities);
    }, delay);
  });
}

function get(entityType: string, entityId: string): Promise<any> {
  save('boards', boards);
  return query(entityType).then((entities) =>
    entities.find((entity: any) => entity._id === entityId),
  );
}

function post(entityType: string, newEntity: any): Promise<any> {
  newEntity._id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    save(entityType, entities);
    return newEntity;
  });
}

function put(entityType: string, updatedEntity: any): Promise<any> {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex(
      (entity: any) => entity._id === updatedEntity._id,
    );
    entities.splice(idx, 1, updatedEntity);
    save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType: string, entityId: string): Promise<void> {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity: any) => entity._id === entityId);
    entities.splice(idx, 1);
    save(entityType, entities);
  });
}

function save(entityType: string, entities: any): void {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length: number = 5): string {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function postMany(entityType: string, newEntities: any): Promise<any> {
  return query(entityType).then((entities) => {
    newEntities = newEntities.map((entity: any) => ({
      ...entity,
      _id: _makeId(),
    }));
    entities.push(...newEntities);
    save(entityType, entities);
    return entities;
  });
}
