// src/infrastructure/firestore/firestore-data-source.ts

import { firestore } from "./firestore-client";
import { DataSource } from "../../domain/data-source.interface";

export class FirestoreDataSource<T> implements DataSource<T> {
  constructor(private collectionName: string) {}

  async create(data: T): Promise<T> {
    const docRef = await firestore.collection(this.collectionName).add(data);
    const doc = await docRef.get();
    return { id: doc.id, ...doc.data() } as T;
  }

  async findById(id: string): Promise<T | null> {
    const doc = await firestore.collection(this.collectionName).doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as T;
  }

  async findAll(): Promise<T[]> {
    const snapshot = await firestore.collection(this.collectionName).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as T);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    await firestore.collection(this.collectionName).doc(id).update(data);
    const updatedDoc = await this.findById(id);
    return updatedDoc;
  }

  async delete(id: string): Promise<boolean> {
    await firestore.collection(this.collectionName).doc(id).delete();
    return true;
  }
}
