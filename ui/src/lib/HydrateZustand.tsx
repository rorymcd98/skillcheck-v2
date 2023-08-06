'use client';
import { useEffect } from 'react';
import { useFiltersStore } from '../state/stores';

export default function HydrateZustand() {
  useEffect(() => {
    useFiltersStore.persist.rehydrate();
  }, []);

  return null;
}
