import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  characterReducer,
  CharacterState,
  defaultCharacter,
} from "./CharacterReducer";

interface CharacterContextType {
  state: CharacterState;
  dispatch: React.Dispatch<any>;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

interface CharacterContextProviderProps {
  children: ReactNode;
}

export const CharacterContextProvider: React.FC<
  CharacterContextProviderProps
> = ({ children }) => {
  const savedCharacter = sessionStorage.getItem("savedCharacter");
  const initialState: CharacterState = savedCharacter
    ? JSON.parse(savedCharacter)
    : defaultCharacter;

  const [state, dispatch] = useReducer(characterReducer, initialState);

  useEffect(() => {
    sessionStorage.setItem("savedCharacter", JSON.stringify(state));
  }, [state]);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("cant get context idiot");
  }
  return context;
};
