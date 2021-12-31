import { UserProvider } from "./User";
import { GetIdGroupsGoalsProviders } from "./IdGroupsGoals";
import { LoginProvider } from "./PageLoginContex";
import { PageHabitsProvider } from "./PageHabitosContext";
import { PageGroupsProvider } from "./PageGroupsContext";
import { PageGroupsActivesProvider } from "./PageGroupsActivesContext";
import { PageGroupsGoalsProvider } from "./PageGroupsGoalsContext";
import { JwtProvider } from "./jwtDecoder";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GetIdGroupsGoalsProviders>
        <LoginProvider>
          <PageHabitsProvider>
            <PageGroupsProvider>
              <PageGroupsActivesProvider>
                <PageGroupsGoalsProvider>
                  <JwtProvider>{children}</JwtProvider>
                </PageGroupsGoalsProvider>
              </PageGroupsActivesProvider>
            </PageGroupsProvider>
          </PageHabitsProvider>
        </LoginProvider>
      </GetIdGroupsGoalsProviders>
    </UserProvider>
  );
};
