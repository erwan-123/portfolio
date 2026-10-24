"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import Preloader from "./Preloader";

const ReadyContext = createContext(false);

/**
 * Renvoie true une fois l'écran de chargement terminé,
 * pour déclencher les animations d'entrée de la page d'accueil
 * (au lieu de les jouer en arrière-plan du loader).
 */
export function useIsReady(): boolean {
  return useContext(ReadyContext);
}

interface PreloaderProviderProps {
  children: ReactNode;
}

/**
 * Coordonne l'écran de chargement avec le reste de l'application :
 * - au premier chargement : le contenu n'est révélé qu'à la fin du loader ;
 * - lors des navigations client : contenu déjà prêt, animations instantanées.
 */
export default function PreloaderProvider({ children }: PreloaderProviderProps) {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <ReadyContext.Provider value={ready}>
      <Preloader onReady={handleReady} />
      {children}
    </ReadyContext.Provider>
  );
}
