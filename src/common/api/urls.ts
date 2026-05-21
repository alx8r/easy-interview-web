import { ApiVersions } from './versions';

export const ApiUrls = {
  /*
   *
   * Authentication methods
   *
   */

  UserSignIn: `${ApiVersions.V1}/auth/user/sign-in`,
  UserSignUp: `${ApiVersions.V1}/auth/user/sign-up`,

  /*
   *
   * Leaderbord methods
   *
   */
  FindLeaderboardUsers: `${ApiVersions.V1}/leaderboard`,
};
