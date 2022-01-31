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

  const remove = async (data) => db.taks.remove(data.id);
  const getAll = async () => db.taks.toArray();

  return {
    save,
    remove,
    getAll,
  };
};

export default useIndexedDb;
