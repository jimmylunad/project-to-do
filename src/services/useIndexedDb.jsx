// import { useEffect, useState } from 'react';
import Dexie from 'dexie';

const useIndexedDb = () => {
  const db = new Dexie('AllTasks');

  db.version(1).stores({
    taks: '++id,title,status',
  });
  db.open().catch((err) => {
    console.log(err.stack || err);
  });

  const save = async (data) => {
    try {
      await db.taks.add(data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const remove = async (id) => db.taks.delete(id);
  const getAll = async () => db.taks.toArray();
  const getOrderBy = async (data) => db.taks.orderBy(data.column).reverse().toArray();
  const update = async (id, data) => db.taks.update(id, data);

  return {
    save,
    remove,
    getAll,
    getOrderBy,
    update,
  };
};

export default useIndexedDb;
