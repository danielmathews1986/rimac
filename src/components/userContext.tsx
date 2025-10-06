import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { PlanData, UserData } from '../types/User';


interface UserContextType {
  userData: UserData | null;
  selectedPlan: PlanData | null;
  loginUser: (data: UserData) => void;
  selectePlan: (data: PlanData) => void;
  logoutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

  const loginUser = (data: UserData) => {
    setUserData(data);
  };

  const selectePlan = (plan: PlanData) => {
    setSelectedPlan(plan);
  };

  const logoutUser = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser, logoutUser, selectedPlan, selectePlan }}>
      {children}
    </UserContext.Provider>
  );
};
