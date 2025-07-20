import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface SceneObject {
  id: string;
  type: 'cube' | 'sphere';
  position: Vector3;
  scale: Vector3;
  color: string;
}

export const useSceneObjects = () => {
  const [objects, setObjects] = useState<SceneObject[]>([]);

  const fetchObjects = useCallback(async () => {
    try {
      const res = await axios.get('/api/scene-objects');
      setObjects(res.data || []);
    } catch (err) {
      console.error('Failed to fetch scene objects:', err);
    }
  }, []);

  const addObject = useCallback(async () => {
    try {
      await axios.post('/api/scene-objects', {
        type: 'cube',
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        position: {
          x: Math.random() * 5,
          y: Math.random() * 5,
          z: Math.random() * 5,
        },
        scale: { x: 1, y: 1, z: 1 },
      });
      await fetchObjects();
    } catch (err) {
      console.error('Failed to add object:', err);
    }
  }, [fetchObjects]);

  const deleteObject = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`/api/scene-objects/${id}`);
        await fetchObjects();
      } catch (err) {
        console.error('Failed to delete object:', err);
      }
    },
    [fetchObjects]
  );

  useEffect(() => {
    fetchObjects();
  }, [fetchObjects]);

  return { objects, addObject, deleteObject };
};
