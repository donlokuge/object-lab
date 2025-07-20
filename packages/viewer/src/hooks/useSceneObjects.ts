import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  useSceneObjectControllerFindAll,
  useSceneObjectControllerRemove,
  getSceneObjectControllerFindAllQueryKey,
} from '@object-lab/api-client';
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

const createSceneObject = async (data: Omit<SceneObject, 'id'>) => {
  return axios.post('/scene-objects', data);
};

export const useSceneObjects = () => {
  const queryClient = useQueryClient();

  // Fetch all scene objects
  const {
    data: objectsResponse,
    isLoading,
    error,
    refetch: fetchObjects,
  } = useSceneObjectControllerFindAll();

  const objects = (objectsResponse?.data || []) as SceneObject[];

  const createMutation = useMutation({
    mutationFn: createSceneObject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getSceneObjectControllerFindAllQueryKey(),
      });
    },
    onError: (err) => {
      console.error('Failed to add object:', err);
    },
  });

  const deleteMutation = useSceneObjectControllerRemove({
    axios: {
      baseURL: '/api',
    },
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getSceneObjectControllerFindAllQueryKey(),
        });
      },
      onError: (err) => {
        console.error('Failed to delete object:', err);
      },
    },
  });

  const addObject = useCallback(async () => {
    const newObject = {
      type: 'cube' as const,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      position: {
        x: Math.random() * 5,
        y: Math.random() * 5,
        z: Math.random() * 5,
      },
      scale: { x: 1, y: 1, z: 1 },
    };

    createMutation.mutate(newObject);
  }, [createMutation]);

  const deleteObject = useCallback(
    async (id: string) => {
      deleteMutation.mutate({ id });
    },
    [deleteMutation]
  );

  return {
    objects,
    isLoading,
    error,
    addObject,
    deleteObject,
    fetchObjects,
    isCreating: createMutation.isPending,
    isDeleting: deleteMutation.isPending,
    createError: createMutation.error,
    deleteError: deleteMutation.error,
  };
};
